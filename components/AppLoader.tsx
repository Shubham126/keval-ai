'use client';

import { useEffect, useState } from 'react';

interface AppLoaderProps {
  children: React.ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // No jQuery dependency - just wait for page load
    const handleLoad = () => {
      setTimeout(() => setIsReady(true), 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]" suppressHydrationWarning>
        <div className="flex flex-col items-center gap-5" suppressHydrationWarning>
          <div className="w-[50px] h-[50px] border-4 border-gray-200 border-t-[#0d0670] rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return <div suppressHydrationWarning>{children}</div>;
}
