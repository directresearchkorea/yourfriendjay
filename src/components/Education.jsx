import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education({ education, certifications }) {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Background</p>
          <h2 className="section-title">Education & Credentials</h2>
        </div>

        <div className="skills-container">
          {education && (
            <div className="skill-card">
              <h3 className="skill-card-title">
                <GraduationCap size={20} style={{ color: 'var(--accent-primary)' }} />
                <span>Education</span>
              </h3>
              {education.map((e, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem' }}>{e.degree}</h4>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{e.institution} ({e.period})</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>{e.details}</p>
                </div>
              ))}
            </div>
          )}

          {certifications && (
            <div className="skill-card">
              <h3 className="skill-card-title">
                <Award size={20} style={{ color: 'var(--accent-primary)' }} />
                <span>Certifications</span>
              </h3>
              {certifications.map((c, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem' }}>{c.title}</h4>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{c.issuer} &bull; {c.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
