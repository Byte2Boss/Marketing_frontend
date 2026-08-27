import React from 'react';
import TeamGrid from '../components/TeamGrid';
import { Sparkles, Heart, Shield, Award, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenDemoModal }) {
  return (
    <div>
      {/* About Header */}
      <section className="section" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Our Mission & Story</span>
            <h1 className="section-title">
              Empowering Hospitality with <span className="gradient-text">Intelligent Tech</span>
            </h1>
            <p className="section-subtitle">
              We started RestroMind AI with one clear mission: to eliminate dining friction, relieve overworked floor staff, and help independent restaurant operators achieve record profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Origin Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '56px 44px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge-pill" style={{ color: '#6366f1', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                The Origin Story
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '18px' }}>
                Born in Packed Dining Rooms, <span className="gradient-text">Perfected by AI</span>
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Having worked alongside restaurant operators and Michelin-starred chefs, we saw firsthand how rigid paper menus and legacy POS terminals held dining rooms back. Waiters were stuck taking routine drink reorders instead of creating memorable guest experiences, while thousands of dollars were wasted reprinting paper menus for simple price adjustments.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                RestroMind AI was engineered as the antidote: a contactless, 3-second QR ordering system paired with an autonomous culinary AI model that recommends pairings with the precision of a master sommelier.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                <Target size={32} color="#10b981" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Paperless Savings</div>
              </div>

              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                <Users size={32} color="#6366f1" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff' }}>500+</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Venues Powered</div>
              </div>

              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                <Award size={32} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff' }}>+24.8%</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Average Check Lift</div>
              </div>

              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                <Shield size={32} color="#a855f7" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff' }}>99.99%</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Leadership & Team Grid */}
      <TeamGrid />

      {/* Bottom CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>Want to Join Our Mission?</h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Whether you are a restaurateur looking to modernize your floor or an engineer passionate about hospitality AI, we would love to connect.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Get in Touch with Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
