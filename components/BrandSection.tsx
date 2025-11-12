'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';

const clientLogos = [
  'Client Logo-01.png',
  'Client Logo-02.png',
  'Client Logo-03.png',
  'Client Logo-04.png',
  'Client Logo-05.png',
  'Client Logo-06.png',
  'Client Logo-07.png',
];

export default function BrandSection() {
  return (
    <section className="py-24 bg-white w-full">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-bold text-black tracking-wide mb-16 px-4"
      >
        WE WORKED WORLDWIDE WITH{" "}
        <span className="text-theme2 font-extrabold">20+</span>{" "}
        COMPANIES
      </motion.h2>

      {/* Full-width container */}
      <div className="w-full px-4 md:px-10 lg:px-20">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={5}
          speed={2800}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 5 },
          }}
          className="overflow-hidden w-full"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center py-4"
              >
                <Image
                  src={`/assets/keval-image/client-logo/${logo}`}
                  alt={`Client ${index + 1}`}
                  width={160}
                  height={90}
                  className="object-contain h-[70px] w-auto transition-all duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
