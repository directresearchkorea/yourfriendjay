import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check } from 'lucide-react';

export default function HitJay({ personal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="section" id="hit-jay">
      <div className="container">
        <div className="contact-card">
          <div style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '16px' }}>
            Get In Touch
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>Hit Jay</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Combining deep human research expertise with hands-on product engineering, I transform raw market and user research data into interactive, intelligent live data. Let's connect and bring your insights to life.
          </p>

          <div className="hit-jay-actions">
            {personal.email && (
              <a href="https://www.thedrk.com/contact/" target="_blank" rel="noreferrer" className="btn btn-primary">
                <Mail size={18} />
                <span>Send Request</span>
              </a>
            )}
            
            {personal.email && (
              <button onClick={handleCopyEmail} className="btn btn-secondary">
                {copied ? <Check size={18} style={{ color: '#10b981' }} /> : <Copy size={18} />}
                <span>{copied ? 'Copied Email!' : 'Copy Email Address'}</span>
              </button>
            )}

            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
