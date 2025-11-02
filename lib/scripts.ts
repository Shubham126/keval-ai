'use client';

export const initializeAnimations = () => {
  if (typeof window === 'undefined') return;

  // Initialize WOW.js if available
  if ((window as any).WOW) {
    new (window as any).WOW().init();
  }
};

export const initializeGSAP = () => {
  if (typeof window === 'undefined') return;

  // Initialize GSAP ScrollTrigger if available
  if ((window as any).gsap && (window as any).ScrollTrigger) {
    (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
  }
};

