'use client';

export default function MarketTicker() {
  const TICKER_ITEMS = [
    { icon: '🟢', label: 'Mainboard IPOs', value: '4 Active Biddings' },
    { icon: '📈', label: 'Avg Est. Listing Gain', value: '+32.4% (Sept 2026)' },
    { icon: '⚡', label: 'SEBI Allotment Cycle', value: 'T+1 Allotment & T+3 Listing' },
    { icon: '🔔', label: 'Registrar Gateways', value: 'Link Intime, KFintech, Bigshare 100% Operational' },
    { icon: '🛡️', label: 'Official Status', value: 'SEBI Verified Direct Lookup' }
  ];

  return (
    <div className="ticker-wrapper">
      <div className="container">
        <div className="ticker-inner">
          <div className="ticker-badge">
            <span className="live-pulse-dot"></span>
            <span>MARKET PULSE</span>
          </div>
          <div className="ticker-scroll">
            <div className="ticker-track">
              {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
                <div key={idx} className="ticker-item">
                  <span className="ticker-item-icon">{item.icon}</span>
                  <span className="ticker-item-label">{item.label}:</span>
                  <span className="ticker-item-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
