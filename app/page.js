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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="homepage-wrapper">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* BADGE */}
          <div className="hero-badge">
            <span className="live-pulse-dot" />
            <span>LIVE IPO ALLOTMENT PORTAL • SEPTEMBER 2026</span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="hero-title">
            Check <span className="gradient-text">IPO Allotment Status</span> &amp; Real-Time Live GMP
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle">
            Fast, 100% verified 1-click status checking via official SEBI registrars — Link Intime, KFintech, Bigshare, and BSE/NSE. Real-time subscription analytics &amp; T+3 listing tracking.
          </p>

          {/* HERO QUICK ACTION STATS */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-icon-wrap">⚡</div>
              <div className="stat-data">
                <span className="stat-value">1-Click</span>
                <span className="stat-label">Direct SEBI Gateway</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">🛡️</div>
              <div className="stat-data">
                <span className="stat-value">100% Safe</span>
                <span className="stat-label">Official Encrypted Servers</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">⏱️</div>
              <div className="stat-data">
                <span className="stat-value">SEBI T+3</span>
                <span className="stat-label">Fast Settlement Cycle</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">📈</div>
              <div className="stat-data">
                <span className="stat-value">Live GMP</span>
                <span className="stat-label">Instant Profit Calculator</span>
              </div>
            </div>
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
            <LiveIpoTable />

            {/* 3. GMP & PROFIT CALCULATOR */}
            <GmpCalculator />

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

          {/* SIDEBAR COLUMN */}
          <aside className="sidebar-column">
            {/* UPSTOX PARTNER CARD */}
            <div className="demat-promo-card">
              <div className="demat-card-badge">Broker Partner • 0 Brokerage</div>
              <h3 className="demat-title">Open Free Demat Account</h3>
              <p className="demat-desc">
                Apply for Mainboard and SME IPOs with ₹0 brokerage on delivery and lightning-fast UPI mandate verification on Upstox.
              </p>
              
              <ul className="demat-features-list">
                <li>✓ Instant Paperless KYC in 5 Mins</li>
                <li>✓ 1-Click UPI Auto-Mandate Support</li>
                <li>✓ Direct Mainboard &amp; SME IPO Bidding</li>
              </ul>

              <a 
                href="https://upstox.com/open-account/?f=7VB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-upstox"
              >
                <span>Open Free Account Now</span>
                <span className="btn-arrow">→</span>
              </a>

              <div className="demat-disclosure">
                Disclosure: This is an official partner/referral link. We may receive referral compensation if you register through this link at no additional cost to you.
              </div>
            </div>

            {/* POPULAR GUIDES WIDGET */}
            <div className="sidebar-widget-card">
              <div className="sidebar-widget-header">
                <span className="widget-header-icon">📖</span>
                <h3 className="widget-header-title">Popular In-Depth Guides</h3>
              </div>
              <div className="guides-list">
                <Link href="/blog/how-to-check-ipo-allotment-status" className="guide-item-link">
                  <span className="guide-item-tag">Essential Guide</span>
                  <strong className="guide-item-title">Step-by-Step: How to Check IPO Allotment Status Online (2026)</strong>
                  <span className="guide-item-meta">5 min read • By Mahesh Chavan</span>
                </Link>

                <Link href="/blog/what-happens-after-ipo-allotment" className="guide-item-link">
                  <span className="guide-item-tag">Settlement</span>
                  <strong className="guide-item-title">What Happens After IPO Allotment? ASBA Refund &amp; Demat Credit</strong>
                  <span className="guide-item-meta">6 min read • Investor Advisory</span>
                </Link>

                <Link href="/blog/bajaj-housing-finance-ipo-allotment-review" className="guide-item-link">
                  <span className="guide-item-tag">Review</span>
                  <strong className="guide-item-title">Bajaj Housing Finance IPO: Allotment Date &amp; Listing Gain Strategy</strong>
                  <span className="guide-item-meta">4 min read • IPO Analysis</span>
                </Link>

                <Link href="/blog/xtranet-technologies-ipo-review" className="guide-item-link">
                  <span className="guide-item-tag">SME Sector</span>
                  <strong className="guide-item-title">Xtranet Technologies IPO Analysis &amp; Price Band Valuation</strong>
                  <span className="guide-item-meta">4 min read • SME Review</span>
                </Link>
              </div>
            </div>

            {/* COMMUNITY JOIN CARD */}
            <div className="sidebar-widget-card community-card">
              <div className="community-header">
                <span className="community-icon">💬</span>
                <div>
                  <h4 className="community-title">Join Live IPO Alerts</h4>
                  <p className="community-sub">Get instant allotment notifications on WhatsApp</p>
                </div>
              </div>
              <a 
                href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-community-whatsapp"
              >
                <span>Join WhatsApp Channel</span>
                <span>↗</span>
              </a>
            </div>

            {/* GOOGLE ADSENSE RESPONSIVE UNIT */}
            <div className="sidebar-widget-card ads-widget-card">
              <div className="ad-container-tag">ADVERTISEMENT</div>
              <div className="ad-box-placeholder">
                <span className="ad-text-label">Google AdSense Responsive Unit</span>
                <span className="ad-subtext-label">High Visibility In-Feed Placement</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
