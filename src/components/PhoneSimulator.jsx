import React, { useState, useEffect } from 'react';
import { Sparkles, Plus, Check, ShoppingBag, ArrowRight, Utensils, RefreshCw, X } from 'lucide-react';
import { RESTAURANT_THEMES, MOCK_MENUS } from '../data/mockMenuData';
import { fetchMenuConceptsContent } from '../api/endpoints';

export default function PhoneSimulator() {
  const [themes, setThemes] = useState(RESTAURANT_THEMES);
  const [menus, setMenus] = useState(MOCK_MENUS);
  const [selectedTheme, setSelectedTheme] = useState('steakhouse');
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [activeUpsell, setActiveUpsell] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    fetchMenuConceptsContent().then((res) => {
      if (res?.data?.themes?.length > 0) setThemes(res.data.themes);
      if (res?.data?.menus && Object.keys(res.data.menus).length > 0) setMenus(res.data.menus);
    });
  }, []);

  const menu = menus[selectedTheme] || menus.steakhouse || { title: 'Menu', tagline: '', categories: ['All'], items: [] };

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
          {themes.map((theme) => {
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
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{theme.concept}</div>
                </div>
                <div style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '9999px' }}>
                  {theme.vibe}
                </div>
              </button>
            );
          })}
        </div>

        <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '16px', padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
            <Sparkles size={16} /> Autonomous AI Pairing Engine
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            Click "+" on any dish in the phone simulator to trigger an automated sommelier pairing prompt.
          </p>
        </div>
      </div>

      {/* Right Phone Device Mockup Frame */}
      <div className="phone-frame">
        {/* Top Notch */}
        <div className="phone-notch">
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000000', marginRight: '6px' }} />
          <span style={{ width: '40px', height: '4px', borderRadius: '2px', background: '#374151' }} />
        </div>

        {/* Dynamic Concept Header */}
        <div
          style={{
            padding: '40px 16px 14px',
            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Table #04 • Dine-In
            </span>
            <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
              Live AI Menu
            </span>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}>
            {menu.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{menu.tagline}</p>

          {/* Category Tabs inside Phone */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginTop: '12px', scrollbarWidth: 'none' }}>
            {menu.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: activeCategory === cat ? '#10b981' : 'rgba(255, 255, 255, 0.06)',
                  color: activeCategory === cat ? '#000000' : 'var(--text-secondary)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List inside Phone */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '14px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#ffffff' }}>{item.name}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.3', marginTop: '2px' }}>
                  {item.desc}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#34d399', marginTop: '4px' }}>
                  ₹{item.price}.00
                </div>
              </div>

              <button
                onClick={() => handleAddItem(item)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)',
                }}
                aria-label={`Add ${item.name}`}
              >
                <Plus size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* AI Upsell Prompt Toast Popup inside Phone */}
        {activeUpsell && (
          <div
            style={{
              position: 'absolute',
              bottom: '72px',
              left: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
              border: '1px solid #6366f1',
              borderRadius: '16px',
              padding: '14px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
              zIndex: 30,
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 800, color: '#818cf8' }}>
                <Sparkles size={14} /> AI PAIRING SUGGESTION
              </div>
              <button
                onClick={() => setActiveUpsell(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            </div>

            <p style={{ fontSize: '0.78rem', color: '#ffffff', marginBottom: '8px', lineHeight: '1.4' }}>
              {activeUpsell.message}
            </p>

            <button
              onClick={handleAcceptUpsell}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '8px',
                background: '#6366f1',
                border: 'none',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>Add {activeUpsell.suggestedItem.name}</span>
              <span>(+₹{activeUpsell.suggestedItem.price}.00)</span>
            </button>
          </div>
        )}

        {/* Bottom Cart Bar inside Phone */}
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(15, 23, 42, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
              ₹{cartTotal}.00
            </div>
          </div>

          <button
            onClick={() => setOrderPlaced(true)}
            disabled={cart.length === 0}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              border: 'none',
              background: cart.length > 0 ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
              color: cart.length > 0 ? '#000000' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: cart.length > 0 ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <ShoppingBag size={14} />
            <span>{orderPlaced ? 'Order Sent ✓' : 'Send Order'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
