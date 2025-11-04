'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetailsPage() {
  useEffect(() => {
    // Ensure Bootstrap accordion is properly initialized
    if (typeof window !== 'undefined') {
      const initAccordion = () => {
        // Wait for Bootstrap to be available
        const checkBootstrap = () => {
          if (typeof (window as any).bootstrap === 'undefined') {
            setTimeout(checkBootstrap, 100);
            return;
          }

          const accordionButtons = document.querySelectorAll('.accordion-button[data-bs-toggle="collapse"]');
          accordionButtons.forEach((button) => {
            // Handle accordion open
            button.addEventListener('click', (e) => {
              const targetId = button.getAttribute('data-bs-target');
              if (targetId) {
                setTimeout(() => {
                  const targetElement = document.querySelector(targetId);
                  if (targetElement) {
                    // Ensure content is visible
                    const accordionBody = targetElement.querySelector('.accordion-body');
                    if (accordionBody && accordionBody instanceof HTMLElement) {
                      accordionBody.style.visibility = 'visible';
                      accordionBody.style.display = 'block';
                      accordionBody.style.visibility = 'visible';
                      accordionBody.style.display = 'block';
                      accordionBody.style.opacity = '1';
                    }
                  }
                }, 300);
              }
            });
            // Handle shown event
            button.addEventListener('shown.bs.collapse', (e) => {
              const targetId = button.getAttribute('data-bs-target');
              if (targetId) {
                const targetElement = document.querySelector(targetId) as HTMLElement | null;
                if (targetElement) {
                  const targetEl = targetElement as HTMLElement;
                  const accordionBody = targetEl.querySelector('.accordion-body') as HTMLElement | null;
                  if (accordionBody) {
                    accordionBody.style.visibility = 'visible';
                    accordionBody.style.display = 'block';
                    accordionBody.style.opacity = '1';
                  }
                }
              }
            });
          });
        };

        checkBootstrap();
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccordion);
      } else {
        setTimeout(initAccordion, 500);
      }
    }
  }, []);
  return (
    <>
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
                    Service Details
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
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Details Section Start */}
          <section className="service-details-section section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="service-details-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="details-image">
                      <Image
                        src="/assets/keval-image/service/detail-1.jpg"
                        alt="img"
                        width={1200}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-5">
                  <div className="col-12 col-lg-4">
                    <div className="main-sidebar sticky-style">
                      <div className="single-sidebar-widget">
                        <div className="wid-title">
                          <h4>All Services</h4>
                        </div>
                        <div className="service-widget-categories">
                          <ul>
                            <li className="active">
                              <Link href="/service-details">
                                HIGH CONVERSION WEBSITE
                              </Link>
                              <span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </span>
                            </li>
                            <li>
                              <Link href="/service-details">
                                INVENTORY MANAGEMENT SYSTEMS
                              </Link>
                              <span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </span>
                            </li>
                            <li>
                              <Link href="/service-details">
                                MVP development
                              </Link>
                              <span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </span>
                            </li>
                            <li>
                              <Link href="/service-details">CRM AND ERP</Link>
                              <span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </span>
                            </li>
                            <li>
                              <Link href="/service-details">
                                Marketing solutions
                              </Link>
                              <span>
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="service-details-content">
                      <h3>HIGH CONVERSION WEBSITE</h3>
                      <p className="mb-4" style={{ color: '#000000' }}>
                        Keval AI creates websites that look great and convert
                        visitors into customers. Fast, user-friendly, and optimized
                        for growth.
                      </p>

                      <h3>What We Provide</h3>
                      <p className="mb-5" style={{ color: '#000000' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet nesciunt earum repellendus nemo cupiditate debitis.
                        Iste voluptas corrupti repellendus quas.
                      </p>
                      <div className="thumb">
                        <Image
                          src="/assets/keval-image/service/service-detail.jpg"
                          alt="img"
                          width={800}
                          height={400}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p style={{ color: '#000000' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt sequi blanditiis dolor ex quas ullam dolores eum,
                        quod quasi iusto corrupti adipisci eaque impedit consequatur
                        at aliquid voluptatum consequuntur exercitationem?
                        Consequuntur ad placeat voluptatibus recusandae accusamus
                        quia quod soluta vel eveniet nobis totam voluptas, fugiat
                        necessitatibus, et qui dolore dolorum!
                      </p>
                      <div className="details-list-items">
                        <ul className="details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance
                            Data analysis operation.
                          </li>
                        </ul>
                        <ul className="details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance
                            Data analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <style jsx>{`
                            .accordion-body {
                              color: #000000 !important;
                              visibility: visible !important;
                            }
                            .accordion-collapse.show .accordion-body {
                              display: block !important;
                              opacity: 1 !important;
                            }
                            .accordion-collapse:not(.show) .accordion-body {
                              display: none !important;
                            }
                          `}</style>
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body" style={{ color: '#000000', visibility: 'visible', display: 'block' }}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Consectetur provident
                                  aspernatur mollitia? Enim a iusto esse maxime
                                  numquam qui eaque!
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body" style={{ color: '#000000', visibility: 'visible', display: 'block' }}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Consectetur provident
                                  aspernatur mollitia? Enim a iusto esse maxime
                                  numquam qui eaque!
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body" style={{ color: '#000000', visibility: 'visible' }}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Consectetur provident
                                  aspernatur mollitia? Enim a iusto esse maxime
                                  numquam qui eaque!
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body" style={{ color: '#000000', visibility: 'visible' }}>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Consectetur provident
                                  aspernatur mollitia? Enim a iusto esse maxime
                                  numquam qui eaque!
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Section Start */}
          {/* <section className="service-section fix section-padding">
            <div className="container">
              <div className="section-title-area bor-bottom margin-top-40"></div>
              <div className="service-wrapper">
                <ul className="style-border">
                  <li className="service-list">
                    <div className="content">
                      <h4 className="wow fadeInUp">001</h4>
                      <h3 className="wow img-custom-anim-left">
                        <Link href="/service-details">HIGH CONVERSION WEBSITE</Link>
                      </h3>
                    </div>
                    <p
                      className="wow img-custom-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      Keval AI creates websites that look great and convert
                      visitors into customers. Fast, user-friendly, and optimized
                      for growth.
                    </p>
                  </li>
                  <li className="service-list">
                    <p
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    >
                      Simplify your stock operations with Keval AI's inventory systems. Track, manage, and optimize efficiently with minimal errors.
                    </p>
                    <div className="content">
                      <h4 className="wow fadeInUp">002</h4>
                      <h3
                        className="wow img-custom-anim-right"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.4s"
                      >
                        <Link href="/service-details">INVENTORY MANAGEMENT SYSTEMS</Link>
                      </h3>
                    </div>
                  </li>
                  <li className="service-list">
                    <div className="content">
                      <h4 className="wow fadeInUp">003</h4>
                      <h3 className="wow img-custom-anim-left">
                        <Link href="/service-details">MVP development</Link>
                      </h3>
                    </div>
                    <p
                      className="wow img-custom-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      Turn ideas into reality quickly with Keval AI's MVP development. Launch scalable prototypes that validate your concept with real users.
                    </p>
                  </li>
                  <li className="service-list">
                    <p
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    >
                      Manage clients, resources, and workflows effortlessly with Keval AI's CRM & ERP solutions. Gain insights and automate business operations.
                    </p>
                    <div className="content">
                      <h4 className="wow fadeInUp">004</h4>
                      <h3
                        className="wow img-custom-anim-right"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.4s"
                      >
                        <Link href="/service-details">CRM AND ERP</Link>
                      </h3>
                    </div>
                  </li>
                  <li className="service-list">
                    <div className="content">
                      <h4 className="wow fadeInUp">005</h4>
                      <h3
                        className="wow img-custom-anim-right"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.4s"
                      >
                        <Link href="/service-details">Marketing solutions</Link>
                      </h3>
                    </div>
                    <p
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    >
                      Drive growth with Keval AI's marketing services. Plan, execute, and target the right audience for measurable results.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Cta Section Start */}
          <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
          style={{background: "linear-gradient(to bottom, white 50%, #0d0670 50%)"}}>
            <div className="container">
              <div
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage:
                    "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 
                  className="wow fadeInUp" 
                  data-wow-delay=".3s"
                  style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}
                >
                  Have an idea in your mind?<br />Let&apos;s make something great together
                </h2>
                <Link
                  href="/contact"
                  className="theme-btn border-white wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span className="icon-1"></span>
                  get in touch
                  <span className="icon-2"></span>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}

