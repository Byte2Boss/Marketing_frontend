import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqData';
import { fetchFaqsContent } from '../api/endpoints';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [faqsList, setFaqsList] = useState(FAQS);
  const [faqCategories, setFaqCategories] = useState(FAQ_CATEGORIES);

  useEffect(() => {
    fetchFaqsContent().then((res) => {
      if (res?.data?.faqs?.length > 0) setFaqsList(res.data.faqs);
      if (res?.data?.categories?.length > 0) setFaqCategories(res.data.categories);
    });
  }, []);

  const categories = ['All', ...faqCategories];

  const filteredFaqs = activeCategory === 'All'
    ? faqsList
    : faqsList.filter((f) => f.category === activeCategory);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="section-header">
          <span className="badge-pill">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about setting up RestroMind AI for your venue.
          </p>

          {/* Category Pills */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setActiveCategory(cat); setOpenIdx(0); }}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: activeCategory === cat ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                  color: activeCategory === cat ? '#34d399' : 'var(--text-secondary)',
                  border: activeCategory === cat ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid transparent',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-light)',
                  background: isOpen ? 'rgba(19, 27, 46, 0.85)' : 'var(--bg-glass-card)',
                }}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 600 }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    color={isOpen ? '#10b981' : '#94a3b8'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
                </div>

                {isOpen && (
                  <p style={{ marginTop: '16px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
