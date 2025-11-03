'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import ChallengesSection from '@/components/ChallengesSection';
import CounterSection from '@/components/CounterSection';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  useEffect(() => {
    // Initialize counter animations
    if (typeof window !== 'undefined') {
      const initCounters = () => {
        const counters = document.querySelectorAll('.count[data-target]');
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const parentText = counter.parentElement?.textContent || '';
          
          // Determine prefix and suffix from parent element
          let prefix = '';
          let suffix = '';
          
          // Check if parent has '+' before the counter
          if (parentText.includes('+') && counter.textContent && !counter.textContent.startsWith('+')) {
            prefix = '+';
          } else if (counter.textContent && counter.textContent.startsWith('+')) {
            prefix = '+';
          }
          
          // Check for suffix after counter
          if (parentText.includes('%')) {
            suffix = '%';
          } else if (parentText.includes('M')) {
            suffix = ' M';
          }
          
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
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb-wrapper Start */}
          <div
            className="breadcrumb-wrapper bg-cover"
            style={{
              backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
            }}
          >
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    about us
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
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
                </ul>
              </div>
            </div>
          </div>

          {/* About Section Start */}
          <section 
            className="about-section-2 fix section-padding"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="container">
              <div className="about-wrapper-2 style-theme-color"
              >
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-content">
                      <h6 className="wow fadeInUp">about us</h6>
                      <p 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                        style={{ color: '#2F4F4F', fontWeight: 'normal' }}
                      >
                        KevalAI builds practical digital solutions that help
                        product‑driven businesses - sell faster and run smarter.
                        Born to bridge the technology gap, we combine industry
                        insight with clean engineering to simplify complex
                        workflows. From high‑converting websites to real‑time
                        inventory and CRM/ERP, our platforms connect stock,
                        sales, and decisions. We move fast with MVPs to test
                        ideas, then scale what works. The outcome is less manual
                        work, more visibility, and growth you can measure.
                      </p>
                      <ul className="about-list wow fadeInUp" data-wow-delay=".5s">
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Convert more buyers with optimized storefronts
                        </li>
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Keep inventory accurate across locations and channels
                        </li>
                        <li>
                          <i className="fa-regular fa-arrow-up-right"></i>
                          Make faster decisions with unified CRM/ERP analytics
                        </li>
                      </ul>
                      <style jsx>{`
                        .about-list li {
                          font-size: 18px !important;
                        }
                        @media (min-width: 768px) {
                          .about-list li {
                            font-size: 19px !important;
                          }
                        }
                        @media (min-width: 1024px) {
                          .about-list li {
                            font-size: 20px !important;
                          }
                        }
                      `}</style>
                      <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                        <span className="icon-1">
                          <Image
                            src="/assets/img/icon/10.svg"
                            alt="img"
                            width={20}
                            height={20}
                          />
                        </span>
                        reach out
                        <span className="icon-2">
                          <Image
                            src="/assets/img/icon/11.svg"
                            alt="img"
                            width={20}
                            height={20}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-content-2">
                      <h2 
                        className="wow fadeInUp about-heading-2" 
                        data-wow-delay=".3s"
                      >
                        Comprehensive Digital Solutions for Growing Businesses
                      </h2>
                      <style jsx>{`
                        .about-heading-2 {
                          font-size: clamp(10px, 6vw, 40px) !important;
                          font-weight: bold !important;
                          line-height: 1.6 !important;
                        }
                      `}</style>
                      <div className="counter-items">
                        <div className="content wow fadeInUp" data-wow-delay=".3s">
                          <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 'normal', lineHeight: '1' }}>
                            <span className="count" data-target="150">+150</span>%
                          </h2>
                          <p>Conversion Rate Increased</p>
                        </div>
                        <div className="content wow fadeInUp" data-wow-delay=".5s">
                          <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 'normal', lineHeight: '1' }}>
                            <span className="count" data-target="20">20</span> M
                          </h2>
                          <p>Amount of Investments in 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="mission-section theme-bg-2 bg-dark fix section-padding p-5">
            <div className="container">
              <div className="section-title text-center">
                <h6 className="text-white wow fadeInUp">our mission & vission</h6>
                <h2 className="text-white tp_reveal_anim">
                  We Build, We Automate,
                  <br />
                  You Scale
                </h2>
              </div>
              <div className="mission-wrapper">
                <div className="row">
                  <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                    <div className="mission-image-items">
                      <div className="p-relative mission-image full-img-wrap3">
                        <div
                          className="full-img3"
                          data-speed="auto"
                          style={{
                            backgroundImage:
                              "url('/assets/keval-image/miss-viss.jpg')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="mission-content">
                      <div className="header-title wow fadeInUp" data-wow-delay=".3s">
                        <h3>Empowering skills to help you!</h3>
                      </div>
                      <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                          <div className="content">
                            <h4>01</h4>
                            <h3>We Build</h3>
                            <p className="text-black">
                              High-conversion websites, real-time inventory
                              systems, rapid MVPs, and integrated CRM/ERP—everything
                              your business needs to sell, manage, and operate
                              from one connected platform.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="content">
                            <h4>02</h4>
                            <h3>We Automate</h3>
                            <p className="text-black">
                              Sync stock and pricing across locations, trigger
                              alerts, streamline orders and invoices, route leads
                              automatically, and give your team live dashboards—so
                              decisions happen faster without manual work.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="content">
                            <h4>03</h4>
                            <h3>You Scale</h3>
                            <p className="text-black">
                              Convert more buyers, close deals quicker, and cut
                              errors. Launch new products and channels with
                              confidence while your team focuses on growth—the
                              platform handles the rest.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <ChallengesSection />

          {/* Counter Section */}
          <CounterSection />

          {/* Footer */}
          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}
