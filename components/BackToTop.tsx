'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@/components/Icons';

/**
 * Back to top button component (replaces jQuery back-to-top)
 * Matches original CSS specifications exactly
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial position

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-top"
          initial={{ opacity: 0, y: 20, visibility: 'hidden' }}
          animate={{ opacity: 1, y: 0, visibility: 'visible' }}
          exit={{ opacity: 0, y: 20, visibility: 'hidden' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="fixed right-[30px] bottom-[30px] z-[999] 
                     w-[50px] h-[50px] rounded-full 
                     bg-[var(--theme)] hover:bg-[var(--header)]
                     text-white flex items-center justify-center
                     transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-[18px] h-[18px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
