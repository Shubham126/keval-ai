'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlySection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={{ backgroundColor: '#ffffff' }}>
      <div className="section-title style-4 title-anim">
        <h3 className="text-center mt-5 heading_text" style={{ color: '#000000' }}>schedule a meet</h3>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/asadkhan41376/30min"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </section>
  );
}

