import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, QrCode, ArrowRight, Play, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export default function HeroSection({ onOpenDemoModal }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 90px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          {/* Top Floating Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontWeight: 600, fontSize: '0.88rem', marginBottom: '24px' }}>
            <Sparkles size={16} />
            <span>Next-Gen Autonomous AI Dining Platform</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ color: '#ffffff', opacity: 0.9 }}>v2.0 Live</span>
          </div>

          {/* Main Hero Hook */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', fontWeight: 900, lineHeight: '1.1', letterSpacing: '-0.03em', marginBottom: '24px' }}>
            Turn Every Restaurant Table into an <span className="gradient-text">AI Revenue Engine</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '36px', maxWidth: '740px', margin: '0 auto 36px' }}>
            Delight guests with <strong>3-second contactless QR menus</strong>, automated kitchen order dispatching, and autonomous AI recommendations that increase average ticket size by <strong>18% to 28%</strong>.
          </p>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '56px' }}>
            <button onClick={onOpenDemoModal} className="btn btn-primary btn-lg">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/demo" className="btn btn-secondary btn-lg">
              <Play size={18} fill="#ffffff" />
              <span>Try In-Browser Simulator</span>
            </Link>
          </div>

          {/* Trust Value Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} color="#10b981" /> Zero Hardware Needed
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} color="#10b981" /> 0 App Installs for Diners
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} color="#10b981" /> 24-Hour Rapid Onboarding
            </span>
          </div>
        </div>

        {/* Hero Interactive Preview Mockup Container */}
        <div style={{ position: 'relative', marginTop: '64px', maxWidth: '1080px', margin: '64px auto 0' }}>
          {/* Ambient Glow behind card */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Perspective Mockup Card */}
          <div
            className="glass-card"
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '24px',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(16, 185, 129, 0.15)',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(19, 27, 46, 0.9) 0%, rgba(10, 14, 23, 0.95) 100%)',
            }}
          >
            {/* Header bar of Mockup */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: '12px', fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  restromind.ai/dashboard/live-orders
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#10b981', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span>Live Table Sync Active</span>
              </div>
            </div>

            {/* Mockup Body Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {/* Box 1: Real-Time Order Stream */}
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', borderRadius: '18px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>Incoming Table Orders</span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '2px 8px', borderRadius: '6px' }}>
                    3 New
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ background: 'rgba(30, 41, 69, 0.5)', padding: '10px 14px', borderRadius: '10px', borderLeft: '3px solid #10b981' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                      <span>Table #04 (Patio)</span>
                      <span style={{ color: '#10b981' }}>₹2,450.00</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>2x Dry-Aged Ribeye + 2x Cabernet (AI Upsell)</div>
                  </div>

                  <div style={{ background: 'rgba(30, 41, 69, 0.5)', padding: '10px 14px', borderRadius: '10px', borderLeft: '3px solid #6366f1' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                      <span>Table #12 (Main Floor)</span>
                      <span style={{ color: '#6366f1' }}>₹1,250.00</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>1x Truffle Risotto + 1x Pinot Grigio</div>
                  </div>
                </div>
              </div>

              {/* Box 2: Autonomous AI Metrics */}
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', borderRadius: '18px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>AI Upsell Engine Impact</span>
                  <Sparkles size={16} color="#10b981" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Upsell Take Rate</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>34.2%</div>
                  </div>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.25)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Extra Revenue Today</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#818cf8', marginTop: '2px' }}>+₹18,400</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
