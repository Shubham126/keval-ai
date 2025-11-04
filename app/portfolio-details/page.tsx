'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioDetailsPage() {
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
              backgroundColor: '#ffffff'
            }}
          >
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Portfolio Details
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
                  <li>Portfolio Details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Section Start */}
          <section className="project-details-section section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="project-details-wrapper">
                <div className="details-image">
                  <Image
                    src="/assets/keval-image/portfolio/dalila-diamonds.png"
                    alt="img"
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="project-details-items">
                  <div className="row g-4">
                    <div className="col-xl-8">
                      <div className="details-content">
                        <h2 style={{ color: '#0d0670' }}>
                          Digital agency bring specialized knowledge and
                          experience
                        </h2>
                        <p className="mb-3" style={{ color: '#000000' }}>
                          Netus lorem rutrum arcu dignissim at sit morbi phasellus
                          nascetur eget potenti vestibulum is cras. Tempor nonummy
                          metus lobortis. Sociis velit etiam, dapibus.Lectus ve
                          pellentesque a cras posuere tempor facilisi habitant lectus
                          rutrum pede quisque hendrerit mauris ad to elementum
                          fringilla facilisi volutpat fusce pharetra.
                        </p>
                        <p className="mb-5" style={{ color: '#000000' }}>
                          Netus lorem rutrum arcu dignissim at sit morbi phasellus
                          nascetur eget potenti vestibulum is cras. Tempor nonummy
                          metus lobortis. Sociis velit etiam, dapibus.Lectus ve
                          pellentesque a cras posuere tempor facilisi habitant lectus
                          rutrum pede .
                        </p>
                        <h3>Challenge & Solution</h3>
                        <p className="mb-5" style={{ color: '#000000' }}>
                          Future, as it seeks to lead the industry in technological
                          innovation and sustainable building practices to deliver
                          long-lasting value for its clients. Netus lorem rutrum arcu
                          dignissim at sit morbi nascetur eget potenti vestibulum is
                          cras. Tempor nonummy metus lobortis. Sociis velit etiam,
                          dapibus.Lepellentesque a cras posuere tempor facilisi
                          habitant lectus rutrum pede .
                        </p>
                        <h3>Final Result</h3>
                        <p style={{ color: '#000000' }}>
                          For almost 50 years Leighton Asia, one of the region&apos;s
                          largest and most respected construc companies, has been
                          progressively building for a better future by leveraging
                          international expertise with local intelligence. In that time
                          Leighton.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="project-information sticky-style">
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
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-vimeo-v"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cta Section Start */}
          <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
          style={{background: "linear-gradient(to bottom, white 50%, black 50%)"}}>
            <div className="container">
              <div
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage:
                    "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Have an idea in your mind?Let&apos;s make something great together
                </h2>
                <Link
                  href="/contact"
                  className="theme-btn border-white wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span className="icon-1">
                    <Image
                      src="/assets/img/icon/10.svg"
                      alt="img"
                      width={20}
                      height={20}
                    />
                  </span>
                  get in touch
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
          </section>

          {/* Footer Section Start */}
          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}

