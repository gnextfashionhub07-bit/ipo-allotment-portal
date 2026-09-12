'use client';
import { useState } from 'react';

const REGISTRARS = [
  { id: 'kfin', name: 'KFin Technologies (KFintech)', url: 'https://ipostatus.kfintech.com', tag: 'Top Registrar', chipClass: 'reg-chip-kfin' },
  { id: 'link', name: 'Link Intime India Pvt Ltd', url: 'https://linkintime.co.in/initial_offer/public-issues.html', tag: 'Mainboard Leader', chipClass: 'reg-chip-link' },
  { id: 'big', name: 'Bigshare Services Pvt Ltd', url: 'https://www.bigshareonline.com/ipo_allotment.html', tag: 'SME Leader', chipClass: 'reg-chip-big' },
  { id: 'bse', name: 'BSE India Official (Appli Check)', url: 'https://www.bseindia.com/investors/appli_check.aspx', tag: 'Official Exchange', chipClass: 'reg-chip-bse' },
  { id: 'nse', name: 'NSE India Official (Verify Bids)', url: 'https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids', tag: 'Bid Verification', chipClass: 'reg-chip-kfin' },
  { id: 'cams', name: 'CAMS Online Allotment Portal', url: 'https://www.camsonline.com/', tag: 'Mutual & IPO', chipClass: 'reg-chip-link' }
];

export default function RegistrarLauncher() {
  const [selectedReg, setSelectedReg] = useState(REGISTRARS[0].url);

  const handleLaunch = (e) => {
    e.preventDefault();
    if (selectedReg) {
      window.open(selectedReg, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id="registrar-tool" className="launcher-card">
      <div className="launcher-header">
        <div className="launcher-title">
          <span>⚡</span>
          <span>1-Click Official Registrar Status Launcher</span>
        </div>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>SEBI Verified Direct Gateways</span>
      </div>

      <form onSubmit={handleLaunch} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <select 
          value={selectedReg} 
          onChange={(e) => setSelectedReg(e.target.value)}
          style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '8px', 
            border: '1px solid #334155', 
            background: '#0f172a', 
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        >
          {REGISTRARS.map((r) => (
            <option key={r.id} value={r.url}>{r.name}</option>
          ))}
        </select>
        <button 
          type="submit" 
          className="btn-primary" 
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
        >
          Launch Portal →
        </button>
      </form>

      <div>
        <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: '600' }}>
          Instant Quick Links:
        </div>
        <div className="registrar-chips">
          {REGISTRARS.map((r) => (
            <a 
              key={r.id} 
              href={r.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`reg-chip ${r.chipClass}`}
            >
              {r.name.split(' ')[0]} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
