import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
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
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <BrandSection />
        <ProjectSection />
        <TestimonialSection />
        <TechnologiesSection />
        <ServicesSection />
        <ChallengesSection />
        <FeaturesSection />
        <CounterSection />
        <CalendlySection />
        <MarqueeSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

