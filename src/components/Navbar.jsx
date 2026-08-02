import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

const ICAL_URLS = [
  'https://calendar.google.com/calendar/ical/yourfriendjay%40gmail.com/public/basic.ics',
  'https://calendar.google.com/calendar/ical/directresearchkorea%40gmail.com/public/basic.ics'
];

function parseICalDate(str) {
  if (!str) return null;
  const clean = str.replace(/[^0-9TZ]/g, '');
  if (clean.length === 8) {
    const y = parseInt(clean.slice(0, 4), 10);
    const m = parseInt(clean.slice(4, 6), 10) - 1;
    const d = parseInt(clean.slice(6, 8), 10);
    return new Date(Date.UTC(y, m, d, 0, 0, 0));
  }
  if (clean.includes('T')) {
    const [dp, tp] = clean.split('T');
    const y = parseInt(dp.slice(0, 4), 10);
    const m = parseInt(dp.slice(4, 6), 10) - 1;
    const d = parseInt(dp.slice(6, 8), 10);
    const hh = parseInt(tp.slice(0, 2), 10);
    const mm = parseInt(tp.slice(2, 4), 10);
    const ss = parseInt(tp.slice(4, 6), 10) || 0;
    return clean.endsWith('Z')
      ? new Date(Date.UTC(y, m, d, hh, mm, ss))
      : new Date(y, m, d, hh, mm, ss);
  }
  return null;
}

const KOREAN_HOLIDAYS = [
  '01-01', // 신정
  '03-01', // 삼일절
  '05-05', // 어린이날
  '06-06', // 현충일
  '08-15', // 광복절
  '10-03', // 개천절
  '10-09', // 한글날
  '12-25', // 성탄절
  '2026-02-16', '2026-02-17', '2026-02-18', // 2026 설날
  '2026-05-24', // 부처님오신날
  '2026-08-17', // 광복절 대체공휴일
  '2026-09-24', '2026-09-25', '2026-09-26', // 추석
];

function isKoreanHolidayOrWeekend(kstDate) {
  const day = kstDate.getDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0 || day === 6) return true;

  const mm = String(kstDate.getMonth() + 1).padStart(2, '0');
  const dd = String(kstDate.getDate()).padStart(2, '0');
  const mmdd = `${mm}-${dd}`;
  const yyyymmdd = `${kstDate.getFullYear()}-${mm}-${dd}`;

  return KOREAN_HOLIDAYS.includes(mmdd) || KOREAN_HOLIDAYS.includes(yyyymmdd);
}

export default function Navbar({ name, scheduleConfig }) {
  const [kstTimeStr, setKstTimeStr] = useState('');
  const [status, setStatus] = useState({ label: 'Available', color: 'green' });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Fetch Google Calendar iCal Events from all linked accounts
  useEffect(() => {
    let isMounted = true;

    const fetchSingleCalendar = async (url) => {
      try {
        let text = '';
        try {
          const res = await fetch(url);
          if (res.ok) text = await res.text();
        } catch (e) {
          const proxyRes = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
          if (proxyRes.ok) text = await proxyRes.text();
        }
        if (!text) return [];

        const blocks = text.split('BEGIN:VEVENT').slice(1);
        return blocks.map(b => {
          const summary = (b.match(/SUMMARY:(.*)/) || [,'Busy'])[1].trim();
          const dtstartStr = (b.match(/DTSTART.*:(.*)/) || [,''])[1].trim();
          const dtendStr = (b.match(/DTEND.*:(.*)/) || [,''])[1].trim();
          return {
            summary,
            start: parseICalDate(dtstartStr),
            end: parseICalDate(dtendStr)
          };
        }).filter(e => e.start && e.end);
      } catch (err) {
        console.error('Error fetching calendar:', url, err);
        return [];
      }
    };

    const fetchAllEvents = async () => {
      const results = await Promise.all(ICAL_URLS.map(url => fetchSingleCalendar(url)));
      const mergedEvents = results.flat();
      if (isMounted) setCalendarEvents(mergedEvents);
    };

    fetchAllEvents();
    const calInterval = setInterval(fetchAllEvents, 300000); // refresh every 5 mins
    return () => {
      isMounted = false;
      clearInterval(calInterval);
    };
  }, []);

  useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      const kstDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
      
      const hours = kstDate.getHours();
      const minutes = kstDate.getMinutes();
      const seconds = kstDate.getSeconds();
      
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedTime = `KST ${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
      
      setKstTimeStr(formattedTime);

      // Check if there is an active event in Google Calendar right now
      const activeCalEvent = calendarEvents.find(e => now >= e.start && now <= e.end);

      if (activeCalEvent) {
        const label = activeCalEvent.summary === 'Busy' || !activeCalEvent.summary ? 'In a Meeting' : activeCalEvent.summary;
        setStatus({ label, color: 'red' });
        return;
      }

      // Schedule fallback status
      // - 23:00 (11 PM) ~ 08:00 (8 AM): Sleeping
      // - Weekends / Public Holidays (non-sleeping): Off Duty
      // - Weekdays 08:00 ~ 10:00: Getting Ready
      // - Weekdays 10:00 ~ 18:30: Working
      // - Otherwise: Available
      const currentDecimalHour = hours + minutes / 60;
      const isSleeping = currentDecimalHour >= 23 || currentDecimalHour < 8;

      if (isSleeping) {
        setStatus({ label: 'Sleeping', color: 'orange' });
        return;
      }

      const isHoliday = isKoreanHolidayOrWeekend(kstDate);
      if (isHoliday) {
        setStatus({ label: 'Off Duty', color: 'orange' });
        return;
      }

      const isGettingReady = currentDecimalHour >= 8 && currentDecimalHour < 10;
      if (isGettingReady) {
        setStatus({ label: 'Getting Ready', color: 'orange' });
      } else if (currentDecimalHour >= 10 && currentDecimalHour < 18.5) {
        setStatus({ label: 'Working', color: 'green' });
      } else {
        setStatus({ label: 'Available', color: 'green' });
      }
    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ['hero', 'projects', 'cases', 'hit-jay'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2.5) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scheduleConfig, calendarEvents]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Top-Left Widget: Status Dot, KST Clock */}
        <div className="top-left-widget">
          <div className="status-indicator">
            <span className={`status-dot ${status.color}`}></span>
            <span className="kst-clock">{kstTimeStr}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({status.label})</span>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="nav-menu">
          <li>
            <MagneticButton href="#hero" className="nav-link-btn">
              <span className={`nav-link ${activeSection === 'hero' ? 'cta-btn' : ''}`}>Home</span>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton href="#projects" className="nav-link-btn">
              <span className={`nav-link ${activeSection === 'projects' ? 'cta-btn' : ''}`}>Projects</span>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton href="#cases" className="nav-link-btn">
              <span className={`nav-link ${activeSection === 'cases' ? 'cta-btn' : ''}`}>Insights</span>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton href="#hit-jay" className="nav-link-btn">
              <span className={`nav-link ${activeSection === 'hit-jay' ? 'cta-btn' : ''}`}>Hit Jay</span>
            </MagneticButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}
