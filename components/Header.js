import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-brand">
          <div className="logo-icon">📊</div>
          <span>Allotment Status of IPO</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="/#live-table" className="nav-link">🔥 Live IPOs</Link></li>
            <li><Link href="/#gmp-calculator" className="nav-link">🧮 GMP Calculator</Link></li>
            <li><Link href="/blog" className="nav-link">📖 Guides & Articles</Link></li>
            <li><Link href="/p/about-us" className="nav-link">About Us</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a 
            href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            <span>💬</span> Join WhatsApp
          </a>
          <Link href="/#registrar-tool" className="btn-primary">
            <span>⚡</span> Check Status
          </Link>
        </div>
      </div>
    </header>
  );
}
