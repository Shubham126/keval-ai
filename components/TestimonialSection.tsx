'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-cards';

interface Testimonial {
  image: string;
  name: string;
  position: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/assets/keval-image/testimonal/Dalila-CEO.jpg',
    name: 'A. De Vries',
    position: 'Dalila CEO',
    text: `Working with Keval AI completely transformed our online presence.`,
  },
  {
    image: '/assets/keval-image/testimonal/Donai-co-founder.jpg',
    name: 'M. Janssens',
    position: 'Donai Co-Founder',
    text: `We wanted a robust inventory + ERP system tailored for our diamond business.`,
  },
  {
    image: '/assets/keval-image/testimonal/Millenium-Inventory.jpg',
    name: 'L. Bertrand',
    position: 'Millenium Inventory Executive',
    text: `From MVP development to final launch, Keval AI's team was professional and detail-oriented.`,
  },
];

// SVG Star Component
const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Aggressive infinite loop implementation
  useEffect(() => {
    let autoplayInterval: NodeJS.Timeout | null = null;

    const startManualAutoplay = () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      
      autoplayInterval = setInterval(() => {
        const swiper = swiperRef.current;
        if (swiper && !swiper.destroyed) {
          // Check if we're at the last slide
          if (swiper.activeIndex >= testimonials.length - 1) {
            // Reset to first slide
            swiper.slideTo(0);
          } else {
            // Move to next slide
            swiper.slideNext();
          }
        }
      }, 3000); // 3 seconds delay
    };

    // Start after a short delay to ensure Swiper is ready
    const initTimer = setTimeout(startManualAutoplay, 500);

    return () => {
      clearTimeout(initTimer);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <section
      className="relative overflow-visible py-20 lg:py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/img/testimonial/bg.jpg')",
        backgroundColor: '#000',
      }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative z-[2]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* ===== LEFT CONTENT ===== */}
            <div className="testimonial-content">
              
              {/* Section Label */}
              <h6 className="text-[#FD7E31] uppercase tracking-[1px] text-[13px] font-semibold mb-4 font-heading">
                TESTIMONIALS
              </h6>
              
              {/* Main Heading */}
              <h2 className="text-white text-[38px] lg:text-[48px] xl:text-[52px] leading-[1.1] font-bold font-heading m-0 mb-10">
                OUR CLIENTS AWESOME<br />TESTIMONIALS
              </h2>

              {/* Rating Section: 50 + SVG Stars */}
              <div className="mb-12">
                <h3 className="text-white text-[56px] lg:text-[64px] font-bold m-0 leading-none mb-3">
                  50
                </h3>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className="w-[22px] h-[22px] text-[#FFD700]" 
                    />
                  ))}
                </div>
              </div>

              {/* CTA Button - Orange */}
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="theme-btn"
                >
                  CONNECT WITH US
                </Link>
              </div>
            </div>

            {/* ===== RIGHT SIDE - CARDS SLIDER ===== */}
            <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
              <div className="relative" style={{ paddingBottom: '60px' }}>
                <Swiper
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                  loop={false}
                  speed={800}
                  allowTouchMove={true}
                  cardsEffect={{
                    perSlideOffset: 12,
                    perSlideRotate: 3,
                    rotate: true,
                    slideShadows: true,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                  }}
                  className="testimonial-slider w-full !overflow-visible"
                  style={{ 
                    paddingTop: '20px',
                    paddingBottom: '40px',
                  }}
                >
                  {testimonials.map((item, i) => (
                    <SwiperSlide key={i} className="!flex !items-center !justify-center">
                      <article
                        className="w-full rounded-[24px] p-10 shadow-2xl"
                        style={{
                          background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          maxWidth: '540px',
                        }}
                      >
                        {/* Client Header - Image + Info */}
                        <div className="flex gap-5 items-center mb-10">
                          <div className="w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={90}
                              height={90}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h5 className="m-0 text-[19px] lg:text-[21px] text-white font-bold tracking-wide font-heading uppercase">
                              {item.name}
                            </h5>
                            <p className="mt-2 mb-0 text-[#a0a0a0] text-[14px]">
                              {item.position}
                            </p>
                          </div>
                        </div>

                        {/* Quote + Text */}
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="20"
                              viewBox="0 0 27 20"
                              fill="none"
                            >
                              <path
                                d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z"
                                fill="#59D2F3"
                              />
                              <path
                                d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z"
                                fill="#59D2F3"
                              />
                            </svg>
                          </div>
                          <p className="m-0 text-[17px] lg:text-[18px] leading-[1.65] text-white/95 font-normal italic">
                            {item.text}
                          </p>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Dot Navigation - Centered Below Cards */}
                <div 
                  className="absolute bottom-0 left-0 right-0 flex gap-3 items-center justify-center z-10" 
                  role="tablist" 
                  aria-label="testimonial navigation"
                >
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`
                        w-[12px] h-[12px] rounded-full transition-all duration-300 cursor-pointer
                        ${i === activeIndex 
                          ? 'bg-[#59D2F3] scale-125 shadow-lg shadow-[#59D2F3]/40' 
                          : 'bg-[#555555] hover:bg-[#666666]'
                        }
                      `}
                      onClick={() => swiperRef.current?.slideTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      aria-pressed={i === activeIndex}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
