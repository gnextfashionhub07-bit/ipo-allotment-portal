'use client';
import { useState, useEffect } from 'react';

export default function GmpCalculator({ selectedIpo = null }) {
  const [livePresets, setLivePresets] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState('Custom');
  const [issuePrice, setIssuePrice] = useState(100);
  const [gmp, setGmp] = useState(35);
  const [lotSize, setLotSize] = useState(150);
  const [numberOfLots, setNumberOfLots] = useState(1);
  const [lastSyncTime, setLastSyncTime] = useState('Live');

  // Fetch real-time active IPOs for presets
  async function fetchPresets() {
    try {
      const res = await fetch('/api/ipos?t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.data && json.data.length > 0) {
          const list = json.data.map(item => ({
            name: item.name,
            shortName: item.name.replace(/\s*IPO\s*$/i, '').trim(),
            price: item.cutoffPrice || parseInt(String(item.price).split('-')[1]?.replace(/\D/g, '') || String(item.price).replace(/\D/g, '')) || 100,
            gmp: item.gmpValue !== undefined ? item.gmpValue : (parseInt(String(item.gmp).replace(/\D/g, '')) || 25),
            lot: item.lotSize || 100,
            gainPct: item.gainPct || 30
          }));
          setLivePresets(list);
          const now = new Date();
          setLastSyncTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

          // If no preset selected yet, default to first live IPO (e.g. NSE India IPO)
          if (!selectedIpo && selectedPreset === 'Custom' && list.length > 0) {
            setSelectedPreset(list[0].name);
            setIssuePrice(list[0].price);
            setGmp(list[0].gmp);
            setLotSize(list[0].lot);
          }
        }
      }
    } catch (err) {
      console.log('Error loading calculator live presets', err);
    }
  }

  useEffect(() => {
    fetchPresets();
    // Real-time polling every 15s to keep presets and GMP synced
    const interval = setInterval(fetchPresets, 15000);
    return () => clearInterval(interval);
  }, []);

  // When external selectedIpo is triggered (e.g. user clicked Calc in LiveIpoTable)
  useEffect(() => {
    if (selectedIpo) {
      setSelectedPreset(selectedIpo.name);
      const priceVal = selectedIpo.cutoffPrice || parseInt(String(selectedIpo.price).split('-')[1]?.replace(/\D/g, '') || String(selectedIpo.price).replace(/\D/g, '')) || 100;
      const gmpVal = selectedIpo.gmpValue !== undefined ? selectedIpo.gmpValue : (parseInt(String(selectedIpo.gmp).replace(/\D/g, '')) || 0);
      const lotVal = Number(selectedIpo.lotSize) || 100;
      setIssuePrice(priceVal);
      setGmp(gmpVal);
      setLotSize(lotVal);
    }
  }, [selectedIpo]);

  const handlePresetChange = (preset) => {
    if (preset === 'Custom') {
      setSelectedPreset('Custom');
      return;
    }
    setSelectedPreset(preset.name);
    setIssuePrice(preset.price);
    setGmp(preset.gmp);
    setLotSize(preset.lot);
  };

  const totalShares = Number(lotSize) * Number(numberOfLots);
  const totalInvestment = Number(issuePrice) * totalShares;
  const estimatedListingPrice = Number(issuePrice) + Number(gmp);
  const totalEstimatedValue = estimatedListingPrice * totalShares;
  const totalProfit = Number(gmp) * totalShares;
  const percentageGain = issuePrice > 0 ? ((gmp / issuePrice) * 100).toFixed(1) : 0;

  return (
    <div id="gmp-calculator" className="premium-section-card">
      <div className="section-card-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge calc-badge">🧮</div>
          <div>
            <h2 className="section-heading">Live IPO Allotment &amp; Listing Gain Calculator</h2>
            <p className="section-subtext">Calculate your estimated listing price, ROI percentage, and total profit per lot</p>
          </div>
        </div>
        <span className="live-status-pill green-pill">
          <span className="live-pulse-dot"></span>
          <span>Real-time Multiplier</span>
        </span>
      </div>

      {/* QUICK PRESET SELECTOR (REAL-TIME UPDATED) */}
      <div className="calc-preset-bar">
        <div className="calc-preset-header-row">
          <span className="preset-label">Quick Load Live IPO:</span>
          <span className="preset-live-sync-badge">
            <span className="live-pulse-dot-sm"></span>
            <span>Live Data Synced • {lastSyncTime}</span>
          </span>
        </div>
        <div className="preset-buttons">
          <button
            type="button"
            className={`preset-btn ${selectedPreset === 'Custom' ? 'active' : ''}`}
            onClick={() => handlePresetChange('Custom')}
          >
            ✏️ Custom Values
          </button>
          {livePresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className={`preset-btn ${selectedPreset === preset.name ? 'active' : ''}`}
              onClick={() => handlePresetChange(preset)}
            >
              <span>{preset.shortName}</span>
              <span className="preset-btn-gmp">₹{preset.gmp} GMP</span>
            </button>
          ))}
        </div>
      </div>

      {/* INPUTS GRID */}
      <div className="calc-grid-layout">
        <div className="calc-inputs-column">
          {/* ISSUE PRICE */}
          <div className="calc-input-card">
            <div className="calc-label-row">
              <label htmlFor="calc-price">Issue Price / Cut-off (₹)</label>
              <span className="calc-badge-val">₹{issuePrice}</span>
            </div>
            <input 
              id="calc-price"
              type="number" 
              className="calc-text-input" 
              value={issuePrice} 
              onChange={(e) => {
                setIssuePrice(Number(e.target.value));
                setSelectedPreset('Custom IPO Calculation');
              }}
              min="1"
            />
          </div>

          {/* CURRENT GMP */}
          <div className="calc-input-card">
            <div className="calc-label-row">
              <label htmlFor="calc-gmp">Current Grey Market Premium - GMP (₹)</label>
              <span className="calc-badge-val profit-val">+₹{gmp}</span>
            </div>
            <input 
              id="calc-gmp"
              type="number" 
              className="calc-text-input" 
              value={gmp} 
              onChange={(e) => {
                setGmp(Number(e.target.value));
                setSelectedPreset('Custom IPO Calculation');
              }}
              min="0"
            />
          </div>

          {/* LOT SIZE & NUMBER OF LOTS */}
          <div className="calc-row-split">
            <div className="calc-input-card">
              <div className="calc-label-row">
                <label htmlFor="calc-lot">Lot Size (Shares)</label>
              </div>
              <input 
                id="calc-lot"
                type="number" 
                className="calc-text-input" 
                value={lotSize} 
                onChange={(e) => {
                  setLotSize(Number(e.target.value));
                  setSelectedPreset('Custom IPO Calculation');
                }}
                min="1"
              />
            </div>

            <div className="calc-input-card">
              <div className="calc-label-row">
                <label htmlFor="calc-lots-count">Allotted Lots</label>
              </div>
              <select
                id="calc-lots-count"
                className="calc-text-input"
                value={numberOfLots}
                onChange={(e) => setNumberOfLots(Number(e.target.value))}
              >
                <option value="1">1 Lot (Retail)</option>
                <option value="2">2 Lots</option>
                <option value="5">5 Lots</option>
                <option value="10">10 Lots</option>
                <option value="14">14 Lots (Max Retail)</option>
                <option value="20">20+ Lots (sHNI / bHNI)</option>
              </select>
            </div>
          </div>
        </div>

        {/* OUTPUT STATS CARD */}
        <div className="calc-results-column">
          <div className="calc-output-hero-card">
            <div className="output-top-row">
              <span className="output-subtitle">ESTIMATED LISTING GAIN</span>
              <span className="output-pct-pill">+{percentageGain}% ROI</span>
            </div>

            <div className="output-main-profit">
              <span className="currency-symbol">₹</span>
              <span className="profit-digits">{totalProfit.toLocaleString('en-IN')}</span>
            </div>
            <div className="profit-caption">Expected Total Net Profit on Listing</div>

            <div className="output-breakdown-grid">
              <div className="breakdown-item">
                <span className="breakdown-lbl">Applied Investment:</span>
                <strong className="breakdown-val">₹{totalInvestment.toLocaleString('en-IN')}</strong>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-lbl">Est. Listing Price:</span>
                <strong className="breakdown-val highlight-val">₹{estimatedListingPrice} / share</strong>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-lbl">Total Shares:</span>
                <strong className="breakdown-val">{totalShares} shares ({numberOfLots} Lot)</strong>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-lbl">Est. Total Portfolio:</span>
                <strong className="breakdown-val">₹{totalEstimatedValue.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* PROGRESS GAUGE BAR */}
            <div className="profit-gauge-container">
              <div className="gauge-labels">
                <span>Issue: ₹{issuePrice}</span>
                <span>Est. Open: ₹{estimatedListingPrice}</span>
              </div>
              <div className="gauge-track">
                <div 
                  className="gauge-fill" 
                  style={{ width: `${Math.min(Math.max(percentageGain, 10), 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER FOOTER */}
      <div className="calc-disclaimer-note">
        <strong>⚠️ Regulatory Note:</strong> Grey Market Premium (GMP) is an informal indicator and is neither approved nor monitored by SEBI or Stock Exchanges. Actual listing price may vary based on market conditions on listing day.
      </div>
    </div>
  );
}
