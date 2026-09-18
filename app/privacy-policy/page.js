import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy & Data Protection | Allotment Status of IPO',
  description: 'Learn how Allotment Status of IPO protects user privacy, complies with Google AdSense, DPDP Act 2023, and GDPR standards.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page-wrapper">
      {/* HERO HEADER */}
      <section className="legal-hero-header">
        <div className="container legal-header-container">
          <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about-us">Legal &amp; Policy</Link>
            <span>/</span>
            <strong>Privacy Policy</strong>
          </nav>

          <div className="legal-top-badges">
            <span className="legal-compliance-pill">🔒 Data Protection Certified</span>
            <span className="legal-date-pill">📅 Last reviewed: September 18, 2026</span>
          </div>

          <h1 className="legal-page-title">Privacy Policy &amp; Cookie Compliance</h1>
          <p className="legal-page-subtitle">
            Transparency regarding how we handle technical data, cookies, Google AdSense integration, and user privacy rights.
          </p>
        </div>
      </section>

      {/* 2-COLUMN LAYOUT */}
      <div className="container legal-layout-container">
        <div className="legal-columns-grid">
          {/* SIDEBAR NAVIGATION */}
          <aside className="legal-sidebar-sticky">
            <div className="legal-sidebar-title">Legal &amp; Policy Hub</div>
            <ul className="legal-nav-menu">
              <li className="legal-nav-item"><Link href="/about-us">🛡️ About Us</Link></li>
              <li className="legal-nav-item"><Link href="/contact-us">📞 Contact Us</Link></li>
              <li className="legal-nav-item active"><Link href="/privacy-policy" aria-current="page">🔒 Privacy Policy</Link></li>
              <li className="legal-nav-item"><Link href="/terms">📜 Terms of Service</Link></li>
              <li className="legal-nav-item"><Link href="/disclaimer">⚖️ SEBI Disclaimer</Link></li>
            </ul>
          </aside>

          {/* MAIN CONTENT BODY */}
          <main className="legal-card-body">
            <p>
              At <strong>Allotment Status of IPO</strong> (accessible from <code>https://www.allotmentstatusofipo.in</code>), accessible via desktop and mobile devices, the privacy of our visitors is of paramount importance. This Privacy Policy outlines the types of information recorded by us and how it is utilized.
            </p>

            <h2>1. Zero Sensitive Financial Data Collection Guarantee</h2>
            <div className="sebi-safety-box" style={{ background: '#f0fdfa', borderColor: '#99f6e4', borderLeftColor: '#0d9488' }}>
              <div className="sebi-safety-header" style={{ color: '#0f766e' }}>
                <span>🛡️</span>
                <span>User Data &amp; Financial Security Assurance</span>
              </div>
              <p className="sebi-safety-text" style={{ color: '#134e4a' }}>
                We <strong>NEVER store, collect, or process</strong> your Permanent Account Number (PAN), Demat Account ID, bank account details, UPI PINs, or trading passwords. All allotment status queries are executed directly on official third-party registrar and exchange servers.
              </p>
            </div>

            <h2>2. Log Files &amp; Technical Analytics</h2>
            <p>
              Allotment Status of IPO follows standard industry procedures regarding server log files. These files log basic technical telemetry when visitors navigate pages:
            </p>
            <ul>
              <li>Internet Protocol (IP) addresses and approximate geographic location (city level).</li>
              <li>Browser type, device operating system, and screen resolution.</li>
              <li>Date, time stamp, referring URLs, and pages viewed.</li>
            </ul>
            <p>
              This data is strictly utilized for diagnosing server latency, preventing Denial of Service (DDoS) attacks, and optimizing mobile responsiveness. It is never linked to personally identifiable records.
            </p>

            <h2>3. Google AdSense &amp; DoubleClick DART Cookies</h2>
            <p>
              Google is an authorized third-party advertising vendor on our website. Google utilizes cookies (such as DART cookies) to serve targeted advertisements based on a user’s prior visits to this and other websites across the internet.
            </p>
            <ul>
              <li>Users may choose to opt out of personalized advertising by visiting Google Ad Settings at <code>https://adssettings.google.com</code>.</li>
              <li>Alternatively, users can opt out of third-party vendor cookies by visiting the Network Advertising Initiative at <code>https://www.networkadvertising.org</code>.</li>
            </ul>

            <h2>4. Web Analytics (Google Analytics GA4)</h2>
            <p>
              We use Google Analytics (GA4) with IP anonymization enabled to understand audience engagement, popular guide topics, and registrar traffic flow. You can prevent Google Analytics from tracking your activity by installing the official Google Analytics Opt-out Browser Add-on.
            </p>

            <h2>5. Outbound Links to Third-Party Registrars</h2>
            <p>
              Our portal contains outbound links to external websites including Link Intime India, KFin Technologies, Bigshare Services, BSE India, and NSE India. Once you leave our domain, our Privacy Policy no longer applies. We encourage visitors to review the privacy policies of any third-party website they visit.
            </p>

            <h2>6. Compliance with India DPDP Act 2023 &amp; GDPR</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (India) and General Data Protection Regulation (GDPR), users possess the right to:
            </p>
            <ul>
              <li>Request information regarding any data collected through technical log files.</li>
              <li>Request deletion of any contact email records sent to our support desk.</li>
              <li>Opt out of non-essential analytical tracking cookies.</li>
            </ul>

            <h2>7. Privacy Contact</h2>
            <p>
              For privacy-related inquiries or data protection requests, please contact our Data Protection Lead at <code>privacy@allotmentstatusofipo.in</code>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
