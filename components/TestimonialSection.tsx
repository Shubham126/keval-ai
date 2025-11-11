'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fade } from '@/lib/motionVariants';

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
            
            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              {/* Section Title */}
              <motion.div
                variants={fadeInUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="section-title"
              >
                <h6>testimonials</h6>

                <h2 className="text-white"
                  style={{
                    fontSize: '48px',
                    fontWeight: 'bold'
                  }}
                >
                  Our clients awesome Testimonials
                </h2>
              </motion.div>

              {/* Rating Box */}
              <motion.div
                variants={fadeInUp(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="ratting-box"
              >
                <h3><span className="count">50</span></h3>
                <div className="content">
                  <div className="star">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={fadeInUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="header-button mt-5"
              >
                <Link href="/about" className="theme-btn border-white">
                  <span className="icon-1"></span>
                  connect with us
                  <span className="icon-2"></span>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT SIDE – SWIPER */}
            <motion.div
              variants={fadeInUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-lg-6"
            >
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
                }}
                cardsEffect={{
                  perSlideRotate: 2,
                  perSlideOffset: 8,
                  rotate: true,
                  slideShadows: true,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  if (swiper.activeIndex === testimonials.length - 1) {
                    setTimeout(() => swiper.slideTo(0), 3000);
                  }
                }}
                className="testimonial-slider"
              >
                {testimonials.map((item, i) => (
                  <SwiperSlide key={i}>
                    <motion.div
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      className="testimonial-box-items"
                    >
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
                          >
                            <path d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z" fill="#59D2F3" />
                            <path d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z" fill="#59D2F3" />
                          </svg>
                        </div>
                        <span>{item.text}</span>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* DOTS */}
              <div className="swiper-dot">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === activeIndex ? 'dot-active' : ''}`}
                    onClick={() => swiperRef.current?.slideTo(i)}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Styling left unchanged */}
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
        }
      `}</style>
    </section>
  );
}
