/* ----------------------------------------------------
   Jay Ahn - Personal Profile Website Dynamic Logic
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  initNavbar();
  initScrollAnimations();
});

/* 1. Theme Management (Dark / Light Mode) */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

/* 2. Render Profile Data from profileData (js/data.js) */
function renderProfile() {
  if (typeof profileData === 'undefined') return;

  const { personal, highlights, experience, skills, projects, education, certifications } = profileData;

  // Personal Info
  if (personal) {
    document.getElementById('nav-logo-text').textContent = personal.name;
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title-sub').textContent = personal.title;
    document.getElementById('hero-bio').textContent = personal.tagline || personal.bio;
    document.getElementById('about-full-text').textContent = personal.bio;
    document.getElementById('hero-availability').textContent = personal.availability;

    document.getElementById('card-name').textContent = personal.name;
    document.getElementById('card-title').textContent = personal.title;
    document.getElementById('avatar-initials').textContent = getInitials(personal.name);

    document.getElementById('footer-name').textContent = personal.name;

    // Contact buttons
    const emailBtn = document.getElementById('contact-email-btn');
    if (emailBtn && personal.email) {
      emailBtn.href = `mailto:${personal.email}`;
      document.getElementById('contact-email-text').textContent = personal.email;
    }

    const linkedinBtn = document.getElementById('contact-linkedin-btn');
    if (linkedinBtn && personal.linkedin) {
      linkedinBtn.href = personal.linkedin;
    }

    // Social Links
    const socialContainer = document.getElementById('social-links');
    if (socialContainer) {
      socialContainer.innerHTML = `
        ${personal.linkedin ? `<a href="${personal.linkedin}" target="_blank" class="social-btn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>` : ''}
        ${personal.github ? `<a href="${personal.github}" target="_blank" class="social-btn" title="GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
        ${personal.email ? `<a href="mailto:${personal.email}" class="social-btn" title="Email"><i class="fa-solid fa-envelope"></i></a>` : ''}
      `;
    }
  }

  // Highlights / Stats
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && highlights) {
    statsGrid.innerHTML = highlights.map(h => `
      <div class="stat-item">
        <div class="stat-number">${h.number}</div>
        <div class="stat-label">${h.label}</div>
      </div>
    `).join('');
  }

  // Experience Timeline
  const timelineEl = document.getElementById('experience-timeline');
  if (timelineEl && experience) {
    timelineEl.innerHTML = experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-period">${exp.period}</span>
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company">
            <i class="fa-solid fa-building"></i>
            <span>${exp.company} (${exp.location})</span>
          </div>
          <p class="timeline-summary">${exp.summary}</p>
          ${exp.achievements ? `
            <ul class="timeline-achievements">
              ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
          ` : ''}
          ${exp.skills ? `
            <div class="skill-tags">
              ${exp.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && skills) {
    skillsContainer.innerHTML = skills.map(cat => `
      <div class="skill-card">
        <h3 class="skill-card-title">
          <i class="fa-solid fa-code-branch gradient-text"></i>
          <span>${cat.category}</span>
        </h3>
        <div class="skill-list">
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-item-header">
                <span>${item.name}</span>
                <span>${item.level}%</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" data-level="${item.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Featured Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid && projects) {
    projectsGrid.innerHTML = projects.map(p => `
      <div class="project-card">
        <div class="project-body">
          <div class="project-tagline">${p.tagline}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="skill-tags" style="margin-bottom: 20px;">
            ${p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            ${p.link ? `<a href="${p.link}" target="_blank" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : ''}
            ${p.github ? `<a href="${p.github}" target="_blank" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;"><i class="fa-brands fa-github"></i> Code</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Education & Certifications
  const eduContainer = document.getElementById('edu-cert-container');
  if (eduContainer) {
    let eduHTML = '';
    if (education) {
      eduHTML += `
        <div class="skill-card">
          <h3 class="skill-card-title">
            <i class="fa-solid fa-graduation-cap gradient-text"></i>
            <span>Education</span>
          </h3>
          ${education.map(e => `
            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 1.1rem; color: var(--text-primary);">${e.degree}</h4>
              <p style="color: var(--accent-primary); font-weight: 600; font-size: 0.9rem;">${e.institution} (${e.period})</p>
              <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">${e.details}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (certifications) {
      eduHTML += `
        <div class="skill-card">
          <h3 class="skill-card-title">
            <i class="fa-solid fa-certificate gradient-text"></i>
            <span>Certifications</span>
          </h3>
          ${certifications.map(c => `
            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 1.1rem; color: var(--text-primary);">${c.title}</h4>
              <p style="color: var(--accent-primary); font-weight: 600; font-size: 0.9rem;">${c.issuer} &bull; ${c.year}</p>
            </div>
          `).join('')}
        </div>
      `;
    }
    eduContainer.innerHTML = eduHTML;
  }

  // Update Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function getInitials(name) {
  if (!name) return 'JA';
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

/* 3. Sticky Navbar & Active Link Highlights */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* 4. Intersection Observer for Reveal Animations & Skill Bars */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill progress bars if inside this section
        const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
        progressBars.forEach(bar => {
          const targetLevel = bar.getAttribute('data-level');
          if (targetLevel) {
            bar.style.width = targetLevel;
          }
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(reveal => revealObserver.observe(reveal));
}
