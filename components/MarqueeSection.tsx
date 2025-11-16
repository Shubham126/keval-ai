'use client';

import Link from 'next/link';

export default function MarqueeSection() {
  return (
    <section className="w-full bg-white pt-14 pb-0 overflow-hidden">
      <div className="relative w-full select-none">

        {/* OUTER ROUNDED BUBBLE */}
        <div className="mx-auto w-full bg-white rounded-[80px] rounded-b-none shadow-[0px_10px_40px_rgba(0,0,0,0.15)] py-20 px-10 overflow-hidden">

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
                      className="uppercase text-[120px] max-[1399px]:text-[100px] max-[1199px]:text-[80px] max-[991px]:text-[60px] max-[767px]:text-[50px] max-[575px]:text-[40px] font-semibold tracking-tight text-black transition-all"
                    >
                      BOOK A CALL
                    </Link>

                    {/* GLOW DOT */}
                    <span
                      className="h-24 w-24 max-[1199px]:h-20 max-[1199px]:w-20 max-[767px]:h-16 max-[767px]:w-16 rounded-full bg-[#FF7A1A] shadow-[0_0_60px_30px_rgba(173,255,135,0.45)]"
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
            font-size: 40px !important;
          }
          .animate-marquee span {
            width: 64px !important;
            height: 64px !important;
            box-shadow: 0 0 20px 10px rgba(173, 255, 135, 0.45) !important;
          }
        }
      `}</style>
    </section>
  );
}
