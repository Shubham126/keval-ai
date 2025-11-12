'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

import 'swiper/css';

const techRow1 = [
  'adobe-illustrator-logo.png',
  'adobe-photoshop.png',
  'Figma-Logo-New.png',
  'next-js-logo.png',
  'reactjs_logo_icon_170805.png',
  'node-js-logo-removebg-preview.png',
  'WordPress-Logo-PNG2.png',
  'Shopify_logo_2018.svg.png',
  'aws-logo.png',
];

const techRow2 = [
  'html-logo.png',
  'css-logo-.png',
  'javascript-logo-removebg-preview.png',
  'vue-js-logo.png',
  'Python-Logo-removebg-preview.png',
  'monogo-db-logo-removebg-preview.png',
  'PHP-logo.png',
  'MySQL-Logo.png',
];

export default function TechnologiesSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* Title */}
      <motion.h3
        variants={fadeInUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-[32px] font-semibold tracking-wide mb-12 text-black"
      >
        TECHNOLOGIES WE USE
      </motion.h3>

      {/* TOP ROW — LEFT → RIGHT */}
      <motion.div
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10"
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="tech-slider"
        >
          {techRow1.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="bubble-card">
                <Image
                  src={`/assets/logos/${logo}`}
                  alt={logo}
                  width={150}
                  height={80}
                  sizes="(max-width: 768px) 100px, 150px"
                  quality={75}
                  loading="lazy"
                  className="bubble-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* BOTTOM ROW — RIGHT → LEFT */}
      <motion.div
        variants={fadeInUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop
          speed={4500}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="tech-slider"
        >
          {techRow2.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="bubble-card">
                <Image
                  src={`/assets/logos/${logo}`}
                  alt={logo}
                  width={150}
                  height={80}
                  sizes="(max-width: 768px) 100px, 150px"
                  quality={75}
                  loading="lazy"
                  className="bubble-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* Smooth movement like brand section */
        .tech-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* Pill container */
        .bubble-card {
          width: 260px;
          height: 120px;
          background: white;
          border-radius: 999px;
          border: 1px solid #e3e3e3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bubble-image {
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .bubble-card:hover .bubble-image {
          transform: scale(1.07);
        }

        @media (max-width: 768px) {
          .bubble-card {
            width: 200px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
}
