import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo-brand" style={{ color: '#ffffff', marginBottom: '1rem' }}>
              <div className="logo-icon">📊</div>
              <span>Allotment Status of IPO</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              India's leading real-time IPO Allotment Status Tracker, GMP updates, SEBI T+3 Bidding analytics, and official registrar direct deep links.
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <strong>Founder:</strong> Mahesh Chavan (Financial Researcher)
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">🔥 Live Allotment Status</Link></li>
              <li><Link href="/#gmp-calculator">🧮 Live GMP Calculator</Link></li>
              <li><Link href="/blog">📖 Knowledge Base & Guides</Link></li>
              <li><Link href="/blog/how-to-check-ipo-allotment-status">🔍 How to Check Status</Link></li>
              <li><Link href="/blog/what-happens-after-ipo-allotment">🏦 ASBA Refund Rules</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Registrar Portals</h4>
            <ul className="footer-links">
              <li><a href="https://ipostatus.kfintech.com" target="_blank" rel="noopener noreferrer">KFintech Portal</a></li>
              <li><a href="https://linkintime.co.in/initial_offer/public-issues.html" target="_blank" rel="noopener noreferrer">Link Intime Portal</a></li>
              <li><a href="https://www.bigshareonline.com/ipo_allotment.html" target="_blank" rel="noopener noreferrer">Bigshare Services</a></li>
              <li><a href="https://www.bseindia.com/investors/appli_check.aspx" target="_blank" rel="noopener noreferrer">BSE India Status</a></li>
              <li><a href="https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids" target="_blank" rel="noopener noreferrer">NSE Bid Verification</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company & Legal</h4>
            <ul className="footer-links">
              <li><Link href="/p/about-us">About Us & Team</Link></li>
              <li><Link href="/p/contact-us">Contact Us</Link></li>
              <li><Link href="/p/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/p/terms">Terms of Service</Link></li>
              <li><Link href="/p/disclaimer">Financial Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer-box">
          <p>
            <strong>Disclaimer:</strong> Allotment Status of IPO (allotmentstatusofipo.in) is an educational, research, and informational portal. We are NOT registered with SEBI as an investment advisor or research analyst. We do not provide buy/sell recommendations or facilitate IPO bids directly. Grey Market Premium (GMP) data is purely informal, non-official market sentiment and is not guaranteed by stock exchanges.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} Allotment Status of IPO. All rights reserved. Built with Next.js for blazing performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
