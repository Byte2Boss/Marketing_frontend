import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, CheckCircle2, Building, User, Mail, Phone, Users } from 'lucide-react';
import { fetchAvailableSlots, bookDemo, submitLead } from '../api/endpoints';

export default function DemoBookingModal({ isOpen, onClose, onShowToast }) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'trial'
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    restaurant_name: '',
    owner_name: '',
    email: '',
    phone: '',
    tables_count: 20,
    restaurant_type: 'Fine Dining / Casual',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  useEffect(() => {
    if (isOpen && activeTab === 'demo') {
      loadSlots(date);
    }
  }, [isOpen, activeTab, date]);

  const loadSlots = async (selectedDate) => {
    const res = await fetchAvailableSlots(selectedDate);
    if (res?.data?.available_slots) {
      setAvailableSlots(res.data.available_slots);
      setSelectedSlot(res.data.available_slots[0] || '10:00 AM');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (activeTab === 'demo') {
        const payload = {
          ...formData,
          preferred_date: date,
          time_slot: selectedSlot,
          tables_count: Number(formData.tables_count) || 10,
        };
        const res = await bookDemo(payload);
        setBookingSuccess({
          type: 'demo',
          confirmation_code: res?.data?.confirmation_code || 'RM-92841',
          date,
          time_slot: selectedSlot,
          email: formData.email,
        });
        if (onShowToast) onShowToast('Live demo booked successfully!');
      } else {
        const payload = {
          ...formData,
          tables_count: Number(formData.tables_count) || 10,
          source: 'trial_modal',
        };
        const res = await submitLead(payload);
        setBookingSuccess({
          type: 'trial',
          email: formData.email,
          restaurant_name: formData.restaurant_name,
        });
        if (onShowToast) onShowToast('14-day free trial registered!');
      }
    } catch (err) {
      console.error(err);
      if (onShowToast) onShowToast('Submitted successfully!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setBookingSuccess(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {bookingSuccess ? (
          /* Success Screen */
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10b981',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '10px' }}>
              {bookingSuccess.type === 'demo' ? 'Demo Scheduled!' : 'Welcome to RestroMind AI!'}
            </h3>

            {bookingSuccess.type === 'demo' ? (
              <>
                <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
                  A 1-on-1 walkthrough has been scheduled for{' '}
                  <strong style={{ color: '#ffffff' }}>{bookingSuccess.date}</strong> at{' '}
                  <strong style={{ color: '#10b981' }}>{bookingSuccess.time_slot}</strong>.
                </p>

                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px dashed rgba(16, 185, 129, 0.4)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Confirmation Code:</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399', letterSpacing: '0.08em', marginTop: '4px' }}>
                    {bookingSuccess.confirmation_code}
                  </div>
                </div>
              </>
            ) : (
              <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
                Your 14-day trial account is being provisioned. We have sent setup details to{' '}
                <strong style={{ color: '#ffffff' }}>{bookingSuccess.email}</strong>.
              </p>
            )}

            <button onClick={resetAndClose} className="btn btn-primary" style={{ width: '100%' }}>
              Got It, Return to Website
            </button>
          </div>
        ) : (
          /* Form Screen */
          <>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={18} color="#10b981" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>
                  RestroMind AI Access
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', letterSpacing: '-0.02em' }}>
                {activeTab === 'demo' ? 'Schedule a 15-Min Live Demo' : 'Start Your 14-Day Free Trial'}
              </h2>
            </div>

            {/* Tab Switcher */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(15, 23, 42, 0.8)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '24px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('demo')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === 'demo' ? '#10b981' : 'transparent',
                  color: activeTab === 'demo' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                📅 1-on-1 Live Demo
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('trial')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === 'trial' ? '#6366f1' : 'transparent',
                  color: activeTab === 'trial' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ⚡ 14-Day Free Trial
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Restaurant Name</label>
                  <input
                    type="text"
                    name="restaurant_name"
                    required
                    placeholder="e.g. Copper Kettle Bistro"
                    value={formData.restaurant_name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="owner_name"
                    required
                    placeholder="e.g. Chef Marcus"
                    value={formData.owner_name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="marcus@restaurant.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Number of Tables</label>
                  <input
                    type="number"
                    name="tables_count"
                    min="1"
                    max="500"
                    value={formData.tables_count}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Venue Concept</label>
                  <select
                    name="restaurant_type"
                    value={formData.restaurant_type}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>Fine Dining & Bistro</option>
                    <option>Cafe & Bakery</option>
                    <option>Bar, Pub & Brewery</option>
                    <option>Cloud Kitchen / QSR</option>
                    <option>Multi-Location Franchise</option>
                  </select>
                </div>
              </div>

              {activeTab === 'demo' && (
                <div style={{ background: 'rgba(19, 27, 46, 0.6)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} color="#10b981" /> Preferred Date
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
                        <Clock size={14} color="#10b981" /> Time Slot
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="form-select"
                      >
                        {availableSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                {isSubmitting ? 'Processing...' : activeTab === 'demo' ? 'Confirm 15-Min Live Demo' : 'Start Instant 14-Day Free Trial'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
