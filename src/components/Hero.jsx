import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

export default function Hero({ personal, highlights }) {
  const getInitials = (name) => {
    if (!name) return 'JA';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content">
        <div className="hero-text">

          <h1 className="hero-title">
            <RevealText>Hi, I'm </RevealText> <RevealText delayOffset={0.2} className="gradient-text">{personal.name}</RevealText>
          </h1>
          <p className="hero-subtitle"><RevealText delayOffset={0.4}>{personal.title}</RevealText></p>
          <p className="hero-description">
            {personal.tagline.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line === '' ? (
                  <span style={{ display: 'block', height: '14px' }} />
                ) : (
                  <RevealText delayOffset={0.6 + (idx * 0.08)}>{line}</RevealText>
                )}
                {idx !== personal.tagline.split('\n').length - 1 && line !== '' && <br />}
              </React.Fragment>
            ))}
          </p>





          <div className="hero-profile" style={{ display: 'inline-block', margin: '2rem auto 0', position: 'relative', zIndex: 10 }}>
            <div className="avatar-wrapper" style={{ overflow: 'hidden', borderRadius: '50%', margin: '0 auto' }}>
              <img src="/jay-photo.jpg" alt="Jay Ahn Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%' }} />
            </div>
            <div className="social-links" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              {personal.linkedin && (
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
              )}
              {personal.email && (
                <a href={`mailto:${personal.email}`} className="social-btn" title="Email">
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="hero-highlights" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✦</span>
                <RevealText delayOffset={0.8 + (i * 0.1)}>{h}</RevealText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
