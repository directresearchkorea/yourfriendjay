import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

export default function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle"><RevealText>Craft & Engineering</RevealText></p>
          <h2 className="section-title"><RevealText delayOffset={0.2}>Projects</RevealText></h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
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
          ))}
        </div>
      </div>
    </section>
  );
}
