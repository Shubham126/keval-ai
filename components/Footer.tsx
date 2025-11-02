import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-wrapper">
        {/* Logo & Intro */}
        <div className="footer-brand">
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
        </div>

        {/* Links */}
        <div className="footer-nav">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/service">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Portfolio</h4>
            <ul>
              <li>
                <Link href="#">Dalila Diamonds</Link>
              </li>
              <li>
                <Link href="#">Donai Gems</Link>
              </li>
              <li>
                <Link href="#">Millennium Star</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-subscribe">
          <h4>Stay in the Loop</h4>
          <p>Subscribe to our newsletter for design insights & AI updates.</p>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Join</button>
          </form>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Keval-AI Design</p>
      </div>
    </footer>
  );
}

