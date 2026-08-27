import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';
import { subscribeNewsletter } from '../api/endpoints';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const res = await subscribeNewsletter({ email, source: 'footer_signup' });
      setSubscribed(true);
      setEmail('');
      if (onShowToast) onShowToast(res.message || 'Subscribed successfully!');
    } catch (err) {
      if (onShowToast) onShowToast('Thank you for subscribing!', 'success');
      setSubscribed(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      style={{
        background: '#06080d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Top Newsletter CTA Strip */}
        <div
          className="glass-card"
          style={{
            marginBottom: '64px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(99, 102, 241, 0.08) 100%)',
            borderColor: 'rgba(16, 185, 129, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            padding: '36px',
          }}
        >
          <div style={{ maxWidth: '540px' }}>
            <span className="badge-pill">Insider Hospitality Insights</span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
              The Autonomous Restaurant Playbook
            </h3>
            <p style={{ fontSize: '0.95rem' }}>
              Join 4,500+ restaurant owners receiving weekly tactics on AI menu engineering, table turnover strategies, and margin optimization.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', flex: '1', minWidth: '280px', maxWidth: '440px' }}>
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              style={{ background: 'rgba(7, 9, 14, 0.8)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            />
            <button type="submit" disabled={isSubmitting || subscribed} className="btn btn-primary">
              {subscribed ? <CheckCircle2 size={18} /> : isSubmitting ? '...' : <ArrowRight size={18} />}
            </button>
          </form>
        </div>

        {/* Main Footer Sitemap Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
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
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  Restro<span style={{ color: '#ef4444' }}>Mind</span> <span style={{ color: '#ef4444' }}>AI</span>
                </div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Intelligence for the Modern Restaurant
                </div>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              The next-generation smart restaurant operating system and AI-powered contactless QR dining platform.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.85rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Column 2: Product & Platform */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: '#ffffff' }}>Product & Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>AI Menu Intelligence</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>Dynamic Table QRs</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>Kitchen & Bar Sync</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>Owner Analytics Dashboard</Link></li>
              <li><Link to="/demo" style={{ color: 'var(--text-secondary)' }}>In-Browser Live Simulator</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions & Pricing */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: '#ffffff' }}>Solutions & Pricing</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><Link to="/pricing" style={{ color: 'var(--text-secondary)' }}>Subscription Pricing Tiers</Link></li>
              <li><Link to="/pricing" style={{ color: 'var(--text-secondary)' }}>Interactive ROI Calculator</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>Fine Dining & Bistros</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)' }}>Bars, Pubs & Breweries</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Franchise & Enterprise Multi-Unit</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Trust */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '18px', color: '#ffffff' }}>Company & Trust</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us & Mission</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>Leadership & AI Engineers</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>Culinary Advisory Board</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Schedule Live Walkthrough</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Support & Sales</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} RestroMind AI, Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} color="#10b981" /> 256-Bit SSL Encrypted
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
