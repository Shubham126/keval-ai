'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize cursor position off-screen
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for outer cursor (slight delay)
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isHoveringLink =
        target.tagName === 'A' ||
        !!target.closest('a') ||
        !!target.closest('.cursor-pointer') ||
        target.tagName === 'BUTTON' ||
        !!target.closest('button') ||
        !!target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isHoveringLink);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = '';
    };
  }, [cursorX, cursorY, mounted]);

  // Hide cursor on touch devices
  if (!mounted || (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0))) {
    return null;
  }

  return (
    <>
      {/* Inner Cursor */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none rounded-full z-[10000001] bg-[var(--theme)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        animate={{
          width: isHovering ? 70 : 6,
          height: isHovering ? 70 : 6,
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />

      {/* Outer Cursor */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none rounded-full w-[30px] h-[30px] border border-[var(--theme)] z-[10000000] box-border"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        animate={{
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{
          duration: 0.08,
          ease: 'easeOut',
        }}
      />
    </>
  );
}
