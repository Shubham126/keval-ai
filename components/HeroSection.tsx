'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const words = useMemo(() => ['AI Solutions', 'Innovation', 'Technology', 'Excellence'], []);

  useEffect(() => {
    if (!typingRef.current) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!typingRef.current) return;
      
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (charIndex > 0) {
          typingRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          timeoutId = setTimeout(type, 50); 
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(type, 500); 
        }
      } else {
        if (charIndex < currentWord.length) {
          typingRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          timeoutId = setTimeout(type, 80); // Faster typing
        } else {
          isDeleting = true;
          timeoutId = setTimeout(type, 1500); // Shorter display time
        }
      }
    };

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [words]);

  return (
    <section
      className="hero-section hero-1 bg-cover"
      style={{
        backgroundImage: "url('/assets/keval-image/banners/Home-Banner.jpg')",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center mt-5">
          <div className="col-xl-7 mt-5">
            <div className="hero-content px-5">
              <h1 className="wow fadeInUp my-2" data-wow-delay=".3s" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', fontWeight: 'bold' }}>
                  Empowering
                </h1>
                <h1 className="wow fadeInUp my-2" data-wow-delay=".3s" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', fontWeight: 'bold'}}>
                  Diamond Trade with
                </h1>
                <h1 className="wow fadeInUp my-2" data-wow-delay=".3s" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', fontWeight: 'bold'}}>
                  <strong ref={typingRef}></strong><span>.</span>
                </h1>
            </div>
            <div className="px-5 d-flex justify-content-start align-items-center gap-3 mt-4">
              <div className="header-button">
                <Link href="/about" className="theme-btn2 border-white">
                  <span className="icon-1"></span>
                  get in touch
                  <span className="icon-2"></span>
                </Link>
              </div>
              <div className="header-button">
                <Link href="/portfolio" className="theme-btn2 border-white">
                  <span className="icon-1"></span>
                  See our Work
                  <span className="icon-2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

