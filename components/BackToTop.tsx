'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-top"
      className="back-to-top fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
      onClick={scrollToTop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        padding: 0,
      }}
    >
      <i className="fa-regular fa-arrow-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
    </button>
  );
}

