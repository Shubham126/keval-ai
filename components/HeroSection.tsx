'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// fadeInUp animation variant
const fadeInUpVariant = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    }
  },
};

export default function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const words = ["CRM Solutions", "Ai Automation", "Digital Solutions", "Trading Platforms"];

  useEffect(() => {
    if (!typingRef.current) return;

    const type = () => {
      if (!typingRef.current) return;

      const currentWord = words[wordIndexRef.current];

      if (!isDeletingRef.current && charIndexRef.current < currentWord.length) {
        // Typing: 200ms per character
        typingRef.current.textContent = currentWord.substring(0, charIndexRef.current + 1);
        charIndexRef.current++;
        setTimeout(type, 200);
      } else if (!isDeletingRef.current && charIndexRef.current === currentWord.length) {
        // Add full stop after typing completes
        typingRef.current.textContent = currentWord + '.';
        // Delay after typing completes: 200ms
        setTimeout(() => {
          isDeletingRef.current = true;
          charIndexRef.current = currentWord.length + 1; // Include full stop in count
          type();
        }, 200);
      } else if (isDeletingRef.current && charIndexRef.current > 0) {
        // Erasing: 100ms per character (faster deletion)
        if (charIndexRef.current === currentWord.length + 1) {
          // First delete the full stop
          typingRef.current.textContent = currentWord;
          charIndexRef.current--;
        } else {
          // Then delete characters one by one
          typingRef.current.textContent = currentWord.substring(0, charIndexRef.current - 1);
          charIndexRef.current--;
        }
        setTimeout(type, 100);
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        // Clear the text completely before next word
        typingRef.current.textContent = '';
        // Delay before next word: 200ms
        setTimeout(() => {
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          charIndexRef.current = 0;
          type();
        }, 200);
      }
    };

    type();
  }, [words]);

  return (
    <section className="relative h-screen w-full bg-cover bg-center pt-[100px] pb-[160px] flex items-center z-[1] 
      max-[1199px]:pt-[180px] max-[1199px]:pb-[180px]
      max-[767px]:pt-[150px] max-[767px]:pb-[150px]
      max-[575px]:pt-[130px] max-[575px]:pb-[130px]">
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
      <div className="absolute inset-0 bg-linear-to-r from-[#f68041]/80 via-white/30 to-transparent z-[1]" />

      {/* Container Fluid */}
      <div className="w-full mx-auto px-[60px] 
        max-[1600px]:px-[50px]
        max-[1399px]:px-[40px]
        max-[1199px]:px-[30px] relative z-[2]">
        
        {/* Row */}
        <div className="flex items-center mt-12">
          
          {/* Column Content */}
          <div className="w-full lg:w-[58.333%] mt-12">
            
            {/* Hero Content */}
            <div className="px-12">
              
              {/* Heading line 1 - fadeInUp animation */}
              <motion.h1
                variants={fadeInUpVariant}
                initial="hidden"
                animate="visible"
                className="font-heading text-white font-semibold capitalize my-2 leading-[80%]
                  text-[60px]
                  max-[1399px]:text-[40px]
                  max-[1199px]:text-[40px]
                  max-[991px]:text-[50px] max-[991px]:leading-[90%]
                  max-[767px]:text-[50px]
                  max-[575px]:text-[50px] max-[575px]:leading-[100%]"
                style={{ marginTop: '20px' }}
              >
                Empowering
              </motion.h1>

              {/* Heading line 2 - fadeInUp animation */}
              <motion.h1
                variants={fadeInUpVariant}
                initial="hidden"
                animate="visible"
                className="font-heading text-white font-semibold capitalize my-2 leading-[80%]
                  text-[60px]
                  max-[1399px]:text-[40px]
                  max-[1199px]:text-[40px]
                  max-[991px]:text-[50px] max-[991px]:leading-[90%]
                  max-[767px]:text-[50px]
                  max-[575px]:text-[50px] max-[575px]:leading-[100%]"
              >
                Diamond Trade With
              </motion.h1>

              {/* Typing animation line - fadeInUp animation */}
              <motion.h1
                variants={fadeInUpVariant}
                initial="hidden"
                animate="visible"
                className="font-heading font-semibold capitalize my-2 leading-[80%]
                  text-[60px]
                  max-[1399px]:text-[40px]
                  max-[1199px]:text-[40px]
                  max-[991px]:text-[50px] max-[991px]:leading-[90%]
                  max-[767px]:text-[50px]
                  max-[575px]:text-[50px] max-[575px]:leading-[100%]"
                style={{ minHeight: 'clamp(2.5rem, 6vw, 4.2rem)' }}
              >
                <strong className="font-semibold text-[#0B2546]" id="typing-text">
                  <span ref={typingRef} className="inline-block min-w-[200px]" style={{ minHeight: 'inherit' }}></span>
                </strong>
              </motion.h1>
              {/* Button Container */}
              <div className="flex justify-start items-center gap-4 mt-2">
                <Link href="/contact" className="hero-btn">
                  GET IN TOUCH
                </Link>

                <Link href="/portfolio" className="hero-btn">
                  SEE OUR WORK
                </Link>
              </div>

            </div>
          </div>

          {/* Hero Image Right Side */}
          <div className="hidden lg:block w-[41.667%] relative">
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              animate="visible"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              {/* Hero image can be added here if needed */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
