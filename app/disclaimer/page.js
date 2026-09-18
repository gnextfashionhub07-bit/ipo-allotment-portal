import Link from 'next/link';

export const metadata = {
  title: 'Financial Disclaimer & SEBI Regulatory Disclosure | Allotment Status of IPO',
  description: 'Mandatory SEBI regulatory disclosure, market risk warnings, Grey Market Premium (GMP) disclaimer, and educational portal terms.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
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
            <strong>SEBI Disclaimer</strong>
          </nav>

          <div className="legal-top-badges">
            <span className="legal-compliance-pill">⚖️ Regulatory Disclosure</span>
            <span className="legal-date-pill">📅 Last reviewed: September 18, 2026</span>
          </div>

          <h1 className="legal-page-title">Financial Disclaimer &amp; SEBI Disclosure</h1>
          <p className="legal-page-subtitle">
            Mandatory regulatory notices, capital market risk disclosures, and terms regarding financial market information.
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
              <li className="legal-nav-item"><Link href="/privacy-policy">🔒 Privacy Policy</Link></li>
              <li className="legal-nav-item"><Link href="/terms">📜 Terms of Service</Link></li>
              <li className="legal-nav-item active"><Link href="/disclaimer" aria-current="page">⚖️ SEBI Disclaimer</Link></li>
            </ul>
          </aside>

          {/* MAIN CONTENT BODY */}
          <main className="legal-card-body">
            {/* MANDATORY PROMINENT SEBI NOTICE */}
            <div className="sebi-safety-box" style={{ background: '#fef2f2', borderColor: '#fecaca', borderLeftColor: '#ef4444' }}>
              <div className="sebi-safety-header" style={{ color: '#b91c1c' }}>
                <span>🛑</span>
                <span>Mandatory SEBI Regulatory Notice (Securities and Exchange Board of India)</span>
              </div>
              <p className="sebi-safety-text" style={{ color: '#7f1d1d' }}>
                <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>), its founder Mahesh Chavan, and associated contributors are <strong>NOT registered with the Securities and Exchange Board of India (SEBI)</strong> as Investment Advisers under SEBI (Investment Advisers) Regulations, 2013, or as Research Analysts under SEBI (Research Analysts) Regulations, 2014.
              </p>
            </div>

            <h2>1. Informational &amp; Educational Nature</h2>
            <p>
              All materials published on this website—including IPO schedules, price bands, issue sizes, registrar links, GMP calculators, subscription updates, and articles—are curated strictly for <strong>general educational and reference purposes</strong>.
            </p>
            <ul>
              <li>No content on this portal should be construed as investment advice, financial planning, tax guidance, or stock recommendations.</li>
              <li>We do NOT provide buy/sell/hold calls, targeted price forecasts, or assured returns on any equity securities.</li>
              <li>Investors are strongly advised to conduct independent due diligence, review the official Red Herring Prospectus (RHP) filed with SEBI, and consult a SEBI-registered financial adviser before committing funds.</li>
            </ul>

            <h2>2. Grey Market Premium (GMP) Explicit Risk Warning</h2>
            <div className="sebi-safety-box">
              <div className="sebi-safety-header">
                <span>⚠️</span>
                <span>Grey Market Premium (GMP) Notice</span>
              </div>
              <p className="sebi-safety-text">
                Grey Market Premium (GMP) numbers reported on this website reflect <strong>informal, unregulated, and non-official market price indications</strong>. GMP is not recognized, approved, or monitored by SEBI, the National Stock Exchange (NSE), or the Bombay Stock Exchange (BSE). GMP figures are subject to rapid intraday fluctuations and <strong>do not guarantee the actual listing price</strong> on trading day.
              </p>
            </div>

            <h2>3. No Guarantee of Allotment or Application Success</h2>
            <p>
              IPO allotment in oversubscribed retail and HNI categories is determined strictly through automated computerized lotteries administered by SEBI-registered issue registrars under exchange oversight. Allotment Status of IPO has zero affiliation with the allotment process and cannot influence application outcomes.
            </p>

            <h2>4. ASBA Banking &amp; Depository Transfer Disclaimer</h2>
            <p>
              We are not responsible for delays, technical glitches, or errors in:
            </p>
            <ul>
              <li>Lien unblocking or fund refunds processed by Self-Certified Syndicate Banks (SCSBs) or UPI handle providers.</li>
              <li>Corporate action share credits executed by depositories (NSDL / CDSL).</li>
              <li>Registrar server latency or downtime on allotment finalization evenings.</li>
            </ul>

            <h2>5. Capital Market Investment Risks</h2>
            <p>
              Investments in equity securities, including Mainboard and SME initial public offerings, involve substantial risk of capital loss. Market prices can fluctuate significantly based on macroeconomic conditions, corporate earnings, and liquidity factors. Past IPO listing performances do not indicate future stock returns.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
