import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

export default function Projects({ projects, focusStatement }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle"><RevealText>Craft & Engineering</RevealText></p>
          <h2 className="section-title"><RevealText delayOffset={0.2}>Projects</RevealText></h2>
        </div>

        {focusStatement && (
          <div 
            className="focus-statement-box" 
            style={{ 
              margin: '0 auto 3rem', 
              padding: '16px 24px', 
              maxWidth: '640px', 
              borderRadius: '16px', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-hover)', 
              boxShadow: 'var(--card-shadow)',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--accent-primary)', marginBottom: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
              CURRENT FOCUS
            </div>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
              Currently, I am working on projects that transform clients' dead data into <span className="gradient-text" style={{ fontWeight: 800 }}>interactive live data</span> with AI.
            </p>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((p) => {
            const handleCardClick = (e) => {
              if (e.target.closest('a') || e.target.closest('button')) {
                return;
              }
              if (p.link) {
                if (p.link.startsWith('http')) {
                  window.open(p.link, '_blank', 'noopener,noreferrer');
                } else {
                  window.location.href = p.link;
                }
              }
            };

            return (
              <div 
                key={p.id} 
                className="project-card"
                onClick={handleCardClick}
                style={{ cursor: p.link ? 'pointer' : 'default' }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '8px' }}>
                {p.tagline}
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>
                {p.description}
              </p>
              
              <div className="skill-tags" style={{ marginBottom: '24px' }}>
                {p.tags.map((t, idx) => (
                  <span key={idx} className="skill-tag">{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                {p.link && (
                  <MagneticButton href={p.link} className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem', display: 'flex', gap: '6px', alignItems: 'center', borderRadius: '50px' }}>
                    <ExternalLink size={14} /> {p.linkLabel || 'Demo'}
                  </MagneticButton>
                )}
                {p.github && (
                  <MagneticButton href={p.github} className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem', display: 'flex', gap: '6px', alignItems: 'center', borderRadius: '50px' }}>
                    <Github size={14} /> Code
                  </MagneticButton>
                )}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
