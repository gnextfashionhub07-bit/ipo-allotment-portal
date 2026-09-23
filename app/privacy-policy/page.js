import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy & Data Protection | Allotment Status of IPO',
  description: 'Learn how Allotment Status of IPO protects user privacy, enforces a strict zero-PAN storage policy, and complies with DPDP Act 2023 & Google AdSense standards.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
            <strong>Privacy Policy</strong>
          </nav>

          <div className="about-hero-badge">
            <span className="about-badge-pill">
              <span className="live-pulse-dot"></span>
              PRIVACY BY DESIGN • ZERO-DATA RETENTION MANDATE
            </span>
            <span className="about-date-pill">📅 Last Reviewed: September 2026</span>
          </div>

          <h1 className="about-hero-title">
            Privacy Policy &amp; <span className="gradient-text">Data Governance</span>
          </h1>

          <p className="about-hero-subtitle">
            We believe your financial privacy is sacred. Allotment Status of IPO operates on an absolute zero-personal-data retention model: we never request, store, or log your PAN, Demat number, or banking credentials.
          </p>

          {/* 3 QUICK TRUST CARDS */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">🔒</div>
              <div>
                <div className="about-stat-val">Zero PAN Stored</div>
                <div className="about-stat-lbl">No Database &amp; Zero Logs of User IDs</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🛡️</div>
              <div>
                <div className="about-stat-val">DPDP Act 2023</div>
                <div className="about-stat-lbl">Compliant with Indian Data Protection</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🍪</div>
              <div>
                <div className="about-stat-val">AdSense Clean</div>
                <div className="about-stat-lbl">Opt-Out &amp; Cookie Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="about-content-container">
        {/* ZERO SENSITIVE DATA ALERT BOX */}
        <div className="sebi-safety-box" style={{ background: '#f0fdf4', borderColor: '#a7f3d0', borderLeft: '4px solid #059669', marginBottom: '2.5rem' }}>
          <div className="sebi-safety-header" style={{ color: '#065f46' }}>
            <span>🛡️</span>
            <span>The Zero-Storage Guarantee (PAN &amp; Demat Data Safety)</span>
          </div>
          <p className="sebi-safety-text" style={{ color: '#064e3b' }}>
            When you use our portal to check IPO allotment, you are redirected directly to the official encrypted servers of SEBI-authorized registrars (Link Intime, KFin Technologies, Bigshare Services, or BSE/NSE). <strong>We never capture, store, transmit, or monetize your Permanent Account Number (PAN), Demat Client ID, Application Number, or Bank Account.</strong>
          </p>
        </div>

        {/* SECTION 1: CORE DATA GOVERNANCE PILLARS */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🔐</div>
            <h2 className="about-section-heading">Data Governance &amp; Privacy Standards</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚫</div>
              <h3 className="value-title">1. No Financial Credential Collection</h3>
              <p className="value-desc">
                We do not have login forms, database registration, or PAN query inputs on our servers. All status lookups occur entirely on the respective registrar&rsquo;s official infrastructure.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3 className="value-title">2. Standard Server Telemetry &amp; Logs</h3>
              <p className="value-desc">
                Like most modern web services, our Edge CDN logs standard technical telemetry: anonymized IP addresses, browser user-agent, and requested URLs to protect against DDoS attacks and diagnose server latency.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">3. Google AdSense &amp; DART Cookies</h3>
              <p className="value-desc">
                Google serves relevant advertisements on our website. Google uses cookies (including DART cookies) to personalize ads based on your prior browsing history across the web. You can opt out at any time.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3 className="value-title">4. Analytics (Google Analytics GA4)</h3>
              <p className="value-desc">
                We use Google Analytics with IP anonymization enabled to analyze audience size, popular guides, and device types. No personally identifiable information (PII) is ever shared or stored.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌐</div>
              <h3 className="value-title">5. Outbound Third-Party Links</h3>
              <p className="value-desc">
                Our site links to external registrars, stock exchanges, and regulatory bodies. Once you leave our domain, our privacy policy no longer applies. We encourage reviewing the privacy policies of any third-party portal.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3 className="value-title">6. DPDP Act &amp; User Rights</h3>
              <p className="value-desc">
                We strictly uphold the Digital Personal Data Protection Act (DPDP Act, 2023). Because we do not store personal profiles, there is zero risk of your financial identity being leaked from our platform.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: DATA COLLECTION MATRIX */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🔍</div>
            <h2 className="about-section-heading">Data Handling Matrix: What We Touch vs What We Never Touch</h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-box new-way">
              <h3 className="comparison-header">✅ What We Collect (Purely Technical)</h3>
              <ul className="comparison-list">
                <li>✓ Anonymized IP addresses for server security &amp; CDN caching.</li>
                <li>✓ Browser type, device screen resolution, and operating system.</li>
                <li>✓ Aggregate page views to identify top searched IPO companies.</li>
                <li>✓ Anonymous Google Analytics telemetry (anonymized IP).</li>
                <li>✓ Optional voluntary email submissions when contacting our team.</li>
              </ul>
            </div>

            <div className="comparison-box old-way">
              <h3 className="comparison-header">❌ What We NEVER Collect or Store</h3>
              <ul className="comparison-list">
                <li>⚠️ Permanent Account Numbers (PAN Cards).</li>
                <li>⚠️ Demat Account Numbers, DP IDs, or Client IDs.</li>
                <li>⚠️ Bank Account Details, IFSC Codes, or UPI PINs.</li>
                <li>⚠️ Application Numbers or Bidding Passwords.</li>
                <li>⚠️ Phone numbers or personal identity proof documents.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 3: COOKIE MANAGEMENT & OPT-OUT */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🍪</div>
            <h2 className="about-section-heading">Cookie Controls &amp; Personalized Ad Opt-Out</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            You have full autonomy over advertising and analytics cookies. You can customize or disable tracking via the following official resources:
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">Google Ad Settings</h4>
              <p className="value-desc">
                Manage how Google customizes ads for you across all devices or opt out of personalized ad targeting entirely.
              </p>
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Manage Google Ad Preferences ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">Network Advertising Initiative (NAI)</h4>
              <p className="value-desc">
                Opt out of behavioral advertising cookies across dozens of accredited ad networks with a single tool.
              </p>
              <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Visit NAI Opt-Out Tool ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">Google Analytics Opt-Out Add-on</h4>
              <p className="value-desc">
                Download the official browser extension to prevent Google Analytics JavaScript from sending telemetry data.
              </p>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Install GA Opt-Out Add-on ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">Browser Cookie Controls</h4>
              <p className="value-desc">
                You can block all third-party cookies directly inside Google Chrome, Apple Safari, Mozilla Firefox, or Microsoft Edge settings.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: GRIEVANCE & PRIVACY OFFICER */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">👤</div>
            <h2 className="about-section-heading">Data Protection &amp; Grievance Officer</h2>
          </div>

          <div className="founder-profile-card">
            <div className="founder-avatar-box">🛡️</div>
            <div className="founder-info">
              <h3 className="founder-name">Mahesh Chavan</h3>
              <span className="founder-role">Designated Grievance &amp; Data Protection Officer</span>
              <p className="founder-bio">
                In compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, any questions, concerns, or grievances regarding cookie consent or website data governance may be addressed directly to our Data Protection Officer.
              </p>
              <div className="founder-tags">
                <span className="founder-tag">📧 Email: support@allotmentstatusofipo.in</span>
                <span className="founder-tag">📍 Pune, Maharashtra, India</span>
                <span className="founder-tag">⏱️ Response SLA: Within 48 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: LEGAL & POLICY HUB */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📑</div>
            <h2 className="about-section-heading">Related Legal &amp; Policy Hub</h2>
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
              <span className="legal-hub-sub">Support &amp; Feedback</span>
            </Link>

            <Link href="/terms" className="legal-hub-card">
              <span className="legal-hub-icon">📜</span>
              <strong className="legal-hub-title">Terms of Service</strong>
              <span className="legal-hub-sub">User Terms &amp; Rules</span>
            </Link>

            <Link href="/disclaimer" className="legal-hub-card">
              <span className="legal-hub-icon">⚖️</span>
              <strong className="legal-hub-title">SEBI Disclaimer</strong>
              <span className="legal-hub-sub">Regulatory Disclosures</span>
            </Link>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="about-cta-banner">
          <h2 className="about-cta-title">Your Privacy is 100% Protected</h2>
          <p className="about-cta-sub">
            Track Mainboard and SME IPOs with total confidence. We link you directly to verified official registrars without capturing your private data.
          </p>
          <div className="about-cta-buttons">
            <Link href="/#live-table" className="btn-cta-primary">
              <span>View Live IPO Tracker</span>
              <span>→</span>
            </Link>
            <Link href="/about-us" className="btn-cta-primary" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <span>Learn About Our Mission</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
