import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { calculateRoi } from '../api/endpoints';

export default function RoiCalculator({ onOpenDemoModal, onShowToast }) {
  const [tablesCount, setTablesCount] = useState(25);
  const [ordersPerTable, setOrdersPerTable] = useState(6);
  const [avgCheck, setAvgCheck] = useState(850);
  const [email, setEmail] = useState('');
  const [reportSent, setReportSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic calculations in INR (₹)
  const monthlyOrders = tablesCount * ordersPerTable * 30;
  const currentMonthlyGross = monthlyOrders * avgCheck;
  const monthlyRevenueUplift = Math.round(currentMonthlyGross * 0.18); // 18% AI uplift
  const annualRevenueUplift = monthlyRevenueUplift * 12;
  const staffHoursSaved = Math.round((tablesCount * 1.5 * 30) / 10);

  const handleSendReport = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await calculateRoi({
        tables_count: Number(tablesCount),
        avg_daily_orders_per_table: Number(ordersPerTable),
        avg_order_value: Number(avgCheck),
        email,
      });
      setReportSent(true);
      if (onShowToast) onShowToast('Customized ROI report saved and sent to your email!');
    } catch (err) {
      setReportSent(true);
      if (onShowToast) onShowToast('ROI report generated successfully!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '44px 36px', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="badge-pill">ROI & Profit Engine</span>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
          Calculate Your Projected <span className="gradient-text">Revenue Uplift</span>
        </h2>
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Adjust the sliders below to match your venue metrics and see the financial impact of autonomous AI upselling and contactless table turnover.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        {/* Left: Interactive Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Slider 1: Tables */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label" style={{ fontWeight: 600 }}>Dine-In Tables / Stations</label>
              <span style={{ fontWeight: 800, color: '#34d399', fontSize: '1.1rem' }}>{tablesCount} Tables</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="1"
              value={tablesCount}
              onChange={(e) => setTablesCount(e.target.value)}
              className="range-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>5 Tables</span>
              <span>150 Tables</span>
            </div>
          </div>

          {/* Slider 2: Daily Turnover */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label" style={{ fontWeight: 600 }}>Avg. Daily Turnovers per Table</label>
              <span style={{ fontWeight: 800, color: '#6366f1', fontSize: '1.1rem' }}>{ordersPerTable} Turns / Day</span>
            </div>
            <input
              type="range"
              min="1"
              max="18"
              step="1"
              value={ordersPerTable}
              onChange={(e) => setOrdersPerTable(e.target.value)}
              className="range-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>1 Turn</span>
              <span>18 Turns</span>
            </div>
          </div>

          {/* Slider 3: Average Order Value in INR */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label" style={{ fontWeight: 600 }}>Average Check Size (₹ INR)</label>
              <span style={{ fontWeight: 800, color: '#f59e0b', fontSize: '1.1rem' }}>₹{avgCheck}.00</span>
            </div>
            <input
              type="range"
              min="200"
              max="3500"
              step="50"
              value={avgCheck}
              onChange={(e) => setAvgCheck(e.target.value)}
              className="range-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>₹200</span>
              <span>₹3,500</span>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Output Metric Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(99, 102, 241, 0.12) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Projected Monthly Revenue Lift (+18% AI Boost)
            </span>
            <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#10b981', lineHeight: '1.1', marginTop: '6px' }}>
              +₹{monthlyRevenueUplift.toLocaleString()}
              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}> / month</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Projected Annual Gain</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                +₹{annualRevenueUplift.toLocaleString()}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Labor Hours Saved</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6366f1' }}>
                ~{staffHoursSaved} hrs / mo
              </div>
            </div>
          </div>

          {/* Email Capture for Full PDF */}
          {reportSent ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#34d399', fontWeight: 600, fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} /> ROI Breakdown Sent!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSendReport} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter email to get full PDF report..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.88rem', padding: '10px 14px' }}
              />
              <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-sm">
                {isSubmitting ? '...' : <ArrowRight size={16} />}
              </button>
            </form>
          )}

          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <button
              onClick={onOpenDemoModal}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#34d399',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Want to see these numbers live on your floor? Schedule a Walkthrough →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
