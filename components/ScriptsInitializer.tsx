'use client';

import { useEffect } from 'react';
import {
  initializeMainScripts,
  initializeGSAPAnimations,
  initializeMatterSimulation,
} from '@/lib/scripts';

export default function ScriptsInitializer() {
  useEffect(() => {
    // Initialize critical scripts immediately
    initializeMainScripts();
    
    // Defer non-critical animations until after initial render
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback for non-critical scripts, fallback to setTimeout
      const scheduleNonCritical = (callback: () => void) => {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(callback, { timeout: 2000 });
        } else {
          setTimeout(callback, 100);
        }
      };
      
      scheduleNonCritical(async () => {
        await initializeGSAPAnimations();
      });
      
      // Matter.js simulation can wait even longer
      scheduleNonCritical(() => {
        setTimeout(() => {
          initializeMatterSimulation();
        }, 500);
      });
    }
  }, []);

  return null;
}

