import React from 'react';
import PricingTable from '../components/PricingTable';
import RoiCalculator from '../components/RoiCalculator';
import FAQAccordion from '../components/FAQAccordion';

export default function PricingPage({ onOpenDemoModal, onShowToast }) {
  return (
    <div>
      {/* Pricing Header */}
      <section className="section" style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Simple, Transparent Plans</span>
            <h1 className="section-title">
              Invest in <span className="gradient-text">Higher Restaurant Margins</span>
            </h1>
            <p className="section-subtitle">
              Choose the plan that matches your table volume. All plans include 24-hour setup, full AI capabilities, and a 14-day zero-risk trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Component */}
      <PricingTable onOpenDemoModal={onOpenDemoModal} />

      {/* ROI Profit Calculator */}
      <section className="section" style={{ background: 'rgba(10, 14, 23, 0.6)' }}>
        <div className="container">
          <RoiCalculator onOpenDemoModal={onOpenDemoModal} onShowToast={onShowToast} />
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQAccordion />
    </div>
  );
}
