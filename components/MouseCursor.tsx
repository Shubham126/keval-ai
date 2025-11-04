'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MouseCursor() {
  const pathname = usePathname();

  useEffect(() => {
    // Only enable cursor effect on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    // Initialize cursor with retry logic
    const initCursor = () => {
      const cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
      const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;

      if (!cursorInner || !cursorOuter) {
        // Retry after a short delay if elements not found
        setTimeout(initCursor, 100);
        return;
      }

      // Show cursor
      cursorInner.style.visibility = 'visible';
      cursorInner.style.pointerEvents = 'none';
      cursorOuter.style.visibility = 'visible';
      cursorOuter.style.pointerEvents = 'none';
    };

    // Wait a bit to ensure DOM is ready, then initialize
    const timeoutId = setTimeout(initCursor, 100);

    // Mouse move handler with throttling for better performance
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;
          const cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
          
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

    // Add hover effects for links and cursor-pointer elements
    // Exclude Swiper elements to prevent interference
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorInner = document.querySelector('.cursor-inner');
      const cursorOuter = document.querySelector('.cursor-outer');
      
      if (!cursorInner || !cursorOuter) return;
      
      // Check if it's a Swiper element (but allow swiper navigation dots)
      const isSwiperSlide = target.closest('.swiper-slide');
      const isSwiperWrapper = target.closest('.swiper-wrapper');
      const isSwiperContainer = target.closest('.swiper') && !target.closest('.swiper-dot');
      
      // Don't apply hover effects to Swiper slide elements
      if (isSwiperSlide || (isSwiperWrapper && !target.closest('.swiper-dot'))) {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
        return;
      }
      
      // Allow cursor hover on pagination dots
      const isLink = target.closest('a') || target.classList.contains('cursor-pointer');
      
      if (isLink || target.closest('.swiper-dot')) {
        cursorInner.classList.add('cursor-hover');
        cursorOuter.classList.add('cursor-hover');
      } else {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleLinkHover);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [pathname]); // Re-run on route changes

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}

