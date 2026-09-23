import Link from 'next/link';
import { ARTICLES } from '../content/articles';

export default function ArticlePageLayout({ article, children }) {
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author || 'Mahesh Chavan',
      url: 'https://www.allotmentstatusofipo.in/about-us'
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
    dateModified: '2026-09-23',
    mainEntityOfPage: `https://www.allotmentstatusofipo.in/blog/${article.slug}`
  };

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
            <Link href="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">›</span>
            <Link href="/blog" className="crumb-link">Guides &amp; Articles</Link>
            <span className="crumb-sep">›</span>
            <span className="crumb-current">{article.category}</span>
          </nav>

          {/* META TAGS */}
          <div className="article-top-meta">
            <span className="article-badge-category">{article.category}</span>
            <span className="article-readtime-pill">⏱️ {article.readTime}</span>
            <span className="article-date-pill">📅 Updated September 2026</span>
            <span className="article-verified-pill">🛡️ Fact-Checked</span>
          </div>

          {/* HEADLINE */}
          <h1 className="single-article-headline">
            {article.title}
          </h1>

          {/* EXCERPT */}
          <p className="single-article-lead">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* 2-COLUMN ARTICLE LAYOUT */}
      <div className="container article-layout-container">
        <div className="article-columns-grid">
          {/* LEFT: MAIN ARTICLE BODY */}
          <main className="article-primary-column">
            <div className="article-rich-body">
              {children}
            </div>

            {/* INLINE REGISTRAR TOOL CALLOUT */}
            <div className="inline-registrar-cta">
              <div className="cta-left">
                <div className="cta-icon-box">🚀</div>
                <div className="cta-content">
                  <h4 className="cta-title">Need to check an active IPO allotment right now?</h4>
                  <p className="cta-desc">Launch direct SEBI-verified portals for Link Intime, KFintech, and Bigshare in one click without third-party redirects.</p>
                </div>
              </div>
              <Link href="/#registrar-tool" className="btn-cta-launch">
                Launch Registrar Tool →
              </Link>
            </div>

            {/* EDITORIAL & FINANCIAL DISCLAIMER */}
            <div className="article-disclaimer-box">
              <div className="disclaimer-icon">⚠️</div>
              <div className="disclaimer-text">
                <strong>Statutory Regulatory Notice:</strong> This article is authored strictly for educational, informational, and research purposes. We are NOT registered with SEBI as an investment adviser or research analyst. No content on this page should be construed as investment, tax, or legal advice. Allotment calculations and listing estimates are based on historical exchange patterns. Always consult your certified financial planner before deploying capital.
              </div>
            </div>
          </main>

          {/* RIGHT: HELPFUL SIDEBAR */}
          <aside className="article-sidebar-column">
            {/* LIVE IPO WIDGET */}
            <div className="article-sidebar-widget live-ipos-widget">
              <div className="sidebar-widget-header">
                <span className="widget-icon">🔥</span>
                <div>
                  <h3 className="widget-title">Live IPO Allotments</h3>
                  <span className="widget-subtitle">Real-time status &amp; GMP</span>
                </div>
              </div>
              <div className="mini-ipo-list">
                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <span className="mini-ipo-name">Bajaj Housing Finance</span>
                    <span className="mini-gmp-pill">+114%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span className="mini-reg-label">Reg: KFintech</span>
                    <a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer" className="mini-link">Official Portal ↗</a>
                  </div>
                </div>

                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <span className="mini-ipo-name">KRN Heat Exchanger</span>
                    <span className="mini-gmp-pill">+63%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span className="mini-reg-label">Reg: Bigshare</span>
                    <a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer" className="mini-link">Official Portal ↗</a>
                  </div>
                </div>

                <div className="mini-ipo-item">
                  <div className="mini-ipo-top">
                    <span className="mini-ipo-name">Manba Finance IPO</span>
                    <span className="mini-gmp-pill">+50%</span>
                  </div>
                  <div className="mini-ipo-meta">
                    <span className="mini-reg-label">Reg: Link Intime</span>
                    <a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer" className="mini-link">Official Portal ↗</a>
                  </div>
                </div>
              </div>
              <Link href="/#live-table" className="btn-sidebar-view-all">
                View All Live IPOs &amp; GMP →
              </Link>
            </div>

            {/* PROMO DEMAT */}
            <div className="article-sidebar-widget demat-promo-card">
              <div className="demat-card-badge">⚡ SPECIAL INVESTOR OFFER</div>
              <h3 className="demat-title">Open Free Demat Account</h3>
              <p className="demat-desc">Apply for IPOs with ₹0 brokerage on equity delivery investments with Upstox.</p>
              <ul className="demat-points">
                <li>✓ ₹0 Account Opening Fee</li>
                <li>✓ Seamless UPI ASBA IPO Applications</li>
                <li>✓ Instant Demat Allotment Sync</li>
              </ul>
              <a 
                href="https://upstox.com/open-account/?f=7VB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-demat-cta"
              >
                <span>Open Demat (₹0 Brokerage)</span>
                <span>→</span>
              </a>
            </div>

            {/* WHATSAPP ALERTS */}
            <div className="article-sidebar-widget community-sidebar-card">
              <div className="community-header">
                <span className="community-icon-bubble">💬</span>
                <div>
                  <h4 className="community-title">Instant IPO Allotment Alerts</h4>
                  <span className="community-sub">WhatsApp VIP Investor Channel</span>
                </div>
              </div>
              <p className="community-text">Get notified the exact minute registrars upload the basis of allotment datasets.</p>
              <a 
                href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-community-action"
              >
                <span>Join Free Channel</span>
                <span>→</span>
              </a>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <section className="related-articles-section">
          <div className="related-header">
            <div>
              <h3 className="related-title">📖 Recommended IPO Masterclasses &amp; Guides</h3>
              <p className="related-subtitle">Continue reading research from our primary capital market analysts</p>
            </div>
            <Link href="/blog" className="related-view-all">
              View All Guides →
            </Link>
          </div>

          <div className="related-grid">
            {relatedArticles.map((rel) => (
              <article key={rel.slug} className="related-card">
                <div className="related-card-top">
                  <span className="related-cat">{rel.category}</span>
                  <span className="related-readtime">⏱️ {rel.readTime}</span>
                </div>
                <h4 className="related-card-title">
                  <Link href={`/blog/${rel.slug}`}>
                    {rel.title}
                  </Link>
                </h4>
                <p className="related-excerpt">{rel.excerpt}</p>
                <div className="related-footer">
                  <span className="related-author">IPO Allotment Desk</span>
                  <Link href={`/blog/${rel.slug}`} className="related-read-link">
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
