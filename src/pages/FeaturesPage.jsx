import React, { useState, useEffect } from 'react';
import { Sparkles, QrCode, LayoutDashboard, Utensils, Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CORE_FEATURES, HOW_IT_WORKS_STEPS } from '../data/featuresData';
import { fetchFeaturesContent } from '../api/endpoints';
import { Link } from 'react-router-dom';

export default function FeaturesPage({ onOpenDemoModal }) {
  const [features, setFeatures] = useState(CORE_FEATURES);

  useEffect(() => {
    fetchFeaturesContent().then((res) => {
      if (res?.data?.length > 0) setFeatures(res.data);
    });
  }, []);

  const iconMap = {
    Sparkles: <Sparkles size={28} color="#10b981" />,
    QrCode: <QrCode size={28} color="#6366f1" />,
    LayoutDashboard: <LayoutDashboard size={28} color="#f59e0b" />,
    Utensils: <Utensils size={28} color="#a855f7" />,
    Zap: <Zap size={28} color="#f59e0b" />,
    CheckCircle2: <CheckCircle2 size={28} color="#ef4444" />,
  };

  return (
    <div>
      {/* Features Header */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Architectural Breakdown</span>
            <h1 className="section-title">
              Complete Platform <span className="gradient-text">Feature Suite</span>
            </h1>
            <p className="section-subtitle">
              Discover how RestroMind AI unifies autonomous menu intelligence, table-specific QR workflows, and real-time kitchen routing into one seamless operating system.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive Feature Rows */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {features.map((feat, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={feat.id}
                className="glass-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '48px',
                  alignItems: 'center',
                  padding: '48px',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                {/* Content Side */}
                <div style={{ order: isReversed ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {iconMap[feat.icon] || <Sparkles size={28} color="#10b981" />}
                    </div>
                    <span className="badge-pill" style={{ marginBottom: 0, color: feat.color || '#10b981', borderColor: `${feat.color || '#10b981'}40` }}>
                      {feat.badge || 'Platform Feature'}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>{feat.title}</h2>
                  <h4 style={{ fontSize: '1.05rem', color: '#34d399', fontWeight: 600, marginBottom: '16px' }}>
                    {feat.tagline || ''}
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                    {feat.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {(feat.bullets || []).map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#e2e8f0' }}>
                        <CheckCircle2 size={18} color="#10b981" /> {b}
                      </li>
                    ))}
                  </ul>

                  <button onClick={onOpenDemoModal} className="btn btn-primary btn-sm">
                    <span>Try In Live Walkthrough</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Visual Highlight Card */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 69, 0.5) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '36px',
                    textAlign: 'center',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Validated Metric Impact
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: feat.color, marginBottom: '20px' }}>
                    {feat.stats}
                  </div>
                  <div style={{ background: 'rgba(7, 9, 14, 0.8)', padding: '20px', borderRadius: '16px', border: '1px dashed rgba(255, 255, 255, 0.15)', fontSize: '0.9rem', color: '#94a3b8' }}>
                    ⚡ Automatically active across all dine-in table QR sessions with zero manual server configuration.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works 3-Step Section */}
      <section className="section" style={{ background: 'rgba(10, 14, 23, 0.6)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Frictionless Onboarding</span>
            <h2 className="section-title">
              Up and Running in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              From menu setup to placing table QR cards in under 24 hours.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={idx} className="glass-card-interactive" style={{ padding: '36px 28px', position: 'relative' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(16, 185, 129, 0.25)', lineHeight: 1, marginBottom: '14px' }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#ffffff' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Ready to See It in Action?</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Test our interactive simulator or schedule a personalized walkthrough with our hospitality team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link to="/demo" className="btn btn-secondary btn-lg">
              <span>Launch In-Browser Simulator</span>
            </Link>
            <button onClick={onOpenDemoModal} className="btn btn-primary btn-lg">
              <span>Book 15-Min Live Demo</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
