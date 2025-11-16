'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp } from '@/lib/motionVariants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ArrowRight } from '@/components/Icons';

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
            
            {/* Arrow Circle Button - Top Right */}
            <Link
              href="/portfolio"
              className="fixed top-6 right-6 z-[999] w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:bg-[#0B2546]"
              aria-label="Back to Portfolio"
            >
              <ArrowRight className="w-6 h-6 text-[#0B2546] group-hover:text-white transition-colors duration-300" />
            </Link>
            
            <div className="max-w-[1600px] mx-auto px-12 relative z-[9]">
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
            <div className="max-w-[1600px] mx-auto px-12">
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
                          {/* Facebook */}
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-gray-400 border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
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
                          {/* Twitter */}
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-gray-400 border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
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
                          {/* Vimeo */}
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-gray-400 border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.011 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                            </svg>
                          </a>
                          {/* Pinterest */}
                          <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center bg-transparent text-gray-400 border border-[rgba(255,255,255,0.5)] rounded-full transition-all duration-400 ease-in-out hover:bg-[#0B2546] hover:text-[#17012C] hover:border-[#0B2546]"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
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

          {/* ✅ CTA SECTION */}
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
