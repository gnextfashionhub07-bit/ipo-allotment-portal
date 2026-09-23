import Link from 'next/link';

export const metadata = {
  title: 'Financial Disclaimer & SEBI Regulatory Disclosure | Allotment Status of IPO',
  description: 'Mandatory SEBI regulatory disclosure, capital market risk warnings, Grey Market Premium (GMP) disclaimer, and educational portal terms.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="about-page-wrapper">
      {/* HERO HEADER */}
      <section className="about-hero-section">
        <div className="container about-hero-container">
          <nav className="about-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about-us">Legal Hub</Link>
            <span>/</span>
            <strong>SEBI Disclaimer</strong>
          </nav>

          <div className="about-hero-badge">
            <span className="about-badge-pill" style={{ background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}>
              <span className="live-pulse-dot" style={{ background: '#dc2626' }}></span>
              MANDATORY SEBI REGULATORY DISCLOSURE
            </span>
            <span className="about-date-pill">📅 Last Reviewed: September 2026</span>
          </div>

          <h1 className="about-hero-title">
            Financial Disclaimer &amp; <span className="gradient-text">Regulatory Disclosure</span>
          </h1>

          <p className="about-hero-subtitle">
            Please read this financial disclaimer carefully before accessing our IPO allotment directory, market trackers, or GMP calculators. Your use of this platform constitutes explicit agreement with these compliance terms.
          </p>

          {/* 3 QUICK RISK CARDS */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon" style={{ background: '#fef2f2', borderColor: '#fecaca' }}>🛑</div>
              <div>
                <div className="about-stat-val">Not SEBI RIA</div>
                <div className="about-stat-lbl">Zero Advisory or Buy/Sell Calls</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon" style={{ background: '#fffbeb', borderColor: '#fde68a' }}>⚠️</div>
              <div>
                <div className="about-stat-val">Capital Risk</div>
                <div className="about-stat-lbl">Equities Carry Substantial Market Risk</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>📊</div>
              <div>
                <div className="about-stat-val">Informal GMP</div>
                <div className="about-stat-lbl">GMP Does Not Guarantee Listing Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="about-content-container">
        {/* MANDATORY PROMINENT SEBI ALERT BOX */}
        <div className="sebi-safety-box" style={{ background: '#fef2f2', borderColor: '#fecaca', borderLeft: '4px solid #dc2626', marginBottom: '2.5rem' }}>
          <div className="sebi-safety-header" style={{ color: '#b91c1c' }}>
            <span>🛑</span>
            <span>Mandatory Statutory SEBI Notice (Securities and Exchange Board of India)</span>
          </div>
          <p className="sebi-safety-text" style={{ color: '#7f1d1d' }}>
            <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>), its owner Mahesh Chavan, and associate contributors are <strong>NOT registered with the Securities and Exchange Board of India (SEBI)</strong> as an Investment Adviser under the SEBI (Investment Advisers) Regulations, 2013, or as a Research Analyst under the SEBI (Research Analysts) Regulations, 2014. We do not provide trading tips, stock recommendations, portfolio management, or guaranteed return schemes.
          </p>
        </div>

        {/* SECTION 1: 6 CORE DISCLAIMER PILLARS */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">⚖️</div>
            <h2 className="about-section-heading">Core Regulatory &amp; Financial Disclaimers</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3 className="value-title">1. Informational &amp; Educational Purpose Only</h3>
              <p className="value-desc">
                All data published on this website—including IPO price bands, schedules, issue sizes, registrar gateways, and calculators—is for general educational reference. Nothing herein constitutes financial, legal, tax, or investment advice.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3 className="value-title">2. Grey Market Premium (GMP) Explicit Disclosure</h3>
              <p className="value-desc">
                Grey Market Premium (GMP) values are informal, unofficial secondary market sentiment indicators. GMP is <strong>NOT recognized, monitored, or endorsed by SEBI, NSE, or BSE</strong>. Actual listing prices depend strictly on market conditions on listing day.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎰</div>
              <h3 className="value-title">3. Zero Control Over Allotment Outcomes</h3>
              <p className="value-desc">
                Share allotment for oversubscribed IPOs is finalized solely through automated computerized lotteries overseen by SEBI-registered merchant bankers and official registrars. We have zero affiliation with the allotment process and cannot guarantee or alter allotment results.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🏦</div>
              <h3 className="value-title">4. ASBA Banking &amp; UPI Mandate Disclaimer</h3>
              <p className="value-desc">
                We are not a financial intermediary. We do not hold, process, or unblock user funds. Any delays or grievances regarding ASBA bank balance unfreezing or UPI auto-mandate releases must be escalated directly to your bank or registrar.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3 className="value-title">5. Data Accuracy &amp; DRHP Sourcing</h3>
              <p className="value-desc">
                While we strive for 100% accuracy by referencing official Red Herring Prospectuses (RHP) and exchange filings, we make no warranties regarding data completeness. Always verify details from official SEBI and exchange websites before bidding.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">6. Partner &amp; Affiliate Disclosure</h3>
              <p className="value-desc">
                Certain links on this website (e.g. Demat account opening via Upstox) are referral partner links. We may receive nominal compensation at zero additional cost to you. This does not influence our editorial independence or market analysis.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: INVESTOR CAUTION CHECKLIST (DOs & DONTs) */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🛡️</div>
            <h2 className="about-section-heading">Smart Retail Investor Due Diligence Checklist</h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-box new-way">
              <h3 className="comparison-header">✅ Mandatory Due Diligence (DOs)</h3>
              <ul className="comparison-list">
                <li>✓ Read the company&rsquo;s official Draft Red Herring Prospectus (DRHP) on SEBI&rsquo;s website.</li>
                <li>✓ Analyze company financials, P/E valuation, debt-to-equity ratio, and peer comparisons.</li>
                <li>✓ Consult a certified, SEBI-registered financial adviser for portfolio allocation guidance.</li>
                <li>✓ Verify allotment status only through certified registrar gateways (Link Intime, KFintech, etc.).</li>
                <li>✓ Confirm share credit in your CDSL / NSDL Demat account by T+2 day.</li>
              </ul>
            </div>

            <div className="comparison-box old-way">
              <h3 className="comparison-header">❌ High-Risk Behaviors to Avoid (DON&rsquo;Ts)</h3>
              <ul className="comparison-list">
                <li>⚠️ Do NOT invest in IPOs based solely on unverified social media or Telegram GMP buzz.</li>
                <li>⚠️ Do NOT borrow high-interest loans to apply for high-lot IPO applications.</li>
                <li>⚠️ Do NOT submit your sensitive PAN card, bank details, or UPI PIN on unverified websites.</li>
                <li>⚠️ Do NOT fall for unsolicited calls promising guaranteed IPO allotment quotas.</li>
                <li>⚠️ Do NOT trade in informal grey market &ldquo;Kostak&rdquo; or &ldquo;Subject to Sauda&rdquo; contracts.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: OFFICIAL GRIEVANCE REDRESSAL (SEBI SCORES) */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🏛️</div>
            <h2 className="about-section-heading">Official Investor Grievance Escalation Portals</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If you encounter unresolved issues regarding your IPO application, bank lien unfreezing, or Demat credit, escalate directly through the official regulatory grievance redressal channels:
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">SEBI SCORES Portal</h4>
              <p className="value-desc">
                Official SEBI Complaints Redress System for listed equities, registrars, and capital market intermediaries.
              </p>
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Visit SEBI SCORES ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">BSE Investor Services</h4>
              <p className="value-desc">
                Bombay Stock Exchange investor complaint resolution desk for application tracking and trading disputes.
              </p>
              <a href="https://www.bseindia.com/investors/inv_services.aspx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Visit BSE Grievance Desk ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">NSE Investor Grievance</h4>
              <p className="value-desc">
                National Stock Exchange e-Complaint platform for syndicate broker and bidding order verification.
              </p>
              <a href="https://www.nseindia.com/invest/complaints-arbitration" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Visit NSE e-Complaint ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">SEBI Investor Toll-Free Helpline</h4>
              <p className="value-desc">
                Toll-free investor guidance line in 14 languages: <strong>1800 266 7575</strong> or <strong>1800 22 7575</strong> (9:00 AM to 6:00 PM).
              </p>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'block', marginTop: '0.5rem' }}>
                Operational on all days (excluding declared holidays)
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 4: LEGAL & POLICY HUB */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📑</div>
            <h2 className="about-section-heading">Explore Legal &amp; Policy Documentation</h2>
          </div>

          <div className="legal-hub-grid">
            <Link href="/about-us" className="legal-hub-card">
              <span className="legal-hub-icon">🛡️</span>
              <strong className="legal-hub-title">About Us</strong>
              <span className="legal-hub-sub">Platform &amp; Leadership</span>
            </Link>

            <Link href="/contact-us" className="legal-hub-card">
              <span className="legal-hub-icon">📞</span>
              <strong className="legal-hub-title">Contact Us</strong>
              <span className="legal-hub-sub">Grievance &amp; Support</span>
            </Link>

            <Link href="/privacy-policy" className="legal-hub-card">
              <span className="legal-hub-icon">🔒</span>
              <strong className="legal-hub-title">Privacy Policy</strong>
              <span className="legal-hub-sub">Zero PAN Storage</span>
            </Link>

            <Link href="/terms" className="legal-hub-card">
              <span className="legal-hub-icon">📜</span>
              <strong className="legal-hub-title">Terms of Service</strong>
              <span className="legal-hub-sub">User Terms &amp; Rules</span>
            </Link>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="about-cta-banner">
          <h2 className="about-cta-title">Understood the Risks? Track Live IPOs Responsibly</h2>
          <p className="about-cta-sub">
            Access our real-time Mainboard and SME IPO status gateways, verified registrar links, and realistic profit calculators.
          </p>
          <div className="about-cta-buttons">
            <Link href="/#live-table" className="btn-cta-primary">
              <span>View Live IPO Tracker</span>
              <span>→</span>
            </Link>
            <Link href="/#registrar-tool" className="btn-cta-primary" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <span>Official Registrars</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
