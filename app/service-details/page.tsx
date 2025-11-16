'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { fadeInUp } from '@/lib/motionVariants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

interface ServiceItem {
  id: string;
  title: string;
  href: string;
  active?: boolean;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const services: ServiceItem[] = [
  { id: '1', title: 'HIGH CONVERSION WEBSITE', href: '/service-details', active: true },
  { id: '2', title: 'INVENTORY MANAGEMENT SYSTEMS', href: '/service-details' },
  { id: '3', title: 'MVP development', href: '/service-details' },
  { id: '4', title: 'CRM AND ERP', href: '/service-details' },
  { id: '5', title: 'Marketing solutions', href: '/service-details' },
];

const faqs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Why Is SEO Important For Small Business?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident aspernatur mollitia? Enim a iusto esse maxime numquam qui eaque!',
  },
  {
    id: 'faq2',
    question: 'How do I choose the best SEO Agency?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident aspernatur mollitia? Enim a iusto esse maxime numquam qui eaque!',
    defaultOpen: true,
  },
  {
    id: 'faq3',
    question: 'Better Security And Faster Server?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident aspernatur mollitia? Enim a iusto esse maxime numquam qui eaque!',
  },
  {
    id: 'faq4',
    question: 'Deployment Within Few Minutes',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident aspernatur mollitia? Enim a iusto esse maxime numquam qui eaque!',
  },
];

