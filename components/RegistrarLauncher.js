'use client';
import { useState } from 'react';

const REGISTRARS = [
  { 
    id: 'link', 
    name: 'Link Intime India', 
    fullName: 'Link Intime India Pvt Ltd',
    url: 'https://linkintime.co.in/initial_offer/public-issues.html', 
    badge: 'Mainboard Leader', 
    badgeColor: '#f97316',
    bgColor: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(234, 88, 12, 0.02))',
    borderColor: '#fed7aa',
    desc: 'Premier registrar for major mainboard public issues & conglomerates.',
    icon: '🏢'
  },
  { 
    id: 'kfin', 
    name: 'KFin Technologies', 
    fullName: 'KFintech IPO Allotment Portal',
    url: 'https://ipostatus.kfintech.com', 
    badge: 'High-Speed Tech', 
    badgeColor: '#0ea5e9',
    bgColor: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(2, 132, 199, 0.02))',
    borderColor: '#bae6fd',
    desc: 'Fastest cloud-scale server infrastructure for million-application IPOs.',
    icon: '⚡'
  },
  { 
    id: 'big', 
    name: 'Bigshare Services', 
    fullName: 'Bigshare Online Services Pvt Ltd',
    url: 'https://www.bigshareonline.com/ipo_allotment.html', 
    badge: 'SME Sector Leader', 
    badgeColor: '#8b5cf6',
    bgColor: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(124, 58, 237, 0.02))',
    borderColor: '#ddd6fe',
    desc: 'Official registrar for over 70% of NSE Emerge and BSE SME issues.',
    icon: '🚀'
  },
  { 
    id: 'bse', 
    name: 'BSE India Official', 
    fullName: 'Bombay Stock Exchange Appli Check',
    url: 'https://www.bseindia.com/investors/appli_check.aspx', 
    badge: 'Exchange Direct', 
    badgeColor: '#2563eb',
    bgColor: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(29, 78, 216, 0.02))',
    borderColor: '#bfdbfe',
    desc: 'Direct exchange-level verification using Application Number and PAN.',
    icon: '🏛️'
  },
  { 
    id: 'nse', 
    name: 'NSE India Official', 
    fullName: 'National Stock Exchange Bid Verification',
    url: 'https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids', 
    badge: 'Bid Verification', 
    badgeColor: '#dc2626',
    bgColor: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08), rgba(185, 28, 28, 0.02))',
    borderColor: '#fecaca',
    desc: 'Verify that your bidding order was successfully registered on NSE.',
    icon: '📊'
  },
  { 
    id: 'cams', 
    name: 'CAMS Online', 
    fullName: 'CAMS Allotment Services Portal',
    url: 'https://www.camsonline.com/', 
    badge: 'Mutual & IPO', 
    badgeColor: '#059669',
    bgColor: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08), rgba(4, 120, 87, 0.02))',
    borderColor: '#a7f3d0',
    desc: 'Premier financial infrastructure provider for specialized public offers.',
    icon: '💼'
  }
];

export default function RegistrarLauncher() {
  const [selectedRegistrar, setSelectedRegistrar] = useState(REGISTRARS[0].url);

  const handleQuickLaunch = (e) => {
    e.preventDefault();
    if (selectedRegistrar) {
      window.open(selectedRegistrar, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id="registrar-tool" className="premium-section-card">
      <div className="section-card-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">⚡</div>
          <div>
            <h2 className="section-heading">1-Click Official Registrar Status Gateways</h2>
            <p className="section-subtext">Direct SEBI-authorized servers for instant PAN-based allotment lookup</p>
          </div>
        </div>
        <span className="live-status-pill">
          <span className="live-pulse-dot"></span>
          Gateways Active
        </span>
      </div>

      {/* QUICK SELECTOR DROPDOWN BAR */}
      <form onSubmit={handleQuickLaunch} className="quick-launch-bar">
        <div className="launch-select-wrap">
          <label htmlFor="reg-select" className="launch-select-label">Select Official Registrar Server:</label>
          <select 
            id="reg-select"
            value={selectedRegistrar} 
            onChange={(e) => setSelectedRegistrar(e.target.value)}
            className="launch-select-input"
          >
            {REGISTRARS.map((r) => (
              <option key={r.id} value={r.url}>{r.name} — {r.badge}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-launch-primary">
          <span>Launch Official Portal</span>
          <span className="btn-arrow">→</span>
        </button>
      </form>

      {/* REGISTRAR CARDS GRID */}
      <div className="registrar-grid">
        {REGISTRARS.map((reg) => (
          <a
            key={reg.id}
            href={reg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="registrar-card"
            style={{
              background: reg.bgColor,
              borderColor: reg.borderColor
            }}
          >
            <div className="reg-card-top">
              <div className="reg-icon-box">{reg.icon}</div>
              <span 
                className="reg-badge-tag" 
                style={{ color: reg.badgeColor, background: `${reg.badgeColor}15`, borderColor: `${reg.badgeColor}30` }}
              >
                {reg.badge}
              </span>
            </div>
            
            <h3 className="reg-card-name">{reg.name}</h3>
            <p className="reg-card-desc">{reg.desc}</p>

            <div className="reg-card-footer">
              <span className="reg-btn-text" style={{ color: reg.badgeColor }}>
                Check Allotment
              </span>
              <span className="reg-btn-icon">↗</span>
            </div>
          </a>
        ))}
      </div>

      {/* SECURITY NOTICE */}
      <div className="gateway-security-notice">
        <span className="shield-icon">🛡️</span>
        <span>
          <strong>100% Secure &amp; Private:</strong> When you click any gateway above, you are routed directly to the official SEBI-registered registrar portal. We never store or transmit your PAN or Demat details.
        </span>
      </div>
    </div>
  );
}
