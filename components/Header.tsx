'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown, slideRight } from '@/lib/motionVariants';
import { ChevronDown, XMark } from '@/components/Icons';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  return (
    <>
      {/* HEADER */}
      <motion.header
        className={`absolute top-0 left-0 w-full transition-all duration-[900ms] z-[99] ${
          isSticky 
            ? 'fixed bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.06)] z-[999]' 
            : 'bg-transparent'
        }`}
        initial={{ opacity: 1, y: 0 }}
        animate={isSticky ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1],
          }
        } : {
          opacity: 1,
          y: 0,
        }}
      >
        {/* Container with responsive padding */}
        <div className={`mx-auto flex items-center justify-between py-[10px] ${
          isSticky ? 'px-[60px] max-w-full' : 'px-[60px] max-w-full'
        } 
        max-[1600px]:px-[50px]
        max-[1399px]:px-[40px]
        max-[1199px]:px-[30px]`}>
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="w-[200px] h-auto">
              <Image
                src="/assets/keval-image/logo/Side Aligned Logo 1/Logo-06.png"
                alt="Keval AI"
                width={200}
                height={75}
                className={`w-full h-full object-contain transition-all duration-[900ms] ${
                  isSticky ? 'brightness-0' : ''
                }`}
                style={{
                  filter: isSticky ? 'brightness(0)' : 'none',
                }}
                priority
              />
            </div>
          </Link>

          {/* NAV MENU */}
          <nav className="hidden lg:block">
            <ul className="flex items-center 
              [&>li]:mr-[50px]
              max-[1899px]:[&>li]:mr-[35px]
              max-[1600px]:[&>li]:mr-[30px]
              max-[1399px]:[&>li]:mr-[25px]">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`text-[15px] font-medium font-heading uppercase py-[20px] transition-all duration-[400ms] ease-in-out ${
                      isSticky
                        ? 'text-[#17012C] hover:text-[#0B2546]'
                        : 'text-white hover:text-[#0B2546]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* SERVICES DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-[15px] font-medium font-heading uppercase py-[20px] transition-all duration-[400ms] ease-in-out ${
                    isSticky
                      ? 'text-[#17012C] hover:text-[#0B2546]'
                      : 'text-white hover:text-[#0B2546]'
                  }`}
                >
                  SERVICES
                  <ChevronDown className="text-xs mt-[2px] w-3 h-3" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, visibility: 'hidden', y: 10 }}
                      animate={{ opacity: 1, visibility: 'visible', y: 0 }}
                      exit={{ opacity: 0, visibility: 'hidden', y: 10 }}
                      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                      className="absolute left-0 top-full min-w-[250px] bg-white p-[30px] shadow-[0px_0px_40px_0px_rgba(11,13,17,0.08)] z-50"
                    >
                      <li className="mb-[15px] last:mb-0">
                        <Link
                          href="/service"
                          className="block text-[15px] font-heading uppercase text-[#0B2546] hover:text-[#FD7E31] transition-all duration-[400ms] ease-in-out"
                        >
                          SERVICE
                        </Link>
                      </li>
                      <li className="mb-[15px] last:mb-0">
                        <Link
                          href="/service-details"
                          className="block text-[15px] font-heading uppercase text-[#0B2546] hover:text-[#FD7E31] transition-all duration-[400ms] ease-in-out"
                        >
                          SERVICE DETAILS
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {[
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`text-[15px] font-medium font-heading uppercase py-[20px] transition-all duration-[400ms] ease-in-out ${
                      isSticky
                        ? 'text-[#17012C] hover:text-[#0B2546]'
                        : 'text-white hover:text-[#0B2546]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA BUTTON & HAMBURGER CONTAINER */}
          <div className="flex items-center gap-[30px] max-[1399px]:gap-[20px]">
            {/* CTA BUTTON */}
            <div className="lg:block max-[1199px]:hidden">
              <Link
                href="/contact"
                className="header-cta-btn"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* HAMBURGER */}
            <div
              className={`lg:hidden relative w-[31px] h-[18px] cursor-pointer ${
                isOffcanvasOpen ? 'hamburger-active' : ''
              }`}
              onClick={toggleOffcanvas}
            >
              <span
                className={`absolute h-[2px] transition-all duration-[300ms] ${
                  isSticky ? 'bg-[#17012C]' : 'bg-white'
                } ${
                  isOffcanvasOpen 
                    ? 'top-[8px] left-[8px] w-[15px] rotate-45' 
                    : 'top-0 left-[16px] w-[15px]'
                }`}
              />
              <span
                className={`absolute top-[44%] h-[2px] w-[30px] transition-all duration-[300ms] ${
                  isSticky ? 'bg-[#17012C]' : 'bg-white'
                } ${
                  isOffcanvasOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute bottom-0 h-[2px] transition-all duration-[300ms] ${
                  isSticky ? 'bg-[#17012C]' : 'bg-white'
                } ${
                  isOffcanvasOpen 
                    ? 'bottom-[8px] left-[8px] w-[15px] -rotate-45' 
                    : 'left-0 w-[15px]'
                }`}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OFFCANVAS */}
      <AnimatePresence>
        {isOffcanvasOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOffcanvas}
            />
            <motion.div
              className="fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-white z-[999] p-8 shadow-lg overflow-y-auto"
              variants={slideRight}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#17012C] font-heading font-bold text-xl">Keval AI</h3>
                <button onClick={closeOffcanvas}>
                  <XMark className="text-2xl text-[#17012C] w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-6 text-lg text-[#17012C] font-heading uppercase font-semibold">
                <li>
                  <Link href="/" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    Service Details
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeOffcanvas} className="hover:text-[#0B2546] transition-all duration-[400ms]">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
