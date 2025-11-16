'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/lib/motionVariants';
import { useCounter } from '@/lib/hooks/useCounter';

interface Counter {
  number: number;
  symbol: string;
  text: string;
}

const counters: Counter[] = [
  {
    number: 100,
    symbol: '+',
    text: 'Projects completed',
  },
  {
    number: 99,
    symbol: '%',
    text: 'Satisfied customers',
  },
  {
    number: 80,
    symbol: 'k',
    text: 'Saved per month',
  },
];

function CounterCard({ counter, index }: { counter: Counter; index: number }) {
  const { count, ref } = useCounter({
    target: counter.number,
    duration: 2,
    startFrom: 1,
  });

  const delay = index === 0 ? 0.3 : index === 1 ? 0.5 : 0.7;

  return (
    <motion.div
      variants={fadeInUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="col-span-1"
    >
      <div className="rounded-[15px] border border-[#434343] bg-[#222] p-[60px]">
        <h2 
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className="font-montserrat text-[52px] xl:text-[70px] md:text-[65px] sm:text-[60px] 
                     font-medium leading-[89%] xl:leading-[100%] md:leading-[100%] text-white mb-4"
        >
          <span className="count">{count}</span>
          {counter.symbol}
        </h2>
        <p className="font-source-sans text-[18px] font-medium text-white uppercase">
          {counter.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section className="relative overflow-visible py-12 bg-cover bg-center bg-black">
      {/* Optimized background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/choous-us-bg.jpg"
          alt="Counter section background"
          fill
          loading="lazy"
          quality={70}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-[2]">
        {/* Section Title */}
        <div className="section-title mb-8">
          <motion.h3
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-montserrat text-[45px] font-bold text-center text-white my-5"
          >
            driven by results
          </motion.h3>
        </div>

        {/* Counter Boxes */}
        <div className="counter-wrapper-3 pt-0 xl:pt-[85px] lg:pt-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {counters.map((counter, index) => (
              <CounterCard key={index} counter={counter} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
