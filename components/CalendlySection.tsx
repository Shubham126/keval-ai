'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScheduleSection() {
  const [shouldLoadCalendly, setShouldLoadCalendly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load Calendly when section is visible
    if (!containerRef.current || scriptLoadedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !scriptLoadedRef.current) {
          // Defer loading even more - wait for idle time
          const loadCalendly = () => {
            if (scriptLoadedRef.current) return;
            
            // Load Calendly script only when user is likely to interact
            if ('requestIdleCallback' in window) {
              (window as any).requestIdleCallback(() => {
                if (!scriptLoadedRef.current) {
                  setShouldLoadCalendly(true);
                  scriptLoadedRef.current = true;
                }
              }, { timeout: 3000 });
            } else {
              setTimeout(() => {
                if (!scriptLoadedRef.current) {
                  setShouldLoadCalendly(true);
                  scriptLoadedRef.current = true;
                }
              }, 2000);
            }
          };

          loadCalendly();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before section is visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadCalendly) return;

    // Load Calendly script only when needed
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [shouldLoadCalendly]);

  return (
    <section ref={containerRef} className="bg-white py-10 px-5">
      <div className="section-title">
        <h3 className="text-center mb-8 text-[28px] font-semibold text-black">
          Schedule a Meet
        </h3>
      </div>

      {shouldLoadCalendly ? (
        <div
          className="calendly-inline-widget rounded-lg"
          data-url="https://calendly.com/kevalai24/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
      ) : (
        <div 
          className="rounded-lg bg-gray-100 flex items-center justify-center"
          style={{ minWidth: '320px', height: '700px' }}
        >
          <p className="text-gray-500">Loading calendar...</p>
        </div>
      )}
    </section>
  );
}
