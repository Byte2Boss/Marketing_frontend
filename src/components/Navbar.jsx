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
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 9, 14, 0.85)'
          : 'rgba(7, 9, 14, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        padding: isScrolled ? '14px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="RestroMind AI Logo"
            style={{
              height: '42px',
              width: '42px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#ffffff' }}>
                Restro<span style={{ color: '#ef4444' }}>Mind</span>
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: 'rgba(239, 68, 68, 0.18)',
                  color: '#f87171',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  textTransform: 'uppercase',
                }}
              >
                AI
              </span>
            </div>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, marginTop: '-2px' }}>
              Modern Restaurant Intelligence
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#34d399' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '6px 0',
              })}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #10b981, #6366f1)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="desktop-actions">
          <Link to="/demo" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', gap: '6px' }}>
            <QrCode size={16} />
            <span>Scan Demo QR</span>
          </Link>
          <button onClick={onOpenDemoModal} className="btn btn-primary btn-sm">
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
            <Link to="/demo" className="btn btn-secondary" style={{ width: '100%' }}>
              <QrCode size={18} />
              <span>Scan Demo QR</span>
            </Link>
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
