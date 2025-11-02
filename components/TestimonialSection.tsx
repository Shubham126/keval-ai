'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: '/assets/keval-image/testimonal/Dalila-CEO.jpg',
    name: 'A. De Vries',
    position: 'Dalila CEO',
    text: `Working with Keval AI completely transformed our online presence. Their new gem-industry website design not only looks stunning, but also doubled our conversion rate in just a month. Highly recommend their tech + marketing combo!`,
  },
  {
    image: '/assets/keval-image/testimonal/Donai-co-founder.jpg',
    name: 'M. Janssens',
    position: 'Donai Co-Founder',
    text: `We wanted a robust inventory + ERP system tailored for our diamond business. Keval AI delivered it ahead of schedule, seamless integration, and very responsive support. Their niche expertise showed every step of the way.`,
  },
  {
    image: '/assets/keval-image/testimonal/Millenium-Inventory.jpg',
    name: 'L. Bertrand',
    position: 'Millenium Inventory Executive',
    text: `From MVP development to final launch, Keval AI's team was professional, creative, and detail-oriented. The site is fast, beautiful, and our leads have grown significantly. They truly understand high conversion.`,
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/img/testimonial/bg.jpg')",
      }}
    >
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">testimonials</h6>
                  <h2 className="text-white tp-char-animation">
                    Our clients awesome Testimonials
                  </h2>
                </div>
                <div className="ratting-box wow fadeInUp" data-wow-delay=".5s">
                  <h3>
                    <span className="count">50</span>
                  </h3>
                  <div className="content">
                    <div className="star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="header-button mt-5">
                  <Link href="/about" className="theme-btn border-white">
                    <span className="icon-1"></span>
                    connect with us
                    <span className="icon-2"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="testimonial-slider"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-box-items">
                      <div className="client-info">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-circle"
                        />
                        <div className="client-content">
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="testi-content">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="20"
                            viewBox="0 0 27 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_205_1662)">
                              <path
                                d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z"
                                fill="#59D2F3"
                              />
                              <path
                                d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z"
                                fill="#59D2F3"
                              />
                            </g>
                          </svg>
                        </div>
                        <span>{testimonial.text}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

