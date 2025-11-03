'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

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
    <section 
      className="brand-section fix section-padding"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <div className="brand-wrapper">
          <h4 className="fs-3" style={{ color: '#000000' }}>
            We worked worldwide with <span className="count">20</span>
            <span>+</span> companies
          </h4>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            speed={2000}
            autoplay={{
              delay: 4000,
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
            className="brand-slider"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="brand-image">
                  <Image
                    src={`/assets/keval-image/client-logo/${logo}`}
                    alt={`Client ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
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

