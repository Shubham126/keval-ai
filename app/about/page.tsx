'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ChallengesSection from '@/components/ChallengesSection';
import CounterSection from '@/components/CounterSection';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionVariants';

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initCounters = () => {
        const counters = document.querySelectorAll('.count[data-target]');
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const parentText = counter.parentElement?.textContent || '';

          let prefix = '';
          let suffix = '';

          if (parentText.includes('+') && counter.textContent && !counter.textContent.startsWith('+')) {
            prefix = '+';
          } else if (counter.textContent && counter.textContent.startsWith('+')) {
            prefix = '+';
          }

          if (parentText.includes('%')) suffix = '%';
          else if (parentText.includes('M')) suffix = ' M';

          const duration = 2000;
          let current = 0;
          const increment = target / (duration / 16);
          let hasAnimated = false;

          const updateCounter = () => {
            if (hasAnimated) return;
            current += increment;

            if (current < target) {
              counter.textContent = prefix + Math.floor(current).toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = prefix + target.toString();
              hasAnimated = true;
            }
          };

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                  updateCounter();
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.5 }
          );

          observer.observe(counter);
        });
      };

      setTimeout(initCounters, 1000);
    }
  }, []);

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* Breadcrumb */}
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
                  viewport={{ once: false, amount: 0.3 }}
                  className="breadcrumb-sub-title"
                >
                  <h1>about us</h1>
                </motion.div>

                <motion.ul
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="breadcrumb-items"
                >
                  <li>
                    <Link href="/">
                      <i className="fa-regular fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-slash-forward"></i>
                  </li>
                  <li>About us</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="about-section-2 fix section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="about-wrapper-2 style-theme-color">
                <div className="row g-4">

                  {/* Left */}
                  <div className="col-lg-6">
                    <div className="about-content">

                      <motion.h6
                        variants={fadeInUp()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        about us
                      </motion.h6>

                      <motion.p
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        style={{ color: '#2F4F4F', fontWeight: 'normal' }}
                      >
                        KevalAI builds practical digital solutions…
                      </motion.p>

                      <motion.ul
                        variants={fadeInUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="about-list"
                      >
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Convert more buyers with optimized storefronts
                        </li>
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Keep inventory accurate across locations
                        </li>
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Make faster decisions with CRM/ERP analytics
                        </li>
                      </motion.ul>

                      <motion.div
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Link href="/about" className="theme-btn">
                          <span className="icon-1">
                            <Image src="/assets/img/icon/10.svg" alt="img" width={20} height={20} />
                          </span>
                          reach out
                          <span className="icon-2">
                            <Image src="/assets/img/icon/11.svg" alt="img" width={20} height={20} />
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="col-lg-6">
                    <div className="about-content-2">

                      <motion.h2
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="about-heading-2"
                      >
                        Comprehensive Digital Solutions…
                      </motion.h2>

                      <div className="counter-items">

                        <motion.div
                          variants={fadeInUp(0.3)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          className="content"
                        >
                          <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', lineHeight: '1' }}>
                            <span className="count" data-target="150">+150</span>%
                          </h2>
                          <p>Conversion Rate Increased</p>
                        </motion.div>

                        <motion.div
                          variants={fadeInUp(0.5)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          className="content"
                        >
                          <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', lineHeight: '1' }}>
                            <span className="count" data-target="20">20</span> M
                          </h2>
                          <p>Amount of Investments in 2022</p>
                        </motion.div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mission-section theme-bg-2 bg-dark fix section-padding p-5">
            <div className="container">
              <div className="section-title text-center">

                <motion.h6
                  variants={fadeInUp()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  our mission & vission
                </motion.h6>

                <h2 className="text-white tp_reveal_anim">
                  We Build, We Automate,
                  <br />
                  You Scale
                </h2>
              </div>

              <div className="mission-wrapper">
                <div className="row">

                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="col-xl-8"
                  >
                    <div className="mission-image-items">
                      <div className="p-relative mission-image full-img-wrap3">
                        <div
                          className="full-img3"
                          style={{
                            backgroundImage: "url('/assets/keval-image/miss-viss.jpg')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="col-xl-4">
                    <div className="mission-content">

                      <motion.div
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="header-title"
                      >
                        <h3>Empowering skills to help you!</h3>
                      </motion.div>

                      <motion.ul
                        variants={fadeInUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="list-items"
                      >
                        <li>
                          <div className="content">
                            <h4>01</h4>
                            <h3>We Build</h3>
                            <p className="text-black">High-conversion websites…</p>
                          </div>
                        </li>

                        <li>
                          <div className="content">
                            <h4>02</h4>
                            <h3>We Automate</h3>
                            <p className="text-black">Sync stock and pricing…</p>
                          </div>
                        </li>

                        <li>
                          <div className="content">
                            <h4>03</h4>
                            <h3>You Scale</h3>
                            <p className="text-black">Convert more buyers…</p>
                          </div>
                        </li>
                      </motion.ul>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <ChallengesSection />
          <CounterSection />
          <Footer />

        </div>
      </div>

      <BackToTop />
    </>
  );
}
