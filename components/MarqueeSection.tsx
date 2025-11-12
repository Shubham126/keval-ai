'use client';

import Link from 'next/link';

export default function MarqueeSection() {
  return (
    <section className="w-full bg-white py-14 overflow-hidden">
      <div className="relative w-full select-none">

        {/* OUTER ROUNDED BUBBLE */}
        <div className="mx-auto w-[96%] bg-white rounded-[80px] shadow-[0px_10px_40px_rgba(0,0,0,0.15)] py-10 px-10 overflow-hidden">

          {/* Marquee */}
          <div className="flex whitespace-nowrap animate-marquee items-center">

            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex items-center gap-20 mr-20">

                {/* 1 FULL SET */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-20">

                    {/* TEXT */}
                    <Link
                      href="/contact"
                      className="uppercase text-[64px] font-semibold tracking-tight text-black transition-all"
                    >
                      BOOK A CALL
                    </Link>

                    {/* GLOW DOT */}
                    <span
                      className="h-16 w-16 rounded-full bg-[#FF7A1A] shadow-[0_0_40px_20px_rgba(173,255,135,0.45)]"
                    ></span>

                  </div>
                ))}

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee a {
            font-size: 32px !important;
          }
          .animate-marquee span {
            width: 20px !important;
            height: 20px !important;
            box-shadow: 0 0 12px 6px rgba(173, 255, 135, 0.45) !important;
          }
        }
      `}</style>
    </section>
  );
}
