'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

// Adapter for fadeInUp
const V = (delay = 0) => {
  const v: any = fadeInUp;
  return typeof v === 'function' ? v(delay) : v;
};

export default function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const words = useMemo(
    () => ['AI Solutions', 'Innovation', 'Technology', 'Excellence'],
    []
  );

  useEffect(() => {
    if (!typingRef.current) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!typingRef.current) return;
      const currentWord = words[wordIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          typingRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          timeoutId = setTimeout(type, 40);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(type, 500);
        }
      } else {
        if (charIndex < currentWord.length) {
          typingRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          timeoutId = setTimeout(type, 70);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(type, 1400);
        }
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [words]);

  return (
    <section className="relative h-screen w-full flex items-center bg-cover bg-center">
      {/* Optimized background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/keval-image/banners/Home-Banner.jpg"
          alt="Hero background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
        />
      </div>
      {/* Left Gradient Overlay (for readability) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#f68041]/80 via-white/30 to-transparent" />

      <div className="container mx-auto h-full flex items-center px-0 md:px0 relative z-10">
        <div className="w-full lg:w-1/2">

          {/* Heading line 1 - Render immediately for LCP */}
          <h1
            className="text-white font-bold leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}
          >
            Empowering
          </h1>

          {/* Heading line 2 - LCP element, render immediately without animation */}
          <h1
            className="text-white font-bold leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Diamond Trade With
          </h1>

          {/* Typing animation line */}
          <motion.h1
            variants={V(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-theme font-bold leading-none mb-8"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
              minHeight: 'clamp(2.5rem, 6vw, 4.2rem)',
            }}
          >
            <span ref={typingRef} className="inline-block min-w-[200px]" style={{ minHeight: 'inherit' }}></span>
            <span className="text-theme">.</span>
          </motion.h1>

          {/* Buttons */}
          <div className="flex gap-5 mt-6">
            <Link href="/contact" className="theme-btn border-white">
              GET IN TOUCH
            </Link>

            <Link href="/portfolio" className="theme-btn border-white">
              SEE OUR WORK
            </Link>
          </div>


        </div>

        {/* Hero Image Right Side */}
        <div className="hidden lg:block w-1/2 relative">
          <motion.div
            variants={V(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            {/* Hero image can be added here if needed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
