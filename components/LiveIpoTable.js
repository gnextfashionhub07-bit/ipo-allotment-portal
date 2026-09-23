'use client';
import { useState, useEffect } from 'react';

const FALLBACK_IPOS = [
  { id: 1, name: 'Pranav Constructions IPO', type: 'Mainboard', price: '₹180 - ₹195', date: 'Live Today', reg: 'Link Intime India', status: 'Listing Today', gmp: '₹65 (34%)', gainPct: 34, lotSize: 75, issueSize: '₹450 Cr', regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html' },
  { id: 2, name: 'Apana Logistics IPO', type: 'Mainboard', price: '₹140 - ₹150', date: 'Live Today', reg: 'KFin Technologies', status: 'Allotment Out', gmp: '₹42 (28%)', gainPct: 28, lotSize: 100, issueSize: '₹320 Cr', regUrl: 'https://ipostatus.kfintech.com' },
  { id: 3, name: 'Jindal Supreme IPO', type: 'Mainboard', price: '₹220 - ₹235', date: 'Live Today', reg: 'Link Intime India', status: 'Subscription Open', gmp: '₹85 (37%)', gainPct: 37, lotSize: 60, issueSize: '₹680 Cr', regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html' },
  { id: 4, name: 'A-One Steels IPO', type: 'Mainboard', price: '₹260 - ₹275', date: 'Live Today', reg: 'KFin Technologies', status: 'Allotment Expected', gmp: '₹95 (35%)', gainPct: 35, lotSize: 54, issueSize: '₹540 Cr', regUrl: 'https://ipostatus.kfintech.com' },
  { id: 5, name: 'Powertronix Engineering IPO', type: 'SME IPO', price: '₹85 - ₹90', date: 'Live Today', reg: 'Bigshare Services', status: 'Allotment Out', gmp: '₹32 (35%)', gainPct: 35, lotSize: 1600, issueSize: '₹28 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 6, name: 'Sonaselection India IPO', type: 'SME IPO', price: '₹95 - ₹100', date: 'Live Today', reg: 'Bigshare Services', status: 'Subscription Open', gmp: '₹38 (38%)', gainPct: 38, lotSize: 1200, issueSize: '₹32 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 7, name: 'Hero Motors IPO', type: 'Mainboard', price: '₹310 - ₹325', date: 'Live Today', reg: 'Link Intime India', status: 'Upcoming Bidding', gmp: '₹110 (34%)', gainPct: 34, lotSize: 45, issueSize: '₹900 Cr', regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html' },
  { id: 8, name: 'Amtech Esters IPO', type: 'SME IPO', price: '₹92 - ₹98', date: 'Live Today', reg: 'Bigshare Services', status: 'Allotment Expected', gmp: '₹42 (43%)', gainPct: 43, lotSize: 1200, issueSize: '₹32 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 9, name: 'Vinod Texworld IPO', type: 'SME IPO', price: '₹80 - ₹85', date: 'Live Today', reg: 'Bigshare Services', status: 'Allotment Out', gmp: '₹15 (18%)', gainPct: 18, lotSize: 1600, issueSize: '₹22 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 10, name: 'Farm Peace IPO', type: 'SME IPO', price: '₹75 - ₹80', date: 'Live Today', reg: 'Bigshare Services', status: 'Allotment Out', gmp: '₹18 (24%)', gainPct: 24, lotSize: 1600, issueSize: '₹24 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 11, name: 'Fly-Hi Maritime IPO', type: 'SME IPO', price: '₹90 - ₹95', date: 'Live Today', reg: 'Bigshare Services', status: 'Allotment Out', gmp: '₹22 (23%)', gainPct: 23, lotSize: 1200, issueSize: '₹30 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' },
  { id: 12, name: 'Qualiance International IPO', type: 'SME IPO', price: '₹95 - ₹100', date: 'Live Today', reg: 'Bigshare Services', status: 'Open Bidding', gmp: '₹38 (38%)', gainPct: 38, lotSize: 1200, issueSize: '₹48 Cr', regUrl: 'https://www.bigshareonline.com/ipo_allotment.html' }
];

export default function LiveIpoTable({ externalSearch = '', onSelectForCalc = null }) {
  const [ipos, setIpos] = useState(FALLBACK_IPOS);
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState(externalSearch || '');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Live');

  useEffect(() => {
    if (externalSearch !== undefined && externalSearch !== null) {
      setSearchQuery(externalSearch);
      setCurrentPage(1);
    }
  }, [externalSearch]);
  
  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  async function fetchLiveIpos() {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/ipos?t=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.data && json.data.length > 0) {
          const formatted = json.data.map((item, index) => {
            const name = item.name || 'IPO Company';
            const type = item.type || (name.toLowerCase().includes('sme') ? 'SME IPO' : 'Mainboard');
            const price = item.price || `₹${item.cutoffPrice || '100'}`;
            const cutoffPrice = item.cutoffPrice || parseInt(String(price).split('-')[1]?.replace(/\D/g, '') || String(price).replace(/\D/g, '')) || 100;
            const reg = item.reg || item.registrar_name || 'Link Intime India';
            const gmp = item.gmp || '₹25';
            const gmpValue = item.gmpValue !== undefined ? item.gmpValue : (parseInt(String(gmp).replace(/\D/g, '')) || 25);
            const gain = item.gainPct !== undefined ? item.gainPct : 25;
            const lotSize = item.lotSize || item.lot_size || (type === 'Mainboard' ? 75 : 1200);
            const issueSize = item.issueSize || '₹100+ Cr';
            const status = item.status || 'Active Issue';
            const date = item.date || 'Live Status';
            
            let regUrl = item.regUrl || item.reg_url || 'https://linkintime.co.in/initial_offer/public-issues.html';
            if (reg.toLowerCase().includes('link') || reg.toLowerCase().includes('mufg')) regUrl = 'https://linkintime.co.in/initial_offer/public-issues.html';
            if (reg.toLowerCase().includes('kfin')) regUrl = 'https://ipostatus.kfintech.com';
            if (reg.toLowerCase().includes('big')) regUrl = 'https://www.bigshareonline.com/ipo_allotment.html';
            if (reg.toLowerCase().includes('bse')) regUrl = 'https://www.bseindia.com/investors/appli_check.aspx';

            return {
              id: item.id || index + 1,
              name,
              type,
              price,
              cutoffPrice,
              date,
              reg,
              status,
              gmp,
              gmpValue,
              gainPct: gain,
              lotSize,
              issueSize,
              regUrl
            };
          });
          setIpos(formatted);
          const now = new Date();
          setLastUpdated(`${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`);
        }
      }
    } catch (err) {
      console.log('Error refreshing live IPOs', err);
    } finally {
      setIsRefreshing(false);
    }
  }

  useEffect(() => {
    fetchLiveIpos();
    // Real-time auto-poll every 15 seconds
    const interval = setInterval(fetchLiveIpos, 15000);
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') fetchLiveIpos();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Filter logic
  const filteredIpos = ipos.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.reg.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.type.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeTab === 'ALL') return true;
    if (activeTab === 'MAINBOARD') return item.type.toLowerCase().includes('main');
    if (activeTab === 'SME') return item.type.toLowerCase().includes('sme');
    if (activeTab === 'ALLOTMENT_OUT') return item.status.toLowerCase().includes('allotment') || item.status.toLowerCase().includes('out');
    if (activeTab === 'OPEN') return item.status.toLowerCase().includes('open') || item.status.toLowerCase().includes('bidding');
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredIpos.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedIpos = filteredIpos.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      const tableElem = document.getElementById('live-table');
      if (tableElem) {
        tableElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="live-table" className="premium-section-card">
      {/* HEADER BAR */}
      <div className="section-card-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge fire-badge">🔥</div>
          <div>
            <h2 className="section-heading">Live IPO Allotment &amp; Subscription Tracker (2026)</h2>
            <p className="section-subtext">Real-time allotment status, verified registrar links, and estimated GMP gains</p>
          </div>
        </div>
        
        {/* REFRESH & STATUS CONTROLS */}
        <div className="table-header-status-group">
          <div className="data-refreshed-tag">
            <span className="live-pulse-dot"></span>
            <span>Live • {lastUpdated}</span>
          </div>

          <button 
            onClick={fetchLiveIpos} 
            disabled={isRefreshing}
            className="btn-refresh-table"
            title="Click to fetch real-time updates"
          >
            <span className={`refresh-icon ${isRefreshing ? 'spinning' : ''}`}>🔄</span>
            <span>{isRefreshing ? 'Updating...' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="table-controls-bar">
        {/* TABS */}
        <div className="filter-tabs-group">
          <button 
            className={`filter-tab-btn ${activeTab === 'ALL' ? 'active' : ''}`}
            onClick={() => handleTabChange('ALL')}
          >
            All IPOs <span className="tab-count">{ipos.length}</span>
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'MAINBOARD' ? 'active' : ''}`}
            onClick={() => handleTabChange('MAINBOARD')}
          >
            🏢 Mainboard
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'SME' ? 'active' : ''}`}
            onClick={() => handleTabChange('SME')}
          >
            🚀 SME Sector
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'ALLOTMENT_OUT' ? 'active' : ''}`}
            onClick={() => handleTabChange('ALLOTMENT_OUT')}
          >
            ✅ Allotment Out
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'OPEN' ? 'active' : ''}`}
            onClick={() => handleTabChange('OPEN')}
          >
            🟢 Open Bidding
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="table-search-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search IPO, Registrar..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="table-search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => handleSearchChange('')}>✕</button>
          )}
        </div>
      </div>

      {/* TABLE DATA GRID */}
      <div className="responsive-table-container">
        <table className="premium-data-table">
          <thead>
            <tr>
              <th>Company &amp; Issue Type</th>
              <th>Price Band</th>
              <th>Allotment Date</th>
              <th>Live GMP / Gain</th>
              <th>Official Registrar</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Direct Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedIpos.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</div>
                  <strong>No matching IPOs found</strong>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Try clearing your search query or switching tabs</p>
                </td>
              </tr>
            ) : (
              paginatedIpos.map((ipo) => (
                <tr key={ipo.id} className="table-data-row">
                  {/* COMPANY & TYPE */}
                  <td>
                    <div className="company-cell">
                      <strong className="company-title">{ipo.name}</strong>
                      <div className="company-meta-tags">
                        <span className={`issue-tag ${ipo.type.toLowerCase().includes('main') ? 'mainboard-tag' : 'sme-tag'}`}>
                          {ipo.type}
                        </span>
                        {ipo.lotSize && <span className="lot-tag">Lot: {ipo.lotSize}</span>}
                      </div>
                    </div>
                  </td>

                  {/* PRICE BAND */}
                  <td>
                    <span className="price-text">{ipo.price}</span>
                  </td>

                  {/* ALLOTMENT DATE */}
                  <td>
                    <div className="date-cell">
                      <span className="calendar-icon">📅</span>
                      <span>{ipo.date}</span>
                    </div>
                  </td>

                  {/* LIVE GMP */}
                  <td>
                    <div className="gmp-gain-cell">
                      <span className="gmp-amount">{ipo.gmp}</span>
                      <div className="gain-bar-wrap">
                        <div 
                          className="gain-bar-fill" 
                          style={{ 
                            width: `${Math.min(ipo.gainPct || 30, 100)}%`,
                            background: (ipo.gainPct || 0) > 50 ? '#10b981' : (ipo.gainPct || 0) > 20 ? '#059669' : '#f59e0b'
                          }} 
                        />
                      </div>
                    </div>
                  </td>

                  {/* REGISTRAR */}
                  <td>
                    <span className="registrar-badge-pill">
                      {ipo.reg}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td>
                    <span className={`status-pill ${
                      ipo.status.toLowerCase().includes('out') ? 'status-out' :
                      ipo.status.toLowerCase().includes('open') ? 'status-open' : 'status-pending'
                    }`}>
                      {ipo.status.toLowerCase().includes('out') && '● '}
                      {ipo.status}
                    </span>
                  </td>

                  {/* ACTION BUTTON */}
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                      {onSelectForCalc && (
                        <button
                          type="button"
                          onClick={() => onSelectForCalc(ipo)}
                          className="btn-table-calc"
                          title="Calculate live profit in GMP Calculator"
                        >
                          🧮 Calc
                        </button>
                      )}
                      <a
                        href={ipo.regUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-check-allotment"
                      >
                        <span>Check Status</span>
                        <span className="arrow-icon">↗</span>
                      </a>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION CONTROLS BAR */}
      <div className="pagination-bar">
        <div className="pagination-info">
          <span>Showing <strong>{filteredIpos.length === 0 ? 0 : startIndex + 1}</strong> to <strong>{Math.min(startIndex + itemsPerPage, filteredIpos.length)}</strong> of <strong>{filteredIpos.length}</strong> IPOs</span>
          
          <div className="per-page-selector">
            <label htmlFor="per-page">Per page:</label>
            <select
              id="per-page"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="per-page-select"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <div className="pagination-buttons">
          <button 
            className="btn-page-nav" 
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            title="Previous Page"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              className={`btn-page-number ${currentPage === pageNum ? 'active' : ''}`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          <button 
            className="btn-page-nav" 
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            title="Next Page"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
