'use client';
import { useState } from 'react';

export default function GmpCalculator() {
  const [issuePrice, setIssuePrice] = useState(100);
  const [gmp, setGmp] = useState(25);
  const [lotSize, setLotSize] = useState(1200);

  const estimatedListingPrice = Number(issuePrice) + Number(gmp);
  const percentageGain = issuePrice > 0 ? ((gmp / issuePrice) * 100).toFixed(2) : 0;
  const totalProfitPerLot = Number(gmp) * Number(lotSize);

  return (
    <div id="gmp-calculator" className="card" style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.4rem' }}>🧮</span>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)' }}>
          Live IPO Allotment GMP &amp; Profit Calculator
        </h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
        Estimate your listing price and total profit per lot based on current Grey Market Premium (GMP).
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="calc-input-group">
          <label>Issue Cut-off Price (₹)</label>
          <input 
            type="number" 
            className="calc-input" 
            value={issuePrice} 
            onChange={(e) => setIssuePrice(e.target.value)}
          />
        </div>

        <div className="calc-input-group">
          <label>Current GMP Premium (₹)</label>
          <input 
            type="number" 
            className="calc-input" 
            value={gmp} 
            onChange={(e) => setGmp(e.target.value)}
          />
        </div>

        <div className="calc-input-group">
          <label>Lot Size (Shares per Lot)</label>
          <input 
            type="number" 
            className="calc-input" 
            value={lotSize} 
            onChange={(e) => setLotSize(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div className="calc-result">
          <div style={{ fontSize: '0.8rem', color: '#166534', fontWeight: '700' }}>ESTIMATED LISTING PRICE</div>
          <div className="calc-result-number">₹{estimatedListingPrice}</div>
          <div style={{ fontSize: '0.82rem', color: '#15803d', fontWeight: '600' }}>+{percentageGain}% Expected Gain</div>
        </div>

        <div className="calc-result" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
          <div style={{ fontSize: '0.8rem', color: '#1e40af', fontWeight: '700' }}>EXPECTED PROFIT PER LOT</div>
          <div className="calc-result-number" style={{ color: '#1d4ed8' }}>₹{totalProfitPerLot.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: '600' }}>For 1 Retail Lot ({lotSize} shares)</div>
        </div>
      </div>
    </div>
  );
}
