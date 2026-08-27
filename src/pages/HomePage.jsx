import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import PhoneSimulator from '../components/PhoneSimulator';
import DynamicQrGenerator from '../components/DynamicQrGenerator';
import RoiCalculator from '../components/RoiCalculator';
import TestimonialSection from '../components/TestimonialSection';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import { ArrowRight, Sparkles, QrCode, Zap, ShieldCheck } from 'lucide-react';

export default function HomePage({ onOpenDemoModal, onShowToast }) {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection onOpenDemoModal={onOpenDemoModal} />

      {/* 2. Live Interactive Phone Simulator Highlight */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <PhoneSimulator />
        </div>
      </section>

      {/* 3. Bento Box Core Features */}
      <BentoGrid />

      {/* 4. Live Dynamic Table QR Stand Generator */}
      <DynamicQrGenerator onOpenDemoModal={onOpenDemoModal} onShowToast={onShowToast} />

      {/* 5. Interactive ROI Profit Calculator */}
      <section className="section" style={{ background: 'rgba(10, 14, 23, 0.6)' }}>
        <div className="container">
          <RoiCalculator onOpenDemoModal={onOpenDemoModal} onShowToast={onShowToast} />
        </div>
      </section>

      {/* 5. Verified Customer Proof */}
      <TestimonialSection />

      {/* 6. Pricing Tiers */}
      <PricingTable onOpenDemoModal={onOpenDemoModal} />

      {/* 7. FAQ Section */}
      <FAQAccordion />

      {/* 8. High-Impact Bottom Conversion Banner */}
      <section className="section" style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(99, 102, 241, 0.18) 100%)',
              borderColor: 'rgba(16, 185, 129, 0.4)',
              borderRadius: '32px',
              padding: '64px 36px',
              textAlign: 'center',
              boxShadow: '0 0 60px rgba(16, 185, 129, 0.2)',
            }}
          >
            <span className="badge-pill">Ready to Boost Your AOV?</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.02em' }}>
              Transform Your Dining Floor in <span className="gradient-text">24 Hours</span>
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 36px', fontSize: '1.15rem', color: '#cbd5e1' }}>
              Join hundreds of high-performing restaurants increasing guest spend by 18-28% with zero extra hardware costs.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <button onClick={onOpenDemoModal} className="btn btn-primary btn-lg">
                <span>Start Your 14-Day Free Trial</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Schedule a 1-on-1 Walkthrough</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
