import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        {/* Breadcrumb Section */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Contact Us</h1>
              <ul className="breadcrumb-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-form-area">
                  <h2 className="section-title">Get In Touch</h2>
                  <p className="section-description">
                    Have a project in mind or want to learn more about our
                    services? We&apos;d love to hear from you. Fill out the form
                    below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-area">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-info-content">
                        <h4>Address</h4>
                        <p>Your Company Address</p>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-info-content">
                        <h4>Phone</h4>
                        <p>
                          <a href="tel:+00012345688">+000 123 456 88</a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-info-content">
                        <h4>Email</h4>
                        <p>
                          <a href="mailto:kevalai24@gmail.com">
                            kevalai24@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

