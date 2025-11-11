'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionVariants';

export default function ServicePage() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* Breadcrumb-wrapper */}
          <div
            className="breadcrumb-wrapper bg-cover"
            style={{
              backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
            }}
          >
            <div className="container">
              <div className="page-heading">

                <motion.div
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: false }}
                  className="breadcrumb-sub-title"
                >
                  <h1>Services</h1>
                </motion.div>

                <motion.ul
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: false }}
                  className="breadcrumb-items"
                >
                  <li>
                    <Link href="/">
                      <i className="fa-regular fa-house"></i>
                      Home
                    </Link>
                  </li>

                  <li><i className="fa-solid fa-slash-forward"></i></li>

                  <li>Services</li>
                </motion.ul>

              </div>
            </div>
          </div>

          {/* Service Section */}
          <section className="service-section fix section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="section-title-area bor-bottom margin-top-40"></div>

              <div className="service-wrapper">
                <ul className="style-border">

                  {/* Item 1 */}
                  <li className="service-list">
                    <div className="content">

                      <motion.h4
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        001
                      </motion.h4>

                      <motion.h3
                        variants={fadeInUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        <Link href="/service-details">
                          HIGH CONVERSION WEBSITE
                        </Link>
                      </motion.h3>

                    </div>

                    <motion.p
                      variants={fadeInUp(0.4)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3, once: false }}
                      style={{ color: '#1a1a1a' }}
                    >
                      Keval AI creates websites that look great and convert
                      visitors into customers. Fast, user-friendly, and optimized
                      for growth.
                    </motion.p>
                  </li>

                  {/* Item 2 */}
                  <li className="service-list">

                    <motion.p
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3, once: false }}
                      style={{ color: '#1a1a1a' }}
                    >
                      Simplify your stock operations with Keval AI&apos;s inventory systems. Track, manage, and optimize efficiently with minimal errors.
                    </motion.p>

                    <div className="content">

                      <motion.h4
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        002
                      </motion.h4>

                      <motion.h3
                        variants={fadeInUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        <Link href="/service-details">
                          INVENTORY MANAGEMENT SYSTEMS
                        </Link>
                      </motion.h3>

                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="service-list">
                    <div className="content">

                      <motion.h4
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        003
                      </motion.h4>

                      <motion.h3
                        variants={fadeInUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        <Link href="/service-details">MVP development</Link>
                      </motion.h3>

                    </div>

                    <motion.p
                      variants={fadeInUp(0.4)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3, once: false }}
                      style={{ color: '#1a1a1a' }}
                    >
                      Turn ideas into reality quickly with Keval AI&apos;s MVP development. Launch scalable prototypes that validate your concept with real users.
                    </motion.p>
                  </li>

                  {/* Item 4 */}
                  <li className="service-list">

                    <motion.p
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3, once: false }}
                      style={{ color: '#1a1a1a' }}
                    >
                      Manage clients, resources, and workflows effortlessly with Keval AI&apos;s CRM & ERP solutions.
                    </motion.p>

                    <div className="content">

                      <motion.h4
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        004
                      </motion.h4>

                      <motion.h3
                        variants={fadeInUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        <Link href="/service-details">CRM AND ERP</Link>
                      </motion.h3>
                    </div>

                  </li>

                  {/* Item 5 */}
                  <li className="service-list">
                    <div className="content">

                      <motion.h4
                        variants={fadeInUp(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        005
                      </motion.h4>

                      <motion.h3
                        variants={fadeInUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                      >
                        <Link href="/service-details">Marketing solutions</Link>
                      </motion.h3>

                    </div>

                    <motion.p
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3, once: false }}
                      style={{ color: '#1a1a1a' }}
                    >
                      Drive growth with Keval AI&apos;s marketing services. Plan, execute, and target the right audience for measurable results.
                    </motion.p>

                  </li>

                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
            style={{ background: "linear-gradient(to bottom, white 50%, #0d0670 50%)" }}
          >
            <div className="container">

              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: false }}
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
                  Have an idea in your mind?<br />
                  Let's make something great together
                </h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: false }}
                >
                  <Link href="/contact" className="theme-btn border-white">
                    <span className="icon-1"></span>
                    get in touch
                    <span className="icon-2"></span>
                  </Link>
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
