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
              <h1>Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2>Get in Touch</h2>
              <p>
                Have a question or want to work together? We'd love to hear from
                you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <ContactForm />
              </div>
              <div className="col-lg-4">
                <div className="contact-info mt-5 mt-lg-0">
                  <div className="contact-info-item mb-4">
                    <h4>Contact Information</h4>
                    <ul className="contact-list">
                      <li>
                        <span>Address:</span>
                        <p>Xyz</p>
                      </li>
                      <li>
                        <span>Call Us:</span>
                        <p>
                          <a href="tel:+00012345688">+000 123 456 88</a>
                        </p>
                      </li>
                      <li>
                        <span>Email:</span>
                        <p>
                          <a href="mailto:kevalai24@gmail.com">
                            kevalai24@gmail.com
                          </a>
                        </p>
                      </li>
                    </ul>
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

