'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';

export default function ServicePage() {
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
                    Services
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
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Section Start */}
          <section className="service-section fix section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="section-title-area bor-bottom margin-top-40"></div>
              <div className="service-wrapper">
                <ul className="style-border">
                  <li className="service-list">
                    <div className="content">
                      <h4 className="wow fadeInUp">001</h4>
                      <h3 className="wow img-custom-anim-left">
                        <Link href="/service-details">
                          HIGH CONVERSION WEBSITE
                        </Link>
                      </h3>
                    </div>
                    <p
                      className="wow img-custom-anim-right"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                      style={{ color: '#1a1a1a' }}
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
                      style={{ color: '#1a1a1a' }}
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
                        <Link href="/service-details">
                          INVENTORY MANAGEMENT SYSTEMS
                        </Link>
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
                      style={{ color: '#1a1a1a' }}
                    >
                      Turn ideas into reality quickly with Keval AI's MVP development. Launch scalable prototypes that validate your concept with real users.
                    </p>
                  </li>
                  <li className="service-list">
                    <p
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                      style={{ color: '#1a1a1a' }}
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
                      style={{ color: '#1a1a1a' }}
                    >
                      Drive growth with Keval AI's marketing services. Plan, execute, and target the right audience for measurable results.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cta Section Start */}
          <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg">
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
                  style={{ fontSize: 'clamp(24px, 5vw, 56px)' }}
                >
                  Have an idea in your mind?<br />Let's make something great together
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

