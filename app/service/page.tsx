'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

export default function ServicePage() {
  return (
    <>
      <Header />

      {/* Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* ===== Breadcrumb Section ===== */}
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
                    Services
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
                  <li className="text-white uppercase font-normal text-base">Services</li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* ===== Service Section ===== */}

          <section className="py-[120px] md:py-[100px] sm:py-[80px]">
            <div className="container mx-auto px-4">

              <div className="flex items-center justify-between relative z-[9] mb-[30px] md:mb-0 pb-10 border-b border-[#E2E2E2] -mt-10" />

              <div className="service-wrapper">
                <ul className="space-y-0">
                  {(() => {
                    const services = [
                      {
                        id: '001',
                        title: 'HIGH CONVERSION WEBSITE',
                        description: 'Keval AI creates websites that look great and convert visitors into customers. Fast, user-friendly, and optimized for growth.',
                        layout: 'left' as const,
                      },
                      {
                        id: '002',
                        title: 'INVENTORY MANAGEMENT SYSTEMS',
                        description: 'Simplify your stock operations with Keval AI\'s inventory systems. Track, manage, and optimize efficiently with minimal errors.',
                        layout: 'right' as const,
                      },
                      {
                        id: '003',
                        title: 'MVP DEVELOPMENT',
                        description: 'Turn ideas into reality quickly with Keval AI\'s MVP development. Launch scalable prototypes that validate your concept with real users.',
                        layout: 'left' as const,
                      },
                      {
                        id: '004',
                        title: 'CRM AND ERP',
                        description: 'Manage clients, resources, and workflows effortlessly with Keval AI\'s CRM & ERP solutions. Gain insights and automate business operations.',
                        layout: 'right' as const,
                      },
                      {
                        id: '005',
                        title: 'MARKETING SOLUTIONS',
                        description: 'Drive growth with Keval AI\'s marketing services. Plan, execute, and target the right audience for measurable results.',
                        layout: 'left' as const,
                      },
                    ];

                    return services.map((service, index) => {
                      const isLast = index === services.length - 1;

                      return (
                        <li
                          key={service.id}
                          className={`flex items-start justify-between mt-[30px] xl:gap-[30px] lg:flex-wrap lg:gap-5 ${
                            !isLast ? 'pb-10 border-b border-[#E2E2E2]' : ''
                          }`}
                        >

                          {/* LEFT LAYOUT */}
                          {service.layout === 'left' ? (
                            <>
                              <motion.div
                                variants={fadeInUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="content w-[45%] min-w-[500px]"
                              >
                                <h4 className="font-montserrat text-[22px] font-semibold mb-2 text-[#17012C]">
                                  {service.id}
                                </h4>

                                <motion.h3
                                  initial={{ opacity: 0, x: '-5%' }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.5, delay: 0.4 }}
                                  className="font-montserrat text-[42px] font-medium text-[#17012C] leading-[1.15] tracking-tight max-w-[550px]"
                                >
                                  <Link href="/service-details" className="hover:text-[#0B2546] transition-colors">
                                    {service.title}
                                  </Link>
                                </motion.h3>
                              </motion.div>

                              <motion.p
                                initial={{ opacity: 0, x: '5%' }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                className="font-source-sans w-[45%] min-w-[500px] text-base font-normal leading-[30px] text-[#1E1E1E] min-h-[120px]"
                              >
                                {service.description}
                              </motion.p>
                            </>
                          ) : (
                            <>
                              <motion.p
                                initial={{ opacity: 0, x: '-5%' }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                                className="font-source-sans w-[45%] min-w-[500px] text-base font-normal leading-[30px] text-[#1E1E1E] min-h-[120px]"
                              >
                                {service.description}
                              </motion.p>

                              <motion.div
                                variants={fadeInUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="content w-[45%] min-w-[500px]"
                              >
                                <h4 className="font-montserrat text-[22px] font-semibold mb-2 text-[#17012C]">
                                  {service.id}
                                </h4>

                                <motion.h3
                                  initial={{ opacity: 0, x: '5%' }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.5, delay: 0.4 }}
                                  className="font-montserrat text-[42px] font-medium text-[#17012C] leading-[1.15] tracking-tight max-w-[550px]"
                                >
                                  <Link href="/service-details" className="hover:text-[#0B2546] transition-colors">
                                    {service.title}
                                  </Link>
                                </motion.h3>
                              </motion.div>
                            </>
                          )}
                        </li>
                      );
                    });
                  })()}
                </ul>
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
