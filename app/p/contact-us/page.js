export const metadata = {
  title: 'Contact Us & Investor Support | Allotment Status of IPO',
  description: 'Reach out to the Allotment Status of IPO team for queries, registrar corrections, or feedback.',
};

export default function ContactUsPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
          Contact Us
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '1rem', color: '#334155' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            We value your feedback, suggestions, and corrections. If you have questions regarding registrar portal links, broken redirects, or editorial inquiries, please reach out to us:
          </p>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              📧 Official Email Support
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#475569' }}>
              <strong>General Inquiries:</strong> <code>contact@allotmentstatusofipo.in</code>
            </p>
            <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '0.4rem' }}>
              <strong>Response Time:</strong> Within 24–48 business hours.
            </p>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
            Official Registrar Grievance Helplines
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            For direct allotment complaints, share credit status, or ASBA refund delays, please contact the respective registrar:
          </p>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', lineHeight: '1.8' }}>
            <li><strong>Link Intime India:</strong> <code>ipo.helpdesk@linkintime.co.in</code> | +91 22 4918 6200</li>
            <li><strong>KFin Technologies:</strong> <code>einward.ris@kfintech.com</code> | 1800 309 4001</li>
            <li><strong>Bigshare Services:</strong> <code>ipo@bigshareonline.com</code> | +91 22 6263 8200</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
