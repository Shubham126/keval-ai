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

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Ensure autoplay works reliably
  useEffect(() => {
    const startAutoplay = () => {
      const swiper = swiperRef.current;
      if (swiper && swiper.autoplay && !swiper.destroyed) {
        try {
          swiper.autoplay.start();
        } catch {
          // fallback retry
          setTimeout(() => swiper.autoplay?.start?.(), 200);
        }
      }
    };

    // Start autoplay when DOM fully loads
    if (document.readyState === 'complete') startAutoplay();
    else window.addEventListener('load', startAutoplay);

    // Check autoplay status every 2s
    const monitor = setInterval(startAutoplay, 2000);

    return () => {
      clearInterval(monitor);
      window.removeEventListener('load', startAutoplay);
    };
  }, []);

  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/img/testimonial/bg.jpg')",
      }}
    >
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">testimonials</h6>
                  <h2 className="text-white tp-char-animation">
                    Our clients awesome Testimonials
                  </h2>
                </div>

                <div className="ratting-box wow fadeInUp" data-wow-delay=".5s">
                  <h3>
                    <span className="count">50</span>
                  </h3>
                  <div className="content">
                    <div className="star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="header-button mt-5">
                  <Link href="/about" className="theme-btn border-white">
                    <span className="icon-1"></span>
                    connect with us
                    <span className="icon-2"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ✅ Swiper Slider */}
            <div className="col-lg-6">
              <Swiper
                modules={[Autoplay, EffectCards]}
                effect="cards"
                grabCursor
                loop
                speed={800}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="testimonial-slider"
              >
                {testimonials.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-box-items">
                      <div className="client-info">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-circle"
                        />
                        <div className="client-content">
                          <h5>{item.name}</h5>
                          <p>{item.position}</p>
                        </div>
                      </div>
                      <div className="testi-content">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
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
                        <span>{item.text}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-dot">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === activeIndex ? 'dot-active' : ''}`}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
