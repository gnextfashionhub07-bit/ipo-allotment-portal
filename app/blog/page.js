'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ARTICLES } from '../../content/articles';

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = ARTICLES[0]; // Master Guide is featured

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'GUIDES') return art.category.toLowerCase().includes('guide');
    if (activeCategory === 'REVIEWS') return art.category.toLowerCase().includes('review');
    if (activeCategory === 'EDUCATIONAL') return art.category.toLowerCase().includes('education') || art.category.toLowerCase().includes('asba');
    if (activeCategory === 'INSIGHTS') return art.category.toLowerCase().includes('insight') || art.category.toLowerCase().includes('market');
    return true;
  });

  return (
    <div className="blog-page-wrapper">
      {/* BLOG HERO HEADER */}
      <section className="blog-hero-section">
        <div className="container blog-hero-container">
          <div className="blog-hero-badge">
            <span className="live-pulse-dot"></span>
            <span>RESEARCH &amp; INVESTOR ACADEMY</span>
          </div>

          <h1 className="blog-hero-title">
            IPO Masterclasses, Reviews &amp; <span className="gradient-text">Allotment Guides</span>
          </h1>

          <p className="blog-hero-subtitle">
            Actionable, verified research on checking IPO allotment status, navigating SEBI T+3 settlement timelines, calculating Grey Market Premium (GMP), and fundamental company analysis.
          </p>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="blog-controls-bar">
            {/* TABS */}
            <div className="blog-tabs-group">
              <button 
                className={`blog-tab-btn ${activeCategory === 'ALL' ? 'active' : ''}`}
                onClick={() => setActiveCategory('ALL')}
              >
                All Articles <span className="tab-badge">{ARTICLES.length}</span>
              </button>
              <button 
                className={`blog-tab-btn ${activeCategory === 'GUIDES' ? 'active' : ''}`}
                onClick={() => setActiveCategory('GUIDES')}
              >
                🔍 Master Guides
              </button>
              <button 
                className={`blog-tab-btn ${activeCategory === 'REVIEWS' ? 'active' : ''}`}
                onClick={() => setActiveCategory('REVIEWS')}
              >
                📊 IPO Reviews
              </button>
              <button 
                className={`blog-tab-btn ${activeCategory === 'EDUCATIONAL' ? 'active' : ''}`}
                onClick={() => setActiveCategory('EDUCATIONAL')}
              >
                🏦 ASBA &amp; Demat
              </button>
              <button 
                className={`blog-tab-btn ${activeCategory === 'INSIGHTS' ? 'active' : ''}`}
                onClick={() => setActiveCategory('INSIGHTS')}
              >
                📈 Market Insights
              </button>
            </div>

            {/* SEARCH */}
            <div className="blog-search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search articles, guides, reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLES CONTENT */}
      <div className="container blog-content-container">
        {/* FEATURED SPOTLIGHT ARTICLE (Shown when on ALL and no search) */}
        {activeCategory === 'ALL' && !searchQuery && featuredArticle && (
          <div className="featured-article-card">
            <div className="featured-card-content">
              <div className="featured-top-tags">
                <span className="featured-pill">⭐ FEATURED MASTERCLASS</span>
                <span className="featured-readtime">⏱️ {featuredArticle.readTime}</span>
              </div>

              <h2 className="featured-title">
                <Link href={`/blog/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="featured-excerpt">
                {featuredArticle.excerpt}
              </p>

              <div className="featured-meta-row">
                <div className="featured-author-box">
                  <div className="author-avatar">👤</div>
                  <div>
                    <strong className="author-name">{featuredArticle.author}</strong>
                    <span className="author-role">Founder &amp; Financial Researcher</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredArticle.slug}`} className="btn-read-featured">
                  <span>Read Master Guide</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div className="articles-magazine-grid">
          {filteredArticles.length === 0 ? (
            <div className="no-articles-box">
              <div className="no-articles-icon">🔍</div>
              <h3>No articles found</h3>
              <p>Try searching for a different keyword or switch to another category</p>
            </div>
          ) : (
            filteredArticles.map((art) => (
              <article key={art.slug} className="article-magazine-card">
                <div className="article-card-body">
                  <div className="article-card-header">
                    <span className={`article-category-tag ${
                      art.category.toLowerCase().includes('guide') ? 'cat-guide' :
                      art.category.toLowerCase().includes('review') ? 'cat-review' :
                      art.category.toLowerCase().includes('insight') ? 'cat-insight' : 'cat-edu'
                    }`}>
                      {art.category}
                    </span>
                    <span className="article-readtime">⏱️ {art.readTime}</span>
                  </div>

                  <h3 className="article-card-title">
                    <Link href={`/blog/${art.slug}`} className="article-title-link">
                      {art.title}
                    </Link>
                  </h3>

                  <p className="article-card-excerpt">
                    {art.excerpt}
                  </p>
                </div>

                <div className="article-card-footer">
                  <div className="article-author-info">
                    <span className="author-mini-icon">✍️</span>
                    <span className="author-mini-name">{art.author}</span>
                  </div>

                  <Link href={`/blog/${art.slug}`} className="btn-read-article">
                    <span>Read Guide</span>
                    <span className="read-arrow">→</span>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* NEWSLETTER & ALERTS CALLOUT */}
        <div className="blog-community-callout">
          <div className="callout-text">
            <span className="callout-tag">FREE INVESTOR UPDATES</span>
            <h3 className="callout-title">Get Real-Time IPO Allotment &amp; Subscription Alerts</h3>
            <p className="callout-desc">Join our free community channels to receive instant notifications when basis of allotment is released by Link Intime and KFintech.</p>
          </div>

          <div className="callout-buttons">
            <a 
              href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-callout-wa"
            >
              <span>💬</span> Join WhatsApp Alerts
            </a>
            <Link href="/#live-table" className="btn-callout-tracker">
              <span>🔥</span> Live IPO Tracker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
