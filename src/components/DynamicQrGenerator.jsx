import React, { useState } from 'react';
import { QrCode, Sparkles, Download, ArrowRight, Eye, Check, Utensils, Wifi } from 'lucide-react';

export default function DynamicQrGenerator({ onOpenDemoModal, onShowToast }) {
  const [restaurantName, setRestaurantName] = useState('The Saffron Lounge');
  const [tableNumber, setTableNumber] = useState('Table #04');
  const [cardTheme, setCardTheme] = useState('obsidian'); // 'obsidian' | 'emerald' | 'crimson'
  const [isDownloading, setIsDownloading] = useState(false);

  const themeStyles = {
    obsidian: {
      bg: 'linear-gradient(145deg, #111827 0%, #030712 100%)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      accent: '#34d399',
      qrBg: '#ffffff',
      qrFg: '#0f172a',
      text: '#ffffff',
      label: 'Obsidian Luxury',
    },
    emerald: {
      bg: 'linear-gradient(145deg, #064e3b 0%, #022c22 100%)',
      border: '1px solid rgba(52, 211, 153, 0.4)',
      accent: '#10b981',
      qrBg: '#ffffff',
      qrFg: '#064e3b',
      text: '#ffffff',
      label: 'Emerald Prime',
    },
    crimson: {
      bg: 'linear-gradient(145deg, #450a0a 0%, #1f0404 100%)',
      border: '1px solid rgba(239, 68, 68, 0.4)',
      accent: '#ef4444',
      qrBg: '#ffffff',
      qrFg: '#450a0a',
      text: '#ffffff',
      label: 'Crimson Bistro',
    },
  };

  const activeTheme = themeStyles[cardTheme];

  // Dynamic QR Code SVG matrix URL using standard QR generator API with restaurant payload
  const qrData = encodeURIComponent(`https://restromind.ai/m/${encodeURIComponent(restaurantName.toLowerCase().replace(/\s+/g, '-'))}?table=${encodeURIComponent(tableNumber)}`);
  const qrImgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&color=${activeTheme.qrFg.replace('#', '')}&bgcolor=ffffff&margin=1`;

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      if (onShowToast) onShowToast(`Custom QR Stand for "${restaurantName}" generated!`);
      if (onOpenDemoModal) onOpenDemoModal();
    }, 900);
  };

  return (
    <section className="section" style={{ background: 'rgba(7, 9, 14, 0.65)', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Interactive Personalization</span>
          <h2 className="section-title">
            Generate Your Restaurant's <span className="gradient-text">Table QR Stand</span>
          </h2>
          <p className="section-subtitle">
            Type your venue name below to see a real-time customized acrylic table stand preview.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', maxWidth: '1020px', margin: '0 auto' }}>
          {/* Left Controls */}
          <div className="glass-card" style={{ padding: '36px 30px' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#10b981" /> Customize Your Table Stand
            </h3>

            {/* Input 1: Restaurant Name */}
            <div className="form-group">
              <label className="form-label">Restaurant / Venue Name</label>
              <input
                type="text"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="e.g. The Olive Branch"
                className="form-input"
                maxLength={32}
              />
            </div>

            {/* Input 2: Table Designation */}
            <div className="form-group">
              <label className="form-label">Table / Booth Number</label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="e.g. Table #04 or Patio 2"
                className="form-input"
                maxLength={18}
              />
            </div>

            {/* Theme Selector */}
            <div className="form-group" style={{ marginBottom: '28px' }}>
              <label className="form-label">Table Card Theme</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {Object.entries(themeStyles).map(([key, t]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCardTheme(key)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '10px',
                      border: cardTheme === key ? `2px solid ${t.accent}` : '1px solid rgba(255, 255, 255, 0.1)',
                      background: cardTheme === key ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.6)',
                      color: cardTheme === key ? '#ffffff' : 'var(--text-secondary)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={16} />
                <span>{isDownloading ? 'Generating Print PDF...' : 'Download Custom QR Stand PDF'}</span>
              </button>
              <button
                onClick={onOpenDemoModal}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Request Acrylic Stand Samples →</span>
              </button>
            </div>
          </div>

          {/* Right Live Table Stand Preview */}
          <div style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
            <div
              style={{
                width: '280px',
                background: activeTheme.bg,
                border: activeTheme.border,
                borderRadius: '24px',
                padding: '28px 24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(16, 185, 129, 0.2)',
                textAlign: 'center',
                position: 'relative',
                transform: 'rotateY(-4deg) rotateX(4deg)',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Stand Header Notch */}
              <div style={{ width: '40px', height: '4px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', margin: '0 auto 16px' }} />

              {/* Mini Brand Logo */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <img src="/logo-icon.png" alt="RestroMind" style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
                  RESTROMIND AI
                </span>
              </div>

              {/* Restaurant Dynamic Name */}
              <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', marginBottom: '4px', letterSpacing: '-0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {restaurantName || 'Your Restaurant'}
              </h4>

              {/* Table Number Pill */}
              <div style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.1)', color: activeTheme.accent, fontWeight: 700, fontSize: '0.75rem', padding: '3px 12px', borderRadius: '9999px', marginBottom: '18px' }}>
                {tableNumber || 'Table #01'}
              </div>

              {/* Center QR Code Container */}
              <div
                style={{
                  background: '#ffffff',
                  padding: '12px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                  display: 'inline-block',
                  marginBottom: '18px',
                }}
              >
                <img
                  src={qrImgSrc}
                  alt="Dynamic Restaurant QR"
                  style={{ width: '140px', height: '140px', display: 'block' }}
                />
              </div>

              {/* Scan Callout */}
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Scan to View Dynamic Menu
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.4' }}>
                ⚡ No App Download Required • Direct Kitchen Dispatch
              </div>

              {/* Stand Base Details */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '12px', marginTop: '16px', fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Wifi size={12} /> Guest Wi-Fi Ready
                </span>
                <span>Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
