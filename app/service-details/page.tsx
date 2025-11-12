'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '@/lib/motionVariants';
import { House, SlashForward, ArrowRightLong, CircleCheck, Plus, Minus } from '@/components/Icons';

export default function ServiceDetailsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    'Why Is SEO Important For Small Business?',
    'How Do I Choose The Best SEO Agency?',
    'Better Security And Faster Server?',
    'Deployment Within Few Minutes',
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* ===== HERO SECTION ===== */}
          <section
            className="relative flex h-[56vh] min-h-[420px] items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold uppercase mb-6 tracking-wide">
                Service Details
              </h1>

              <ul className="flex items-center justify-center gap-3 text-base">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:text-[#FD7E31] transition-colors"
                  >
                    <House className="w-4 h-4" /> Home
                  </Link>
                </li>
                <li>
                  <SlashForward className="text-sm w-3 h-3" />
                </li>
                <li className="text-[#FD7E31]">Service Details</li>
              </ul>
            </div>
          </section>

          {/* ===== GAP ===== */}
          <div className="h-20 bg-white"></div>

          {/* ===== SECOND IMAGE (WITH MARGINS & ROUNDED EDGES) ===== */}
          <section className="relative px-4 lg:px-0 mb-20">
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.03 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <Image
                src="/assets/keval-image/service/detail-1.jpg"
                alt="Service Banner"
                width={1920}
                height={700}
                className="w-full h-[70vh] object-cover rounded-2xl shadow-lg"
                priority
              />
            </motion.div>
          </section>

          {/* ===== MAIN CONTENT ===== */}
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Sticky Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-[#F9F9F9] rounded-2xl p-8 shadow-sm">
                    <h4 className="text-[22px] font-bold text-[#190B28] uppercase mb-6 border-b-2 border-[#081C3D] inline-block pb-2">
                      All Services
                    </h4>

                    <ul className="space-y-4">
                      {[
                        'HIGH CONVERSION WEBSITE',
                        'INVENTORY MANAGEMENT SYSTEMS',
                        'MVP development',
                        'CRM AND ERP',
                        'Marketing solutions',
                      ].map((service, i) => (
                        <li key={i}>
                          <Link
                            href="/service-details"
                            className={`flex items-center justify-between px-6 py-4 rounded-md text-[15px] font-semibold transition-all ${
                              i === 0
                                ? 'bg-[#081C3D] text-white shadow-md'
                                : 'bg-white text-[#190B28] hover:bg-[#f0f1f3]'
                            }`}
                          >
                            {service}
                            <ArrowRightLong
                              className={`w-5 h-5 ${
                                i === 0 ? 'text-white' : 'text-[#190B28]'
                              }`}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

              {/* Right Main Content */}
              <div className="lg:col-span-2 space-y-10">

                {/* Section 1 */}
                <div>
                  <h2 className="text-[32px] lg:text-[36px] font-bold uppercase text-[#190B28] mb-4">
                    HIGH CONVERSION WEBSITE
                  </h2>
                  <p className="text-[#1A1A1A] text-[16px] leading-relaxed">
                    Keval AI creates websites that look great and convert visitors into customers.
                    Fast, user-friendly, and optimized for growth.
                  </p>
                </div>

                {/* What We Provide */}
                <div>
                  <h3 className="text-[26px] font-bold uppercase text-[#190B28] mb-4">
                    WHAT WE PROVIDE
                  </h3>
                  <p className="text-[#1A1A1A] text-[16px] leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt earum repellendus.
                  </p>

                  <Image
                    src="/assets/keval-image/service/service-detail.jpg"
                    alt="Service Detail"
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-auto shadow"
                  />
                </div>

                {/* Challenge Section */}
                <div>
                  <h3 className="text-[26px] font-bold uppercase text-[#190B28] mb-4">
                    THE CHALLENGE
                  </h3>
                  <p className="text-[#1A1A1A] text-[16px] leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi blanditiis dolor.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-[#1A1A1A] text-[15px]">
                        <CircleCheck className="w-5 h-5 text-[#081C3D] flex-shrink-0" />
                        Various analysis options.
                      </li>
                      <li className="flex items-center gap-2 text-[#1A1A1A] text-[15px]">
                        <CircleCheck className="w-5 h-5 text-[#081C3D] flex-shrink-0" />
                        Advanced data analysis.
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-[#1A1A1A] text-[15px]">
                        <CircleCheck className="w-5 h-5 text-[#081C3D] flex-shrink-0" />
                        Page Load (time, size, requests).
                      </li>
                      <li className="flex items-center gap-2 text-[#1A1A1A] text-[15px]">
                        <CircleCheck className="w-5 h-5 text-[#081C3D] flex-shrink-0" />
                        Advanced data insights.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ Section */}
                <div>
                  <h3 className="text-[26px] font-bold uppercase text-[#190B28] mb-6">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    {faqs.map((title, i) => (
                      <div key={i} className="bg-white border border-[#eee] rounded-md shadow-sm">
                        <button
                          onClick={() => toggleFAQ(i)}
                          className={`w-full flex items-center justify-between px-6 py-4 font-semibold text-left text-[18px] transition ${
                            openIndex === i ? 'text-[#081C3D]' : 'text-[#190B28]'
                          }`}
                        >
                          {title}
                          <span className="text-[16px]">
                            {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </span>
                        </button>

                        {openIndex === i && (
                          <div className="px-6 pb-4 text-[#1A1A1A] text-[15px] leading-relaxed bg-[#f9f9f9]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet reiciendis magni quis obcaecati modi consequatur.
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CTA SECTION ===== */}
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
