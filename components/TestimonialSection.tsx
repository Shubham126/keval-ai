'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
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

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

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
            {/* Left Content */}
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

            {/* Right Slider */}
            <div className="col-lg-6">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination, EffectCards]}
                effect="cards"
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={2000}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                  const dots = paginationRef.current?.querySelectorAll('.dot');
                  dots?.forEach((dot, index) => {
                    // Use activeIndex with modulo to handle loop mode correctly
                    const activeIndex = swiper.activeIndex % testimonials.length;
                    const dotIndex = parseInt(dot.getAttribute('data-index') || '0');
                    if (dotIndex === activeIndex) {
                      dot.classList.add('dot-active');
                    } else {
                      dot.classList.remove('dot-active');
                    }
                  });
                }}
                onInit={(swiper) => {
                  // Initialize active dot on load
                  const dots = paginationRef.current?.querySelectorAll('.dot');
                  const activeIndex = swiper.activeIndex % testimonials.length;
                  dots?.forEach((dot, index) => {
                    if (index === activeIndex) {
                      dot.classList.add('dot-active');
                    } else {
                      dot.classList.remove('dot-active');
                    }
                  });
                }}
                className="testimonial-slider"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-box-items">
                      <div className="client-info">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-circle"
                        />
                        <div className="client-content">
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.position}</p>
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
                            <g clipPath={`url(#clip0_205_1662${index})`}>
                              <path
                                d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z"
                                fill="#59D2F3"
                              />
                              <path
                                d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z"
                                fill="#59D2F3"
                              />
                            </g>
                            <defs>
                              <clipPath id={`clip0_205_1662${index}`}>
                                <rect
                                  width="26.6667"
                                  height="20"
                                  fill="white"
                                  transform="matrix(-1 0 0 1 26.666 0)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span>{testimonial.text}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Swiper Pagination Dots */}
              <div className="swiper-dot" ref={paginationRef}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`dot ${index === 0 ? 'dot-active' : ''}`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
                      }
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for pagination dots */}
      <style jsx global>{`
        .swiper-dot {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-top: 30px;
        }
        .swiper-dot .dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          margin: 5px;
          padding: 5px;
        }
        .swiper-dot .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .swiper-dot .dot.dot-active {
          background: rgba(255, 255, 255, 1);
        }
        .testimonial-slider .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}
