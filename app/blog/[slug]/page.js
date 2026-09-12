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

  // Find 3 related articles (excluding current)
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

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
    dateModified: '2026-09-12',
    mainEntityOfPage: `https://www.allotmentstatusofipo.in/blog/${article.slug}`
  };

  const shareUrl = `https://www.allotmentstatusofipo.in/blog/${article.slug}`;
  const whatsappShareText = encodeURIComponent(`Check out this IPO guide: ${article.title} - ${shareUrl}`);

  return (
    <div className="single-article-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ARTICLE HEADER HERO */}
      <section className="article-hero-header">
        <div className="container article-header-container">
          {/* BREADCRUMB */}
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/blog">Guides &amp; Articles</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{article.category}</span>
          </nav>

          {/* META TAGS */}
          <div className="article-top-meta">
            <span className="article-badge-category">{article.category}</span>
            <span className="article-meta-divider">•</span>
            <span className="article-readtime-pill">⏱️ {article.readTime}</span>
            <span className="article-meta-divider">•</span>
            <span className="article-date-pill">📅 Updated September 2026</span>
          </div>

          {/* HEADLINE */}
          <h1 className="single-article-headline">
            {article.title}
          </h1>

          {/* EXCERPT */}
          <p className="single-article-lead">
            {article.excerpt}
          </p>

          {/* AUTHOR & SHARE BAR */}
          <div className="article-author-share-bar">
            <div className="author-badge-group">
              <div className="author-avatar-img">👤</div>
              <div className="author-details">
                <strong className="author-full-name">{article.author}</strong>
                <span className="author-editorial-title">Senior Financial Content Researcher • IPO Desk</span>
              </div>
            </div>

            <div className="article-share-actions">
              <a
                href={`https://api.whatsapp.com/send?text=${whatsappShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-share-whatsapp"
                title="Share on WhatsApp"
              >
                <span>💬</span> Share Guide
              </a>
              <Link href="/#registrar-tool" className="btn-article-check-ipo">
                <span>⚡</span> Check Live IPOs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2-COLUMN ARTICLE LAYOUT */}
      <div className="container article-layout-container">
        <div className="article-columns-grid">
          {/* LEFT: MAIN ARTICLE BODY */}
          <main className="article-primary-column">
            {/* KEY TAKEAWAYS BOX */}
            <div className="key-takeaways-card">
              <div className="takeaways-header">
                <span className="takeaways-icon">💡</span>
                <strong className="takeaways-title">Key Executive Takeaways</strong>
              </div>
              <ul className="takeaways-list">
                <li>Check allotment status using your 10-digit PAN number for highest accuracy on official registrar portals.</li>
                <li>Under SEBI T+3 regulations, fund unblocking/refunds are finalized within 24-48 hours of allotment closure.</li>
                <li>Allotted shares are credited directly to your NSDL/CDSL Demat account prior to listing day trading.</li>
              </ul>
            </div>

            {/* FORMATTED ARTICLE CONTENT */}
            <div 
              className="article-rich-body card"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* INLINE REGISTRAR TOOL CALLOUT */}
            <div className="inline-registrar-cta">
              <div className="cta-icon">🚀</div>
              <div className="cta-content">
                <strong>Need to check an active IPO allotment right now?</strong>
                <p>Launch direct SEBI-verified portals for Link Intime, KFintech, and Bigshare in one click.</p>
              </div>
              <Link href="/#registrar-tool" className="btn-cta-launch">
                Launch Registrar Tool →
              </Link>
            </div>

            {/* AUTHOR BIO & CREDIBILITY BOX */}
            <div className="author-bio-card">
              <div className="author-bio-avatar">👤</div>
              <div className="author-bio-text">
                <h4 className="author-bio-title">About the Author: {article.author}</h4>
                <p className="author-bio-desc">
                  Mahesh Chavan is a financial researcher, technology consultant, and founder of Allotment Status of IPO based in Pune, India. He analyzes SEBI public issue filings, registrar allotment mechanisms, and primary market mechanics to provide transparent, unbiased investor intelligence.
                </p>
                <div className="author-credentials-tags">
                  <span>🎓 Pune, MH</span>
                  <span>🛡️ Verified Researcher</span>
                  <span>📊 IPO Analytics</span>
                </div>
              </div>
            </div>

            {/* EDITORIAL & FINANCIAL DISCLAIMER */}
            <div className="article-disclaimer-box">
              <span className="disclaimer-alert-icon">⚠️</span>
              <p>
                <strong>Editorial Disclaimer:</strong> This article is authored strictly for educational, informational, and research purposes. We are NOT registered with SEBI as an investment adviser or research analyst. No content on this page should be construed as investment, tax, or legal advice. Allotment calculations and listing estimates are based on historical exchange patterns.
              </p>
            </div>
          </main>

          {/* RIGHT: HELPFUL SIDEBAR */}
          <aside className="article-sidebar-column">
            {/* LIVE IPO WIDGET */}
            <div className="sidebar-widget-card live-ipos-widget">
              <div className="sidebar-widget-header">
                <span className="widget-header-icon">🔥</span>
                <h3 className="widget-header-title">Live IPO Allotments</h3>
              </div>
              <div className="mini-ipo-list">
                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <strong>Bajaj Housing Finance</strong>
                    <span className="mini-gmp-pill">+114%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span>Reg: KFintech</span>
                    <a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer" className="mini-link">Check ↗</a>
                  </div>
                </div>

                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <strong>KRN Heat Exchanger</strong>
                    <span className="mini-gmp-pill">+63%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span>Reg: Bigshare</span>
                    <a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer" className="mini-link">Check ↗</a>
                  </div>
                </div>

                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <strong>Manba Finance IPO</strong>
                    <span className="mini-gmp-pill">+50%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span>Reg: Link Intime</span>
                    <a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer" className="mini-link">Check ↗</a>
                  </div>
                </div>
              </div>
              <Link href="/#live-table" className="btn-view-all-ipos">
                View All 12 Live IPOs →
              </Link>
            </div>

            {/* PROMO DEMAT */}
            <div className="demat-promo-card">
              <span className="demat-card-badge">⚡ SPECIAL OFFER</span>
              <h3 className="demat-title">Open Free Demat Account</h3>
              <p className="demat-desc">Apply for IPOs with ₹0 brokerage on equity delivery with Upstox.</p>
              <a 
                href="https://upstox.com/open-account/?f=7VB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-upstox"
              >
                <span>🚀</span> Open Demat (₹0 Account)
              </a>
            </div>

            {/* WHATSAPP ALERTS */}
            <div className="sidebar-widget-card community-card">
              <div className="community-header">
                <span className="community-icon">💬</span>
                <div>
                  <h4 className="community-title">Instant IPO Alerts</h4>
                  <span className="community-sub">WhatsApp Channel</span>
                </div>
              </div>
              <a 
                href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-community-whatsapp"
              >
                <span>Join Community</span>
                <span>→</span>
              </a>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <section className="related-articles-section">
          <div className="related-header">
            <h3 className="related-title">📖 Recommended IPO Masterclasses &amp; Guides</h3>
            <Link href="/blog" className="related-view-all">
              View All Guides →
            </Link>
          </div>

          <div className="related-grid">
            {relatedArticles.map((rel) => (
              <div key={rel.slug} className="related-card">
                <span className="related-cat">{rel.category}</span>
                <h4 className="related-card-title">
                  <Link href={`/blog/${rel.slug}`}>
                    {rel.title}
                  </Link>
                </h4>
                <p className="related-excerpt">{rel.excerpt}</p>
                <div className="related-footer">
                  <span>⏱️ {rel.readTime}</span>
                  <Link href={`/blog/${rel.slug}`} className="related-read-link">
                    Read Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
