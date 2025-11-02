'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank You! Your message has been sent.',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || "Oops! Something went wrong and we couldn't send your message.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: "Oops! Something went wrong and we couldn't send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    Contact Us
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
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Section Start */}
          <section className="contact-info-section fix section-padding">
            <div className="container">
              <div className="row g-4">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact-info-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.0084 19.8214C23.2007 14.812 22.7994 15.437 22.8914 15.3064C24.0537 13.6671 24.668 11.7376 24.668 9.72656C24.668 4.39336 20.3402 0 15 0C9.67723 0 5.33203 4.38469 5.33203 9.72656C5.33203 11.7363 5.95922 13.7163 7.15957 15.3777L9.99152 19.8214C6.96369 20.2867 1.81641 21.6734 1.81641 24.7266C1.81641 25.8396 2.54285 27.4257 6.00363 28.6617C8.42016 29.5247 11.6151 30 15 30C21.3296 30 28.1836 28.2145 28.1836 24.7266C28.1836 21.6728 23.0423 20.2877 20.0084 19.8214ZM8.62787 14.4108C8.6182 14.3957 8.60812 14.381 8.59758 14.3664C7.59873 12.9923 7.08984 11.3637 7.08984 9.72656C7.08984 5.33098 10.6293 1.75781 15 1.75781C19.3617 1.75781 22.9102 5.33256 22.9102 9.72656C22.9102 11.3664 22.4109 12.9397 21.4661 14.2776C21.3814 14.3893 21.8231 13.703 15 24.4095L8.62787 14.4108ZM15 28.2422C8.08629 28.2422 3.57422 26.21 3.57422 24.7266C3.57422 23.7295 5.89266 22.0901 11.0302 21.4511L14.2588 26.5173C14.4202 26.7705 14.6996 26.9238 14.9999 26.9238C15.3002 26.9238 15.5798 26.7705 15.7411 26.5173L18.9697 21.4511C24.1073 22.0901 26.4258 23.7295 26.4258 24.7266C26.4258 26.1974 21.9543 28.2422 15 28.2422Z"
                          fill="white"
                        />
                        <path
                          d="M15 5.33203C12.5769 5.33203 10.6055 7.30342 10.6055 9.72656C10.6055 12.1497 12.5769 14.1211 15 14.1211C17.4231 14.1211 19.3945 12.1497 19.3945 9.72656C19.3945 7.30342 17.4231 5.33203 15 5.33203ZM15 12.3633C13.5461 12.3633 12.3633 11.1804 12.3633 9.72656C12.3633 8.27268 13.5461 7.08984 15 7.08984C16.4539 7.08984 17.6367 8.27268 17.6367 9.72656C17.6367 11.1804 16.4539 12.3633 15 12.3633Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Office Address</h3>
                      <p>Xyz Belgium</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="contact-info-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2128_62894)">
                          <path
                            d="M15 0C6.72898 0 0 7.34089 0 16.3636V23.1819C0 23.5587 0.304965 23.8637 0.68184 23.8637C1.05872 23.8637 1.36368 23.5587 1.36368 23.1819V16.3636C1.36368 8.09259 7.48074 1.36362 15 1.36362C22.5193 1.36362 28.6364 8.09259 28.6364 16.3636V23.1819C28.6364 23.5587 28.9413 23.8637 29.3182 23.8637C29.6951 23.8637 30.0001 23.5587 30.0001 23.1819V16.3636C30 7.34089 23.2711 0 15 0Z"
                            fill="white"
                          />
                          <path
                            d="M7.4998 16.3633H5.45435C3.95023 16.3633 2.72705 17.5864 2.72705 19.0906V27.2724C2.72705 28.7765 3.95017 29.9997 5.45435 29.9997H7.4998C7.87668 29.9997 8.18164 29.6947 8.18164 29.3179V17.0451C8.18164 16.6682 7.87668 16.3633 7.4998 16.3633ZM6.81803 28.636H5.45435C4.70264 28.636 4.09073 28.0241 4.09073 27.2724V19.0906C4.09073 18.3389 4.70264 17.727 5.45435 17.727H6.81796L6.81803 28.636Z"
                            fill="white"
                          />
                          <path
                            d="M24.5457 16.3633H22.5002C22.1233 16.3633 21.8184 16.6682 21.8184 17.0451V29.3179C21.8184 29.6947 22.1233 29.9997 22.5002 29.9997H24.5457C26.0498 29.9997 27.273 28.7766 27.273 27.2724V19.0906C27.273 17.5864 26.0498 16.3633 24.5457 16.3633ZM25.9093 27.2724C25.9093 28.0241 25.2974 28.636 24.5457 28.636H23.182V17.7269H24.5457C25.2974 17.7269 25.9093 18.3388 25.9093 19.0905V27.2724Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2128_62894">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Call Us For Support:</h3>
                      <p>
                        <a href="tel:+32499712725">+32 499 712 725</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="contact-info-box">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M26.6875 3.31229C26.366 2.99274 25.9601 2.77132 25.5174 2.67393C25.0747 2.57653 24.6134 2.60718 24.1875 2.76229L4.18748 10.4623C3.71751 10.6316 3.31208 10.9433 3.0277 11.354C2.74332 11.7647 2.59418 12.2538 2.60106 12.7533C2.60794 13.2528 2.7705 13.7377 3.06608 14.1404C3.36166 14.5431 3.77553 14.8435 4.24998 14.9998L12.3375 17.6873L15 25.7498C15.1533 26.222 15.4499 26.6347 15.8487 26.9305C16.2475 27.2262 16.7286 27.3902 17.225 27.3998C17.709 27.4039 18.1826 27.2584 18.5808 26.9832C18.9791 26.708 19.2826 26.3165 19.45 25.8623L27.15 5.86229C27.3298 5.43841 27.3818 4.97124 27.2996 4.51821C27.2174 4.06518 27.0047 3.64603 26.6875 3.31229ZM25.4375 5.19979L17.7375 25.1998C17.7041 25.304 17.6366 25.3939 17.546 25.4552C17.4553 25.5164 17.3466 25.5453 17.2375 25.5373C17.1308 25.5323 17.0282 25.495 16.9434 25.4302C16.8585 25.3654 16.7954 25.2763 16.7625 25.1748L14.1 17.1873L18.75 12.5873C18.8378 12.4995 18.9075 12.3952 18.955 12.2805C19.0025 12.1657 19.027 12.0427 19.027 11.9185C19.027 11.7943 19.0025 11.6714 18.955 11.5566C18.9075 11.4419 18.8378 11.3376 18.75 11.2498C18.6622 11.162 18.5579 11.0923 18.4432 11.0448C18.3284 10.9972 18.2054 10.9728 18.0812 10.9728C17.957 10.9728 17.834 10.9972 17.7193 11.0448C17.6046 11.0923 17.5003 11.162 17.4125 11.2498L12.825 15.8373L4.83748 13.1873C4.73593 13.1544 4.64683 13.0913 4.58206 13.0064C4.5173 12.9215 4.47994 12.8189 4.47498 12.7123C4.46912 12.6036 4.49892 12.4959 4.55983 12.4057C4.62075 12.3154 4.70946 12.2475 4.81248 12.2123L24.8125 4.51229C24.9084 4.47785 25.0121 4.4714 25.1116 4.49368C25.211 4.51595 25.3021 4.56604 25.3742 4.63811C25.4462 4.71017 25.4963 4.80124 25.5186 4.90069C25.5409 5.00014 25.5344 5.10387 25.5 5.19979H25.4375Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Email Us Anytime:</h3>
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
          </section>

          {/* Contact Section Start */}
          <section className="contact-section fix section-padding pt-0">
            <div className="container">
              <div className="contact-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp">
                    <div className="map-items">
                      <div className="googpemap">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600329.066794341!2d1.8271860950309493!3d50.47119731290155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2sBelgium!5e0!3m2!1sen!2sin!4v1760526315147!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <h3 className="wow fadeInUp">Ready to Get Started?</h3>
                      {submitStatus.type && (
                        <div
                          className={`alert ${
                            submitStatus.type === 'success'
                              ? 'alert-success'
                              : 'alert-danger'
                          }`}
                          style={{
                            padding: '15px',
                            marginBottom: '20px',
                            borderRadius: '5px',
                            backgroundColor:
                              submitStatus.type === 'success'
                                ? '#d4edda'
                                : '#f8d7da',
                            color:
                              submitStatus.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${
                              submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'
                            }`,
                          }}
                        >
                          {submitStatus.message}
                        </div>
                      )}
                      <form
                        id="contact-form"
                        className="contact-form-items"
                        onSubmit={handleSubmit}
                      >
                        <div className="row g-4">
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>First name*</span>
                              <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Enter Your First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>Last name*</span>
                              <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter Your Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>Phone Number*</span>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Enter Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>Email address*</span>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Your Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <div className="form-clt">
                              <span>Message*</span>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Write your message......"
                                value={formData.message}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div
                            className="col-lg-7 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <button
                              type="submit"
                              className="theme-btn"
                              disabled={isSubmitting}
                            >
                              <span className="icon-1">
                                <Image
                                  src="/assets/img/icon/10.svg"
                                  alt="img"
                                  width={20}
                                  height={20}
                                />
                              </span>
                              {isSubmitting ? 'Sending...' : 'Submit request'}
                              <span className="icon-2">
                                <Image
                                  src="/assets/img/icon/11.svg"
                                  alt="img"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Have an idea in your mind?Let's make something great together
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

          {/* Footer */}
          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  );
}
