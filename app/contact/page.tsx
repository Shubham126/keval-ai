'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

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

      {/* Hero Section */}
      <section
        className="relative flex h-[56vh] min-h-[420px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <motion.h1
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-extrabold uppercase text-white tracking-wide"
          >
            Contact Us
          </motion.h1>
          <motion.div
            variants={fadeInUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 flex items-center justify-center gap-3 text-white/80"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span>Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: 'Office Address',
              text: 'Xyz Belgium',
              svg: '/assets/img/icon/location.svg',
            },
            {
              title: 'Call Us For Support:',
              text: '+32 499 712 725',
              link: 'tel:+32499712725',
              svg: '/assets/img/icon/phone.svg',
            },
            {
              title: 'Email Us Anytime:',
              text: 'kevalai24@gmail.com',
              link: 'mailto:kevalai24@gmail.com',
              svg: '/assets/img/icon/mail.svg',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-[#f9f9f9] py-12 px-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <Image 
                    src={item.svg} 
                    alt="icon" 
                    width={28} 
                    height={28}
                    loading="lazy"
                    className="brightness-0 invert"
                  />
                </div>
              </div>
              <h3 className="text-[#0d0670] text-lg font-semibold uppercase mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-theme2 transition"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-gray-600">{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map + Contact Form */}
      <section className="bg-white pb-24">
        <div className="max-w-[1320px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="rounded-3xl overflow-hidden shadow-sm"
          >
            <iframe
              width="100%"
              height="650"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.478221817852!2d4.351721415746877!3d50.846557979532385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3802b6c5f2b%3A0x40099ab2f4d8b10!2sBelgium!5e0!3m2!1sen!2sin!4v1699939378007!5m2!1sen!2sin"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="bg-[#f9f9f9] rounded-3xl p-10 shadow-sm"
          >
            <h3 className="text-[#0d0670] text-3xl font-bold mb-8 uppercase">
              Ready to Get Started?
            </h3>

            {submitStatus.type && (
              <div
                className={`mb-6 rounded-md px-4 py-3 text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'First Name*', name: 'firstName', type: 'text' },
                  { label: 'Last Name*', name: 'lastName', type: 'text' },
                  { label: 'Phone Number*', name: 'phone', type: 'tel' },
                  { label: 'Email Address*', name: 'email', type: 'email' },
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp(i * 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    <label className="block text-[#0d0670] font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={`Enter Your ${field.label.replace('*', '')}`}
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:ring-2 focus:ring-theme2 outline-none"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp(0.7)}
                initial="hidden"
                whileInView="visible"
              >
                <label className="block text-[#0d0670] font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message......"
                  className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:ring-2 focus:ring-theme2 outline-none h-40 resize-none"
                ></textarea>
              </motion.div>

              <motion.div
                variants={fadeInUp(0.9)}
                initial="hidden"
                whileInView="visible"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 bg-theme2 hover:bg-[#ff924f] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300"
                >
                  <Image
                    src="/assets/img/icon/10.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                  <Image
                    src="/assets/img/icon/11.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
<section
            className="py-24"
            style={{ background: 'linear-gradient(to bottom, white 50%, black 50%)' }}
          >
            <div className="max-w-[1320px] mx-auto px-4">
              <motion.div
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="bg-cover rounded-3xl p-16 text-white"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Have an idea in your mind? Let&apos;s make something great together
                </h2>

                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="theme-btn"
                    >
                      Get in Touch
                    </Link>
                  </div>

                </motion.div>
              </motion.div>
            </div>
          </section>

      <Footer />
      <BackToTop />
    </>
  );
}
