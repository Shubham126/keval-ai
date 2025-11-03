'use client';

import { useEffect } from 'react';
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
  useEffect(() => {
    // Add styles for centering navigation arrows
    const style = document.createElement('style');
    style.textContent = `
      .project-slider .swiper-button-next,
      .project-slider .swiper-button-prev {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 50px !important;
        height: 50px !important;
        background: #fff !important;
        border-radius: 50% !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        margin-top: 0 !important;
      }
      .project-slider .swiper-button-next::after,
      .project-slider .swiper-button-prev::after {
        font-size: 18px !important;
        color: #000 !important;
        margin: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section
      className="project-section-4 fix section-padding pt-0"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="project-wrapper-4">
        <h3
          className="text-center heading_text my-4"
          style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: '600',
            color: '#111',
          }}
        >
          Our Recent Work
        </h3>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          speed={2000}
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
              <div
                className="project-box-items-4 p-relative"
                style={{
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                <div className="thumb">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-100"
                    style={{
                      borderRadius: '10px',
                      transition: 'transform 0.6s ease-in-out',
                    }}
                  />
                </div>

                <div
                  className="project-content"
                  style={{
                    marginTop: '16px',
                    textAlign: 'center',
                    transition: 'all 0.6s ease',
                  }}
                >
                  <div className="content">
                    <span
                      style={{
                        color: '#888',
                        fontSize: '14px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 style={{ margin: '10px 0', fontWeight: '600' }}>
                      <Link href={project.link} style={{ color: '#111' }}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <Link
                    href={project.link}
                    className="theme-btn2"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#ff7a00',
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      marginTop: '10px',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.backgroundColor = '#e96c00';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.backgroundColor = '#ff7a00';
                    }}
                  >
                    VIEW PORTFOLIO
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
