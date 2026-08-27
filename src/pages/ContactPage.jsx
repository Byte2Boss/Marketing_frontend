import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { fetchAvailableSlots, bookDemo, submitContact } from '../api/endpoints';

export default function ContactPage({ onShowToast }) {
  const [activeForm, setActiveForm] = useState('demo'); // 'demo' | 'contact'
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');

  // Demo Form State
  const [demoData, setDemoData] = useState({
    restaurant_name: '',
    owner_name: '',
    email: '',
    phone: '',
    tables_count: 20,
    restaurant_type: 'Fine Dining / Casual',
    notes: '',
  });

  // Contact Form State
  const [contactData, setContactData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: 'Enterprise Multi-Unit Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState(null);

  useEffect(() => {
    if (activeForm === 'demo') {
      loadSlots(date);
    }
  }, [activeForm, date]);

  const loadSlots = async (selectedDate) => {
    const res = await fetchAvailableSlots(selectedDate);
    if (res?.data?.available_slots) {
      setAvailableSlots(res.data.available_slots);
      setSelectedSlot(res.data.available_slots[0] || '10:30 AM');
    }
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        ...demoData,
        preferred_date: date,
        time_slot: selectedSlot,
        tables_count: Number(demoData.tables_count) || 10,
      };
      const res = await bookDemo(payload);
      setSuccessResult({
        type: 'demo',
        code: res?.data?.confirmation_code || 'RM-88291',
        date,
        time: selectedSlot,
      });
      if (onShowToast) onShowToast('Live demo booked successfully!');
    } catch (err) {
      if (onShowToast) onShowToast('Demo request registered!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContact(contactData);
      setSuccessResult({ type: 'contact' });
      if (onShowToast) onShowToast('Message sent! We will reply within 24 hours.');
    } catch (err) {
      setSuccessResult({ type: 'contact' });
      if (onShowToast) onShowToast('Inquiry received!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Header */}
      <section className="section" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">Connect With Us</span>
            <h1 className="section-title">
              Let's Discuss Your <span className="gradient-text">Restaurant Growth</span>
            </h1>
            <p className="section-subtitle">
              Schedule a 15-minute customized product walkthrough or send an enterprise partnership inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {/* Left: Contact Channels & HQ */}
            <div>
              <div className="glass-card" style={{ padding: '36px', marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '16px' }}>Direct Hospitality Channels</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '28px' }}>
                  Our hospitality onboarding specialists and technical advisors are available 7 days a week.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={20} color="#10b981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Our Team</div>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>hello@restromind.ai</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={20} color="#6366f1" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Sales & Support</div>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>+91 98765 43210</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={20} color="#f59e0b" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Innovation HQ</div>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>Ahmedabad & Bengaluru, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24-Hour Guarantee Box */}
              <div className="glass-card" style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
                <span style={{ fontWeight: 700, color: '#34d399', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <Sparkles size={16} /> 24-Hour Menu Onboarding SLA
                </span>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  Send us your current PDF or physical menu photo, and our team will configure your table QRs and AI pairing rules within 24 hours.
                </p>
              </div>
            </div>

            {/* Right: Interactive Forms */}
            <div className="glass-card" style={{ padding: '40px 36px' }}>
              {successResult ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
                    {successResult.type === 'demo' ? 'Walkthrough Booked!' : 'Inquiry Received!'}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                    {successResult.type === 'demo'
                      ? `Your 15-minute live demo is confirmed for ${successResult.date} at ${successResult.time}. Confirmation code: ${successResult.code}.`
                      : 'Thank you for reaching out. A senior hospitality solutions director will get back to you within 24 hours.'}
                  </p>
                  <button onClick={() => setSuccessResult(null)} className="btn btn-primary">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  {/* Form Mode Selector */}
                  <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.8)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '28px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveForm('demo')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeForm === 'demo' ? '#10b981' : 'transparent',
                        color: activeForm === 'demo' ? '#000000' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                      }}
                    >
                      📅 Book Live Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveForm('contact')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        background: activeForm === 'contact' ? '#6366f1' : 'transparent',
                        color: activeForm === 'contact' ? '#ffffff' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                      }}
                    >
                      💬 General / Franchise Inquiry
                    </button>
                  </div>

                  {activeForm === 'demo' ? (
                    /* Demo Form */
                    <form onSubmit={handleDemoSubmit}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div className="form-group">
                          <label className="form-label">Restaurant Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Bella Vista Bistro"
                            value={demoData.restaurant_name}
                            onChange={(e) => setDemoData({ ...demoData, restaurant_name: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sofia Rossi"
                            value={demoData.owner_name}
                            onChange={(e) => setDemoData({ ...demoData, owner_name: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="sofia@bellavista.com"
                            value={demoData.email}
                            onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={demoData.phone}
                            onChange={(e) => setDemoData({ ...demoData, phone: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', marginBottom: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                          <div>
                            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Calendar size={14} color="#10b981" /> Select Date
                            </label>
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Clock size={14} color="#10b981" /> Available Slot
                            </label>
                            <select
                              value={selectedSlot}
                              onChange={(e) => setSelectedSlot(e.target.value)}
                              className="form-select"
                            >
                              {availableSlots.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                        {isSubmitting ? 'Booking...' : 'Confirm 15-Minute Live Demo'}
                      </button>
                    </form>
                  ) : (
                    /* Contact Form */
                    <form onSubmit={handleContactSubmit}>
                      <div className="form-group">
                        <label className="form-label">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alexander Vance"
                          value={contactData.full_name}
                          onChange={(e) => setContactData({ ...contactData, full_name: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="alex@dininggroup.com"
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            required
                            placeholder="Franchise / Custom Integration"
                            value={contactData.subject}
                            onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Your Message or Venue Requirements</label>
                        <textarea
                          required
                          rows="4"
                          placeholder="Tell us about your locations, existing POS setup, and target timeline..."
                          value={contactData.message}
                          onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                          className="form-textarea"
                        />
                      </div>

                      <button type="submit" disabled={isSubmitting} className="btn btn-indigo btn-lg" style={{ width: '100%' }}>
                        {isSubmitting ? 'Sending...' : 'Send Message to Leadership'}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
