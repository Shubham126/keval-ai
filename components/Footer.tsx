'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#050505] to-[#050505]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-[#0C0C0C]/80 backdrop-blur-md border border-white/5 rounded-2xl p-10 md:p-14 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

            {/* Logo & Description */}
            <div>
              <Image
                src="/assets/keval-image/logo/Side Aligned Logo 1/Logo-06.png"
                alt="Keval AI"
                width={180}
                height={60}
                className="object-contain mb-6"
              />
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Designing the future with creativity, intelligence, and purpose.
                Keval-AI blends design and technology into meaningful experiences.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-lg font-semibold uppercase mb-5 text-white">Explore</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/service" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h4 className="text-lg font-semibold uppercase mb-5 text-white">Portfolio</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white transition">Dalila Diamonds</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Donai Gems</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Millennium Star</Link></li>
              </ul>
            </div>

            {/* Stay in the Loop */}
            <div className="md:-ml-20">
              <h4 className="text-lg font-semibold uppercase mb-5 text-white">
                Stay in the Loop
              </h4>
              <p className="text-gray-400 mb-5 text-[15px] leading-relaxed">
                Subscribe to our newsletter for design insights & AI updates.
              </p>

              {/* Email Input + Button - Separate containers */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-3"
              >
                <div className="flex-1 max-w-[220px]">
                  <input  
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full bg-[#111315] border border-[#1c1e21] rounded-lg text-gray-300 placeholder-gray-500 px-4 py-3 outline-none focus:ring-1 focus:ring-theme2 transition-all duration-300"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="theme-btn"
                  >
                    Join
                  </button>
                </div>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-theme2 transition"
                >
                  <Image
                    src="/assets/svg/linkedin-svgrepo-com.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
                  />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-theme2 transition"
                >
                  <Image
                    src="/assets/svg/instagram-svgrepo-com.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
                  />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F36] hover:bg-theme2 transition"
                >
                  <Image
                    src="/assets/svg/twitter-svgrepo-com.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="invert brightness-0 filter transition-all duration-300 hover:invert-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-gray-500 text-[14px]">
          © {new Date().getFullYear()} <span className="text-white font-medium">Keval-AI Design</span>
        </div>
      </div>
    </footer>
  );
}
