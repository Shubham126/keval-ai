'use client';

import { useEffect, useState } from 'react';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { ArrowUp } from '@/components/Icons';

/**
 * Back to top button component (replaces jQuery back-to-top)
 */
export default function BackToTop() {
  const isScrolled = useScrollPosition(20);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!mounted) return null;

  return (
    <button
      id="back-top"
      onClick={scrollToTop}
      className={`back-top ${isScrolled ? 'show' : ''}`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
