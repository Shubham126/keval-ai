'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientOnly from '@/components/ClientOnly';
import ResetOnRouteChange from '@/components/ResetOnRouteChange';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CounterSection from '@/components/CounterSection';
import ChallengesSection from '@/components/ChallengesSection';
import WeKnowSection from '@/components/WeKnowSection';

// Lazy load heavy components with Swiper/GSAP to reduce critical CSS
const BrandSection = dynamic(() => import('@/components/BrandSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProjectSection = dynamic(() => import('@/components/ProjectSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const TechnologiesSection = dynamic(() => import('@/components/TechnologiesSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const MarqueeSection = dynamic(() => import('@/components/MarqueeSection'), {
  loading: () => null,
});
const CalendlySection = dynamic(() => import('@/components/CalendlySection'), {
  loading: () => <div className="min-h-[400px]" />,
});
import {
  initializeMainScripts,
  initializeGSAPAnimations,
  initializeAnimations,
} from '@/lib/scripts';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Defer heavy animations until after initial render
    const timer = setTimeout(() => {
      initializeAnimations();
      initializeMainScripts();
      // GSAP animations can wait even longer - lazy load GSAP when needed
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(async () => {
          await initializeGSAPAnimations();
        }, { timeout: 2000 });
      } else {
        setTimeout(async () => {
          await initializeGSAPAnimations();
        }, 1000);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff' }}>
        <HeroSection />
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
          <WeKnowSection />
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

