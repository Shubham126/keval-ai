'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChallengesSection from '@/components/ChallengesSection';
import CounterSection from '@/components/CounterSection';
import { fadeInUp } from '@/lib/motionVariants';

export default function AboutPage() {
  // inline counters (unchanged)
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-counter-target]')
    );

    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.counterTarget || 0);
      const duration = Number(el.dataset.counterDuration || 1500);
      const prefix = el.dataset.counterPrefix ?? '';
      const suffix = el.dataset.counterSuffix ?? '';
      const step = (ts: number, begin: number) => {
        const elapsed = ts - begin;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(target * progress);
        el.innerText = `${prefix}${value}${suffix}`;
        if (progress < 1) requestAnimationFrame((t) => step(t, begin));
      };
      requestAnimationFrame((t) => step(t, performance.now()));
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative flex h-[56vh] min-h-[420px] w-full items-center justify-center overflow-hidden">
        <Image
          src="/assets/keval-image/about-hero-banner.png"
          alt="About us hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-[1200px] px-6 text-center">
          <motion.h1
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            ABOUT US
          </motion.h1>
          <motion.nav
            variants={fadeInUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 flex items-center justify-center gap-3 text-white/80"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </motion.nav>
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-4 sm:px-6 lg:px-8 xl:px-12 md:grid-cols-2">
          <div>
            <motion.h6
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-montserrat text-[20px] font-normal uppercase leading-none mb-5 text-[#0B2546]"
            >
              about us
            </motion.h6>
            <motion.p
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E] mb-8"
            >
              KevalAI builds practical digital solutions that help product‑driven businesses - sell faster and run smarter. Born to bridge the technology gap, we combine industry insight with clean engineering to simplify complex workflows. From high‑converting websites to real‑time inventory and CRM/ERP, our platforms connect stock, sales, and decisions. We move fast with MVPs to test ideas, then scale what works. The outcome is less manual work, more visibility, and growth you can measure.
            </motion.p>
            <motion.ul
              variants={fadeInUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-[10px]"
            >
              {[
                'Convert more buyers with optimized storefronts',
                'Keep inventory accurate across locations',
                'Make faster decisions with CRM/ERP analytics',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-[10px] text-black">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center text-[#0B2546] flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                  <span className="font-source-sans text-[18px] font-normal text-black">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-block font-montserrat text-[13px] font-medium uppercase 
                           text-[#17012C] bg-[#FD7E31] border border-[#17012C] 
                           px-5 py-[15px] rounded-[5px] leading-none
                           transition-all duration-500"
              >
                reach out
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col">
            <motion.h2
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-montserrat text-[42px]
                         font-semi-bold leading-[89%] xl:leading-[100%] md:leading-[100%] 
                         text-[#17012C] mb-0"
            >
              Comprehensive Digital Solutions for Growing Businesses
            </motion.h2>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="font-montserrat text-[60px] font-normal text-[#0B2546]">
                    <span
                      data-counter-target="150"
                      data-counter-duration="1800"
                      data-counter-prefix="+"
                      data-counter-suffix="%"
                    >
                      +0%
                    </span>
                  </h2>
                  <p className="font-source-sans text-[18px] font-normal text-[#888888] mt-2">
                    Conversion Rate Increased
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="font-montserrat text-[60px] font-normal text-[#0B2546]">
                    <span data-counter-target="20" data-counter-duration="1800">
                      0
                    </span>
                    <span className="ml-2">M</span>
                  </h2>
                  <p className="font-source-sans text-[18px] font-normal text-[#888888] mt-2">
                    Amount of Investments in 2022
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

     {/* MISSION */}
      <section className="w-full bg-[#151A21] py-20">
        <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.h6
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-montserrat text-[20px] font-normal uppercase leading-none mb-5 text-center text-[#FD7E31]"
          >
            our mission & vission
          </motion.h6>

          <motion.h2
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-montserrat text-[52px] xl:text-[70px] md:text-[65px] sm:text-[60px] 
                       font-medium leading-[89%] xl:leading-[100%] md:leading-[100%] 
                       text-white text-center mt-3"
          >
            We Build, We Automate,
            <br />
            You Scale
          </motion.h2>

          {/* Full-width layout */}
          <div className="mt-12 grid min-h-[420px] grid-cols-1 items-start gap-8 md:grid-cols-12">
            {/* Left: image card */}
            <motion.div
              variants={fadeInUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 flex"
            >
              <div className="flex w-full flex-col rounded-3xl border-[6px] border-white p-6 shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                <div className="relative h-[550px] w-full overflow-hidden rounded-2xl sm:h-[650px] md:h-[750px] lg:h-[950px]">
                  <Image
                    src="/assets/keval-image/miss-viss.jpg"
                    alt="Mission"
                    fill
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: content card */}
            <motion.div
              variants={fadeInUp(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 flex items-start"
            >
              <div className="flex w-full flex-col justify-start rounded-3xl bg-white px-6 sm:px-8 pt-6 pb-4 shadow-sm mt-4 md:mt-0 h-auto">
                {/* Heading */}
                <motion.h3
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-montserrat text-[40px] font-normal text-[#17012C] mb-4"
                >
                  <span className="block">Empowering </span>
                  <span className="block mt-2">skills to help</span>
                  <span className="block mt-3">you!</span>
                </motion.h3>

                {/* Divider line below heading */}
                <div className="border-b border-gray-200 mb-6"></div>

                {/* List items with separators */}
                <ul className="space-y-6">
                  {[
                    { n: '01', t: 'We Build', d: 'High-conversion websites, real-time inventory systems, rapid MVPs, and integrated CRM/ERP—everything your business needs to sell, manage, and operate from one connected platform.' },
                    {
                      n: '02',
                      t: 'We Automate',
                      d: 'Sync stock and pricing across locations, trigger alerts, streamline orders and invoices, route leads automatically, and give your team live dashboards—so decisions happen faster without manual work.',
                    },
                    {
                      n: '03',
                      t: 'You Scale',
                      d: 'Convert more buyers, close deals quicker, and cut errors. Launch new products and channels with confidence while your team focuses on growth—the platform handles the rest.',
                    },
                  ].map((item, idx) => (
                    <motion.li 
                      key={item.n} 
                      className="pb-4"
                      variants={fadeInUp(0.5)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col gap-1">
                        <h4 
                          className="font-montserrat text-[30px] font-medium leading-none"
                          style={{
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: '#FD7E31',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {item.n}
                        </h4>
                        <h3 className="font-montserrat text-[30px] font-medium text-[#17012C]">
                          {item.t}
                        </h3>
                        <p className="font-source-sans text-base font-normal leading-[30px] text-[#888888] mt-[5px]">{item.d}</p>
                      </div>

                      {/* Divider below each item except the last */}
                      {idx < 2 && <div className="mt-4 border-b border-gray-200"></div>}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* KEY CHALLENGES */}
       <ChallengesSection />

      {/* COUNTERS STRIP */}
      <CounterSection />

      <Footer />
    </>
  );
}
