'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { fadeInUp } from '@/lib/motionVariants';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = '', duration = 4 }: CounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useIntersectionObserver<HTMLSpanElement>(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  });

  return (
    <span className="count" ref={ref}>
      {hasAnimated ? (
        <CountUp end={target} duration={duration} suffix={suffix} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}


/* MAIN SECTION */
export default function CounterSection() {
  return (
    <section className="w-full py-24 bg-black">
      {/* TITLE */}
      <h2 className="text-center text-white text-4xl font-extrabold tracking-tight mb-16 uppercase">
        Driven by results
      </h2>

      {/* COUNTER CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[32px] bg-[#2A2A2A] border border-[#3A3A3A] shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center py-16"
        >
          <h3 className="text-white font-bold leading-none text-[88px]">
            <Counter target={100} suffix="+" />
          </h3>
          <p className="text-white uppercase tracking-wide text-lg mt-4">
            Projects Completed
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={fadeInUp(0.35)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[32px] bg-[#2A2A2A] border border-[#3A3A3A] shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center py-16"
        >
          <h3 className="text-white font-bold leading-none text-[88px]">
            <Counter target={99} suffix="%" />
          </h3>
          <p className="text-white uppercase tracking-wide text-lg mt-4">
            Satisfied Customers
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={fadeInUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[32px] bg-[#2A2A2A] border border-[#3A3A3A] shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center py-16"
        >
          <h3 className="text-white font-bold leading-none text-[88px]">
            <Counter target={80} suffix="K" />
          </h3>
          <p className="text-white uppercase tracking-wide text-lg mt-4">
            Saved Per Month
          </p>
        </motion.div>

      </div>
    </section>
  );
}
