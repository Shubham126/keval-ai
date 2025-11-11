'use client';

import { useEffect } from 'react';

export default function ScheduleSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-white py-10 px-5">
      <div className="section-title">
        <h3 className="text-center mb-8 text-[28px] font-semibold text-black">
          Schedule a Meet
        </h3>
      </div>

      <div
        className="calendly-inline-widget rounded-lg"
        data-url="https://calendly.com/kevalai24/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  );
}
