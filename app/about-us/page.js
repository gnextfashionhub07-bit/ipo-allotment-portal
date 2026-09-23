import Link from 'next/link';

export const metadata = {
  title: 'About Us & Editorial Standards | Allotment Status of IPO',
  description: 'Learn about Allotment Status of IPO, our founder Mahesh Chavan, editorial principles, and mission to deliver transparent, SEBI-compliant IPO intelligence.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <div className="about-page-wrapper">
      {/* HERO HEADER */}
      <section className="about-hero-section">
        <div className="container about-hero-container">
          <nav className="about-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <strong>About Us</strong>
          </nav>

          <div className="about-hero-badge">
            <span className="about-badge-pill">
              <span className="live-pulse-dot"></span>
              E-E-A-T VERIFIED • PRIMARY MARKET RESEARCH
            </span>
            <span className="about-date-pill">📅 Updated: September 2026</span>
          </div>

          <h1 className="about-hero-title">
            About <span className="gradient-text">Allotment Status of IPO</span>
          </h1>

          <p className="about-hero-subtitle">
            An independent, high-speed educational platform committed to simplifying Indian primary stock market discovery. We provide instant 1-click gateway routing to official SEBI registrars, live GMP intelligence, and zero personal data retention.
          </p>

          {/* 3 QUICK STAT CARDS */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">⚡</div>
              <div>
                <div className="about-stat-val">1-Click</div>
                <div className="about-stat-lbl">Official SEBI Gateway Routing</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🔒</div>
              <div>
                <div className="about-stat-val">Zero PAN</div>
                <div className="about-stat-lbl">100% Privacy &amp; Zero Data Stored</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">⏱️</div>
              <div>
                <div className="about-stat-val">SEBI T+3</div>
                <div className="about-stat-lbl">Full Settlement Timeline Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="about-content-container">
        {/* MANDATORY SEBI COMPLIANCE ALERT */}
        <div className="sebi-safety-box" style={{ marginBottom: '2.5rem' }}>
          <div className="sebi-safety-header">
            <span>⚖️</span>
            <span>Mandatory SEBI Regulatory &amp; Research Compliance Notice</span>
          </div>
          <p className="sebi-safety-text">
            <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>) is an educational intelligence and directory platform. We are <strong>NOT registered with the Securities and Exchange Board of India (SEBI)</strong> as an Investment Adviser (RIA) or Research Analyst (RA). We do not provide trading tips, stock recommendations, or investment advisory services. Grey Market Premium (GMP) data is purely informal secondary market sentiment.
          </p>
        </div>

        {/* SECTION 1: MISSION & CORE VALUES */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🎯</div>
            <h2 className="about-section-heading">Our Mission &amp; Core Principles</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏛️</div>
              <h3 className="value-title">Direct Gateway Redirection</h3>
              <p className="value-desc">
                We eliminate confusing search results by connecting investors directly to authorized registrar servers (Link Intime, KFintech, Bigshare, and BSE/NSE) with zero intermediary hops.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">Privacy by Design</h3>
              <p className="value-desc">
                Your PAN card and Demat account numbers are sensitive. We enforce a strict zero-collection policy—no server logs, no databases, and zero tracking of financial IDs.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3 className="value-title">SEBI T+3 Timeline Clarity</h3>
              <p className="value-desc">
                Comprehensive step-by-step guidance on allotment finalization, ASBA bank lien release, UPI mandate revocation, and Demat share credit.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3 className="value-title">Objective &amp; DRHP-Grounded</h3>
              <p className="value-desc">
                Every issue size, price band, and lot size is verified against official Red Herring Prospectuses (RHP) filed with SEBI and stock exchanges.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE PROBLEM WE SOLVE */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">💡</div>
            <h2 className="about-section-heading">How We Solve Allotment Night Frustration</h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-box old-way">
              <h3 className="comparison-header">❌ The Frustrating Old Way</h3>
              <ul className="comparison-list">
                <li>⚠️ Shady websites requesting your PAN and phone number.</li>
                <li>⚠️ Confusing &ldquo;Record Not Found&rdquo; errors without explanation.</li>
                <li>⚠️ Overloaded registrar servers causing server time-outs.</li>
                <li>⚠️ Misleading rumors and unverified WhatsApp GMP figures.</li>
                <li>⚠️ Zero guidance when UPI mandate money remains blocked.</li>
              </ul>
            </div>

            <div className="comparison-box new-way">
              <h3 className="comparison-header">✅ The Allotment Status Solution</h3>
              <ul className="comparison-list">
                <li>✨ 1-Click verified gateways directly to official SEBI registrars.</li>
                <li>✨ Zero PAN capture—you enter details safely on the registrar&rsquo;s site.</li>
                <li>✨ Live status tags indicating whether allotment is finalized.</li>
                <li>✨ Interactive GMP &amp; Profit Calculator with realistic lot multipliers.</li>
                <li>✨ Step-by-step escalation workflows for blocked funds.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: MEET THE FOUNDER */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">👤</div>
            <h2 className="about-section-heading">Founder &amp; Editorial Leadership (E-E-A-T)</h2>
          </div>

          <div className="founder-profile-card">
            <div className="founder-avatar-box">MC</div>
            <div className="founder-info">
              <h3 className="founder-name">Mahesh Chavan</h3>
              <span className="founder-role">Founder</span>
              <p className="founder-bio">
                Based in Pune, Maharashtra, Mahesh is a software engineer, system architect, and seasoned capital markets observer. Passionate about financial democratization, he built Allotment Status of IPO to provide Indian retail investors with a lightning-fast, ad-safe, and privacy-first gateway to primary market data.
              </p>
              <div className="founder-tags">
                <span className="founder-tag">📍 Pune, Maharashtra, India</span>
                <span className="founder-tag">🎓 Software Engineering &amp; Fintech Architecture</span>
                <span className="founder-tag">📈 8+ Years Capital Markets Observer</span>
                <span className="founder-tag">🛡️ DPDP Act Privacy Advocate</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: DATA SOURCING & INTEGRITY */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🔍</div>
            <h2 className="about-section-heading">Data Sourcing &amp; Verification Standards</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We adhere to rigorous editorial and data-checking standards before publishing any primary market issue details:
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">1. Regulatory DRHP / RHP Filings</h4>
              <p className="value-desc">
                All price bands, issue structures, minimum lots, and reservation ratios are verified directly against SEBI DRHP/RHP documents.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">2. Exchange Feeds (BSE &amp; NSE)</h4>
              <p className="value-desc">
                Subscription figures and final basis of allotment dates are cross-referenced with daily cumulative bidding records from BSE and NSE.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">3. Registrar Validation</h4>
              <p className="value-desc">
                We verify active registrar endpoints on Link Intime, KFintech, and Bigshare servers to ensure links open correctly on listing evening.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">4. Zero Paid Reviews</h4>
              <p className="value-desc">
                We do not accept paid promotions from IPO issuers or promoters to artificially inflate demand or review scores.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: LEGAL & POLICY HUB */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📑</div>
            <h2 className="about-section-heading">Legal, Privacy &amp; Compliance Hub</h2>
          </div>

          <div className="legal-hub-grid">
            <Link href="/contact-us" className="legal-hub-card">
              <span className="legal-hub-icon">📞</span>
              <strong className="legal-hub-title">Contact Us</strong>
              <span className="legal-hub-sub">Editorial &amp; Support</span>
            </Link>

            <Link href="/privacy-policy" className="legal-hub-card">
              <span className="legal-hub-icon">🔒</span>
              <strong className="legal-hub-title">Privacy Policy</strong>
              <span className="legal-hub-sub">Zero-PAN storage</span>
            </Link>

            <Link href="/terms" className="legal-hub-card">
              <span className="legal-hub-icon">📜</span>
              <strong className="legal-hub-title">Terms of Service</strong>
              <span className="legal-hub-sub">User agreements</span>
            </Link>

            <Link href="/disclaimer" className="legal-hub-card">
              <span className="legal-hub-icon">⚖️</span>
              <strong className="legal-hub-title">SEBI Disclaimer</strong>
              <span className="legal-hub-sub">Non-advisory rules</span>
            </Link>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="about-cta-banner">
          <h2 className="about-cta-title">Ready to Track Live IPOs &amp; Allotment?</h2>
          <p className="about-cta-sub">
            Access real-time Mainboard and SME IPO trackers, direct registrar deep-links, and calculate potential listing day profits instantly.
          </p>
          <div className="about-cta-buttons">
            <Link href="/#live-table" className="btn-cta-primary">
              <span>View Live IPO Tracker</span>
              <span>→</span>
            </Link>
            <a 
              href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cta-whatsapp"
            >
              <span>💬 Join WhatsApp Alerts</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
