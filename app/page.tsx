'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientOnly from '@/components/ClientOnly';
import ResetOnRouteChange from '@/components/ResetOnRouteChange';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ServicesSection from '@/components/ServicesSection';
import MarqueeSection from '@/components/MarqueeSection';
import CounterSection from '@/components/CounterSection';
import ChallengesSection from '@/components/ChallengesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalendlySection from '@/components/CalendlySection';

export default function Home() {
  useEffect(() => {
    // Re-initialize animations after hydration
    const initAnimations = () => {
      // Re-initialize WOW.js
      if (typeof window !== 'undefined' && (window as any).WOW) {
        const wow = new (window as any).WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      }

      // Re-initialize GSAP animations if needed
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        
        // Re-initialize reveal animations
        const revealElements = document.querySelectorAll('.tp_reveal_anim');
        revealElements.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Re-initialize character animations if SplitText is available
      if (typeof window !== 'undefined' && (window as any).SplitText) {
        const charElements = document.querySelectorAll('.tp-char-animation');
        charElements.forEach((element) => {
          if (!element.hasAttribute('data-animated')) {
            element.setAttribute('data-animated', 'true');
            // GSAP character animation will be handled by customer-gsap-animation.js
          }
        });
      }
    };

    // Initialize animations immediately if ready, otherwise wait for load
    let timer: NodeJS.Timeout | null = null;
    
    if (document.readyState === 'complete') {
      // Small delay to ensure scripts are initialized
      timer = setTimeout(initAnimations, 100);
    } else {
      window.addEventListener('load', initAnimations);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener('load', initAnimations);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff' }}>
        <ClientOnly>
          <HeroSection />
        </ClientOnly>
        <ClientOnly>
          <BrandSection />
        </ClientOnly>
        <ClientOnly>
          <ResetOnRouteChange>
            <ProjectSection />
          </ResetOnRouteChange>
        </ClientOnly>
        <ClientOnly>
          <ResetOnRouteChange>
            <TestimonialSection />
          </ResetOnRouteChange>
        </ClientOnly>
        <ClientOnly>
          <TechnologiesSection />
        </ClientOnly>
        <ClientOnly>
          <ServicesSection />
        </ClientOnly>
        <ClientOnly>
          <ChallengesSection />
        </ClientOnly>
        <ClientOnly>
          <FeaturesSection />
        </ClientOnly>
        <ClientOnly>
          <CounterSection />
        </ClientOnly>
        <ClientOnly>
          <CalendlySection />
        </ClientOnly>
        <ClientOnly>
          <MarqueeSection />
        </ClientOnly>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

