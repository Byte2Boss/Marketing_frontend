import React, { useState, useEffect } from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { PRICING_TIERS, PRICING_COMPARISON_MATRIX } from '../data/pricingData';
import { fetchPricingContent } from '../api/endpoints';

export default function PricingTable({ onOpenDemoModal }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [tiers, setTiers] = useState(PRICING_TIERS);
  const [matrix, setMatrix] = useState(PRICING_COMPARISON_MATRIX);

  useEffect(() => {
    fetchPricingContent().then((res) => {
      if (res?.data?.tiers?.length > 0) setTiers(res.data.tiers);
      if (res?.data?.matrix?.length > 0) setMatrix(res.data.matrix);
    });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Transparent Investment</span>
          <h2 className="section-title">
            Predictable Pricing for <span className="gradient-text">High-Volume Growth</span>
          </h2>
          <p className="section-subtitle">
            No hidden setup fees. No long-term lock-in. Full 14-day free trial on all plans.
          </p>

          {/* Monthly / Annual Billing Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(15, 23, 42, 0.8)',
              padding: '6px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginTop: '32px',
              gap: '6px',
            }}
          >
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: 'none',
                background: !isAnnual ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: !isAnnual ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: 'none',
                background: isAnnual ? '#10b981' : 'transparent',
                color: isAnnual ? '#000000' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: '#000000',
                  color: '#34d399',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Tier Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
          {tiers.map((tier) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={tier.isPopular ? 'glass-card glass-card-glow' : 'glass-card-interactive'}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '40px 32px',
                  background: tier.isPopular
                    ? 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)'
                    : 'var(--bg-glass-card)',
                  borderColor: tier.isPopular ? 'rgba(16, 185, 129, 0.5)' : 'var(--border-light)',
                }}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                    }}
                  >
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {tier.tierScope}
                  </div>
                  <h3 style={{ fontSize: '1.65rem', marginBottom: '8px', color: '#ffffff' }}>{tier.name}</h3>
                  <p style={{ fontSize: '0.9rem', minHeight: '44px', marginBottom: '24px' }}>{tier.tagline}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '2.6rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                      ₹{price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      / outlet / mo
                    </span>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px', marginBottom: '32px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                      Everything included:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {tier.features.map((f, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                          <Check size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className={tier.isPopular ? 'btn btn-primary btn-lg' : 'btn btn-secondary btn-lg'}
                  style={{ width: '100%' }}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Matrix Table */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '32px' }}>
            Feature-by-Feature <span className="gradient-text">Tier Comparison</span>
          </h3>

          <div className="glass-card" style={{ padding: '24px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <th style={{ padding: '16px', fontSize: '0.95rem', color: '#94a3b8' }}>Platform Capability</th>
                  <th style={{ padding: '16px', fontSize: '0.95rem', color: '#ffffff', textAlign: 'center' }}>Starter (₹1,499/mo)</th>
                  <th style={{ padding: '16px', fontSize: '0.95rem', color: '#10b981', textAlign: 'center' }}>Growth AI (₹2,999/mo)</th>
                  <th style={{ padding: '16px', fontSize: '0.95rem', color: '#ffffff', textAlign: 'center' }}>Enterprise (Custom)</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '14px 16px', fontSize: '0.9rem', color: '#f8fafc' }}>{row.feature}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      {row.starter ? <Check size={18} color="#10b981" style={{ margin: '0 auto' }} /> : <span style={{ color: '#475569' }}>—</span>}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      {row.growth ? <Check size={18} color="#10b981" style={{ margin: '0 auto' }} /> : <span style={{ color: '#475569' }}>—</span>}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      {row.enterprise ? <Check size={18} color="#10b981" style={{ margin: '0 auto' }} /> : <span style={{ color: '#475569' }}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
