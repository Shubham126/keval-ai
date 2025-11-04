'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      <header
        id="header-sticky"
        className={`header-1 ${isSticky ? 'sticky' : ''}`}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/">
                <div className="logo header-logo">
                  <Image
                    src="/assets/keval-image/logo/Side Aligned Logo 1/Logo-06.png"
                    alt="logo-img"
                    width={150}
                    height={50}
                    priority
                  />
                </div>
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="has-dropdown active d-xl-none">
                        <Link href="/" className="border-none">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/service">Service</Link>
                          </li>
                          <li>
                            <Link href="/service-details">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="/about" className="theme-btn border-white">
                    <span className="icon-1"></span>
                    Book a free consultation
                    <span className="icon-2"></span>
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                    <div className="header-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas */}
      <div className={`fix-area ${isOffcanvasOpen ? 'info-open' : ''}`}>
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <h4>Keval-Ai</h4>
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={closeOffcanvas}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <h3 className="offcanvas-title">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                vitae expedita rem ad, reiciendis culpa veritatis animi a
                cupiditate consectetur!
              </p>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h3>Information</h3>
                <ul className="contact-list">
                  <li>
                    <span> Address: </span>
                    Xyz
                  </li>
                  <li>
                    <span> Call Us: </span>
                    <a href="tel:+00012345688">+000 123 456 88</a>
                  </li>
                  <li>
                    <span> Email: </span>
                    <a href="mailto:kevalai24@gmail.com">kevalai24@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isOffcanvasOpen ? 'overlay-open' : ''}`}
        onClick={closeOffcanvas}
      >      </div>
    </>
  );
}

