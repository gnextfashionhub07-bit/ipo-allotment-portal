import Link from 'next/link';

export const metadata = {
  title: 'Contact Us & Investor Support | Allotment Status of IPO',
  description: 'Get in touch with the Allotment Status of IPO editorial team, grievance officer, and official SEBI registrar support helplines.',
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsPage() {
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
            <strong>Contact Us</strong>
          </nav>

          <div className="about-hero-badge">
            <span className="about-badge-pill">
              <span className="live-pulse-dot"></span>
              INVESTOR ASSISTANCE • EDITORIAL GRIEVANCE DESK
            </span>
            <span className="about-date-pill">📅 Updated: September 2026</span>
          </div>

          <h1 className="about-hero-title">
            Contact Us &amp; <span className="gradient-text">Grievance Helpdesk</span>
          </h1>

          <p className="about-hero-subtitle">
            Need assistance with registrar navigation, reporting a broken gateway link, or reaching our designated Grievance Officer? We are here to support your primary market journey.
          </p>

          {/* 3 QUICK SUPPORT STATS */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">⏱️</div>
              <div>
                <div className="about-stat-val">24-48 Hours</div>
                <div className="about-stat-lbl">Guaranteed Response Window (SLA)</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🛡️</div>
              <div>
                <div className="about-stat-val">Grievance Desk</div>
                <div className="about-stat-lbl">Compliance Under IT Rules, 2021</div>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon">🏛️</div>
              <div>
                <div className="about-stat-val">Registrar Directory</div>
                <div className="about-stat-lbl">Verified Helplines &amp; Email Contacts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="about-content-container">
        {/* IMPORTANT ADVISORY BOX */}
        <div className="sebi-safety-box" style={{ marginBottom: '2.5rem' }}>
          <div className="sebi-safety-header">
            <span>ℹ️</span>
            <span>Important Advisory on Direct Allotment &amp; Bank Lien Issues</span>
          </div>
          <p className="sebi-safety-text">
            Allotment Status of IPO is an independent educational directory. For issues regarding <strong>failed UPI unblocking, ASBA bank liens, Demat share non-credit, or physical allotment refunds</strong>, complaints must be officially addressed directly to the designated issue registrar or your ASBA bank branch. You can find verified registrar contact details below.
          </p>
        </div>

        {/* SECTION 1: COMMUNICATION CHANNELS */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">📧</div>
            <h2 className="about-section-heading">Official Communication Channels</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">📨</div>
              <h3 className="value-title">General Support &amp; Editorial Desk</h3>
              <p className="value-desc">
                For questions regarding IPO schedules, broken registrar links, or general feedback:
              </p>
              <div style={{ marginTop: '0.65rem' }}>
                <code style={{ fontSize: '0.92rem', color: 'var(--primary-blue)', fontWeight: 700 }}>
                  support@allotmentstatusofipo.in
                </code>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Operating Monday to Saturday (9:30 AM – 6:00 PM IST)
                </span>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3 className="value-title">Formal Grievance Redressal</h3>
              <p className="value-desc">
                For formal complaints under the IT (Intermediary Guidelines) Rules, 2021:
              </p>
              <div style={{ marginTop: '0.65rem' }}>
                <code style={{ fontSize: '0.92rem', color: 'var(--primary-blue)', fontWeight: 700 }}>
                  grievance@allotmentstatusofipo.in
                </code>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Response acknowledgment within 24 hours
                </span>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">📍</div>
              <h3 className="value-title">Registered Office Address</h3>
              <p className="value-desc">
                Allotment Status of IPO<br />
                Kothrud, Pune, Maharashtra 411038, India
              </p>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                Visits by prior confirmed appointment only
              </span>
            </div>

            <div className="value-card">
              <div className="value-icon">💬</div>
              <h3 className="value-title">Community Broadcast</h3>
              <p className="value-desc">
                Get real-time allotment alerts directly on your mobile device through our WhatsApp channel:
              </p>
              <a 
                href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}
              >
                <span>Join Official WhatsApp Alerts Channel</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: GRIEVANCE OFFICER DETAILS */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🛡️</div>
            <h2 className="about-section-heading">Grievance Redressal Officer (IT Rules, 2021)</h2>
          </div>

          <div className="founder-profile-card">
            <div className="founder-avatar-box">MC</div>
            <div className="founder-info">
              <h3 className="founder-name">Mahesh Chavan</h3>
              <span className="founder-role">Designated Grievance Redressal Officer &amp; Tech Lead</span>
              <p className="founder-bio">
                In compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the Grievance Officer shall acknowledge complaints within 24 hours and resolve them within 15 days of receipt.
              </p>
              <div className="founder-tags">
                <span className="founder-tag">📧 Email: grievance@allotmentstatusofipo.in</span>
                <span className="founder-tag">📍 Pune, Maharashtra, India</span>
                <span className="founder-tag">⏱️ Acknowledgment SLA: 24 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: OFFICIAL REGISTRAR GRIEVANCE DIRECTORY */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">🏛️</div>
            <h2 className="about-section-heading">Official Registrar &amp; Stock Exchange Contact Directory</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If your application status indicates an issue or your UPI mandate funds remain blocked past the SEBI T+2/T+3 deadline, escalate directly to the registrar managing the issue:
          </p>

          <div className="helpline-table-container">
            <table className="helpline-data-table">
              <thead>
                <tr>
                  <th>Registrar / Exchange</th>
                  <th>Official Support Email</th>
                  <th>Toll-Free / Phone Helpline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Link Intime India Pvt Ltd</strong><br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mainboard Market Leader</span>
                  </td>
                  <td>
                    <code style={{ color: 'var(--primary-blue)' }}>ipo.helpdesk@linkintime.co.in</code>
                  </td>
                  <td>+91 22 4918 6200 / +91 22 4918 6270</td>
                </tr>

                <tr>
                  <td>
                    <strong>KFin Technologies Ltd</strong><br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cloud-Scale Registrar</span>
                  </td>
                  <td>
                    <code style={{ color: 'var(--primary-blue)' }}>einward.ris@kfintech.com</code>
                  </td>
                  <td>1800 309 4001 / +91 40 6716 2222</td>
                </tr>

                <tr>
                  <td>
                    <strong>Bigshare Services Pvt Ltd</strong><br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SME Sector Specialist</span>
                  </td>
                  <td>
                    <code style={{ color: 'var(--primary-blue)' }}>ipo@bigshareonline.com</code>
                  </td>
                  <td>+91 22 6263 8200 / +91 22 6263 8299</td>
                </tr>

                <tr>
                  <td>
                    <strong>BSE India Investor Services</strong><br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Exchange Appli Check</span>
                  </td>
                  <td>
                    <code style={{ color: 'var(--primary-blue)' }}>is@bseindia.com</code>
                  </td>
                  <td>+91 22 2272 8097 / 1800 22 6666</td>
                </tr>

                <tr>
                  <td>
                    <strong>NSE India Investor Cell</strong><br />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Exchange Bid Verification</span>
                  </td>
                  <td>
                    <code style={{ color: 'var(--primary-blue)' }}>ignse@nse.co.in</code>
                  </td>
                  <td>1800 266 0050</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: SEBI SCORES REGULATORY REDRESSAL */}
        <div className="about-section-card">
          <div className="about-section-title-wrap">
            <div className="about-section-icon">⚖️</div>
            <h2 className="about-section-heading">Official Regulatory Escalation (SEBI SCORES)</h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If an issue registrar or syndicate bank fails to resolve your allotment or refund grievance within 30 calendar days, retail investors are empowered by law to lodge a formal complaint on the official SEBI Complaints Redress System:
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">SEBI SCORES 2.0 Web Portal</h4>
              <p className="value-desc">
                Centralized online grievance system facilitating time-bound dispute resolution directly monitored by SEBI.
              </p>
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.82rem', display: 'inline-block', marginTop: '0.5rem' }}>
                Open SEBI SCORES Portal ↗
              </a>
            </div>

            <div className="value-card">
              <h4 className="value-title">SEBI National Toll-Free Helpline</h4>
              <p className="value-desc">
                Toll-free investor guidance line operating in 14 regional languages: <strong>1800 266 7575</strong> or <strong>1800 22 7575</strong> (9:00 AM – 6:00 PM).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: LEGAL & POLICY HUB */}
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

            <Link href="/disclaimer" className="legal-hub-card">
              <span className="legal-hub-icon">⚖️</span>
              <strong className="legal-hub-title">SEBI Disclaimer</strong>
              <span className="legal-hub-sub">Regulatory Notices</span>
            </Link>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="about-cta-banner">
          <h2 className="about-cta-title">Looking for Live IPO Allotment Status?</h2>
          <p className="about-cta-sub">
            Check real-time Mainboard and SME IPO results instantly using our verified official registrar gateways.
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
