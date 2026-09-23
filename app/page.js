'use client';
import { useState } from 'react';
import Link from 'next/link';
import RegistrarLauncher from '../components/RegistrarLauncher';
import LiveIpoTable from '../components/LiveIpoTable';
import GmpCalculator from '../components/GmpCalculator';

const FAQS = [
  {
    q: 'How to check IPO allotment status using PAN Card?',
    a: 'Visit the official registrar website (Link Intime, KFintech, or Bigshare), select the IPO company name from the dropdown, select "PAN Number" as the search type, enter your 10-digit PAN, and click Submit to view your allotted share quantity.'
  },
  {
    q: 'What is the SEBI T+3 IPO listing timeline?',
    a: 'Under SEBI regulations, an IPO closes on Day T. The basis of allotment is finalized on T+1, funds are unblocked or refunded on T+2, shares are credited to your Demat account on T+2/T+3, and official trading begins on T+3.'
  },
  {
    q: 'What should I do if my IPO application money is not unblocked?',
    a: 'If your ASBA bank balance or UPI mandate remains blocked after the unblocking date, immediately file an online complaint on the registrar portal with your Application Number, PAN, and Bank UPI Reference ID, and escalate to your bank branch.'
  },
  {
    q: 'What is Grey Market Premium (GMP)?',
    a: 'Grey Market Premium (GMP) is an informal, non-official market price estimate where investors trade IPO applications or shares before official stock exchange listing. While helpful for sentiment, it is not official or guaranteed by NSE/BSE.'
  },
  {
    q: 'Why does Link Intime or KFintech show "Record Not Found"?',
    a: 'When an IPO registrar is actively uploading millions of records on the allotment evening, servers can take 2-4 hours to index all applications. If you get "Record Not Found", wait 30 minutes, double-check your PAN, or verify via BSE Appli Check portal.'
  }
];

