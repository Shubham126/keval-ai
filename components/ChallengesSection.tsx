'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

const challenges = [
  {
    number: '01',
    title: (
      <>
        ANTWERP'S <br /> MARKET <br /> DOMINANCE
      </>
    ),
    description:
      "With 84% control of the global rough diamond trade, Antwerp's dominance makes independent merchants vulnerable to market fluctuations.",
  },
  {
    number: '02',
    title: (
      <>
        LIMITED DIGITAL <br /> PRESENCE
      </>
    ),
    description:
      'Many merchants lack online footprint despite 60% of B2B buyers preferring digital engagement, per McKinsey 2022.',
  },
];

export default function ChallengesSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-[52px] leading-[1.15] font-extrabold text-[#1A102C] uppercase tracking-tight mb-10">
              Key Challenges <br /> We Address
            </h2>

            <div className="flex justify-center">
              <Link
                href="/about"
                className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium text-base 
                          shadow-sm hover:opacity-90 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.1 * (index + 1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[30px] bg-[#F4F4F4] p-10 shadow-sm border border-[#eaeaea]"
              >
                {/* NUMBER */}
                <span className="text-[40px] font-semibold text-[#FD7E31] block mb-4">
                  {item.number}
                </span>

                {/* TITLE */}
                <h3 className="text-[32px] leading-[1.2] font-semibold text-[#1A102C] mb-6 uppercase tracking-normal">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[18px] leading-[1.6] text-[#333]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
