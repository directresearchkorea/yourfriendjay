import React, { useEffect, useState, useRef } from 'react';

export default function AntigravityCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.case-card') ||
        target.closest('.profile-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId;

    const animate = () => {
      // Lerp ring towards mouse position
      const lerpFactor = 0.15;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerpFactor;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${isHovered ? 1.8 : 1})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // Disable custom cursor on touch/mobile devices
  }

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className={`custom-cursor-dot ${isVisible ? 'visible' : ''}`} 
      />
      <div 
        ref={cursorRingRef} 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`} 
      />
    </>
  );
}