const STEPS = [
  {
    step: '01',
    title: 'Select Registrar Portal',
    desc: 'Identify whether Link Intime, KFintech, Bigshare, or CAMS is managing the issue and launch the direct gateway.',
    icon: '🏛️'
  },
  {
    step: '02',
    title: 'Enter PAN or App No.',
    desc: 'Select the company name from the dropdown and type your 10-digit PAN card number or DP Client ID.',
    icon: '💳'
  },
  {
    step: '03',
    title: 'Verify Allotment Status',
    desc: 'Instantly view total shares applied, shares allotted, cutoff price, and refund/unblock authorization status.',
    icon: '📊'
  },
  {
    step: '04',
    title: 'Demat Credit & Listing',
    desc: 'Allotted shares are credited to your CDSL/NSDL Demat account by T+2 day before market listing on T+3 day.',
    icon: '🚀'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [heroSearch, setHeroSearch] = useState('');
  const [selectedIpoForCalc, setSelectedIpoForCalc] = useState(null);

  const handleSelectForCalc = (ipo) => {
    setSelectedIpoForCalc(ipo);
    const el = document.getElementById('gmp-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="homepage-wrapper">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container hero-container">
          {/* BADGE */}
          <div className="hero-badge">
            <span className="live-pulse-dot" />
            <span>LIVE IPO ALLOTMENT PORTAL • REAL-TIME GMP</span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="hero-title">
            Check <span className="gradient-text">IPO Allotment Status</span> &amp; Real-Time Live GMP
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle">
            Fast, 100% verified 1-click status checking via official SEBI registrars — Link Intime, KFintech, Bigshare, and BSE/NSE. Real-time subscription analytics &amp; T+3 listing tracking.
          </p>

          {/* INTERACTIVE HERO SEARCH & ACTION CARD */}
          <div className="hero-search-card">
            <div className="hero-search-bar">
              <span className="hero-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search active IPO (e.g. Tata, Bajaj, Pranav, Jindal...)"
                className="hero-search-input"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const el = document.getElementById('live-table');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
              <a href="#live-table" className="btn-hero-search-action">
                <span>Check Live Allotments</span>
                <span className="btn-hero-arrow">↓</span>
              </a>
            </div>
            <div className="hero-search-pills">
              <span className="search-pills-label">Trending Now:</span>
              <button 
                type="button"
                onClick={() => {
                  setHeroSearch('Mainboard');
                  const el = document.getElementById('live-table');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="hero-search-pill"
              >
                🏢 Mainboard IPOs
              </button>
              <button 
                type="button"
                onClick={() => {
                  setHeroSearch('SME');
                  const el = document.getElementById('live-table');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="hero-search-pill"
              >
                🚀 SME Issues
              </button>
              <button 
                type="button"
                onClick={() => {
                  setHeroSearch('Link Intime');
                  const el = document.getElementById('live-table');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="hero-search-pill"
              >
                🏛️ Link Intime
              </button>
              <button 
                type="button"
                onClick={() => {
                  setHeroSearch('KFin');
                  const el = document.getElementById('live-table');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="hero-search-pill"
              >
                ⚡ KFintech
              </button>
              <a href="#gmp-calculator" className="hero-search-pill">
                🧮 Profit Calculator
              </a>
            </div>
          </div>

          {/* 4 DIRECT REGISTRAR GATEWAY CARDS */}
          <div className="hero-gateways-grid">
            <a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer" className="hero-gateway-card">
              <div className="gateway-card-top">
                <span className="gateway-icon">🏢</span>
                <span className="gateway-status-badge"><span className="live-pulse-dot-sm" /> Active</span>
              </div>
              <div className="gateway-card-info">
                <span className="gateway-name">Link Intime India</span>
                <span className="gateway-sub">Tata, Bajaj &amp; Mainboard</span>
              </div>
              <span className="gateway-link-icon">↗</span>
            </a>

            <a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer" className="hero-gateway-card">
              <div className="gateway-card-top">
                <span className="gateway-icon">⚡</span>
                <span className="gateway-status-badge"><span className="live-pulse-dot-sm" /> Active</span>
              </div>
              <div className="gateway-card-info">
                <span className="gateway-name">KFin Technologies</span>
                <span className="gateway-sub">High-Speed Cloud Portal</span>
              </div>
              <span className="gateway-link-icon">↗</span>
            </a>

            <a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer" className="hero-gateway-card">
              <div className="gateway-card-top">
                <span className="gateway-icon">🚀</span>
                <span className="gateway-status-badge"><span className="live-pulse-dot-sm" /> Active</span>
              </div>
              <div className="gateway-card-info">
                <span className="gateway-name">Bigshare Online</span>
                <span className="gateway-sub">SME &amp; Mainboard Leader</span>
              </div>
              <span className="gateway-link-icon">↗</span>
            </a>

            <a href="https://www.bseindia.com/investors/appli_check.aspx" target="_blank" rel="noopener noreferrer" className="hero-gateway-card">
              <div className="gateway-card-top">
                <span className="gateway-icon">🏛️</span>
                <span className="gateway-status-badge"><span className="live-pulse-dot-sm" /> Active</span>
              </div>
              <div className="gateway-card-info">
                <span className="gateway-name">BSE India Check</span>
                <span className="gateway-sub">Exchange Direct Portal</span>
              </div>
              <span className="gateway-link-icon">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT BODY */}
      <div className="container main-content-container">
        <div className="layout-grid">
          {/* PRIMARY CONTENT COLUMN */}
          <div className="primary-column">
            {/* 1. REGISTRAR LAUNCHER */}
            <RegistrarLauncher />

            {/* 2. LIVE IPO TABLE */}
            <LiveIpoTable externalSearch={heroSearch} onSelectForCalc={handleSelectForCalc} />

            {/* 3. GMP & PROFIT CALCULATOR */}
            <GmpCalculator selectedIpo={selectedIpoForCalc} />

            {/* 4. 4-STEP INFOGRAPHIC ROADMAP */}
            <div className="premium-section-card">
              <div className="section-card-header">
                <div className="section-title-wrap">
                  <div className="section-icon-badge step-badge">🗺️</div>
                  <div>
                    <h2 className="section-heading">How IPO Allotment &amp; Settlement Works (SEBI T+3 Process)</h2>
                    <p className="section-subtext">Comprehensive 4-stage guide from UPI bidding to Demat share credit</p>
                  </div>
                </div>
              </div>

              <div className="steps-roadmap-grid">
                {STEPS.map((s, idx) => (
                  <div key={idx} className="step-roadmap-card">
                    <div className="step-number-tag">{s.step}</div>
                    <div className="step-icon">{s.icon}</div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. INTERACTIVE FAQ ACCORDION */}
            <div className="premium-section-card">
              <div className="section-card-header">
                <div className="section-title-wrap">
                  <div className="section-icon-badge faq-badge">❓</div>
                  <div>
                    <h2 className="section-heading">Frequently Asked Questions (IPO Allotment FAQ)</h2>
                    <p className="section-subtext">Common queries regarding PAN verification, ASBA refunds, and Demat credit</p>
                  </div>
                </div>
              </div>

              <div className="faq-accordion-list">
                {FAQS.map((faq, i) => (
                  <div key={i} className={`faq-accordion-item ${openFaq === i ? 'open' : ''}`}>
                    <button 
                      className="faq-accordion-btn" 
                      onClick={() => toggleFaq(i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-toggle-icon">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="faq-accordion-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
