'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    category: 'MARKETING',
    title: 'Dalila Diamonds',
    link: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/donai-gems.png',
    category: 'CRM AND ERP',
    title: 'Donai Gems',
    link: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/millennium-star.jpg',
    category: 'HIGH CONVERSION WEBSITE',
    title: 'Millenium Star',
    link: '/portfolio',
  },
];

export default function ProjectSection() {
  return (
    <section className="project-section-4 fix section-padding pt-0"
    style={{ backgroundColor: '#ffffff' }}>
      <div className="project-wrapper-4">
        <h3 className="text-center heading_text my-4">Our Recent Work</h3>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-slider"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-box-items-4 p-relative">
                <div className="thumb">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-100"
                  />
                </div>
                <div className="project-content">
                  <div className="content">
                    <span>{project.category}</span>
                    <h3>
                      <Link href={project.link}>{project.title}</Link>
                    </h3>
                  </div>
                  <Link href={project.link} className="theme-btn2">
                    <span className="icon-1"></span>
                    VIEW PORTFOLIO
                    <span className="icon-2"></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

