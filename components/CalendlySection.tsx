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
    <section style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}>
      <div className="section-title">
        <h3 
          style={{ 
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '600',
            color: '#000000'
          }}
        >
          Schedule a Meet
        </h3>
      </div>
      
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/kevalai24/30min"
        style={{
          minWidth: '320px',
          height: '700px',
          borderRadius: '8px'
        }}
      />
    </section>
  );
}
