'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fade, slideRight } from '@/lib/motionVariants';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSticky ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        variants={fade}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1320px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/keval-image/logo/Side Aligned Logo 1/Logo-06.png"
              alt="Keval AI"
              width={210}
              height={75}
              className={`object-contain transition-all duration-300 ${
                isSticky ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* NAV MENU */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[15px] font-bold uppercase tracking-wide">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-300 ${
                      isSticky
                        ? 'text-[#0D0670] hover:text-[#FD7E31]'
                        : 'text-white hover:text-[#FD7E31]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* SERVICES DROPDOWN */}
              <li
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 transition-colors duration-300 ${
                    isSticky
                      ? 'text-[#0D0670] hover:text-[#FD7E31]'
                      : 'text-white hover:text-[#FD7E31]'
                  }`}
                >
                  SERVICES
                  <i className="fa-solid fa-chevron-down text-xs mt-[2px]" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-4 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50"
                    >
                      <li>
                        <Link
                          href="/service"
                          className="block px-5 py-3 text-[15px] uppercase text-[#0D0670] hover:text-[#FD7E31] transition-all duration-200"
                        >
                          SERVICE
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service-details"
                          className="block px-5 py-3 text-[15px] uppercase text-[#0D0670] hover:text-[#FD7E31] transition-all duration-200"
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
                    className={`transition-colors duration-300 ${
                      isSticky
                        ? 'text-[#0D0670] hover:text-[#FD7E31]'
                        : 'text-white hover:text-[#FD7E31]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="theme-btn"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* HAMBURGER */}
          <div
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer"
            onClick={toggleOffcanvas}
          >
            <span
              className={`block w-6 h-[2px] transition-colors duration-300 ${
                isSticky ? 'bg-[#0D0670]' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-colors duration-300 ${
                isSticky ? 'bg-[#0D0670]' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-colors duration-300 ${
                isSticky ? 'bg-[#0D0670]' : 'bg-white'
              }`}
            />
          </div>
        </div>
      </motion.header>

      {/* MOBILE OFFCANVAS */}
      <AnimatePresence>
        {isOffcanvasOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeOffcanvas}
            />
            <motion.div
              className="fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-white z-50 p-8 shadow-lg overflow-y-auto"
              variants={slideRight}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#0D0670] font-bold text-xl">Keval AI</h3>
                <button onClick={closeOffcanvas}>
                  <i className="fa-solid fa-xmark text-2xl text-[#0D0670]" />
                </button>
              </div>

              <ul className="space-y-6 text-lg text-[#0D0670] uppercase font-semibold">
                <li><Link href="/" onClick={closeOffcanvas}>Home</Link></li>
                <li><Link href="/about" onClick={closeOffcanvas}>About Us</Link></li>
                <li><Link href="/service" onClick={closeOffcanvas}>Service</Link></li>
                <li><Link href="/service-details" onClick={closeOffcanvas}>Service Details</Link></li>
                <li><Link href="/portfolio" onClick={closeOffcanvas}>Portfolio</Link></li>
                <li><Link href="/contact" onClick={closeOffcanvas}>Contact</Link></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
