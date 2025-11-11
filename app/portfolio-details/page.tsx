'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionVariants';

export default function PortfolioDetailsPage() {
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
              backgroundColor: '#ffffff'
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
                  <h1>Portfolio Details</h1>
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
                  <li>Portfolio Details</li>
                </motion.ul>

              </div>
            </div>
          </div>

          {/* Project Section */}
          <section className="project-details-section section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="project-details-wrapper">

                <motion.div
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: false }}
                  className="details-image"
                >
                  <Image
                    src="/assets/keval-image/portfolio/dalila-diamonds.png"
                    alt="img"
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </motion.div>

                <div className="project-details-items">
                  <div className="row g-4">

                    {/* LEFT CONTENT */}
                    <div className="col-xl-8">
                      <motion.div
                        variants={fadeInUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                        className="details-content"
                      >
                        <h2 style={{ color: '#0d0670' }}>
                          Digital agency bring specialized knowledge and experience
                        </h2>

                        <p className="mb-3" style={{ color: '#000000' }}>
                          Netus lorem rutrum arcu dignissim...
                        </p>

                        <p className="mb-5" style={{ color: '#000000' }}>
                          Netus lorem rutrum arcu dignissim...
                        </p>

                        <h3>Challenge & Solution</h3>
                        <p className="mb-5" style={{ color: '#000000' }}>
                          Future, as it seeks to lead the industry...
                        </p>

                        <h3>Final Result</h3>
                        <p style={{ color: '#000000' }}>
                          For almost 50 years Leighton Asia...
                        </p>
                      </motion.div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="col-xl-4 col-lg-5">
                      <motion.div
                        variants={fadeInUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: false }}
                        className="project-information sticky-style"
                      >
                        <h3>Project Information</h3>

                        <ul>
                          <li>
                            <span className="list-1">Category :</span>
                            <span className="list-2">Business, Marketing</span>
                          </li>
                          <li>
                            <span className="list-1">Author :</span>
                            <span className="list-2">Athena Jones</span>
                          </li>
                          <li>
                            <span className="list-1">Tags :</span>
                            <span className="list-2">Data Masters</span>
                          </li>
                          <li>
                            <span className="list-1">Cost :</span>
                            <span className="list-2">USD 1,50,499</span>
                          </li>
                          <li>
                            <span className="list-1">Date :</span>
                            <span className="list-2">25 February, 2025</span>
                          </li>
                        </ul>

                        <div className="social-icon d-flex align-items-center">
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-vimeo-v"></i></a>
                          <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>

                      </motion.div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
            style={{ background: "linear-gradient(to bottom, white 50%, black 50%)" }}
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
                <h2>Have an idea in your mind? Let's make something great together</h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: false }}
                >
                  <Link href="/contact" className="theme-btn border-white">
                    <span className="icon-1">
                      <Image src="/assets/img/icon/10.svg" alt="img" width={20} height={20} />
                    </span>
                    get in touch
                    <span className="icon-2">
                      <Image src="/assets/img/icon/11.svg" alt="img" width={20} height={20} />
                    </span>
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
