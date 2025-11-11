'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fade } from '@/lib/motionVariants';

export default function Footer() {
  return (
    <motion.footer
      className="glass-footer"
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-wrapper">

        {/* Column 1: Brand */}
        <motion.div
          className="footer-brand"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/assets/keval-image/logo/Side Aligned Logo 1/Logo-09.png"
            alt="Keval AI Logo"
            className="footer-logo"
            width={150}
            height={50}
          />
          <p>
            Designing the future with creativity, intelligence, and purpose.
            Keval-AI blends design and technology into meaningful experiences.
          </p>
        </motion.div>

        {/* Column 2: Navigation */}
        <motion.div
          className="footer-nav"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/service">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Portfolio</h4>
            <ul>
              <li><Link href="#">Dalila Diamonds</Link></li>
              <li><Link href="#">Donai Gems</Link></li>
              <li><Link href="#">Millennium Star</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Column 3: Subscribe */}
        <motion.div
          className="footer-subscribe"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>Stay in the Loop</h4>
          <p>Subscribe to our newsletter for design insights & AI updates.</p>

          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Join</button>
          </form>

          <div className="footer-social">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </motion.div>

      </div>

      {/* Bottom line */}
      <motion.div
        className="footer-bottom"
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p>© 2025 Keval-AI Design</p>
      </motion.div>
    </motion.footer>
  );
}
