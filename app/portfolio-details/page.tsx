'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

export default function PortfolioDetailsPage() {
  return (
    <>
      <Header />

      {/* ==================== HERO / BREADCRUMB ==================== */}
      <section
        className="relative flex h-[56vh] min-h-[420px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-extrabold uppercase tracking-wide"
          >
            Portfolio Details
          </motion.h1>
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 flex items-center justify-center gap-3 text-white/90"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span>Portfolio Details</span>
          </motion.div>
        </div>
      </section>

{/* ==================== PROJECT DETAILS ==================== */}
<section className="bg-white py-24">
  <div className="max-w-[1320px] mx-auto px-4">
    {/* Project Image */}
    <motion.div
      variants={fadeInUp(0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <Image
        src="/assets/keval-image/portfolio/dalila-diamonds.png"
        alt="Portfolio Project"
        width={1200}
        height={600}
        className="w-full rounded-lg object-cover shadow-md"
      />
    </motion.div>

    {/* TWO COLUMN SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
      {/* LEFT CONTENT */}
      <motion.div
        variants={fadeInUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-2 space-y-10"
      >
        <h2 className="text-[#0d0670] text-5xl md:text-5xl font-extrabold leading-tight uppercase">
          Digital agency bring specialized knowledge and experience
        </h2>

        <div className="space-y-5 text-black">
          <p>
            Netus lorem rutrum arcu dignissim ...
          </p>
          <p>
            Netus lorem rutrum arcu dignissim ...
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#000000] text-4xl font-semibold uppercase">
            Challenge & Solution
          </h3>
          <p className="text-black">
            Future, as it seeks to lead the industry ...
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#000000] text-4xl font-semibold uppercase">
            Final Result
          </h3>
          <p className="text-black">
            For almost 50 years Leighton Asia ...
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDEBAR */}
      <motion.div
        variants={fadeInUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-black text-white rounded-2xl px-8 py-10 shadow-md self-start"
      >
        <h3 className="text-2xl font-bold uppercase mb-6 tracking-wide">
          Project Information
        </h3>

        <ul className="space-y-4 text-sm">
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold uppercase tracking-wide">Category :</span>
            <span className="text-gray-300">Business, Marketing</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold uppercase tracking-wide">Author :</span>
            <span className="text-gray-300">Athena Jones</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold uppercase tracking-wide">Tags :</span>
            <span className="text-gray-300">Data Masters</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold uppercase tracking-wide">Cost :</span>
            <span className="text-gray-300">USD 1,50,499</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-semibold uppercase tracking-wide">Date :</span>
            <span className="text-gray-300">25 February, 2025</span>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-start gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-[#FD7E31] transition border border-white/20"
          >
            <Image
              src="/assets/svg/facebook-svgrepo-com.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
            />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-[#FD7E31] transition border border-white/20"
          >
            <Image
              src="/assets/svg/twitter-svgrepo-com.svg"
              alt="Twitter"
              width={20}
              height={20}
              className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
            />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-[#FD7E31] transition border border-white/20"
          >
            <Image
              src="/assets/svg/instagram-svgrepo-com.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
            />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-[#FD7E31] transition border border-white/20"
          >
            <Image
              src="/assets/svg/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
            />
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* ==================== CTA SECTION ==================== */}
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
      <BackToTop />
    </>
  );
}
