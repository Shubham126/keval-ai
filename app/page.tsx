'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
import {
  initializeMainScripts,
  initializeGSAPAnimations,
  initializeAnimations,
} from '@/lib/scripts';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize animations on pathname change
    setTimeout(() => {
      initializeAnimations();
      initializeMainScripts();
      initializeGSAPAnimations();
    }, 300);
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

