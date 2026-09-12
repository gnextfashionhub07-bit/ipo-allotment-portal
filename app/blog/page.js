import Link from 'next/link';
import { ARTICLES } from '../../content/articles';

export const metadata = {
  title: 'IPO Knowledge Hub & Master Guides | Allotment Status of IPO',
  description: 'Explore in-depth IPO analysis, step-by-step allotment checking tutorials, ASBA refund rules, and market research articles.',
};

export default function BlogIndex() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
          📖 IPO Knowledge Hub &amp; Master Guides
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Actionable, verified guides to master IPO allotment checks, ASBA rules, Grey Market Premium analysis, and stock research.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
        {ARTICLES.map((art) => (
          <article key={art.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-mainboard">{art.category}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{art.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                <Link href={`/blog/${art.slug}`} style={{ color: 'inherit' }}>
                  {art.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {art.excerpt}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>By {art.author}</span>
              <Link href={`/blog/${art.slug}`} className="btn-primary" style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}>
                Read Guide →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
