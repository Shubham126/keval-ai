'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp } from '@/lib/motionVariants';

interface Service {
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    title: 'Premium UI designs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
  {
    image: '/assets/keval-image/offers-we/Millenium.jpg',
    title: 'End to end trading platform',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
  {
    image: '/assets/keval-image/offers-we/AI.jpg',
    title: 'Ai Integrations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo rerum ab consequatur id enim repudiandae beatae odit animi voluptate minima, quis ratione aliquid alias ipsa praesentium asperiores necessitatibus quasi.',
  },
];

export default function WeKnowSection() {
  return (
    <section className="flex justify-center items-center my-12">
      {/* Background Wrapper with Gradient */}
      <div
        className="w-[90%] rounded-t-[30px]"
        style={{
          background: 'radial-gradient(circle at top right, #0B2546, transparent 30%)',
        }}
      >
        <div className="container mx-auto px-4">
          
          {/* First Row - Centered Text (No Container) */}
          <div className="grid grid-cols-1 gap-4 my-12">
            <motion.div
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-12"
            >
              <div className="py-[60px] px-5 xl:py-[40px] xl:px-[30px]">
                <div className="content text-center">
                  <h3 className="font-montserrat text-[32px] xl:text-[26px] font-bold leading-none mb-[10px]">
                    <Link href="#" className="text-[#1E1E1E]">
                      Because your unique business needs are <br /> exactly that — yours.
                    </Link>
                  </h3>
                  <p className="font-source-sans text-[20px] font-normal leading-[30px] text-[#1E1E1E]">
                    We offer powerful, flexible solutions for every need, no matter the complexity. Simply put, we're built to scale. That means more growth for you.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - Service Cards (No Container) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="col-span-1 flex"
              >
                <div className="py-[60px] px-5 xl:py-[40px] xl:px-[30px] flex flex-col w-full">
                  
                  {/* Card Image */}
                  <div className="w-full h-[375px] rounded-[30px] overflow-hidden group mb-4 flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={375}
                      className="w-full h-full object-cover transition-all duration-800 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="content pt-4 px-2 flex-grow flex flex-col">
                    <h5 className="font-montserrat text-[20px] font-extrabold mb-2">
                      <Link
                        href="#"
                        className="text-[#1E1E1E] hover:text-[#0B2546] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h5>
                    <p className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E] flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full text-center mt-12"
          >
            <div className="header-button">
              <Link
                href="/about"
                className="header-cta-btn"
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

