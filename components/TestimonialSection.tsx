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
                  <h2 className="text-white tp-char-animation"
                  style = {{
                    fontSize: '48px',
                    font: 'bold'
                  }}>
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

            {/* ✅ Swiper Slider with AUTOPLAY */}
            <div className="col-lg-6">
              <Swiper
                modules={[Autoplay, EffectCards]}
                effect="cards"
                grabCursor
                loop={false}
                speed={600}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  waitForTransition: true,
                  reverseDirection: false,
                }}
                cardsEffect={{
                  perSlideRotate: 2,
                  perSlideOffset: 8,
                  rotate: true,
                  slideShadows: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  // Loop back to first slide when reaching the end
                  if (swiper.activeIndex === testimonials.length - 1) {
                    setTimeout(() => {
                      swiper.slideTo(0);
                    }, 3000);
                  }
                }}
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

              {/* ✅ Dots */}
              <div className="swiper-dot">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === activeIndex ? 'dot-active' : ''}`}
                    onClick={() => {
                      swiperRef.current?.slideTo(i);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Inline Styles */}
      <style jsx>{`
        .testimonial-box-items {
          background: #1e1e1e;
          border-radius: 20px;
          padding: 30px;
          color: #fff;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testi-content {
          margin-top: 15px;
          color: #e6f8ff;
          font-size: 15px;
          line-height: 1.6;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .client-content h5 {
          margin: 0;
          font-size: 16px;
          color: #fff;
        }

        .client-content p {
          margin: 0;
          color: #9fdfff;
          font-size: 14px;
        }

        .icon svg {
          width: 27px;
          height: 20px;
        }

        /* ✅ Dots */
        .swiper-dot {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #444;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot-active {
          background: linear-gradient(90deg, #59d2f3, #008cff);
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(89, 210, 243, 0.8);
        }

        .ratting-box h3 {
          color: #fff;
          font-size: 40px;
          font-weight: 600;
        }

        .ratting-box .star i {
          color: #ffd166;
          margin-right: 4px;
        }

        @media (max-width: 991px) {
          .testimonial-box-items {
            padding: 20px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
