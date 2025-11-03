'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
  return (
    <section 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '100px 0 0',
        position: 'relative'
      }}
    >
      <div style={{ position: 'relative' }}>
        <h3 style={{ 
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: '600',
          color: '#111',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Technologies we use
        </h3>

        <div style={{ width: '100%', overflow: 'hidden' }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            speed={5000}
            autoplay={{
              delay: 100,
              reverseDirection: false,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            watchSlidesProgress={true}
            loop={true}
            freeMode={false}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {techLogosRow1.map((logo, index) => (
              <SwiperSlide key={index}>
                <div 
                  style={{ 
                    minWidth: '220px',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    border: '1px solid #e0e0e0',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <Image
                    src={`/assets/logos/${logo}`}
                    alt={logo}
                    width={180}
                    height={70}
                    style={{ 
                      objectFit: 'contain',
                      maxWidth: '180px',
                      maxHeight: '70px'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div style={{ width: '100%', overflow: 'hidden', marginTop: '30px' }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            speed={5000}
            autoplay={{
              delay: 100,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            watchSlidesProgress={true}
            loop={true}
            freeMode={false}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {techLogosRow2.map((logo, index) => (
              <SwiperSlide key={index}>
                <div 
                  style={{ 
                    minWidth: '220px',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    border: '1px solid #e0e0e0',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <Image
                    src={`/assets/logos/${logo}`}
                    alt={logo}
                    width={180}
                    height={70}
                    style={{ 
                      objectFit: 'contain',
                      maxWidth: '180px',
                      maxHeight: '70px'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
