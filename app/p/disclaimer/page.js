export const metadata = {
  title: 'Financial Disclaimer & SEBI Disclosure | Allotment Status of IPO',
  description: 'Legal disclaimer and SEBI disclosure regarding IPO analysis, Grey Market Premium (GMP), and stock market risks.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
          Financial Disclaimer &amp; SEBI Disclosure
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '0.98rem', color: '#334155' }}>
          <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <strong style={{ color: '#92400e', display: 'block', marginBottom: '0.25rem' }}>
              ⚠️ Mandatory SEBI Regulatory Notice
            </strong>
            <p style={{ color: '#78350f', fontSize: '0.9rem', margin: 0 }}>
              Allotment Status of IPO (<code>allotmentstatusofipo.in</code>) and its contributors are NOT registered with the Securities and Exchange Board of India (SEBI) as Investment Advisors (RIA) or Research Analysts (RA).
            </p>
          </div>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            Informational &amp; Research Nature Only
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            All content, including IPO subscription data, issue price bands, allotment dates, GMP estimates, and market guides, is published purely for informational, research, and educational purposes. Nothing on this website constitutes financial advice, investment solicitation, or a recommendation to buy or sell securities.
          </p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            Grey Market Premium (GMP) Notice
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Grey Market Premium (GMP) numbers are based on unofficial, unregulated market chatter. GMP is subject to high volatility and does not guarantee the actual listing day price. Investors must conduct independent due diligence or consult a SEBI-registered financial advisor before applying for any IPO.
          </p>
        </div>
      </div>
    </div>
  );
}
