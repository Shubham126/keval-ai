'use client';

import { useEffect, useState } from 'react';

interface AppLoaderProps {
  children: React.ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkScriptsReady = () => {
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        return true;
      }
      return false;
    };

    if (checkScriptsReady()) {
      setIsReady(true);
      return;
    }

    let attempts = 0;
    const maxAttempts = 50;
    const checkInterval = 50;

    const checkIntervalId = setInterval(() => {
      attempts++;

      if (checkScriptsReady()) {
        clearInterval(checkIntervalId);
        setTimeout(() => setIsReady(true), 100);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkIntervalId);
        setIsReady(true);
      }
    }, checkInterval);

    const handleLoad = () => {
      if (checkScriptsReady()) {
        clearInterval(checkIntervalId);
        setTimeout(() => setIsReady(true), 100);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearInterval(checkIntervalId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
        <div className="flex flex-col items-center gap-5">
          <div className="w-[50px] h-[50px] border-4 border-gray-200 border-t-[#0d0670] rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
