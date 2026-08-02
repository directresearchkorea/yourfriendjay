import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
