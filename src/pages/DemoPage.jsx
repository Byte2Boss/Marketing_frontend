import React from 'react';
import PhoneSimulator from '../components/PhoneSimulator';
import { ArrowRight, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DemoPage({ onOpenDemoModal }) {
  return (
    <div>
      {/* Demo Page Header */}
      <section className="section" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Live Interactive Sandbox</span>
            <h1 className="section-title">
              In-Browser <span className="gradient-text">QR Menu Simulator</span>
            </h1>
            <p className="section-subtitle">
              Test drive the guest experience without scanning anything on your phone. Switch concepts, add dishes, and experience autonomous AI recommendations in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Component */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '48px 36px', background: 'rgba(11, 16, 27, 0.7)' }}>
            <PhoneSimulator />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
              borderColor: 'rgba(16, 185, 129, 0.3)',
              borderRadius: '28px',
              padding: '48px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '12px' }}>
              Want Custom QR Codes with Your Restaurant Logo & Branding?
            </h3>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px', fontSize: '1.05rem', color: '#cbd5e1' }}>
              Our onboarding team can convert your existing paper PDF menu into a dynamic RestroMind AI menu in less than 24 hours.
            </p>
            <button onClick={onOpenDemoModal} className="btn btn-primary btn-lg">
              <span>Schedule 15-Minute Custom Demo</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
