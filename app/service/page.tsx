'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

export default function ServicePage() {
  return (
    <>
      <Header />

      {/* Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* ===== Breadcrumb Section ===== */}
          <div className="relative overflow-hidden z-[9]">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-[9]">
              <div className="page-heading py-[170px] md:py-[140px] text-center">
                <motion.div
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="breadcrumb-sub-title"
                >
                  <h1 className="font-montserrat text-[64px] sm:text-[44px] font-bold text-white relative z-[9]">
                    Services
                  </h1>
                </motion.div>
                <motion.ul
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex justify-center items-center gap-[10px] mt-5 sm:mt-[15px]"
                >
                  <li className="text-white uppercase font-normal text-base">
                    <Link href="/" className="flex items-center gap-[10px]">
                      <i className="fa-regular fa-house" />
                      Home
                    </Link>
                  </li>
                  <li className="text-white">
                    <i className="fa-solid fa-slash-forward" />
                  </li>
                  <li className="text-white uppercase font-normal text-base">Services</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* ===== Service Section ===== */}

          <section
          className="relative z-[9] py-[120px] md:py-[100px] sm:py-[80px] pt-0 bg-[#222222]"
          style={{ background: 'linear-gradient(to bottom, white 50%, black 50%)' }}
          >
          {/* Background overlay for dark bottom */}
          <div className="absolute top-[45%] left-0 right-0 bottom-0 w-full h-full bg-black -z-[1]" />

          <div className="max-w-[1320px] mx-auto px-4">
            <motion.div
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="cta-wrapper rounded-3xl p-16 md:p-12 sm:p-10 text-center bg-cover bg-center relative z-[9]"
              style={{
                backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
              }}
            >
              {/* Heading (centered like version #1, font size like version #2) */}
              <h2 className="font-montserrat text-3xl md:text-5xl font-bold leading-[1.15] text-white mb-8">
                Have an idea in your mind? Let&apos;s make something great together
              </h2>

              {/* CTA Button (font + button style from V2, with center alignment from V1) */}
              <motion.div
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="header-cta-btn"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>




          {/* ===== CTA Section ===== */}
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
                      className="header-cta-btn"
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
