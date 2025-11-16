'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

interface Testimonial {
  image: string;
  name: string;
  position: string;
  text: string;
}

// Base testimonials
const baseTestimonials: Testimonial[] = [
  {
    image: '/assets/keval-image/testimonal/Dalila-CEO.jpg',
    name: 'A. De Vries',
    position: 'Dalila CEO',
    text: `Working with Keval AI completely transformed our online presence. Their new gem-industry website design not only looks stunning, but also doubled our conversion rate in just a month. Highly recommend their tech + marketing combo!`,
  },
  {
    image: '/assets/keval-image/testimonal/Donai-co-founder.jpg',
    name: 'M. Janssens',
    position: 'Donai Co-Founder',
    text: `We wanted a robust inventory + ERP system tailored for our diamond business. Keval AI delivered it ahead of schedule, seamless integration, and very responsive support. Their niche expertise showed every step of the way.`,
  },
  {
    image: '/assets/keval-image/testimonal/Millenium-Inventory.jpg',
    name: 'L. Bertrand',
    position: 'Millenium Inventory Executive',
    text: `From MVP development to final launch, Keval AI's team was professional, creative, and detail-oriented. The site is fast, beautiful, and our leads have grown significantly. They truly understand high conversion.`,
  },
];

// Duplicate multiple times for seamless looping with cards effect
// EffectCards needs more slides for proper loop mode (at least 6-9 slides)
const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

// Quote Icon SVG Component
const QuoteIcon = () => (
  <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_205_1662)">
      <path d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z" fill="#59D2F3" />
      <path d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z" fill="#59D2F3" />
    </g>
    <defs>
      <clipPath id="clip0_205_1662">
        <rect width="27" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Star Icon SVG Component - Using SVG instead of Font Awesome
const StarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#FCD554"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-visible py-20 lg:py-24 bg-cover bg-center bg-black">
      {/* Optimized background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/testimonial/bg.jpg"
          alt="Testimonial background"
          fill
          loading="lazy"
          quality={70}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative z-[2]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* ===== LEFT CONTENT ===== */}
            <div className="testimonial-content">
              
              {/* Section Label - "testimonials" */}
              <motion.h6
                variants={fadeInUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-montserrat text-[20px] font-normal text-[var(--theme2)] uppercase leading-none inline-block mb-5"
              >
                testimonials
              </motion.h6>
              
              {/* Main Heading - "Our clients awesome Testimonials" */}
              <h2 className="font-montserrat text-[42px] font-medium text-white uppercase leading-[89%] mb-0">
                Our clients awesome Testimonials
              </h2>

              {/* Rating Box: 50 + 5 Stars */}
              <motion.div
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex rounded-[10px] border border-[#323232] bg-black px-[30px] py-[25px] gap-[14px] min-w-[295px] mt-[30px]"
              >
                <h3 className="text-white text-[60px] font-normal font-montserrat leading-none m-0">
                  <span>50</span>
                </h3>
                <div className="content flex items-center">
                  <div className="text-[#FCD554] flex gap-1 items-center -mt-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <div className="mt-5">
                <Link 
                  href="/about" 
                  className="theme-btn border-white"
                >
                  connect with us
                </Link>
              </div>
            </div>

            {/* ===== RIGHT SIDE - CARDS SLIDER ===== */}
            <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
              <Swiper
                modules={[EffectCards, Autoplay, Pagination]}
                effect="cards"
                grabCursor={true}
                loop={true}
                speed={2000}
                spaceBetween={30}
                allowTouchMove={true}
                watchSlidesProgress={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                cardsEffect={{
                  perSlideOffset: 5, // Reduced for closer cards
                  perSlideRotate: 1.5, // Reduced rotation for better organization
                  rotate: true,
                  slideShadows: true,
                }}
                pagination={{
                  el: '.swiper-dot .dot',
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                  type: 'bullets',
                  dynamicBullets: false,
                  dynamicMainBullets: 1,
                  renderBullet: function (index: number, className: string) {
                    // Only render 3 bullets (one per original slide)
                    // Swiper will call this for all 6 slides, but we only render for first 3
                    if (index >= baseTestimonials.length) {
                      return '';
                    }
                    return '<span class="' + className + '"></span>';
                  },
                }}
                onInit={(swiper) => {
                  // Ensure only 3 bullets are visible on init
                  if (swiper.pagination && swiper.pagination.bullets) {
                    const bullets = swiper.pagination.bullets;
                    bullets.forEach((bullet: HTMLElement, index: number) => {
                      if (index >= baseTestimonials.length) {
                        bullet.style.display = 'none';
                        bullet.style.visibility = 'hidden';
                      }
                    });
                  }
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  
                  // Limit pagination to only show 3 bullets (one per original slide)
                  setTimeout(() => {
                    if (swiper.pagination && swiper.pagination.bullets) {
                      const bullets = swiper.pagination.bullets;
                      // Hide bullets beyond the original count
                      for (let i = baseTestimonials.length; i < bullets.length; i++) {
                        if (bullets[i]) {
                          (bullets[i] as HTMLElement).style.display = 'none';
                        }
                      }
                    }
                    
                    // Start autoplay after swiper is initialized
                    if (swiper.autoplay) {
                      swiper.autoplay.start();
                    }
                  }, 200);
                }}
                onSlideChange={(swiper) => {
                  // Update active index for pagination (use realIndex for loop mode)
                  const realIdx = swiper.realIndex % baseTestimonials.length;
                  setActiveIndex(realIdx);
                  
                  // Ensure pagination shows correct active bullet based on realIndex
                  if (swiper.pagination && swiper.pagination.bullets) {
                    const bullets = swiper.pagination.bullets;
                    bullets.forEach((bullet: HTMLElement, index: number) => {
                      if (index < baseTestimonials.length) {
                        // Use realIndex to determine active state
                        const isActive = index === realIdx;
                        if (isActive) {
                          bullet.classList.add('swiper-pagination-bullet-active');
                        } else {
                          bullet.classList.remove('swiper-pagination-bullet-active');
                        }
                      }
                    });
                  }
                }}
                className="testimonial-slider w-full !overflow-visible"
                style={{ 
                  paddingTop: '20px',
                  paddingBottom: '40px',
                  height: 'auto',
                }}
              >
                {testimonials.map((item, i) => {
                  // Use modulo to get original index for animations
                  const originalIndex = i % baseTestimonials.length;
                  return (
                    <SwiperSlide 
                      key={i} 
                      className="!flex !items-center !justify-center !h-auto"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: originalIndex * 0.1 }}
                        className="p-[30px] md:p-[40px] border border-[#434343] bg-[#222] rounded-[15px] ml-0 md:ml-[40px] w-full max-w-[540px]"
                      >
                        {/* Client Info */}
                        <div className="flex items-center gap-[15px] mb-[30px]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="rounded-full w-16 h-16 object-cover"
                          />
                          <div className="client-content">
                            <h5 className="font-montserrat text-[20px] font-medium text-white m-0">
                              {item.name}
                            </h5>
                            <p className="font-source-sans text-base text-white/50 capitalize m-0 mt-1">
                              {item.position}
                            </p>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex gap-[15px]">
                          <div className="icon flex-shrink-0">
                            <QuoteIcon />
                          </div>
                          <span className="font-source-sans text-[18px] italic text-white leading-[1.5]">
                            {item.text}
                          </span>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
                </Swiper>

                {/* Swiper Pagination - Matching Original HTML Structure */}
                <div className="swiper-dot mt-[50px] text-center">
                  <div className="dot"></div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
