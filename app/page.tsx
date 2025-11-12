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
import BrandSection from '@/components/BrandSection';
import ServicesSection from '@/components/ServicesSection';
import CounterSection from '@/components/CounterSection';
import ChallengesSection from '@/components/ChallengesSection';
import FeaturesSection from '@/components/FeaturesSection';

// Lazy load heavy components with Swiper/GSAP
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
      // GSAP animations can wait even longer
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          initializeGSAPAnimations();
        }, { timeout: 1000 });
      } else {
        setTimeout(() => initializeGSAPAnimations(), 500);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

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

