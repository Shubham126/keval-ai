'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Force restart autoplay when component mounts
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section
      className="project-section-4 fix section-padding pt-0"
      style={{ 
        backgroundColor: '#ffffff',
        paddingTop: '0',
        paddingBottom: '60px',
      }}
    >
      <div 
        className="project-wrapper-4"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <h3
          className="text-center heading_text my-4"
          style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: '600',
            color: '#111',
            marginTop: '20px',
            marginBottom: '40px',
            animation: 'fadeInDown 0.8s ease-out',
          }}
        >
          Our Recent Work
        </h3>

        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: false,
            }}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            style={{
              overflow: 'visible',
              paddingBottom: '20px',
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide 
                key={index}
                style={{
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: '0.6',
                }}
              >
                <div
                  className="project-box-items-4"
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateY(0)',
                    animation: `slideUp 0.8s ease-out ${index * 0.2}s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className="thumb"
                    style={{
                      overflow: 'hidden',
                      borderRadius: '10px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-100"
                      style={{
                        borderRadius: '10px',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        objectFit: 'cover',
                        width: '100%',
                        height: 'auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>

                  <div
                    className="project-content"
                    style={{
                      marginTop: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <div className="content">
                      <span
                        style={{
                          color: '#888',
                          fontSize: '13px',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          fontWeight: '500',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        {project.category}
                      </span>
                      <h3 
                        style={{ 
                          margin: '10px 0 16px', 
                          fontWeight: '600',
                          fontSize: '22px',
                        }}
                      >
                        <Link 
                          href={project.link} 
                          style={{ 
                            color: '#111',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ff7a00';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#111';
                          }}
                        >
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
                        padding: '12px 28px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        fontSize: '13px',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        border: '2px solid #ff7a00',
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#ff7a00';
                        target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.backgroundColor = '#ff7a00';
                        target.style.color = '#fff';
                        target.style.transform = 'translateY(0)';
                      }}
                    >
                      VIEW PORTFOLIO
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className="custom-prev"
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              zIndex: 10,
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff7a00';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 122, 0, 0.4)';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) (svg as SVGElement).style.stroke = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) (svg as SVGElement).style.stroke = '#000';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transition: 'stroke 0.3s ease', stroke: '#000' }}>
              <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div
            className="custom-next"
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              zIndex: 10,
              animation: 'pulse 2s infinite 0.5s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff7a00';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 122, 0, 0.4)';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) (svg as SVGElement).style.stroke = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) (svg as SVGElement).style.stroke = '#000';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transition: 'stroke 0.3s ease', stroke: '#000' }}>
              <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Inline Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
          }
          50% {
            transform: translateY(-50%) scale(1.05);
          }
        }

        .project-slider .swiper-slide-active {
          opacity: 1 !important;
        }

        .project-slider .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.6 !important;
        }

        @media (max-width: 1200px) {
          .custom-prev,
          .custom-next {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .project-wrapper-4 {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
}