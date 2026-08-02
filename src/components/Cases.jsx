import React from 'react';
import { TrendingUp, Layers, Users } from 'lucide-react';
import RevealText from './RevealText';

export default function Cases({ cases }) {
  const getIcon = (category) => {
    if (category.includes('Architecture')) return <Layers size={20} style={{ color: 'var(--accent-primary)' }} />;
    if (category.includes('Leadership')) return <Users size={20} style={{ color: 'var(--accent-primary)' }} />;
    return <TrendingUp size={20} style={{ color: 'var(--accent-primary)' }} />;
  };

  return (
    <section className="section" id="cases" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle"><RevealText>Leadership & Product Impact</RevealText></p>
          <h2 className="section-title"><RevealText delayOffset={0.2}>Insights</RevealText></h2>
        </div>

        <div className="cases-grid">
          {cases.map((c) => (
            <div key={c.id} className="case-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {c.category}
                </span>
                {getIcon(c.category)}
              </div>
              
              {c.image && (
                <a href={c.link} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '180px', overflow: 'hidden', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                  <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </a>
              )}

              <a href={c.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{c.title}</h3>
              </a>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: 600 }}>
                {c.client}
              </p>

              <div style={{ background: 'var(--bg-tertiary)', padding: '10px 16px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
                {c.metrics}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {c.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
