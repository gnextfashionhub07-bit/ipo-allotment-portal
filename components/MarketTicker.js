'use client';

export default function MarketTicker() {
  const TICKER_ITEMS = [
    { icon: '🟢', label: 'Mainboard IPOs', value: '4 Active Issues' },
    { icon: '📈', label: 'Avg Est. Listing Gain', value: '+32.4%' },
    { icon: '⚡', label: 'SEBI Timeline', value: 'T+1 Allotment / T+3 Listing' },
    { icon: '🏢', label: 'Bajaj Housing Allotment', value: 'Live on KFintech' },
    { icon: '🛡️', label: 'Registrars Online', value: 'Link Intime, KFintech, Bigshare (100% OK)' }
  ];

  return (
    <div className="top-ticker-bar">
      <div className="container ticker-flex-container">
        {/* LEFT BADGE */}
        <div className="ticker-live-tag">
          <span className="live-pulse-dot"></span>
          <span>MARKET PULSE</span>
        </div>

        {/* SCROLLING MARQUEE */}
        <div className="ticker-marquee-wrap">
          <div className="ticker-marquee-track">
            {TICKER_ITEMS.concat(TICKER_ITEMS).concat(TICKER_ITEMS).map((item, idx) => (
              <div key={idx} className="ticker-chip">
                <span className="ticker-chip-icon">{item.icon}</span>
                <span className="ticker-chip-label">{item.label}:</span>
                <strong className="ticker-chip-val">{item.value}</strong>
                <span className="ticker-chip-dot">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT STATUS */}
        <div className="ticker-right-status">
          <span className="status-live-icon">●</span>
          <span>NSE / BSE Real-Time</span>
        </div>
      </div>
    </div>
  );
}
