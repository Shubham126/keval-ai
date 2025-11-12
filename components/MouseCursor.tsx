'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function MouseCursor() {
  const pathname = usePathname();
  const outerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // disable cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let cursorInner: HTMLElement | null = null;
    let cursorOuter: HTMLElement | null = null;
    let animationFrameId: number;

    // Continuous animation loop for outer cursor and inner dot positioning
    const animateCursors = () => {
      if (cursorOuter && cursorInner) {
        // Smooth interpolation (lag effect) - outer follows mouse with delay
        outerRef.current.x += (mouseX - outerRef.current.x) * 0.15;
        outerRef.current.y += (mouseY - outerRef.current.y) * 0.15;
        
        // Update outer circle position
        cursorOuter.style.left = `${outerRef.current.x}px`;
        cursorOuter.style.top = `${outerRef.current.y}px`;
        
        // Inner dot stays at the center of the outer circle
        cursorInner.style.left = `${outerRef.current.x}px`;
        cursorInner.style.top = `${outerRef.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(animateCursors);
    };

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const initCursor = () => {
      cursorInner = document.querySelector('.cursor-inner') as HTMLElement;
      cursorOuter = document.querySelector('.cursor-outer') as HTMLElement;

      if (!cursorInner || !cursorOuter) {
        setTimeout(initCursor, 80);
        return;
      }

      cursorInner.style.visibility = 'visible';
      cursorOuter.style.visibility = 'visible';
      cursorInner.style.pointerEvents = 'none';
      cursorOuter.style.pointerEvents = 'none';
      
      // Initialize positions to center of screen
      outerRef.current = { x: mouseX, y: mouseY };
      cursorOuter.style.left = `${mouseX}px`;
      cursorOuter.style.top = `${mouseY}px`;
      cursorInner.style.left = `${mouseX}px`;
      cursorInner.style.top = `${mouseY}px`;
      
      // Start animation loop after initialization
      animationFrameId = requestAnimationFrame(animateCursors);
    };

    const timeoutId = setTimeout(initCursor, 80);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // hover logic
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!cursorInner || !cursorOuter) return;

      const isSwiperSlide = target.closest('.swiper-slide');
      const isSwiperWrapper = target.closest('.swiper-wrapper');
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input[type="submit"]') ||
        target.closest('input[type="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.swiper-dot');

      if (isSwiperSlide || (isSwiperWrapper && !target.closest('.swiper-dot'))) {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
        return;
      }

      if (isInteractive) {
        cursorInner.classList.add('cursor-hover');
        cursorOuter.classList.add('cursor-hover');
      } else {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [pathname]);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}
