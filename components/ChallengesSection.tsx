'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '@/lib/motionVariants';

interface Challenge {
  id: string;
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    id: '01',
    title: "Antwerp's Market Dominance",
    description: "With 84% control of the global rough diamond trade, Antwerp's dominance makes independent merchants vulnerable to market fluctuations.",
  },
  {
    id: '02',
    title: 'Limited Digital Presence',
    description: "Many merchants lack online footprint despite 60% of B2B buyers preferring digital engagement, per McKinsey 2022.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="py-[120px] md:py-[100px] sm:py-[80px]">
      <div className="container mx-auto px-4">
        <div className="service-wrapper-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-between">
            
            {/* Left Column - Title & Button */}
            <div className="lg:col-span-4">
              <div className="service-left">
                {/* Section Title */}
                <div className="section-title mb-0">
                  <motion.h3
                    variants={fadeInUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="font-montserrat text-[38px] font-bold text-left text-[#17012C] leading-[1.3] tracking-wide"
                  >
                    key challenges We <span>address</span>
                  </motion.h3>
                </div>

                {/* Learn More Button */}
                <div className="header-button">
                  <Link
                    href="/about"
                    className="header-cta-btn mt-[50px]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Challenge Cards */}
            <div className="lg:col-span-8">
              <div className="service-right">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {challenges.map((challenge, index) => {
                    const delay = index === 0 ? 0.3 : 0.5;
                    return (
                      <motion.div
                        key={challenge.id}
                        variants={fadeInUp(delay)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="py-[60px] px-[20px] xl:py-[40px] xl:px-[30px] rounded-[12px] bg-[#F1F1F1] 
                                    flex gap-5 relative xl:flex-wrap"
                      >
                        {/* Number with Text Stroke - Consistent styling */}
                        <span
                          className="text-[40px] font-medium leading-none transition-all duration-400 ease-in-out flex-shrink-0"
                          style={{
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: '#FD7E31',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'inherit',
                          }}
                        >
                          {challenge.id}
                        </span>

                        {/* Content */}
                        <div className="content flex-1">
                          <h3 className="font-montserrat text-[32px] xl:text-[26px] font-medium leading-none mb-[10px]">
                            <Link
                              href="#"
                              className="text-[#1E1E1E] hover:text-[#0B2546] transition-colors"
                            >
                              {challenge.title.split(' ').map((word, i, arr) => (
                                <span key={i}>
                                  {word}
                                  {i < arr.length - 1 && <br />}
                                </span>
                              ))}
                            </Link>
                          </h3>
                          <p className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E]">
                            {challenge.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
