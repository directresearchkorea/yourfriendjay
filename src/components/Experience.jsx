import React from 'react';
import { Building } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{exp.role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>
                  <Building size={16} />
                  <span>{exp.company} ({exp.location})</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>{exp.summary}</p>

                {exp.achievements && (
                  <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
                    {exp.achievements.map((a, idx) => (
                      <li key={idx} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.skills && (
                  <div className="skill-tags">
                    {exp.skills.map((s, idx) => (
                      <span key={idx} className="skill-tag">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