export default function ServiceDetailsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs.find(f => f.defaultOpen)?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb Section */}
          <div className="relative overflow-hidden z-[9]">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-[9]">
              <div className="page-heading py-[170px] md:py-[140px] text-center">
                <motion.div
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="breadcrumb-sub-title"
                >
                  <h1 className="font-montserrat text-[64px] sm:text-[44px] font-bold text-white relative z-[9]">
                    Service Details
                  </h1>
                </motion.div>
                <motion.ul
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex justify-center items-center gap-[10px] mt-5 sm:mt-[15px]"
                >
                  <li className="text-white uppercase font-normal text-base">
                    <Link href="/" className="flex items-center gap-[10px]">
                      <i className="fa-regular fa-house" />
                      Home
                    </Link>
                  </li>
                  <li className="text-white">
                    <i className="fa-solid fa-slash-forward" />
                  </li>
                  <li className="text-white uppercase font-normal text-base">Service Details</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Service Details Section */}
          <section className="py-[120px] md:py-[100px] sm:py-[80px]">
            <div className="container mx-auto px-4">
              <div className="service-details-wrapper">
                {/* Main Image */}
                <div className="mb-12">
                  <div className="w-full">
                    <div className="details-image mb-[50px]">
                      <Image
                        src="/assets/keval-image/service/detail-1.jpg"
                        alt="Service Detail"
                        width={1200}
                        height={600}
                        className="w-full h-full rounded-[20px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Sidebar - 4 columns */}
                  <div className="col-span-12 lg:col-span-4">
                    <div className="main-sidebar sticky top-[100px]">
                      <div className="single-sidebar-widget bg-[#F5F5F5] p-[40px_30px] mb-[30px] rounded-[10px]">
                        <div className="wid-title mb-[25px]">
                          <h4 className="relative inline-block pb-[15px] font-montserrat text-[24px] font-semibold text-[#17012C]">
                            All Services
                            {/* Underline decoration */}
                            <span
                              className="absolute bottom-0 left-0 w-5 h-0.5 bg-[#0B2546]"
                              style={{ width: '20px', height: '2px' }}
                            />
                            <span
                              className="absolute bottom-0 left-[30px] w-[63px] h-0.5 bg-[#0B2546]"
                              style={{ width: '63px', height: '2px' }}
                            />
                          </h4>
                        </div>
                        <div className="service-widget-categories">
                          <ul className="space-y-0">
                            {services.map((service) => (
                              <li
                                key={service.id}
                                className={`flex items-center justify-between p-[22px_25px] rounded-[10px] transition-all duration-400 ease-in-out mb-3 last:mb-0 ${
                                  service.active
                                    ? 'bg-[#0B2546]'
                                    : 'bg-white hover:bg-[#0B2546]'
                                }`}
                              >
                                <Link
                                  href={service.href}
                                  className={`font-montserrat text-base font-medium leading-none transition-colors ${
                                    service.active
                                      ? 'text-white'
                                      : 'text-[#17012C] hover:text-[#17012C]'
                                  }`}
                                >
                                  {service.title}
                                </Link>
                                <span
                                  className={`transition-all duration-400 ease-in-out ${
                                    service.active ? 'text-white' : 'text-[#17012C]'
                                  }`}
                                >
                                  <i className="fa-regular fa-arrow-right-long" />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - 8 columns */}
                  <div className="col-span-12 lg:col-span-8">
                    <div className="service-details-content">
                      {/* Main Title */}
                      <h3 className="font-montserrat text-[40px] font-medium mb-5 uppercase text-[#17012C]">
                        HIGH CONVERSION WEBSITE
                      </h3>
                      {/* First Paragraph */}
                      <p className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E] mb-4">
                        Keval AI creates websites that look great and convert visitors into customers.
                        Fast, user-friendly, and optimized for growth.
                      </p>
                      {/* What We Provide Section */}
                      <h3 className="font-montserrat text-[40px] font-medium mb-5 uppercase mt-8 text-[#17012C]">
                        What We Provide
                      </h3>
                      <p className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E] mb-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt earum
                        repellendus nemo cupiditate debitis. Iste voluptas corrupti repellendus quas.
                      </p>
                      {/* Service Detail Image */}
                      <div className="thumb mb-10">
                        <Image
                          src="/assets/keval-image/service/service-detail.jpg"
                          alt="Service Detail"
                          width={800}
                          height={500}
                          className="w-full h-full rounded-[20px] object-cover"
                        />
                      </div>
                      {/* The Challenge Section */}
                      <h3 className="font-montserrat text-[40px] font-medium mb-5 uppercase text-[#17012C]">
                        The Challange
                      </h3>
                      <p className="font-source-sans text-base font-normal leading-[30px] text-[#1E1E1E] mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi
                        blanditiis dolor ex quas ullam dolores eum, quod quasi iusto corrupti adipisci
                        eaque impedit consequatur at aliquid voluptatum consequuntur exercitationem?
                        Consequuntur ad placeat voluptatibus recusandae accusamus quia quod soluta vel
                        eveniet nobis totam voluptas, fugiat necessitatibus, et qui dolore dolorum!
                      </p>
                      {/* Details List Items */}
                      <div className="details-list-items flex items-center gap-[100px] xl:flex-wrap xl:gap-[30px] mt-8">
                        <ul className="details-list space-y-0">
                          <li className="font-montserrat text-base font-medium text-[#17012C] mb-[15px] last:mb-0 flex items-center">
                            <i className="fa-solid fa-circle-check text-[#0B2546] mr-2" />
                            Various analysis options.
                          </li>
                          <li className="font-montserrat text-base font-medium text-[#17012C] mb-[15px] last:mb-0 flex items-center">
                            <i className="fa-solid fa-circle-check text-[#0B2546] mr-2" />
                            Advance Data analysis operation.
                          </li>
                        </ul>
                        <ul className="details-list space-y-0">
                          <li className="font-montserrat text-base font-medium text-[#17012C] mb-[15px] last:mb-0 flex items-center">
                            <i className="fa-solid fa-circle-check text-[#0B2546] mr-2" />
                            Page Load (time, size, number of requests).
                          </li>
                          <li className="font-montserrat text-base font-medium text-[#17012C] mb-[15px] last:mb-0 flex items-center">
                            <i className="fa-solid fa-circle-check text-[#0B2546] mr-2" />
                            Advance Data analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* FAQ Accordion */}
                    <div className="faq-wrapper mt-12">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion space-y-3" id="accordion">
                            {faqs.map((faq, index) => {
                              const isOpen = openFaq === faq.id;
                              const delay = 0.3 + index * 0.2;
                              return (
                                <motion.div
                                  key={faq.id}
                                  variants={fadeInUp(delay)}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true }}
                                  className="accordion-item border-0 bg-white mb-3 last:mb-0"
                                >
                                  <h5 className="accordion-header">
                                    <button
                                      type="button"
                                      onClick={() => toggleFaq(faq.id)}
                                      className={`accordion-button ${
                                        isOpen ? '' : 'collapsed'
                                      } font-montserrat text-[28px] sm:text-[18px] font-medium bg-white border-0 rounded-none shadow-[12px_-12px_24px_0px_rgba(0,0,0,0.06)] p-[25px_30px] transition-all duration-300 ease-in-out capitalize w-full flex items-center justify-between ${
                                        isOpen
                                          ? 'pt-[25px] pb-0 text-[#0B2546]'
                                          : 'shadow-[0px_4px_25px_0px_rgba(0,0,0,0.06)] text-[#17012C]'
                                      }`}
                                      style={{
                                        letterSpacing: '-0.2px',
                                      }}
                                    >
                                      {faq.question}
                                      {/* Plus/Minus Icon */}
                                      <span className="ml-auto flex items-center justify-center w-6 h-6 transition-all duration-300 ease-in-out text-[#17012C]">
                                        {isOpen ? (
                                          <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                          </svg>
                                        ) : (
                                          <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                          </svg>
                                        )}
                                      </span>
                                    </button>
                                  </h5>
                                  {isOpen && (
                                    <div className="accordion-collapse show">
                                      <div className="accordion-body font-source-sans text-base leading-[30px] text-[#1E1E1E] bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.06)] px-[30px] py-[15px] pr-5 xl:pr-[50px] lg:pr-[30px]">
                                        {faq.answer}
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* CTA Section */}
          <section
          className="relative z-[9] py-[120px] md:py-[100px] sm:py-[80px] pt-0 bg-[#222222]"
          style={{ background: 'linear-gradient(to bottom, white 50%, black 50%)' }}
          >
          {/* Background overlay for dark bottom */}
          <div className="absolute top-[45%] left-0 right-0 bottom-0 w-full h-full bg-black -z-[1]" />

          <div className="max-w-[1320px] mx-auto px-4">
            <motion.div
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="cta-wrapper rounded-3xl p-16 md:p-12 sm:p-10 text-center bg-cover bg-center relative z-[9]"
              style={{
                backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
              }}
            >
              {/* Heading (centered like version #1, font size like version #2) */}
              <h2 className="font-montserrat text-3xl md:text-5xl font-bold leading-[1.15] text-white mb-8">
                Have an idea in your mind? Let&apos;s make something great together
              </h2>

              {/* CTA Button (font + button style from V2, with center alignment from V1) */}
              <motion.div
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="header-cta-btn"
                  >
                    Get in Touch
                  </Link>
                </div>
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
