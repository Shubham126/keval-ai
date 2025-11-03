'use client';

import { useEffect } from 'react';

export default function MouseCursor() {
  useEffect(() => {
    // Only enable cursor effect on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
    const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;

    if (!cursorInner || !cursorOuter) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorOuter) {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (cursorInner) {
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Show cursor
    if (cursorInner) cursorInner.style.visibility = 'visible';
    if (cursorOuter) cursorOuter.style.visibility = 'visible';

    // Add hover effects for links and cursor-pointer elements
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.classList.contains('cursor-pointer');
      
      if (isLink) {
        cursorInner?.classList.add('cursor-hover');
        cursorOuter?.classList.add('cursor-hover');
      } else {
        cursorInner?.classList.remove('cursor-hover');
        cursorOuter?.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}

