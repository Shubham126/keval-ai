'use client';

import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    title: 'Premium UI designs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
  {
    image: '/assets/keval-image/offers-we/Millenium.jpg',
    title: 'End to end trading platform',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
  {
    image: '/assets/keval-image/offers-we/AI.jpg',
    title: 'Ai Integrations',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="service-section-5 weKnow_section fix my-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="weKnow_section_bg_image">
        <div className="container">
          <div className="row g-4 my-5">
            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-box-items-5">
                <div className="content text-center">
                  <h3 className="fw-bold">
                    <Link 
                      href="#"
                      style={{ 
                        color: '#00072D',
                        fontSize: 'clamp(24px, 4vw, 36px)'
                      }}
                    >
                      Because your unique business needs are <br /> exactly
                      that — yours.
                    </Link>
                  </h3>
                  <p className="fs-5" style={{ color: '#000000' }}>
                    We offer powerful, flexible solutions for every need, no
                    matter the complexity. Simply put, we&apos;re built to scale.
                    That means more growth for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items-5">
                  <div
                    className="card_image image_border"
                    style={{
                      width: '100%',
                      height: '375px',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="content pt-3 px-2">
                    <h5>
                      <Link href="#">{feature.title}</Link>
                    </h5>
                    <p style={{ color: '#000000' }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-100 text-center mt-5">
            <div className="header-button">
              <Link
                href="/about"
                className="theme-btn rounded-2 text-white border-white"
              >
                <span className="icon-1"></span>
                Learn more
                <span className="icon-2"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

