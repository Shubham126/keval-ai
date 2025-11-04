'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';

const techLogosRow1 = [
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

const techLogosRow2 = [
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
  const swiperRow2Ref = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Add smooth CSS transitions for Swiper slides
    const style = document.createElement('style');
    style.textContent = `
      .gt-brand-wrapper .swiper-wrapper {
        transition-timing-function: linear !important;
        will-change: transform;
      }
    `;
    document.head.appendChild(style);

    // ✅ Proper cleanup (TypeScript-safe)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);


  return (
    <section
      className="brand-section section-padding pt-0"
      style={{
        backgroundColor: '#ffffff',
        overflow: 'hidden', // ✅ Prevents overflow from Swiper rows
      }}
    >
      <div
        className="brand-wrapper-2 fix"
        style={{
          paddingBottom: '40px',
          position: 'relative',
          overflow: 'hidden', // ✅ Ensures clean clipping
        }}
      >
        <h3
          className="heading_text"
          style={{
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '24px',
            marginBottom: '25px',
            color: '#1a1a1a',
          }}
        >
          Technologies we use
        </h3>

        {/* ===== Row 1 ===== */}
        <div
          className="gt-brand-wrapper"
          style={{
            overflow: 'hidden',
            padding: '10px 0 10px',
          }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            speed={4000}
            loop
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="brand-slider-2"
          >
            {techLogosRow1.map((logo, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gt-brand-img"
                  style={{
                    minWidth: '180px',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={`/assets/logos/${logo}`}
                    alt={logo}
                    width={150}
                    height={70}
                    style={{
                      objectFit: 'contain',
                      maxWidth: '160px',
                      maxHeight: '70px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== Row 2 ===== */}
        <div
          className="gt-brand-wrapper mt-30"
          style={{
            overflow: 'hidden',
            padding: '10px 0 10px',
          }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRow2Ref.current = swiper;
              // Force reverse direction by manually controlling the autoplay
              setTimeout(() => {
                if (swiper.autoplay) {
                  // Stop autoplay
                  swiper.autoplay.stop();
                  // Update params
                  const params = swiper.params.autoplay as any;
                  if (params) {
                    params.reverseDirection = true;
                  }
                  // Restart with reverse
                  swiper.autoplay.start();
                }
              }, 100);
            }}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            speed={4000}
            loop
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="brand-slider-3"
          >
            {techLogosRow2.map((logo, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gt-brand-img"
                  style={{
                    minWidth: '180px',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={`/assets/logos/${logo}`}
                    alt={logo}
                    width={150}
                    height={70}
                    style={{
                      objectFit: 'contain',
                      maxWidth: '160px',
                      maxHeight: '70px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .brand-section {
          position: relative;
          z-index: 1;
        }
        .heading_text {
          letter-spacing: 0.5px;
        }
        .gt-brand-wrapper .swiper {
          overflow: hidden !important;
        }
        .gt-brand-wrapper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 768px) {
          .heading_text {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
