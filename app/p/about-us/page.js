import Link from 'next/link';

export const metadata = {
  title: 'About Us & Editorial Standards | Allotment Status of IPO',
  description: 'Learn about Allotment Status of IPO, our founder Mahesh Chavan, editorial principles, and mission to deliver transparent, SEBI-compliant IPO intelligence.',
};

export default function AboutUsPage() {
  return (
    <div className="legal-page-wrapper">
      {/* HERO HEADER */}
      <section className="legal-hero-header">
        <div className="container legal-header-container">
          <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/p/about-us">Legal &amp; Policy</Link>
            <span>/</span>
            <strong>About Us</strong>
          </nav>

          <div className="legal-top-badges">
            <span className="legal-compliance-pill">🛡️ E-E-A-T Verified</span>
            <span className="legal-date-pill">📅 Updated: September 2026</span>
          </div>

          <h1 className="legal-page-title">About Allotment Status of IPO</h1>
          <p className="legal-page-subtitle">
            An independent educational research platform dedicated to transparent primary market intelligence, registrar navigation, and investor literacy.
          </p>
        </div>
      </section>

      {/* 2-COLUMN LAYOUT */}
      <div className="container legal-layout-container">
        <div className="legal-columns-grid">
          {/* SIDEBAR NAVIGATION */}
          <aside className="legal-sidebar-sticky">
            <h3 className="legal-sidebar-title">Legal &amp; Policy Hub</h3>
            <ul className="legal-nav-menu">
              <li className="legal-nav-item active"><Link href="/p/about-us">🛡️ About Us</Link></li>
              <li className="legal-nav-item"><Link href="/p/contact-us">📞 Contact Us</Link></li>
              <li className="legal-nav-item"><Link href="/p/privacy-policy">🔒 Privacy Policy</Link></li>
              <li className="legal-nav-item"><Link href="/p/terms">📜 Terms of Service</Link></li>
              <li className="legal-nav-item"><Link href="/p/disclaimer">⚖️ SEBI Disclaimer</Link></li>
            </ul>
          </aside>

          {/* MAIN CONTENT BODY */}
          <main className="legal-card-body">
            {/* MANDATORY SEBI DISCLAIMER BOX */}
            <div className="sebi-safety-box">
              <div className="sebi-safety-header">
                <span>⚠️</span>
                <span>Mandatory SEBI Regulatory Compliance Notice</span>
              </div>
              <p className="sebi-safety-text">
                <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>) is strictly an independent educational directory and financial research portal. We are <strong>NOT registered with the Securities and Exchange Board of India (SEBI)</strong> as an Investment Adviser (RIA) or Research Analyst (RA). We do not offer financial advisory services, portfolio management, or buy/sell recommendations.
              </p>
            </div>

            <h2>1. Our Mission &amp; Value Proposition</h2>
            <p>
              Navigating Initial Public Offerings (IPOs) in India can be an overwhelming experience for retail investors. On high-volume allotment evenings, investors frequently encounter server outages, broken redirect links, and conflicting basis-of-allotment announcements across multiple registrar domains.
            </p>
            <p>
              <strong>Allotment Status of IPO</strong> was founded to solve this fragmentation by providing:
            </p>
            <ul>
              <li><strong>Direct Gateway Redirection:</strong> Verified, one-click direct server paths to official SEBI-registered registrars (Link Intime, KFin Technologies, Bigshare Services, and CAMS).</li>
              <li><strong>SEBI T+3 Timeline Transparency:</strong> Step-by-step masterclasses breaking down the mechanics of ASBA bank liens, UPI auto-mandates, and depository share credits.</li>
              <li><strong>Informational Grey Market Premium (GMP) Tracking:</strong> Contextual market sentiment analysis highlighting risk factors and listing volatility.</li>
            </ul>

            <h2>2. Meet the Founder &amp; Editorial Leadership</h2>
            <div className="eeat-founder-box">
              <div className="eeat-avatar">👤</div>
              <div>
                <h3 className="eeat-name">Mahesh Chavan</h3>
                <span className="eeat-role">Founder, Tech Architect &amp; Lead Financial Content Researcher</span>
                <p className="eeat-bio">
                  Based in Pune, Maharashtra, Mahesh is a software engineer and seasoned financial market analyst. He specializes in tracking capital market regulatory filings (DRHP/RHP), registrar API workflows, and financial infrastructure. His objective is to empower Indian retail investors with accurate, zero-cost, and ad-compliant educational resources.
                </p>
              </div>
            </div>

            <h2>3. Data Sourcing &amp; Integrity Standards</h2>
            <p>
              Every data point published on this portal is governed by strict editorial verification rules:
            </p>
            <ol>
              <li><strong>Official Prospectuses:</strong> Company issue parameters, price bands, and lot sizes are extracted directly from Draft Red Herring Prospectuses (DRHP) filed with SEBI and stock exchanges.</li>
              <li><strong>Exchange Verification:</strong> Bidding numbers and allotment finalization dates are validated against official disclosures from the Bombay Stock Exchange (BSE) and National Stock Exchange of India (NSE).</li>
              <li><strong>No Commercial Bias:</strong> We do not accept paid compensation or corporate sponsorships to write favorable IPO reviews or manipulate sentiment.</li>
            </ol>

            <h2>4. Advertising &amp; Commercial Transparency</h2>
            <p>
              To maintain free access for all retail investors without subscription paywalls, our website is monetized through ethical, non-intrusive advertising partners including Google AdSense. Advertisements are clearly distinguished from editorial research. For queries regarding our policies, visit our <Link href="/p/contact-us" style={{ color: 'var(--primary-teal)', fontWeight: '700' }}>Contact Page</Link>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
