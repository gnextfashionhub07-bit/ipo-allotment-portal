export const metadata = {
  title: 'About Us & Editorial Standards | Allotment Status of IPO',
  description: 'Learn about Allotment Status of IPO, our founder Mahesh Chavan, editorial principles, and mission to deliver transparent IPO intelligence.',
};

export default function AboutUsPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
          About Allotment Status of IPO
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '1rem', color: '#334155' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
            Our Mission &amp; Purpose
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            <strong>Allotment Status of IPO</strong> (<code>allotmentstatusofipo.in</code>) is an independent financial education and research platform designed to simplify Initial Public Offering (IPO) verification, subscription tracking, and market analytics for Indian retail investors.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We provide verified, direct gateways to authorized issue registrars (Link Intime, KFin Technologies, Bigshare Services, and CAMS) alongside official BSE and NSE validation tools under SEBI’s T+3 listing framework.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
            Meet the Founder &amp; Lead Researcher
          </h2>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-navy)' }}>Mahesh Chavan</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary-teal)', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>
              Founder &amp; Financial Market Analyst
            </span>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
              Mahesh has extensive experience tracking Indian capital markets, DRHP filings, registrar data structures, and algorithmic market data pipelines. He created this portal to eliminate confusing delays and broken registrar links during high-traffic IPO allotment days.
            </p>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
            Editorial Policy &amp; Integrity
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            All guides and data presented on this portal are thoroughly cross-referenced against official SEBI prospectuses, stock exchange disclosures, and registrar notices. We maintain strict independence and do not accept compensation for favorable IPO reviews.
          </p>
        </div>
      </div>
    </div>
  );
}
