import React, { useState } from 'react';
import { Sparkles, Plus, Check, ShoppingBag, ArrowRight, Utensils, RefreshCw, X } from 'lucide-react';
import { RESTAURANT_THEMES, MOCK_MENUS } from '../data/mockMenuData';

export default function PhoneSimulator() {
  const [selectedTheme, setSelectedTheme] = useState('steakhouse');
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [activeUpsell, setActiveUpsell] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menu = MOCK_MENUS[selectedTheme] || MOCK_MENUS.steakhouse;

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    setActiveCategory('All');
    setCart([]);
    setActiveUpsell(null);
    setOrderPlaced(false);
  };

  const handleAddItem = (item) => {
    setCart((prev) => [...prev, item]);
    setOrderPlaced(false);
    
    // Trigger AI upsell prompt if available
    if (item.upsell) {
      setActiveUpsell({
        parentItem: item.name,
        ...item.upsell,
      });
    }
  };

  const handleAcceptUpsell = () => {
    if (activeUpsell?.suggestedItem) {
      setCart((prev) => [...prev, activeUpsell.suggestedItem]);
    }
    setActiveUpsell(null);
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  const filteredItems = activeCategory === 'All'
    ? menu.items
    : menu.items.filter((i) => i.category === activeCategory);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '48px' }}>
      {/* Left Control Panel / Theme Switcher */}
      <div style={{ flex: '1', minWidth: '300px', maxWidth: '480px' }}>
        <span className="badge-pill">Interactive Live Demo</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Experience the <span className="gradient-text">Customer QR Flow</span>
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
          See how diners experience your menu in 3 seconds. Select different restaurant concepts below, add items, and watch our <strong>Autonomous AI Upsell Engine</strong> recommend smart pairings in real-time.
        </p>

        {/* Theme Selector Pills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {RESTAURANT_THEMES.map((theme) => {
            const isSelected = selectedTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  border: isSelected ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isSelected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: isSelected ? '#34d399' : '#ffffff' }}>
                    {theme.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{theme.tag}</div>
                </div>
                {isSelected && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                    <Check size={16} /> Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Live Simulator Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem' }}>0 App Installs</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>100% Mobile Browser</div>
          </div>
          <div className="glass-card" style={{ padding: '16px' }}>
            <div style={{ color: '#6366f1', fontWeight: 800, fontSize: '1.4rem' }}>+24.8% AOV</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Real-Time AI Upsells</div>
          </div>
        </div>
      </div>

      {/* Right: In-Browser Simulated Smartphone Device */}
      <div style={{ position: 'relative' }}>
        <div className="phone-frame">
          {/* Notch & Status Bar */}
          <div className="phone-notch">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#111827', marginRight: '6px' }} />
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4b5563' }} />
          </div>

          <div className="phone-screen">
            {/* Table QR Header inside Phone */}
            <div
              style={{
                padding: '16px',
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.15) 0%, transparent 100%)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: '#10b981',
                    color: '#000000',
                  }}
                >
                  Table #04 (Dine-In)
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>RestroMind AI Menu</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                {RESTAURANT_THEMES.find((t) => t.id === selectedTheme)?.name}
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>{menu.banner}</p>
            </div>

            {/* Category Chips inside Phone */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '12px 16px',
                overflowX: 'auto',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                scrollbarWidth: 'none',
              }}
            >
              <button
                onClick={() => setActiveCategory('All')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  background: activeCategory === 'All' ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                  color: activeCategory === 'All' ? '#000000' : '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                All Items
              </button>
              {menu.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    border: 'none',
                    background: activeCategory === cat ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                    color: activeCategory === cat ? '#000000' : '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items List */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '110px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>{item.name}</h4>
                      <span style={{ fontWeight: 800, color: '#10b981', fontSize: '0.95rem' }}>
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4', marginBottom: '10px' }}>
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', padding: '6px', fontSize: '0.78rem', gap: '4px' }}
                    >
                      <Plus size={14} /> Add to Table Order
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Upsell Dynamic Modal / Prompt Inside Phone */}
            {activeUpsell && (
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'rgba(0, 0, 0, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '24px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 100,
                  animation: 'fadeIn 0.2s ease',
                }}
              >
                <div
                  style={{
                    background: '#131b2e',
                    border: '1px solid #10b981',
                    borderRadius: '20px',
                    padding: '20px',
                    width: '100%',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#34d399', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
                    <Sparkles size={16} /> {activeUpsell.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#f8fafc', lineHeight: '1.5', marginBottom: '16px' }}>
                    {activeUpsell.text}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button
                      onClick={handleAcceptUpsell}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', fontSize: '0.82rem' }}
                    >
                      Yes, Add Pair (+ ${activeUpsell.suggestedItem.price.toFixed(2)})
                    </button>
                    <button
                      onClick={() => setActiveUpsell(null)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        padding: '6px',
                      }}
                    >
                      No thanks, keep original
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Order Placed Success Inside Phone */}
            {orderPlaced && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#090d16',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  zIndex: 90,
                  textAlign: 'center',
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '6px' }}>Order Sent to Kitchen!</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '20px' }}>
                  Table #04 ticket dispatched with live prep timer.
                </p>
                <button
                  onClick={() => { setOrderPlaced(false); setCart([]); }}
                  className="btn btn-secondary btn-sm"
                >
                  <RefreshCw size={14} /> Start New Test Order
                </button>
              </div>
            )}
          </div>

          {/* Persistent Floating Cart Bar inside Phone */}
          {cart.length > 0 && !orderPlaced && !activeUpsell && (
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: '#10b981',
                borderRadius: '16px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#000000',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.5)',
                cursor: 'pointer',
                zIndex: 80,
              }}
              onClick={() => setOrderPlaced(true)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <ShoppingBag size={18} />
                <span>{cart.length} item{cart.length > 1 ? 's' : ''}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}>
                <span>${cartTotal.toFixed(2)}</span>
                <span style={{ fontSize: '0.78rem', background: '#000000', color: '#ffffff', padding: '2px 8px', borderRadius: '8px' }}>
                  Send to Kitchen →
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
