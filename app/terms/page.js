import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service & Portal Rules | Allotment Status of IPO',
  description: 'Terms and conditions governing the use of Allotment Status of IPO portal, registrar directories, GMP calculators, and educational content.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
            <strong>Terms of Service</strong>
          </nav>

          <div className="about-hero-badge">
            <span className="about-badge-pill">
              <span className="live-pulse-dot"></span>
              BINDING USER AGREEMENT • FAIR USAGE POLICY
            </span>
            <span className="about-date-pill">📅 Effective: September 2026</span>
          </div>

          <h1 className="about-hero-title">
            Terms of Service &amp; <span className="gradient-text">Portal Guidelines</span>
          </h1>

          <p className="about-hero-subtitle">
            Welcome to Allotment Status of IPO. Please review these Terms of Service carefully before utilizing our registrar directories, live tracking tools, or profit calculators.
          </p>

          {/* 3 QUICK TERMS STATS */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">🎓</div>
              <div>
                <div className="about-stat-val">Free Access</div>
                <div className="about-stat-lbl">100% Free Educational Reference</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🛡️</div>
              <div>
                <div className="about-stat-val">Fair Use</div>
                <div className="about-stat-lbl">Anti-Scraping &amp; Bot Restrictions</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">⚖️</div>
              <div>
                <div className="about-stat-val">Indian Law</div>
                <div className="about-stat-lbl">Jurisdiction in Pune, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="about-content-container">
        {/* NON-ADVISORY AGREEMENT BOX */}
        <div className="sebi-safety-box" style={{ marginBottom: '2.5rem' }}>
          <div className="sebi-safety-header">
            <span>⚠️</span>
            <span>Non-Advisory Agreement &amp; Acknowledgement</span>
          </div>
          <p className="sebi-safety-text">
            By accessing or using <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>), you explicitly agree that this portal is strictly an educational tool and technology directory. <strong>Nothing on this website constitutes financial advisory or investment solicitation.</strong> If you do not accept these terms in full, you must discontinue using our services immediately.
          </p>
        </div>

        {/* SECTION 1: 6 CORE TERMS PILLARS */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📜</div>
            <h2 className="about-section-heading">Core Operating Terms &amp; Conditions</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✅</div>
              <h3 className="value-title">1. Acceptance of Terms</h3>
              <p className="value-desc">
                Your continued navigation of this portal, launching registrar links, or calculating estimated GMP gains constitutes binding acceptance of these terms, as well as our Privacy Policy and SEBI Disclaimer.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔓</div>
              <h3 className="value-title">2. Limited Personal License</h3>
              <p className="value-desc">
                We grant users a non-exclusive, revocable, and non-commercial license to access, view, and utilize our IPO tracking tables and educational guides for personal primary market research.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤖</div>
              <h3 className="value-title">3. Anti-Scraping &amp; Bot Policy</h3>
              <p className="value-desc">
                Systematic automated harvesting, web scraping, denial of service (DoS) attacks, or excessive querying of our Route APIs that degrades portal performance is strictly prohibited.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌐</div>
              <h3 className="value-title">4. Third-Party Gateway Independence</h3>
              <p className="value-desc">
                External registrars (Link Intime, KFin Technologies, Bigshare Services) and stock exchanges (BSE/NSE) operate independently. We are not liable for their server downtime, latency, or portal errors.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">5. Limitation of Financial Liability</h3>
              <p className="value-desc">
                Under no circumstances shall Allotment Status of IPO or its owner Mahesh Chavan be held liable for trading losses, bank ASBA lien unfreeze delays, or discrepancies in secondary market listing prices.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3 className="value-title">6. Jurisdiction &amp; Governing Law</h3>
              <p className="value-desc">
                These terms are governed by the laws of the Republic of India. Any legal disputes or claims arising from the use of this website shall be subject to the exclusive jurisdiction of courts located in Pune, Maharashtra.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: PERMITTED VS PROHIBITED MATRIX */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">⚖️</div>
            <h2 className="about-section-heading">Acceptable Use Policy: Permitted vs Prohibited Activities</h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-box new-way">
              <h3 className="comparison-header">✅ Permitted Use (Encouraged)</h3>
              <ul className="comparison-list">
                <li>✓ Checking live IPO allotment status via official registrar gateways.</li>
                <li>✓ Calculating estimated lot returns using the interactive GMP calculator.</li>
                <li>✓ Reading and sharing educational masterclasses with proper link attribution.</li>
                <li>✓ Sharing portal tools with friends, family, and investment study groups.</li>
                <li>✓ Providing editorial suggestions and reporting broken registrar links.</li>
              </ul>
            </div>

            <div className="comparison-box old-way">
              <h3 className="comparison-header">❌ Prohibited Activities (Violations)</h3>
              <ul className="comparison-list">
                <li>⚠️ Scraping or copying proprietary code, articles, or tables without attribution.</li>
                <li>⚠️ Embedding this portal in unauthorized native apps using iframes or web-views.</li>
                <li>⚠️ Attempting to reverse engineer or flood our API endpoints with bot queries.</li>
                <li>⚠️ Using our platform brand name to endorse paid stock tips or WhatsApp schemes.</li>
                <li>⚠️ Bypassing security headers, rate limits, or advertising delivery scripts.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: INTELLECTUAL PROPERTY */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">💡</div>
            <h2 className="about-section-heading">Intellectual Property &amp; Content Rights</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            All content published on <strong>Allotment Status of IPO</strong>—including website code, layout architecture, custom illustrations, infographics, calculators, and editorial articles—is the exclusive intellectual property of Mahesh Chavan and is protected under the Indian Copyright Act, 1957.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">Trademark Notice</h4>
              <p className="value-desc">
                Company names, logos, and registrar trademarks mentioned on this site (e.g. Link Intime, KFintech, Bigshare, BSE, NSE) are property of their respective owners and used solely for identification purposes.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">Copyright Infringement Notice</h4>
              <p className="value-desc">
                If you believe any content on this portal infringes upon your copyright, please notify our grievance desk immediately with proof of ownership for swift review.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: LEGAL & POLICY HUB */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📑</div>
            <h2 className="about-section-heading">Explore Related Legal Policies</h2>
          </div>

          <div className="legal-hub-grid">
            <Link href="/about-us" className="legal-hub-card">
              <span className="legal-hub-icon">🛡️</span>
              <strong className="legal-hub-title">About Us</strong>
              <span className="legal-hub-sub">Platform Overview</span>
            </Link>

            <Link href="/contact-us" className="legal-hub-card">
              <span className="legal-hub-icon">📞</span>
              <strong className="legal-hub-title">Contact Us</strong>
              <span className="legal-hub-sub">Support &amp; Grievance</span>
            </Link>

            <Link href="/privacy-policy" className="legal-hub-card">
              <span className="legal-hub-icon">🔒</span>
              <strong className="legal-hub-title">Privacy Policy</strong>
              <span className="legal-hub-sub">Zero PAN Storage</span>
            </Link>

            <Link href="/disclaimer" className="legal-hub-card">
              <span className="legal-hub-icon">⚖️</span>
              <strong className="legal-hub-title">SEBI Disclaimer</strong>
              <span className="legal-hub-sub">Regulatory Notices</span>
            </Link>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="about-cta-banner">
          <h2 className="about-cta-title">Ready to Track Live IPO Allotments?</h2>
          <p className="about-cta-sub">
            Enjoy 100% free, fast, and verified 1-click status checking via certified SEBI registrars.
          </p>
          <div className="about-cta-buttons">
            <Link href="/#live-table" className="btn-cta-primary">
              <span>View Live IPO Tracker</span>
              <span>→</span>
            </Link>
            <Link href="/#gmp-calculator" className="btn-cta-primary" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <span>Launch GMP Calculator</span>
              <span>🧮</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
