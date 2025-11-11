'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MouseCursor() {
  const pathname = usePathname();

  useEffect(() => {
    // disable cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let cursorInner: HTMLElement | null = null;
    let cursorOuter: HTMLElement | null = null;

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
    };

    const timeoutId = setTimeout(initCursor, 80);

    // smooth tracking using rAF throttle
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (cursorOuter) cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          if (cursorInner) cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    // hover logic
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!cursorInner || !cursorOuter) return;

      const isSwiperSlide = target.closest('.swiper-slide');
      const isSwiperWrapper = target.closest('.swiper-wrapper');
      const isLink =
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.swiper-dot');

      if (isSwiperSlide || (isSwiperWrapper && !target.closest('.swiper-dot'))) {
        cursorInner.classList.remove('cursor-hover');
        cursorOuter.classList.remove('cursor-hover');
        return;
      }

      if (isLink) {
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
