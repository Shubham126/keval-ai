import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';

// Dynamically import heavy components for code splitting
const ProjectSection = dynamic(() => import('@/components/ProjectSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const TechnologiesSection = dynamic(() => import('@/components/TechnologiesSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const MarqueeSection = dynamic(() => import('@/components/MarqueeSection'), {
  loading: () => <div style={{ minHeight: '100px' }} />,
});
const CounterSection = dynamic(() => import('@/components/CounterSection'), {
  loading: () => <div style={{ minHeight: '300px' }} />,
});
const ChallengesSection = dynamic(() => import('@/components/ChallengesSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const CalendlySection = dynamic(() => import('@/components/CalendlySection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main style={{ backgroundColor: '#ffffff' }}>
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

