'use client';
import { useState } from 'react';
import RegistrarLauncher from '../components/RegistrarLauncher';
import LiveIpoTable from '../components/LiveIpoTable';
import GmpCalculator from '../components/GmpCalculator';
import Link from 'next/link';

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
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">
            <div className="live-pulse-dot" />
            <span>Live IPO Allotment Feed (September 2026)</span>
          </div>

          <h1 className="hero-title">
            Check <span>IPO Allotment Status</span> &amp; Live GMP
          </h1>

          <p className="hero-subtitle">
            Fast, verified, 1-click status checking via Link Intime, KFintech, Bigshare, and BSE/NSE. Real-time subscription analytics &amp; SEBI T+3 allotment tracking.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="container">
        <div className="layout-grid">
          {/* MAIN COLUMN */}
          <div>
            <RegistrarLauncher />
            <LiveIpoTable />
            <GmpCalculator />

            {/* STEP-BY-STEP GUIDE */}
            <div className="card" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                📖 3 Simple Steps to Check IPO Allotment Status Online
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', color: 'var(--primary-teal)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Step 1</div>
                  <strong style={{ fontSize: '0.9rem' }}>Select Official Registrar</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    Identify whether your IPO is managed by Link Intime, KFintech, Bigshare, or CAMS and click the direct portal link above.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', color: 'var(--primary-teal)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Step 2</div>
                  <strong style={{ fontSize: '0.9rem' }}>Select Company &amp; PAN</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    Choose the IPO from the drop-down menu and enter your 10-digit PAN number or Application ID.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '800', color: 'var(--primary-teal)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Step 3</div>
                  <strong style={{ fontSize: '0.9rem' }}>View Allotted Shares</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    Click Submit. The screen will display applied shares, allotted shares, and refund status instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* EXPANDABLE FAQ SECTION */}
            <div className="faq-section">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                ❓ Frequently Asked Questions (IPO Allotment FAQ)
              </h3>

              {FAQS.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-teal)' }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR COLUMN */}
          <div>
            {/* UPSTOX DEMAT PARTNER CARD */}
            <div className="demat-promo-card">
              <span className="demat-badge">Broker Partner / Referral Link</span>
              <h3 className="demat-title">Open Free Demat Account</h3>
              <p className="demat-desc">
                Apply for Mainboard and SME IPOs with ₹0 brokerage on delivery and fast UPI mandate verification on Upstox.
              </p>
              <a 
                href="https://upstox.com/open-account/?f=7VB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-upstox"
              >
                Open Free Upstox Account →
              </a>
              <div className="demat-disclosure">
                Disclosure: This is an affiliate/partner link. We may receive referral compensation if you register through this link at zero extra cost to you.
              </div>
            </div>

            {/* TRENDING ARTICLES WIDGET */}
            <div className="sidebar-widget">
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                📖 Popular IPO Guides
              </h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                  <Link href="/blog/how-to-check-ipo-allotment-status" style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-main)' }}>
                    🔥 Step-by-Step Guide: How to Check IPO Allotment Status Online (2026)
                  </Link>
                </li>
                <li style={{ marginBottom: '0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                  <Link href="/blog/what-happens-after-ipo-allotment" style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-main)' }}>
                    🏦 What Happens After IPO Allotment? ASBA Refund &amp; Demat Credit
                  </Link>
                </li>
                <li style={{ marginBottom: '0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                  <Link href="/blog/xtranet-technologies-ipo-review" style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-main)' }}>
                    📊 Xtranet Technologies IPO Analysis &amp; Price Band
                  </Link>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <Link href="/blog/dhoot-transmission-ipo-review" style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-main)' }}>
                    🚗 Dhoot Transmission IPO Review &amp; Allotment Prediction
                  </Link>
                </li>
              </ul>
            </div>

            {/* AD BANNER CONTAINER */}
            <div className="sidebar-widget" style={{ textAlign: 'center', background: '#f8fafc', padding: '2rem 1rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                ADVERTISEMENT
              </span>
              <div style={{ minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', borderRadius: '8px', color: '#64748b', fontSize: '0.85rem' }}>
                Google AdSense Responsive Unit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
