export const metadata = {
  title: 'Terms of Service | Allotment Status of IPO',
  description: 'Terms and conditions for using Allotment Status of IPO portal.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
          Terms of Service
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '0.98rem', color: '#334155' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            By accessing <code>https://www.allotmentstatusofipo.in</code>, you agree to comply with these terms of service and applicable laws and regulations.
          </p>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            Use License &amp; Educational Purpose
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The materials on this portal are provided solely for personal, non-commercial educational and informational use.
          </p>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            External Links &amp; Third-Party Services
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Our portal contains hyperlinks to external third-party registrars (Link Intime, KFintech, Bigshare, BSE, NSE). We do not control or endorse the content or availability of these external websites.
          </p>
        </div>
      </div>
    </div>
  );
}
