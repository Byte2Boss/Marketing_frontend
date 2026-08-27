import React, { useState, useEffect } from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { TESTIMONIALS, TRUST_STATS } from '../data/testimonialsData';
import { fetchTestimonialsContent } from '../api/endpoints';

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const [trustStats, setTrustStats] = useState(TRUST_STATS);

  useEffect(() => {
    fetchTestimonialsContent().then((res) => {
      if (res?.data?.testimonials?.length > 0) setTestimonials(res.data.testimonials);
      if (res?.data?.trustStats?.length > 0) setTrustStats(res.data.trustStats);
    });
  }, []);

  return (
    <section className="section" style={{ background: 'rgba(7, 9, 14, 0.7)' }}>
      <div className="container">
        {/* Trust Stats Bar */}
        <div
          className="glass-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center',
            marginBottom: '80px',
            padding: '36px 24px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
            borderColor: 'rgba(16, 185, 129, 0.25)',
          }}
        >
          {trustStats.map((stat, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <span className="badge-pill">Proven Results</span>
          <h2 className="section-title">
            Loved by Restaurateurs & <span className="gradient-text">Executive Chefs</span>
          </h2>
          <p className="section-subtitle">
            See how forward-thinking hospitality groups are increasing average ticket values and accelerating table turns with RestroMind AI.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card-interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 28px' }}>
              <div>
                {/* Star Ratings */}
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '16px' }}>
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', color: '#f1f5f9', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Metric Highlight Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    marginBottom: '20px',
                  }}
                >
                  <TrendingUp size={14} /> {t.metric}
                </div>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{t.author}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.restaurant}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
