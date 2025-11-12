'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';
import 'swiper/css';

const V = (d = 0) => {
  const v: any = fadeInUp;
  return typeof v === 'function' ? v(d) : v;
};

const baseProjects = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    category: 'MARKETING',
    title: 'DALILA DIAMONDS',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/donai-gems.png',
    category: 'CRM AND ERP',
    title: 'DONAI GEMS',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/millennium-star.jpg',
    category: 'HIGH CONVERSION WEBSITE',
    title: 'MILLENIUM STAR',
    buttonLink: '/portfolio',
  },
];

// ✅ IMPORTANT — duplicate to enable looping
const projects = [...baseProjects, ...baseProjects];

export default function ProjectSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1600px] mx-auto px-4">

        {/* Title */}
        <motion.h3
          className="text-center text-[44px] md:text-[50px] font-extrabold text-[#1a102c] mb-16"
          variants={V(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          OUR RECENT WORK
        </motion.h3>

        {/* ✅ Swiper with loop + autoplay */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2.2}
          speed={2800}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          loop          // ✅ now it will loop properly
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 20 },
            640: { slidesPerView: 1.3, spaceBetween: 30 },
            1024: { slidesPerView: 2.2, spaceBetween: 40 },
            1440: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="overflow-hidden w-full"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="w-full h-[240px] object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                    {p.category}
                  </p>

                  <h3 className="text-xl font-bold text-[#1a102c] mb-5">
                    {p.title}
                  </h3>

                  <div className="w-full flex justify-end">
                    <Link
                      href={p.buttonLink}
                      className="px-5 py-2.5 bg-[#0B2546] text-white text-sm rounded-md transition-colors hover:bg-[#FD7E31]"
                    >
                      VIEW PORTFOLIO
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
