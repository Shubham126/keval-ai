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
          <div
            className="relative bg-cover bg-center h-[56vh] min-h-[420px] flex flex-col justify-center text-center text-white"
            style={{
              backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
            }}
          >
            <div className="bg-black/50 absolute inset-0"></div>
            <div className="relative z-10 container mx-auto px-6">
              <motion.h1
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide"
              >
                Services
              </motion.h1>

              <motion.ul
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center justify-center gap-3 mt-4 text-sm uppercase font-medium"
              >
                <li>
                  <Link href="/" className="flex items-center gap-2 hover:text-[#FD7E31] transition">
                    <i className="fa-regular fa-house"></i>
                    Home
                  </Link>
                </li>
                <li className="text-white/70">/</li>
                <li>Services</li>
              </motion.ul>
            </div>
          </div>

          {/* ===== Service Section ===== */}
          <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
              <ul className="divide-y divide-gray-200">
                {/* Service 1 */}
                <li className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12">
                  <div>
                    <motion.h4
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-lg font-bold tracking-wide mb-2"
                    >
                      001
                    </motion.h4>
                    <motion.h3
                      variants={fadeInUp(0.2)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-3xl md:text-4xl font-extrabold uppercase leading-tight"
                    >
                      <Link href="/service-details" className="hover:text-[#FD7E31] transition">
                        High Conversion Website
                      </Link>
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-700 max-w-xl leading-relaxed"
                  >
                    Keval AI creates websites that look great and convert visitors into customers.
                    Fast, user-friendly, and optimized for growth.
                  </motion.p>
                </li>

                {/* Service 2 */}
                <li className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12">
                  <motion.p
                    variants={fadeInUp(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-700 max-w-xl leading-relaxed order-2 md:order-1"
                  >
                    Simplify your stock operations with Keval AI&apos;s inventory systems. Track,
                    manage, and optimize efficiently with minimal errors.
                  </motion.p>
                  <div className="order-1 md:order-2">
                    <motion.h4
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-lg font-bold tracking-wide mb-2"
                    >
                      002
                    </motion.h4>
                    <motion.h3
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-3xl md:text-4xl font-extrabold uppercase leading-tight"
                    >
                      <Link href="/service-details" className="hover:text-[#FD7E31] transition">
                        Inventory Management Systems
                      </Link>
                    </motion.h3>
                  </div>
                </li>

                {/* Service 3 */}
                <li className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12">
                  <div>
                    <motion.h4
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-lg font-bold tracking-wide mb-2"
                    >
                      003
                    </motion.h4>
                    <motion.h3
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-3xl md:text-4xl font-extrabold uppercase leading-tight"
                    >
                      <Link href="/service-details" className="hover:text-[#FD7E31] transition">
                        MVP Development
                      </Link>
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={fadeInUp(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-700 max-w-xl leading-relaxed"
                  >
                    Turn ideas into reality quickly with Keval AI&apos;s MVP development. Launch scalable
                    prototypes that validate your concept with real users.
                  </motion.p>
                </li>

                {/* Service 4 */}
                <li className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12">
                  <motion.p
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-700 max-w-xl leading-relaxed order-2 md:order-1"
                  >
                    Manage clients, resources, and workflows effortlessly with Keval AI&apos;s CRM & ERP
                    solutions.
                  </motion.p>
                  <div className="order-1 md:order-2">
                    <motion.h4
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-lg font-bold tracking-wide mb-2"
                    >
                      004
                    </motion.h4>
                    <motion.h3
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-3xl md:text-4xl font-extrabold uppercase leading-tight"
                    >
                      <Link href="/service-details" className="hover:text-[#FD7E31] transition">
                        CRM and ERP
                      </Link>
                    </motion.h3>
                  </div>
                </li>

                {/* Service 5 */}
                <li className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12">
                  <div>
                    <motion.h4
                      variants={fadeInUp(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-lg font-bold tracking-wide mb-2"
                    >
                      005
                    </motion.h4>
                    <motion.h3
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[#0D0670] text-3xl md:text-4xl font-extrabold uppercase leading-tight"
                    >
                      <Link href="/service-details" className="hover:text-[#FD7E31] transition">
                        Marketing Solutions
                      </Link>
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={fadeInUp(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-700 max-w-xl leading-relaxed"
                  >
                    Drive growth with Keval AI&apos;s marketing services. Plan, execute, and target
                    the right audience for measurable results.
                  </motion.p>
                </li>
              </ul>
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
