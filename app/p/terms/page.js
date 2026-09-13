import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Allotment Status of IPO',
  description: 'Terms and conditions governing the use of Allotment Status of IPO portal, registrar directories, and educational materials.',
};

export default function TermsPage() {
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
            <strong>Terms of Service</strong>
          </nav>

          <div className="legal-top-badges">
            <span className="legal-compliance-pill">📜 Binding Agreement</span>
            <span className="legal-date-pill">📅 Effective: September 2026</span>
          </div>

          <h1 className="legal-page-title">Terms of Service &amp; Portal Rules</h1>
          <p className="legal-page-subtitle">
            Please read these terms and conditions carefully before accessing our directory, calculation tools, or educational guides.
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
              <li className="legal-nav-item"><Link href="/p/about-us">🛡️ About Us</Link></li>
              <li className="legal-nav-item"><Link href="/p/contact-us">📞 Contact Us</Link></li>
              <li className="legal-nav-item"><Link href="/p/privacy-policy">🔒 Privacy Policy</Link></li>
              <li className="legal-nav-item active"><Link href="/p/terms">📜 Terms of Service</Link></li>
              <li className="legal-nav-item"><Link href="/p/disclaimer">⚖️ SEBI Disclaimer</Link></li>
            </ul>
          </aside>

          {/* MAIN CONTENT BODY */}
          <main className="legal-card-body">
            <p>
              By accessing and using <strong>Allotment Status of IPO</strong> (<code>https://www.allotmentstatusofipo.in</code>), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, please discontinue use of this website immediately.
            </p>

            <h2>1. Informational &amp; Educational Purpose Only</h2>
            <div className="sebi-safety-box">
              <div className="sebi-safety-header">
                <span>⚠️</span>
                <span>Non-Advisory Agreement</span>
              </div>
              <p className="sebi-safety-text">
                All materials, tools, GMP calculators, and articles on this website are provided strictly for <strong>general educational and reference purposes</strong>. Nothing herein constitutes investment advice, tax counseling, financial planning, or an offer to buy/sell securities.
              </p>
            </div>

            <h2>2. License to Use Website</h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, and revocable license to view, reference, and utilize the content on this website for personal, non-commercial use, subject to the following restrictions:
            </p>
            <ul>
              <li>You must not scrape, systematically download, or republish our original articles or data sets without written attribution.</li>
              <li>You must not use automated bots or scripts in a manner that impairs portal performance or server availability.</li>
              <li>You must not frame or embed this website within any unauthorized third-party mobile applications without consent.</li>
            </ul>

            <h2>3. Third-Party Links &amp; Registrar Gateways</h2>
            <p>
              Our portal contains outbound links to third-party registrar sites (e.g., Link Intime, KFintech, Bigshare, BSE, NSE). These external entities are independent service providers governed by their respective terms. We assume no responsibility or liability for server outages, data inaccuracies, or security practices of external domains.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable Indian law, Allotment Status of IPO, its founder, contributors, and technical partners shall not be held liable for:
            </p>
            <ul>
              <li>Any financial gains or investment losses resulting from stock market decisions or IPO applications.</li>
              <li>Delay or failure in bank refund processing, ASBA lien unfreezing, or Demat share allocation by intermediaries.</li>
              <li>Discrepancies between informal Grey Market Premium (GMP) estimates and actual stock exchange listing prices.</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All original text, master guides, infographics, logos, and custom UI components are the intellectual property of Allotment Status of IPO and are protected under copyright and trademark laws.
            </p>

            <h2>6. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising out of the use of this portal shall be subject to the exclusive jurisdiction of the competent courts in <strong>Pune, Maharashtra, India</strong>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
