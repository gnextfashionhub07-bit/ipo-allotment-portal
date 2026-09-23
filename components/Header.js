'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* BRAND LOGO */}
        <Link href="/" className="brand-logo-group">
          <div className="brand-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <div className="brand-text-wrap">
            <div className="brand-name-row">
              <span className="brand-main-title">Allotment Status</span>
              <span className="brand-portal-badge">IPO PORTAL</span>
            </div>
            <span className="brand-tagline">Real-Time SEBI Registrar Tracker</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-navigation">
          <ul className="nav-menu-list">
            <li>
              <Link href="/#live-table" className="nav-menu-item">
                Live IPOs
              </Link>
            </li>
            <li>
              <Link href="/#live-table" className="nav-menu-item">
                GMP Tracker
              </Link>
            </li>
            <li>
              <Link href="/#registrar-tool" className="nav-menu-item">
                Registrars
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-menu-item">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="nav-menu-item">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* HEADER ACTIONS */}
        <div className="header-action-buttons">
          <a 
            href="https://chat.whatsapp.com/DQH7iDHuphR22OfJsHmPuo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-header-wa"
            title="Join free WhatsApp alert channel"
          >
            <span className="wa-icon">💬</span>
            <span className="wa-label">WhatsApp Alerts</span>
          </a>

          <Link href="/#registrar-tool" className="btn-header-action">
            <span>Check Allotment</span>
            <span className="btn-action-arrow">→</span>
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-menu-list">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/#live-table" onClick={() => setMobileMenuOpen(false)}>Live IPOs</Link></li>
            <li><Link href="/#live-table" onClick={() => setMobileMenuOpen(false)}>GMP Tracker</Link></li>
            <li><Link href="/#registrar-tool" onClick={() => setMobileMenuOpen(false)}>Registrars</Link></li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Guides &amp; Reviews</Link></li>
            <li><Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
