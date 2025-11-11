'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionVariants';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.type) setSubmitStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank You! Your message has been sent.',
        });
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
          message:
            data.error ||
            "Oops! Something went wrong and we couldn't send your message.",
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          "Oops! Something went wrong and we couldn't send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb */}
          <div
            className="breadcrumb-wrapper bg-cover"
            style={{ backgroundImage: "url('/assets/keval-image/about-hero-banner.png')" }}
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
                  <h1>Contact Us</h1>
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
                  <li><i className="fa-solid fa-slash-forward"></i></li>
                  <li>Contact Us</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <section className="contact-info-section fix section-padding" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="row g-4">

                {/* Box 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <motion.div
                    variants={fadeInUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="contact-info-box"
                  >
                    <div className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                      {/* svg unchanged */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                        <path d="M20.0084 19.8214C23.2007...Z" fill="white" />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Office Address</h3>
                      <p>Xyz Belgium</p>
                    </div>
                  </motion.div>
                </div>

                {/* Box 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <motion.div
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="contact-info-box"
                  >
                    <div className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                      {/* svg unchanged */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                        <path d="M15 0C6.72898...Z" fill="white" />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Call Us For Support:</h3>
                      <p><a href="tel:+32499712725">+32 499 712 725</a></p>
                    </div>
                  </motion.div>
                </div>

                {/* Box 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <motion.div
                    variants={fadeInUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="contact-info-box"
                  >
                    <div className="icon" style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
                      {/* svg unchanged */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
                        <path d="M26.6875 3.31229...Z" fill="white" />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Email Us Anytime:</h3>
                      <p><a href="mailto:kevalai24@gmail.com">kevalai24@gmail.com</a></p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Form & Map */}
          <section className="contact-section fix section-padding pt-0" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
              <div className="contact-wrapper">
                <div className="row g-4">

                  {/* Map */}
                  <div className="col-lg-6">
                    <motion.div
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once:false, amount:0.3 }}
                      className="map-items"
                    >
                      <div className="googpemap">
                        <iframe
                          width="100%"
                          height="450"
                          loading="lazy"
                          style={{ border:0 }}
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src="https://www.google.com/maps/embed?pb=!1m18..."
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Form */}
                  <div className="col-lg-6">
                    <motion.div
                      variants={fadeInUp(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once:false, amount:0.3 }}
                      className="contact-content"
                    >
                      <h3>Ready to Get Started?</h3>

                      {submitStatus.type && (
                        <div
                          className={`alert ${submitStatus.type === 'success' ? 'alert-success':'alert-danger'}`}
                          style={{
                            padding:'15px',marginBottom:'20px',borderRadius:'5px',
                            backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                          }}
                        >
                          {submitStatus.message}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="contact-form-items" id="contact-form">
                        <div className="row g-4">

                          <div className="col-lg-6">
                            <motion.div
                              variants={fadeInUp(0.3)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              className="form-clt"
                            >
                              <span>First name*</span>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="Enter Your First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>
                          </div>

                          <div className="col-lg-6">
                            <motion.div
                              variants={fadeInUp(0.5)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              className="form-clt"
                            >
                              <span>Last name*</span>
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Your Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>
                          </div>

                          <div className="col-lg-6">
                            <motion.div
                              variants={fadeInUp(0.3)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              className="form-clt"
                            >
                              <span>Phone Number*</span>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Enter Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>
                          </div>

                          <div className="col-lg-6">
                            <motion.div
                              variants={fadeInUp(0.5)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              className="form-clt"
                            >
                              <span>Email address*</span>
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>
                          </div>

                          <div className="col-lg-12">
                            <motion.div
                              variants={fadeInUp(0.7)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              className="form-clt"
                            >
                              <span>Message*</span>
                              <textarea
                                name="message"
                                placeholder="Write your message......"
                                value={formData.message}
                                onChange={handleChange}
                                required
                              />
                            </motion.div>
                          </div>

                          <div className="col-lg-7">
                            <motion.button
                              variants={fadeInUp(0.9)}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once:false, amount:0.3 }}
                              type="submit"
                              disabled={isSubmitting}
                              className="theme-btn"
                            >
                              <span className="icon-1">
                                <Image src="/assets/img/icon/10.svg" alt="i" width={20} height={20} />
                              </span>
                              {isSubmitting ? 'Sending...' : 'Submit request'}
                              <span className="icon-2">
                                <Image src="/assets/img/icon/11.svg" alt="i" width={20} height={20} />
                              </span>
                            </motion.button>
                          </div>

                        </div>
                      </form>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg"
            style={{background: "linear-gradient(to bottom, white 50%, #0d0670 50%)"}}
          >
            <div className="container">
              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:false, amount:0.3 }}
                className="cta-wrapper bg-cover"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
                  Have an idea in your mind?<br/>Let&apos;s make something great together
                </h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once:false, amount:0.3 }}
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
