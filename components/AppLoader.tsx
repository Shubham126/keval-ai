'use client';

import { useEffect, useState } from 'react';

interface AppLoaderProps {
  children: React.ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fast check - only wait for jQuery (critical dependency)
    const checkScriptsReady = () => {
      // Check if jQuery is available (critical dependency)
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        return true;
      }
      return false;
    };

    // Immediate check first
    if (checkScriptsReady()) {
      // jQuery already loaded, show content immediately
      setIsReady(true);
      return;
    }

    // Fast polling with smaller intervals
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max (50 * 100ms)
    const checkInterval = 50; // Check every 50ms for faster response

    const checkIntervalId = setInterval(() => {
      attempts++;

      if (checkScriptsReady()) {
        clearInterval(checkIntervalId);
        // Minimal delay just to ensure DOM is ready
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      } else if (attempts >= maxAttempts) {
        // Timeout - show content anyway to prevent infinite loading
        clearInterval(checkIntervalId);
        setIsReady(true);
      }
    }, checkInterval);

    // Also listen for window load as backup
    const handleLoad = () => {
      if (checkScriptsReady()) {
        clearInterval(checkIntervalId);
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      clearInterval(checkIntervalId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isReady) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #0d0670',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style jsx>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

