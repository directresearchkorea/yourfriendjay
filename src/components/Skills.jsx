import React from 'react';
import { Code2 } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Capabilities</p>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-container">
          {skills.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="skill-card-title">
                <Code2 size={20} style={{ color: 'var(--accent-primary)' }} />
                <span>{cat.category}</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.95rem' }}>
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
