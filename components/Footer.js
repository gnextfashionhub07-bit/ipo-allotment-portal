'use client';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-compact-grid">
          {/* COL 1: BRAND */}
          <div className="footer-col-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">📊</div>
              <span className="footer-logo-text">Allotment Status of IPO</span>
            </Link>
            <p className="footer-desc-short">
              Fast, real-time IPO Allotment Status Tracker &amp; Official SEBI Registrar Direct Gateway.
            </p>
            <div className="footer-author-text">
              <strong>Editor / Founder:</strong> Mahesh Chavan
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-clean">
              <li><Link href="/#live-table">🔥 Live IPO Tracker</Link></li>
              <li><Link href="/#gmp-calculator">🧮 GMP Calculator</Link></li>
              <li><Link href="/#registrar-tool">⚡ Registrar Gateways</Link></li>
              <li><Link href="/blog">📖 IPO Guides &amp; Articles</Link></li>
            </ul>
          </div>

          {/* COL 3: REGISTRARS */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Official Registrars</h4>
            <ul className="footer-links-clean">
              <li><a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer">Link Intime India ↗</a></li>
              <li><a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer">KFin Technologies ↗</a></li>
              <li><a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer">Bigshare Services ↗</a></li>
              <li><a href="https://www.bseindia.com/investors/appli_check.aspx" target="_blank" rel="noopener noreferrer">BSE India Appli Check ↗</a></li>
            </ul>
          </div>

          {/* COL 4: LEGAL (MANDATORY FOR ADSENSE) */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Legal &amp; Policy</h4>
            <ul className="footer-links-clean">
              <li><Link href="/p/about-us">About Us</Link></li>
              <li><Link href="/p/contact-us">Contact Us</Link></li>
              <li><Link href="/p/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/p/terms">Terms of Service</Link></li>
              <li><Link href="/p/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* COMPACT REGULATORY NOTE */}
        <div className="footer-compact-disclaimer">
          <p>
            <strong>Disclaimer:</strong> Allotment Status of IPO (allotmentstatusofipo.in) is an educational portal. We are NOT registered with SEBI as an investment adviser. Grey Market Premium (GMP) data is purely informal market sentiment.
          </p>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="footer-compact-bottom">
          <span>© {new Date().getFullYear()} Allotment Status of IPO. All rights reserved.</span>
          <button onClick={scrollToTop} className="btn-compact-top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
