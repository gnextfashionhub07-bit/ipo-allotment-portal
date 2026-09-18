import Link from 'next/link';

export const metadata = {
  title: 'Contact Us & Investor Support | Allotment Status of IPO',
  description: 'Get in touch with the Allotment Status of IPO editorial team, grievance officer, and official registrar support helplines.',
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsPage() {
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
            <strong>Contact Us</strong>
          </nav>

          <div className="legal-top-badges">
            <span className="legal-compliance-pill">📞 Investor Assistance</span>
            <span className="legal-date-pill">📅 Last reviewed: September 18, 2026</span>
          </div>

          <h1 className="legal-page-title">Contact Us &amp; Investor Grievance Desk</h1>
          <p className="legal-page-subtitle">
            We are committed to delivering prompt assistance regarding website navigation, broken links, editorial feedback, and registrar directory support.
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
              <li className="legal-nav-item active"><Link href="/contact-us" aria-current="page">📞 Contact Us</Link></li>
              <li className="legal-nav-item"><Link href="/privacy-policy">🔒 Privacy Policy</Link></li>
              <li className="legal-nav-item"><Link href="/terms">📜 Terms of Service</Link></li>
              <li className="legal-nav-item"><Link href="/disclaimer">⚖️ SEBI Disclaimer</Link></li>
            </ul>
          </aside>

          {/* MAIN CONTENT BODY */}
          <main className="legal-card-body">
            {/* SEBI REGULATORY NOTICE */}
            <div className="sebi-safety-box">
              <div className="sebi-safety-header">
                <span>⚠️</span>
                <span>Important Advisory on Direct Allotment Complaints</span>
              </div>
              <p className="sebi-safety-text">
                Allotment Status of IPO is an independent educational aggregator. For issues regarding <strong>failed bank unblocking, ASBA lien releases, Demat share non-credit, or physical allotment refunds</strong>, complaints must be officially addressed directly to the designated issue registrar or your ASBA bank branch.
              </p>
            </div>

            <h2>1. Editorial &amp; Technical Support</h2>
            <p>
              For general inquiries, editorial corrections, registrar link updates, or advertising compliance inquiries, please reach out via our official communication channels:
            </p>

            <div className="contact-boxes-grid">
              <div className="contact-box-item">
                <div className="contact-box-icon">📧</div>
                <strong className="contact-box-title">General Support Email</strong>
                <p className="contact-box-desc">
                  <code>contact@allotmentstatusofipo.in</code><br />
                  <span className="contact-box-note">Guaranteed response within 24–48 business hours.</span>
                </p>
              </div>

              <div className="contact-box-item">
                <div className="contact-box-icon">📍</div>
                <strong className="contact-box-title">Registered Editorial Office</strong>
                <p className="contact-box-desc">
                  Allotment Status of IPO<br />
                  Pune, Maharashtra 411038, India
                </p>
              </div>
            </div>

            <h2>2. Grievance Redressal Officer</h2>
            <p>
              In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the details of our Grievance Officer are as follows:
            </p>
            <ul>
              <li><strong>Name of Officer:</strong> Mahesh Chavan</li>
              <li><strong>Designation:</strong> Grievance Redressal Officer &amp; Editor</li>
              <li><strong>Email:</strong> <code>grievance@allotmentstatusofipo.in</code></li>
              <li><strong>Address:</strong> Allotment Status of IPO, Pune, Maharashtra, India</li>
            </ul>

            <h2>3. Official Registrar Grievance Directory</h2>
            <p>
              If your application status indicates an allotment discrepancy or your funds remain blocked past the SEBI T+3 schedule, contact the authorized registrar:
            </p>

            <div className="helpline-table-container">
              <table className="helpline-data-table">
                <thead>
                  <tr>
                    <th>Registrar Name</th>
                    <th>Official Email</th>
                    <th>Toll-Free / Phone Helpline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Link Intime India Pvt Ltd</strong></td>
                    <td><code>ipo.helpdesk@linkintime.co.in</code></td>
                    <td>+91 22 4918 6200 / +91 22 4918 6270</td>
                  </tr>
                  <tr>
                    <td><strong>KFin Technologies Ltd</strong></td>
                    <td><code>einward.ris@kfintech.com</code></td>
                    <td>1800 309 4001 / +91 40 6716 2222</td>
                  </tr>
                  <tr>
                    <td><strong>Bigshare Services Pvt Ltd</strong></td>
                    <td><code>ipo@bigshareonline.com</code></td>
                    <td>+91 22 6263 8200 / +91 22 6263 8299</td>
                  </tr>
                  <tr>
                    <td><strong>BSE India Investor Cell</strong></td>
                    <td><code>is@bseindia.com</code></td>
                    <td>+91 22 2272 8097 / 1800 22 6666</td>
                  </tr>
                  <tr>
                    <td><strong>NSE India Investor Desk</strong></td>
                    <td><code>ignse@nse.co.in</code></td>
                    <td>1800 266 0050</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. SEBI SCORES Escalation Portal</h2>
            <p>
              If a registrar or bank fails to resolve your allotment or refund grievance within 30 days, retail investors may lodge a formal complaint on the SEBI Complaints Redress System (SCORES) at <code>https://scores.sebi.gov.in</code>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
