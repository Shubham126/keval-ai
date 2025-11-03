'use client';

import { useEffect } from 'react';

export default function MouseCursor() {
  useEffect(() => {
    // Only enable cursor effect on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    // Wait a bit to ensure DOM is ready
    const initCursor = () => {
      const cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
      const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;

      if (!cursorInner || !cursorOuter) {
        // Retry after a short delay if elements not found
        setTimeout(initCursor, 100);
        return;
      }

      // Mouse move handler with throttling for better performance
      let ticking = false;
      const handleMouseMove = (e: MouseEvent) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (cursorOuter) {
              cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (cursorInner) {
              cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      // Show cursor
      if (cursorInner) {
        cursorInner.style.visibility = 'visible';
        cursorInner.style.pointerEvents = 'none';
      }
      if (cursorOuter) {
        cursorOuter.style.visibility = 'visible';
        cursorOuter.style.pointerEvents = 'none';
      }

      // Add hover effects for links and cursor-pointer elements
      // Exclude Swiper elements to prevent interference
      const handleLinkHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isSwiperElement = target.closest('.swiper') || target.closest('.swiper-wrapper') || target.closest('.swiper-slide');
        
        // Don't apply hover effects to Swiper elements
        if (isSwiperElement) {
          cursorInner?.classList.remove('cursor-hover');
          cursorOuter?.classList.remove('cursor-hover');
          return;
        }
        
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
    };

    const cleanup = initCursor();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}

