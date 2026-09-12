'use client';
import { useState } from 'react';

const PRESET_IPOS = [
  { name: 'Custom IPO Calculation', price: 100, gmp: 35, lot: 150 },
  { name: 'Pranav Constructions', price: 195, gmp: 65, lot: 75 },
  { name: 'Jindal Supreme', price: 235, gmp: 85, lot: 60 },
  { name: 'A-One Steels', price: 275, gmp: 95, lot: 54 },
  { name: 'Hero Motors', price: 325, gmp: 110, lot: 45 },
  { name: 'Powertronix Eng (SME)', price: 90, gmp: 32, lot: 1600 },
  { name: 'Sonaselection India (SME)', price: 100, gmp: 38, lot: 1200 }
];

export default function GmpCalculator() {
  const [selectedPreset, setSelectedPreset] = useState(PRESET_IPOS[0].name);
  const [issuePrice, setIssuePrice] = useState(100);
  const [gmp, setGmp] = useState(35);
  const [lotSize, setLotSize] = useState(150);
  const [numberOfLots, setNumberOfLots] = useState(1);

  const handlePresetChange = (presetName) => {
    setSelectedPreset(presetName);
    const found = PRESET_IPOS.find(p => p.name === presetName);
    if (found) {
      setIssuePrice(found.price);
      setGmp(found.gmp);
      setLotSize(found.lot);
    }
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
          <span>Real-time Multiplier</span>
        </span>
      </div>

      {/* QUICK PRESET SELECTOR */}
      <div className="calc-preset-bar">
        <span className="preset-label">Quick Load IPO:</span>
        <div className="preset-buttons">
          {PRESET_IPOS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className={`preset-btn ${selectedPreset === preset.name ? 'active' : ''}`}
              onClick={() => handlePresetChange(preset.name)}
            >
              {preset.name}
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
