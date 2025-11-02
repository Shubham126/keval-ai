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
      className="brand-section fix section-padding pt-0"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="brand-wrapper-2 fix">
        <h3 className="heading_text">Technologies we use</h3>

        <div className="gt-brand-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
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
            className="brand-slider-2 gt-slide-transtion"
          >
            {techLogosRow1.map((logo, index) => (
              <SwiperSlide key={index} className="gt-brand-slide-element">
                <div 
                  className="gt-brand-img" 
                  style={{ 
                    minWidth: '220px',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
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

        <div className="gt-brand-wrapper mt-30">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            loop={true}
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
            className="brand-slider-3 gt-slide-transtion"
          >
            {techLogosRow2.map((logo, index) => (
              <SwiperSlide key={index} className="gt-brand-slide-element">
                <div 
                  className="gt-brand-img" 
                  style={{ 
                    minWidth: '220px',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
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
