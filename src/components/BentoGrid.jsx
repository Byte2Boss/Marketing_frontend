import React from 'react';
import { Sparkles, QrCode, LayoutDashboard, Utensils, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BentoGrid() {
  return (
    <section className="section" style={{ background: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Core Innovations</span>
          <h2 className="section-title">
            Built for High-Yield <span className="gradient-text">Hospitality Performance</span>
          </h2>
          <p className="section-subtitle">
            Every module in RestroMind AI is engineered to eliminate ordering friction, increase average check sizes, and streamline floor operations.
          </p>
        </div>

        <div className="bento-grid">
          {/* Bento Card 1: AI Menu Intelligence (Large Span 8) */}
          <div className="bento-col-8 glass-card-interactive" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={24} color="#10b981" />
              </div>
              <span className="badge-pill" style={{ marginBottom: 0 }}>+24.8% AOV Boost</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
              Autonomous AI Menu Engineering & Smart Upsells
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '580px' }}>
              Our proprietary culinary recommendation models analyze diner preferences, order history, and dish margins to suggest the perfect wine, side, or dessert pairing at the exact right moment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '16px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#10b981" /> Sommelier Wine Pairing Prompts
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#10b981" /> Automated Appetizing Copy
              </div>
            </div>
          </div>

          {/* Bento Card 2: 3-Second QR Engine (Span 4) */}
          <div className="bento-col-4 glass-card-interactive">
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <QrCode size={24} color="#6366f1" />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              3-Second Table QR
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              Zero downloads. Zero friction. Diners scan and browse your full dynamic menu in under 3 seconds on any mobile browser.
            </p>

            <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.25)', fontSize: '0.85rem', color: '#c7d2fe', fontWeight: 600 }}>
              ⚡ 0 App Installs Required
            </div>
          </div>

          {/* Bento Card 3: Real-Time Management Control (Span 4) */}
          <div className="bento-col-4 glass-card-interactive">
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <LayoutDashboard size={24} color="#f59e0b" />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              Instant 86 & Price Sync
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              Run out of Wagyu ribeye? Toggle it out-of-stock on your phone and all active table QR menus update in 2 seconds flat.
            </p>

            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.25)', fontSize: '0.85rem', color: '#fde68a', fontWeight: 600 }}>
              ⚡ Zero Reprint Costs ($0 Paper)
            </div>
          </div>

          {/* Bento Card 4: Kitchen & Bar Dispatch (Span 8) */}
          <div className="bento-col-8 glass-card-interactive">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Utensils size={24} color="#a855f7" />
              </div>
              <span className="badge-pill" style={{ marginBottom: 0, color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                -18 Min Table Turn
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
              Live Kitchen & Bar Order Dispatching
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px', maxWidth: '580px' }}>
              Orders route directly from guest smartphones to kitchen prep monitors with real-time countdown timers. Eliminate waiter bottlenecks and turn tables 30% faster during peak dinner rushes.
            </p>

            <Link to="/features" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#a855f7', fontWeight: 600, fontSize: '0.92rem' }}>
              Explore Complete Feature Architecture <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
