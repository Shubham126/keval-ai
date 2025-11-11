'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

const challenges = [
  {
    number: '01',
    title: "Antwerp&apos;s Market Dominance",
    description: (
      <>
        .With 84% control of the global rough diamond trade, Antwerp&apos;s
        dominance makes independent merchants vulnerable to market fluctuations
      </>
    ),
  },
  {
    number: '02',
    title: (
      <>
        Limited Digital <br /> Presence
      </>
    ),
    description: (
      <>
        Many merchants lack online footprint despite 60% of B2B{' '}
        <br /> buyers preferring digital engagement, <br /> per McKinsey 2022.
      </>
    ),
  },
];

export default function ChallengesSection() {
  return (
    <section 
      className="service-section-5 fix section-padding bg-white"
    >
      <div className="container">
        <div className="service-wrapper-5">
          <div className="row g-4 justify-content-between">

            {/* Left Column */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-left">
                <div className="section-title style-4 mb-0">
                  <h3 className="heading_text text-left">
                    key challenges We <span>address</span>
                  </h3>
                </div>
                <div className="header-button mt-3">
                  <Link
                    href="/about"
                    className="theme-btn bg-black rounded-2 text-white border-white"
                  >
                    <span className="icon-1"></span>
                    Learn more
                    <span className="icon-2"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-xl-8 col-lg-8">
              <div className="service-right">
                <div className="row g-4">

                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="col-lg-6 col-md-6 flex"
                      variants={fadeInUp()}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.3 + index * 0.2} // exact WOW.js delay
                    >
                      <div
                        className="service-box-items-5 flex flex-col w-full h-full"
                      >
                        <span>{challenge.number}</span>

                        <div className="content flex-1">
                          <h3>
                            <Link href="#">{challenge.title}</Link>
                          </h3>
                          <p className="text-black">{challenge.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
