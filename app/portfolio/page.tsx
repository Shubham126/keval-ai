'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionVariants';

export default function PortfolioPage() {
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
                  <h1>Portfolio</h1>
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
                  <li>
                    <i className="fa-solid fa-slash-forward"></i>
                  </li>
                  <li>Portfolio</li>
                </motion.ul>

              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <section className="case-study-section-2 fix section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="row justify-content-between align-items-end">

                {/* CARD 1 */}
                <div className="col-xl-5 col-lg-6">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: false }}
                    className="case-study-box-items-2 theme-color-1"
                  >
                    <div className="thumb">
                      <Image
                        src="/assets/keval-image/portfolio/dalila-1.png"
                        alt="img"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Link href="/portfolio-details" className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Image src="/assets/img/icon/12.svg" alt="img" width={50} height={50} />
                      </Link>
                    </div>

                    <div className="content">
                      <p style={{ color: '#000000' }}>MARCH 26, 2025</p>
                      <h3>
                        <Link href="/portfolio-details" style={{ color:'#0d0670',fontSize:'clamp(20px,2.5vw,32px)' }}>
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>

                {/* CARD 2 */}
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: false }}
                    className="case-study-box-items-2 margin-left-20 mt-0 theme-color-1"
                  >
                    <div className="thumb">
                      <Image
                        src="/assets/keval-image/portfolio/donai-1.png"
                        alt="img"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Link href="/portfolio-details" className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Image src="/assets/img/icon/12.svg" alt="img" width={50} height={50} />
                      </Link>
                    </div>

                    <div className="content">
                      <p style={{ color: '#000000' }}>MARCH 26, 2025</p>
                      <h3>
                        <Link href="/portfolio-details" style={{ color:'#0d0670',fontSize:'clamp(20px,2.5vw,32px)' }}>
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>

                {/* WIDE CARD */}
                <div className="col-lg-12">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: false }}
                    className="case-study-box-items-2 theme-color-1"
                  >
                    <div className="thumb">
                      <Image
                        src="/assets/keval-image/portfolio/dalila-diamonds.png"
                        alt="img"
                        width={1200}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Link href="/portfolio-details" className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Image src="/assets/img/icon/12.svg" alt="img" width={50} height={50} />
                      </Link>
                    </div>

                    <div className="content">
                      <p style={{ color: '#000000' }}>MARCH 26, 2025</p>
                      <h3>
                        <Link href="/portfolio-details" style={{ color:'#0d0670',fontSize:'clamp(20px,2.5vw,32px)' }}>
                          Digital agency bring specialized knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* SECOND ROW */}
              <div className="row justify-content-between">

                {/* CARD 4 (with button) */}
                <div className="col-xl-5 col-lg-6">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: false }}
                    className="case-study-box-items-2 theme-color-1"
                  >
                    <div className="thumb">
                      <Image
                        src="/assets/keval-image/portfolio/donai-1.png"
                        alt="img"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Link href="/portfolio-details" className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Image src="/assets/img/icon/12.svg" alt="img" width={50} height={50} />
                      </Link>
                    </div>

                    <div className="content">
                      <p style={{ color: '#000000' }}>MARCH 26, 2025</p>
                      <h3>
                        <Link href="/portfolio-details" style={{ color:'#0d0670',fontSize:'clamp(20px,2.5vw,32px)' }}>
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>

                      <Link href="/portfolio-details" className="theme-btn">
                        <span className="icon-1">
                          <Image src="/assets/img/icon/10.svg" alt="img" width={20} height={20} />
                        </span>
                        view all projects
                        <span className="icon-2">
                          <Image src="/assets/img/icon/11.svg" alt="img" width={20} height={20} />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* CARD 5 */}
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3, once: false }}
                    className="case-study-box-items-2 margin-left-20 theme-color-1"
                  >
                    <div className="thumb">
                      <Image
                        src="/assets/keval-image/portfolio/dalila-1.png"
                        alt="img"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <Link href="/portfolio-details" className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Image src="/assets/img/icon/12.svg" alt="img" width={50} height={50} />
                      </Link>
                    </div>

                    <div className="content">
                      <p style={{ color: '#000000' }}>MARCH 26, 2025</p>
                      <h3>
                        <Link href="/portfolio-details" style={{ color:'#0d0670',fontSize:'clamp(20px,2.5vw,32px)' }}>
                          Digital agency bring specialized <br /> knowledge and experience
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
            style={{background: "linear-gradient(to bottom, white 50%, black 50%)"}}
          >
            <div className="container">
              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount:0.3, once:false }}
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2>
                  Have an idea in your mind? Let&apos;s make something great together
                </h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount:0.3, once:false }}
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
