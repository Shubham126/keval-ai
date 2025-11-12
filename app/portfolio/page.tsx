'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

export default function PortfolioPage() {
  return (
    <>
      <Header />

      {/* Smooth wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

      {/* ✅ BREADCRUMB SECTION */}
      <section
        className="relative flex h-[56vh] min-h-[420px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-extrabold uppercase text-white tracking-wide"
          >
            Portfolio
          </motion.h1>

          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 flex items-center justify-center gap-3 text-white/80 text-lg"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span>Portfolio</span>
          </motion.div>
        </div>
      </section>

          {/* ✅ CASE STUDY CARDS */}
          <section className="w-full bg-white py-24">
            <div className="max-w-[1320px] mx-auto px-4">
              
              {/* ROW 1 */}
              <div className="flex flex-col lg:flex-row justify-between items-end gap-10">

                {/* CARD 1 */}
                <div className="w-full lg:w-[45%]">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="rounded-2xl shadow-md overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <Image
                        src="/assets/keval-image/portfolio/dalila-1.png"
                        alt="Dalila"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      {/* rounded floating icon with rotating arrow */}
                      <Link
                        href="/portfolio-details"
                        className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0d0670]"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Rotating circular border */}
                          <div className="absolute inset-0 rounded-full border-2 border-[#FD7E31]/30 animate-spin-slow"></div>
                          {/* Arrow icon - black normally, white on hover, tilts upward on hover */}
                          <Image 
                            src="/assets/img/icon/12.svg" 
                            width={28} 
                            height={28} 
                            alt="icon" 
                            className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:brightness-0 group-hover:invert"
                            style={{ filter: 'brightness(0)' }}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="p-6">
                      <p className="text-black mb-2">MARCH 26, 2025</p>

                      <h3 className="leading-snug">
                        <Link
                          href="/portfolio-details"
                          className="text-[#0d0670] font-semibold text-[clamp(20px,2.5vw,32px)]"
                        >
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>

                {/* CARD 2 */}
                <div className="w-full lg:w-[50%]">
                  <motion.div
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="rounded-2xl shadow-md overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <Image
                        src="/assets/keval-image/portfolio/donai-1.png"
                        alt="Donai"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      <Link
                        href="/portfolio-details"
                        className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0d0670]"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Rotating circular border */}
                          <div className="absolute inset-0 rounded-full border-2 border-[#FD7E31]/30 animate-spin-slow"></div>
                          {/* Arrow icon - black normally, white on hover, tilts upward on hover */}
                          <Image 
                            src="/assets/img/icon/12.svg" 
                            width={28} 
                            height={28} 
                            alt="icon" 
                            className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:brightness-0 group-hover:invert"
                            style={{ filter: 'brightness(0)' }}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="p-6">
                      <p className="text-black mb-2">MARCH 26, 2025</p>

                      <h3>
                        <Link
                          href="/portfolio-details"
                          className="text-[#0d0670] font-semibold text-[clamp(20px,2.5vw,32px)]"
                        >
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* ✅ WIDE CARD */}
              <div className="mt-14">
                <motion.div
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="rounded-2xl shadow-md overflow-hidden bg-white"
                >
                  <div className="relative">
                    <Image
                      src="/assets/keval-image/portfolio/dalila-diamonds.png"
                      alt="Wide Dalila"
                      width={1200}
                      height={450}
                      className="w-full h-auto"
                    />

                    <Link
                      href="/portfolio-details"
                      className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0d0670]"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Rotating circular border */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#FD7E31]/30 animate-spin-slow"></div>
                        {/* Arrow icon - black normally, white on hover, tilts upward on hover */}
                        <Image 
                          src="/assets/img/icon/12.svg" 
                          width={28} 
                          height={28} 
                          alt="icon" 
                          className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:brightness-0 group-hover:invert"
                          style={{ filter: 'brightness(0)' }}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="p-6">
                    <p className="text-black mb-2">MARCH 26, 2025</p>

                    <h3>
                      <Link
                        href="/portfolio-details"
                        className="text-[#0d0670] font-semibold text-[clamp(20px,2.5vw,32px)]"
                      >
                        Digital agency bring specialized knowledge and experience
                      </Link>
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* ✅ SECOND ROW */}
              <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16">

                {/* CARD WITH BUTTON */}
                <div className="w-full lg:w-[45%]">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="rounded-2xl shadow-md overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <Image
                        src="/assets/keval-image/portfolio/donai-1.png"
                        alt="Donai"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      <Link
                        href="/portfolio-details"
                        className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0d0670]"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Rotating circular border */}
                          <div className="absolute inset-0 rounded-full border-2 border-[#FD7E31]/30 animate-spin-slow"></div>
                          {/* Arrow icon - black normally, white on hover, tilts upward on hover */}
                          <Image 
                            src="/assets/img/icon/12.svg" 
                            width={28} 
                            height={28} 
                            alt="icon" 
                            className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:brightness-0 group-hover:invert"
                            style={{ filter: 'brightness(0)' }}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="p-6">
                      <p className="text-black mb-2">MARCH 26, 2025</p>

                      <h3 className="mb-6">
                        <Link
                          href="/portfolio-details"
                          className="text-[#0d0670] font-semibold text-[clamp(20px,2.5vw,32px)]"
                        >
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>

                      {/* CTA BUTTON */}
                      
                    </div>
                  </motion.div>
                </div>

                {/* CARD 5 */}
                <div className="w-full lg:w-[50%]">
                  <motion.div
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="rounded-2xl shadow-md overflow-hidden bg-white"
                  >
                    <div className="relative">
                      <Image
                        src="/assets/keval-image/portfolio/dalila-1.png"
                        alt="Dalila"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      <Link
                        href="/portfolio-details"
                        className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0d0670]"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Rotating circular border */}
                          <div className="absolute inset-0 rounded-full border-2 border-[#FD7E31]/30 animate-spin-slow"></div>
                          {/* Arrow icon - black normally, white on hover, tilts upward on hover */}
                          <Image 
                            src="/assets/img/icon/12.svg" 
                            width={28} 
                            height={28} 
                            alt="icon" 
                            className="relative z-10 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:brightness-0 group-hover:invert"
                            style={{ filter: 'brightness(0)' }}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="p-6">
                      <p className="text-black mb-2">MARCH 26, 2025</p>

                      <h3>
                        <Link
                          href="/portfolio-details"
                          className="text-[#0d0670] font-semibold text-[clamp(20px,2.5vw,32px)]"
                        >
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="max-w-[1320px] mx-auto px-4">
              <div className="mt-10">
                <Link
                  href="/portfolio-details"
                  className="inline-flex items-center gap-2 bg-[#FD7E31] hover:bg-[#ff924f] text-white font-medium uppercase text-sm px-5 py-2.5 rounded-md transition-all duration-300 shadow-sm"
                >
                  <Image src="/assets/img/icon/10.svg" width={16} height={16} alt="icon" />
                  View All Projects
                  <Image src="/assets/img/icon/11.svg" width={16} height={16} alt="icon" />
                </Link>
              </div>
            </div>
          </section>

          {/* ✅ CTA SECTION */}
          <section
            className="py-24"
            style={{ background: 'linear-gradient(to bottom, white 50%, black 50%)' }}
          >
            <div className="max-w-[1320px] mx-auto px-4">
              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="bg-cover rounded-3xl p-16 text-white"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Have an idea in your mind? Let&apos;s make something great together
                </h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="theme-btn"
                    >
                      Get in Touch
                    </Link>
                  </div>

                </motion.div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}
