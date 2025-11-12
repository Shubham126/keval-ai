'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

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
    <section
      className="service-section-5 weKnow_section my-5"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="weKnow_section_bg_image">
        <div className="container max-w-7xl mx-auto px-4">

          {/* Top Heading */}
          <div className="grid grid-cols-1 gap-4 my-5">
            <motion.div
              className="col-span-1"
              variants={fadeInUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <div className="service-box-items-5">
                <div className="content text-center">
                  <h3 className="font-bold">
                    <Link
                      href="#"
                      className="text-[#00072D] hover:text-theme transition-colors"
                      style={{
                        fontSize: 'clamp(24px, 4vw, 36px)',
                      }}
                    >
                      Because your unique business needs are <br /> exactly
                      that — yours.
                    </Link>
                  </h3>
                  <p className="text-lg text-black mt-4">
                    We offer powerful, flexible solutions for every need, no
                    matter the complexity. Simply put, we&apos;re built to scale.
                    That means more growth for you.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="col-span-1"
                variants={fadeInUp()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3 + index * 0.15}
              >
                <div className="service-box-items-5">

                  {/* Image Card */}
                  <div
                    className="card_image image_border w-full h-[375px] rounded-[30px] overflow-hidden relative"
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

                  {/* Text Content */}
                  <div className="content pt-3 px-2">
                    <h2 className="text-xl font-bold mb-2">
                      <Link href="#" className="text-header hover:text-theme transition-colors">{feature.title}</Link>
                    </h2>
                    <p className="text-black">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div className="w-full text-center mt-5">
            <motion.div
              variants={fadeInUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
            >
              <div className="header-button">
                <Link
                  href="/about"
                  className="theme-btn rounded-lg text-white border-white"
                >
                  <span className="icon-1"></span>
                  Learn more
                  <span className="icon-2"></span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
