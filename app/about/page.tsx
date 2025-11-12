'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChallengesSection from '@/components/ChallengesSection';
import CounterSection from '@/components/CounterSection';

// simple fade-up
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  },
});

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
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            ABOUT US
          </motion.h1>
          <motion.nav
            variants={fadeUp(0.25)}
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
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div>
            <motion.h6
              variants={fadeUp(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-theme"
            >
              About Us
            </motion.h6>
            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 text-lg leading-7 text-slate-700"
            >
              KevalAI builds practical digital solutions. We craft fast,
              user-friendly experiences that convert visitors into customers and
              scale with your growth.
            </motion.p>
            <motion.ul
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Convert more buyers with optimized storefronts',
                'Keep inventory accurate across locations',
                'Make faster decisions with CRM/ERP analytics',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-900">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-theme2/10 text-theme2">
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
                  <span className="text-[17px] leading-7">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="theme-btn inline-flex items-center gap-3"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M3 8l9 6 9-6" />
                    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                  </svg>
                </span>
                Reach Out
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col">
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#180A2C] sm:text-5xl md:text-[64px]"
            >
              Comprehensive
              <br />
              Digital Solutions…
            </motion.h2>

            <div className="mt-auto grid grid-cols-1 gap-10 sm:grid-cols-2">
              <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-[#0A2C40]">
                  <div className="text-[48px] font-extrabold sm:text-[60px] md:text-[72px]">
                    <span
                      data-counter-target="150"
                      data-counter-duration="1800"
                      data-counter-prefix="+"
                      data-counter-suffix="%"
                    >
                      +0%
                    </span>
                  </div>
                  <p className="mt-2 text-slate-600">
                    Conversion Rate Increased
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-[#0A2C40]">
                  <div className="text-[48px] font-extrabold sm:text-[60px] md:text-[72px]">
                    <span data-counter-target="20" data-counter-duration="1800">
                      0
                    </span>
                    <span className="ml-2">M</span>
                  </div>
                  <p className="mt-2 text-slate-600">
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
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-theme2"
          >
            Our Mission & Vision
          </motion.h6>

          <motion.h2
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 text-center text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            We Build, We Automate,
            <br />
            You Scale
          </motion.h2>

          {/* Full-width layout */}
          <div className="mt-12 grid min-h-[420px] grid-cols-1 items-start gap-8 md:grid-cols-12">
            {/* Left: image card */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-8 flex"
            >
              <div className="flex w-full flex-col rounded-3xl border-[6px] border-white p-6 shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                <div className="relative h-[550px] w-full overflow-hidden rounded-2xl sm:h-[650px] md:h-[750px] lg:h-[950px]">
                  <Image
                    src="/assets/keval-image/miss-viss.jpg"
                    alt="Mission"
                    fill
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: content card */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-4 flex items-start"
            >
              <div className="flex w-full flex-col justify-start rounded-3xl bg-white px-6 sm:px-8 pt-6 pb-4 shadow-sm mt-4 md:mt-0 h-auto">
                {/* Heading */}
                <h3 className="mb-4 text-3xl font-semibold text-[#180A2C] leading-tight">
                  Empowering skills to
                  <br /> help you!
                </h3>

                {/* Divider line below heading */}
                <div className="border-b border-gray-200 mb-6"></div>

                {/* List items with separators */}
                <ul className="space-y-6">
                  {[
                    { n: '01', t: 'We Build', d: 'High-conversion websites…' },
                    {
                      n: '02',
                      t: 'We Automate',
                      d: 'Sync stock and pricing across platforms…',
                    },
                    {
                      n: '03',
                      t: 'You Scale',
                      d: 'Convert more buyers and grow faster…',
                    },
                  ].map((item, idx) => (
                    <li key={item.n} className="pb-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xl font-bold text-theme2">
                          {item.n}
                        </span>
                        <h4 className="text-lg font-semibold text-[#180A2C] uppercase">
                          {item.t}
                        </h4>
                        <p className="text-slate-700 text-[15px]">{item.d}</p>
                      </div>

                      {/* Divider below each item except the last */}
                      {idx < 2 && <div className="mt-4 border-b border-gray-200"></div>}
                    </li>
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
