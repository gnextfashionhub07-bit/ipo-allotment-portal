'use client';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* PRE-FOOTER COMMUNITY & ACTION BANNER */}
      <div className="pre-footer-banner">
        <div className="container">
          <div className="pre-footer-inner">
            <div className="pre-footer-text">
              <span className="pre-footer-badge">
                <span className="live-pulse-dot"></span>
                FREE INVESTOR COMMUNITY
              </span>
              <h3 className="pre-footer-title">Never Miss an IPO Allotment &amp; GMP Breakout</h3>
              <p className="pre-footer-sub">Join thousands of Indian retail investors getting verified real-time allotment alerts.</p>
            </div>

            <div className="pre-footer-actions">
              <a 
                href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-footer-wa"
              >
                <span>💬</span> Join WhatsApp Alerts
              </a>
              <a 
                href="https://upstox.com/open-account/?f=7VB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-footer-demat"
              >
                <span>🚀</span> Open Free Demat (₹0 Brokerage)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="container main-footer-body">
        <div className="footer-columns-grid">
          {/* COL 1: BRAND & FOUNDER TRUST */}
          <div className="footer-brand-column">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">📊</div>
              <span className="footer-logo-text">Allotment Status of IPO</span>
            </Link>
            
            <p className="footer-mission-text">
              India's dedicated real-time IPO Allotment Tracker, live Grey Market Premium (GMP) intelligence, and official SEBI registrar deep-link gateway. Built for lightning-fast PAN searches and investor transparency.
            </p>

            <div className="founder-card-box">
              <div className="founder-avatar-wrap">
                <span className="founder-avatar-icon">👤</span>
              </div>
              <div className="founder-info">
                <strong className="founder-name">Mahesh Chavan</strong>
                <span className="founder-role">Founder &amp; Financial Researcher</span>
                <span className="founder-location">📍 Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="footer-trust-badges">
              <span className="trust-badge-item">🔒 256-Bit SSL Encrypted</span>
              <span className="trust-badge-item">🛡️ Zero Data Logging</span>
              <span className="trust-badge-item">⚡ SEBI T+3 Compliant</span>
            </div>
          </div>

          {/* COL 2: LIVE SERVICES */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">
              <span className="heading-accent">●</span> Live Features
            </h4>
            <ul className="footer-links-list">
              <li><Link href="/">🔥 Live Allotment Feed</Link></li>
              <li><Link href="/#gmp-calculator">🧮 Live GMP Calculator</Link></li>
              <li><Link href="/#registrar-tool">⚡ 1-Click Registrar Launcher</Link></li>
              <li><Link href="/#live-table">🏢 Mainboard IPO Tracker</Link></li>
              <li><Link href="/#live-table">🚀 SME Sector Allotment</Link></li>
              <li><Link href="/sitemap.xml">🗺️ Dynamic Sitemap</Link></li>
            </ul>
          </div>

          {/* COL 3: REGISTRAR HUBS */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">
              <span className="heading-accent">●</span> Official Registrars
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer">
                  KFintech Technologies ↗
                </a>
              </li>
              <li>
                <a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer">
                  Link Intime India ↗
                </a>
              </li>
              <li>
                <a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer">
                  Bigshare Services ↗
                </a>
              </li>
              <li>
                <a href="https://www.bseindia.com/investors/appli_check.aspx" target="_blank" rel="noopener noreferrer">
                  BSE India Appli Check ↗
                </a>
              </li>
              <li>
                <a href="https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids" target="_blank" rel="noopener noreferrer">
                  NSE India Bid Verification ↗
                </a>
              </li>
              <li>
                <a href="https://www.camsonline.com/" target="_blank" rel="noopener noreferrer">
                  CAMS Online Services ↗
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: INVESTOR GUIDES */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">
              <span className="heading-accent">●</span> Investor Guides
            </h4>
            <ul className="footer-links-list">
              <li><Link href="/blog/how-to-check-ipo-allotment-status">🔍 PAN Status Check Guide</Link></li>
              <li><Link href="/blog/what-happens-after-ipo-allotment">🏦 ASBA Refund &amp; UPI Rules</Link></li>
              <li><Link href="/blog/bajaj-housing-finance-ipo-allotment-review">📊 Bajaj Housing Review</Link></li>
              <li><Link href="/blog/xtranet-technologies-ipo-review">🚗 Xtranet Tech Analysis</Link></li>
              <li><Link href="/blog/dhoot-transmission-ipo-review">📑 Dhoot Transmission Guide</Link></li>
              <li><Link href="/blog">📖 View All Articles</Link></li>
            </ul>
          </div>

          {/* COL 5: LEGAL & TRANSPARENCY */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">
              <span className="heading-accent">●</span> Trust &amp; Legal
            </h4>
            <ul className="footer-links-list">
              <li><Link href="/p/about-us">About Us &amp; Team</Link></li>
              <li><Link href="/p/contact-us">Contact Us</Link></li>
              <li><Link href="/p/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/p/terms">Terms of Service</Link></li>
              <li><Link href="/p/disclaimer">Financial Disclaimer</Link></li>
              <li><Link href="/ads.txt">AdSense ads.txt</Link></li>
            </ul>
          </div>
        </div>

        {/* REGULATORY DISCLAIMER */}
        <div className="footer-regulatory-box">
          <div className="regulatory-icon">⚠️</div>
          <div className="regulatory-text">
            <strong>SEBI Compliance &amp; Risk Disclaimer:</strong> Allotment Status of IPO (<code>allotmentstatusofipo.in</code>) is an independent financial research, analytics, and informational aggregator. We are NOT registered with SEBI (Securities and Exchange Board of India) as an Investment Adviser (IA) or Research Analyst (RA). The information, Grey Market Premium (GMP) figures, and tools provided on this site are strictly for educational and awareness purposes. Past performance and unofficial market premiums are not indicative of future listing gains. Always consult a certified financial advisor before making any equity investment.
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & META BAR */}
        <div className="footer-bottom-bar">
          <div className="bottom-left-info">
            <span>© {new Date().getFullYear()} <strong>Allotment Status of IPO</strong>. All rights reserved.</span>
            <span className="bottom-divider">•</span>
            <span>Hosted on Vercel Global Edge Network</span>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" title="Scroll to top of page">
            <span>Back to Top</span>
            <span className="top-arrow-icon">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
