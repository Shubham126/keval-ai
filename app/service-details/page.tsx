'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetailsPage() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* Breadcrumb-wrapper Start */}
          <div
            className="breadcrumb-wrapper bg-cover"
            style={{
              backgroundImage: "url('/assets/keval-image/about-hero-banner.png')"
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
                  <li><i className="fa-solid fa-slash-forward"></i></li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Details Section Start */}
          <section className="service-details-section section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="service-details-wrapper">

                {/* Top banner image */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="details-image">
                      <Image
                        src="/assets/keval-image/service/detail-1.jpg"
                        alt="img"
                        width={1200}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-5">

                  {/* Sidebar */}
                  <div className="col-12 col-lg-4">
                    <div className="main-sidebar sticky-style">
                      <div className="single-sidebar-widget">
                        <div className="wid-title">
                          <h4>All Services</h4>
                        </div>

                        <div className="service-widget-categories">
                          <ul>
                            {[
                              'HIGH CONVERSION WEBSITE',
                              'INVENTORY MANAGEMENT SYSTEMS',
                              'MVP development',
                              'CRM AND ERP',
                              'Marketing solutions',
                            ].map((service, index) => (
                              <li key={index} className={index === 0 ? 'active' : ''}>
                                <Link href="/service-details">{service}</Link>
                                <span>
                                  <i className="fa-regular fa-arrow-right-long"></i>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="col-12 col-lg-8">
                    <div className="service-details-content">

                      <h3>HIGH CONVERSION WEBSITE</h3>

                      <p className="mb-4 text-black">
                        Keval AI creates websites that look great and convert visitors into customers.
                        Fast, user-friendly, and optimized for growth.
                      </p>

                      <h3>What We Provide</h3>

                      <p className="mb-5 text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt earum repellendus.
                      </p>

                      <div className="thumb">
                        <Image
                          src="/assets/keval-image/service/service-detail.jpg"
                          alt="img"
                          width={800}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>

                      <h3>The Challenge</h3>

                      <p className="text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi blanditiis dolor.
                      </p>

                      <div className="details-list-items">
                        <ul className="details-list">
                          <li><i className="fa-solid fa-circle-check"></i> Various analysis options.</li>
                          <li><i className="fa-solid fa-circle-check"></i> Advanced data analysis.</li>
                        </ul>

                        <ul className="details-list">
                          <li><i className="fa-solid fa-circle-check"></i> Page Load (time, size, requests).</li>
                          <li><i className="fa-solid fa-circle-check"></i> Advanced data insights.</li>
                        </ul>
                      </div>

                    </div>

                    {/* FAQ Section */}
                    <div className="faq-wrapper mt-5">
                      <div className="accordion" id="accordionFaq">

                        {[
                          "Why Is SEO Important For Small Business?",
                          "How do I choose the best SEO Agency?",
                          "Better Security And Faster Server?",
                          "Deployment Within Few Minutes"
                        ].map((title, i) => (
                          <div className="accordion-item mb-3" key={i}>
                            <h5 className="accordion-header">
                              <button
                                className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq-${i}`}
                              >
                                {title}
                              </button>
                            </h5>

                            <div
                              id={`faq-${i}`}
                              className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                              data-bs-parent="#accordionFaq"
                            >
                              <div className="accordion-body text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
            style={{ background: "linear-gradient(to bottom, white 50%, #0d0670 50%)" }}
          >
            <div className="container">
              <div
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')"
                }}
              >
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Have an idea in your mind?<br />Let's make something great together
                </h2>

                <Link href="/contact" className="theme-btn border-white wow fadeInUp" data-wow-delay=".5s">
                  <span className="icon-1"></span>
                  get in touch
                  <span className="icon-2"></span>
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}
