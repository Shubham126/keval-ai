'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp } from '@/lib/motionVariants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

interface ProjectInfo {
  label: string;
  value: string;
}

const projectInfo: ProjectInfo[] = [
  { label: 'Category', value: 'Business, Marketing' },
  { label: 'Author', value: 'Athena Jones' },
  { label: 'Tags', value: 'Data Masters' },
  { label: 'Cost', value: 'USD 1,50,499' },
  { label: 'Date', value: '25 February, 2025' },
];

export default function PortfolioDetailsPage() {
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
                    Portfolio Details
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
                  <li className="text-white uppercase font-normal text-base">Portfolio Details</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <section className="py-[120px] md:py-[100px] sm:py-[80px]">
            <div className="container mx-auto px-4">
              <div className="project-details-wrapper">
                {/* Main Image */}
                <div className="details-image mb-0">
                  <Image
                    src="/assets/keval-image/portfolio/dalila-diamonds.png"
                    alt="Portfolio Detail"
                    width={1200}
                    height={600}
                    className="w-full h-full rounded-[30px] object-cover"
                  />
                </div>

                {/* Project Details Content */}
                <div className="project-details-items mt-[55px]">
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                    {/* Content - 8 columns */}
                    <div className="col-span-12 xl:col-span-8">
                      <div className="details-content">
                        {/* Main Title */}
                        <h2 className="font-montserrat text-[60px] md:text-[50px] sm:text-[40px] font-semibold mb-5 uppercase text-[#17012C] leading-[1.2] tracking-wide">
                          <span className="block">Digital agency bring</span>
                          <span className="block mt-1">specialized knowledge</span>
                          <span className="block mt-1">and experience</span>
                        </h2>

                        {/* First Paragraph */}
                        <p className="font-source-sans text-[18px] font-normal leading-[30px] text-black mb-3">
                          Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget
                          potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit
                          etiam, dapibus.Lectus ve pellentesque a cras posuere tempor facilisi
                          habitant lectus rutrum pede quisque hendrerit mauris ad to elementum
                          fringilla facilisi volutpat fusce pharetra.
                        </p>

                        {/* Second Paragraph */}
                        <p className="font-source-sans text-[18px] font-normal leading-[30px] text-black mb-12">
                          Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget
                          potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit
                          etiam, dapibus.Lectus ve pellentesque a cras posuere tempor facilisi
                          habitant lectus rutrum pede .
                        </p>

                        {/* Challenge & Solution Section */}
                        <h3 className="font-montserrat text-[40px] font-medium mb-4 uppercase text-[#17012C]">
                          Challenge & Solution
                        </h3>
                        <p className="font-source-sans text-[18px] font-normal leading-[30px] text-black mb-12">
                          Future, as it seeks to lead the industry in technological innovation and
                          sustainable building practices to deliver long-lasting value for its clients.
                          Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti
                          vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam,
                          dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus rutrum
                          pede .
                        </p>

                        {/* Final Result Section */}
                        <h3 className="font-montserrat text-[40px] font-medium mb-4 uppercase text-[#17012C]">
                          Final Result
                        </h3>
                        <p className="font-source-sans text-[18px] font-normal leading-[30px] text-black">
                          For almost 50 years Leighton Asia, one of the region's largest and most
                          respected construc companies, has been progressively building for a better
                          future by leveraging international expertise with local intelligence. In that
                          time Leighton.
                        </p>
                      </div>
                    </div>

                    {/* Project Information Sidebar - 4 columns */}
                    <div className="col-span-12 xl:col-span-4 lg:col-span-5">
                      <div className="project-information sticky top-[100px] bg-black rounded-[18px] p-[40px_36px]">
                        <h3 className="font-montserrat text-[28px] font-medium text-white mb-0 uppercase">
                          Project Information
                        </h3>

                        <ul className="mt-5 space-y-0">
                          {projectInfo.map((info, index) => (
                            <li
                              key={index}
                              className={`flex items-center ${
                                index !== projectInfo.length - 1 ? 'mb-5' : ''
                              }`}
                            >
                              <span className="min-w-[80px] font-montserrat text-[18px] font-semibold text-white uppercase">
                                {info.label} :
                              </span>
                              <span className="min-w-[160px] text-[#C8C8CD] ml-[75px] sm:ml-[50px] font-source-sans text-base">
                                {info.value}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="social-icon flex items-center gap-3 mt-8">
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-white border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-white border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-white border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-white border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative z-[9] py-[120px] md:py-[100px] sm:py-[80px] pt-0 bg-[#222222]">
            {/* Background overlay */}
            <div className="absolute top-[40%] left-0 right-0 bottom-0 w-full h-full bg-black -z-[1]" />
            <div className="container mx-auto px-4">
              <div
                className="cta-wrapper rounded-[25px] p-[60px] md:p-[50px_40px] sm:p-[40px_30px] text-center bg-cover bg-center relative z-[9]"
                style={{
                  backgroundImage: "url('/assets/keval-image/service/servic-pg-cta.png')",
                }}
              >
                <motion.h2
                  variants={fadeInUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-montserrat text-[52px] lg:text-[60px] sm:text-[40px] font-medium leading-[111%] text-white mb-10 sm:mb-[30px] text-center"
                >
                  Have an idea in your mind?Let's make something great together
                </motion.h2>
                <motion.div
                  variants={fadeInUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <Link
                    href="/contact"
                    className="header-cta-btn"
                  >
                    get in touch
                  </Link>
                </motion.div>
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
