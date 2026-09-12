import { ARTICLES } from '../../../content/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Allotment Status of IPO`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    }
  };
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://www.allotmentstatusofipo.in/p/about-us'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Allotment Status of IPO',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.allotmentstatusofipo.in/favicon.ico'
      }
    },
    datePublished: '2026-08-15',
    mainEntityOfPage: `https://www.allotmentstatusofipo.in/blog/${article.slug}`
  };

  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Link href="/blog" style={{ color: 'var(--primary-teal)', fontWeight: '700', fontSize: '0.88rem' }}>
            ← Back to Knowledge Hub
          </Link>
        </div>

        <span className="badge-tag badge-mainboard" style={{ marginBottom: '0.75rem' }}>{article.category}</span>

        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', lineHeight: '1.3', marginBottom: '1rem' }}>
          {article.title}
        </h1>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
          <span><strong>Author:</strong> {article.author}</span>
          <span><strong>Published:</strong> {article.date}</span>
          <span><strong>Read Time:</strong> {article.readTime}</span>
        </div>

        <div 
          className="card" 
          style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '1.02rem', color: '#334155' }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong style={{ fontSize: '1rem', color: 'var(--primary-navy)' }}>Looking for live IPO Allotment?</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Check today's real-time allotment results and GMP tracker.</p>
          </div>
          <Link href="/" className="btn-primary">
            Go to Live Table →
          </Link>
        </div>
      </div>
    </div>
  );
}
