import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, QrCode, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features & AI', path: '/features' },
    { name: 'Live Demo', path: '/demo' },
    { name: 'Pricing & ROI', path: '/pricing' },
    { name: 'About & Team', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled
          ? 'rgba(7, 9, 14, 0.95)'
          : 'rgba(7, 9, 14, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(255, 255, 255, 0.06)',
        padding: isScrolled ? '12px 0' : '16px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src="/logo-icon.png"
            alt="RestroMind AI"
            style={{
              height: '36px',
              width: '36px',
              borderRadius: '9px',
              objectFit: 'cover',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              boxShadow: '0 0 16px rgba(239, 68, 68, 0.35)',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.28rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#ffffff' }}>
              Restro<span style={{ color: '#ef4444' }}>Mind</span>
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 5px',
                borderRadius: '4px',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              AI
            </span>
          </div>
        </Link>

        {/* Center Floating Glassmorphism Navigation Island */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            padding: '4px 6px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '0.86rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: isActive ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                padding: '6px 16px',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            flexShrink: 0,
          }}
          className="desktop-actions"
        >
          <button
            onClick={onOpenDemoModal}
            className="btn btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.88rem',
              borderRadius: '9999px',
              fontWeight: 600,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.35)',
            }}
          >
            <span>Book Live Demo</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-medium)',
            borderRadius: '10px',
            padding: '8px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 25, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '1.05rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#34d399' : 'var(--text-primary)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button onClick={onOpenDemoModal} className="btn btn-primary" style={{ width: '100%' }}>
              <span>Book Live Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
