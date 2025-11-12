'use client';

import { useEffect } from 'react';
import {
  initializeMainScripts,
  initializeGSAPAnimations,
  initializeMatterSimulation,
} from '@/lib/scripts';

export default function ScriptsInitializer() {
  useEffect(() => {
    // No jQuery dependencies - initialize immediately
    initializeMainScripts();
    initializeGSAPAnimations();
    initializeMatterSimulation();
  }, []);

  return null;
}

