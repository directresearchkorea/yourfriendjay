import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact({ personal }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Let's Connect & Collaborate</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.05rem' }}>
            Whether you have a project idea, leadership opportunity, or just want to connect, feel free to reach out!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                <Mail size={18} />
                <span>{personal.email}</span>
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
