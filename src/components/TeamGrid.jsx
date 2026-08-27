import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Sparkles, Award } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';
import { fetchTeamMembers } from '../api/endpoints';

export default function TeamGrid() {
  const [teamMembers, setTeamMembers] = useState(TEAM_MEMBERS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const res = await fetchTeamMembers();
        if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
          setTeamMembers(res.data);
        }
      } catch (err) {
        console.warn('Using local team fallback:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadTeam();
  }, []);

  const categories = ['All', 'Leadership', 'Engineering', 'Analytics & Strategy'];

  const filteredMembers = activeCategory === 'All'
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Leadership & Core Team</span>
          <h2 className="section-title">
            The Minds Behind <span className="gradient-text">RestroMind AI</span>
          </h2>
          <p className="section-subtitle">
            Meet the core team building the next generation of autonomous restaurant intelligence.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: 'inline-flex', background: 'rgba(15, 23, 42, 0.8)', padding: '6px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '28px', gap: '6px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: activeCategory === cat ? '#10b981' : 'transparent',
                  color: activeCategory === cat ? '#000000' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {filteredMembers.map((member, idx) => (
            <div key={idx} className="glass-card-interactive" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '36px 24px' }}>
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <img
                  src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=34d399&size=200`}
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=34d399&size=200`;
                  }}
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid rgba(16, 185, 129, 0.5)',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    padding: '4px',
                    display: 'flex',
                  }}
                >
                  <Sparkles size={14} color="#10b981" />
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '4px', color: '#ffffff' }}>{member.name}</h3>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399', marginBottom: '14px' }}>
                {member.role}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                {member.bio}
              </p>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', width: '100%', justifyContent: 'center' }}>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <Linkedin size={20} />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
