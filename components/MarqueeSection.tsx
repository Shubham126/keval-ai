'use client';

import Link from 'next/link';

export default function MarqueeSection() {
  return (
    <div className="marquee-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container custom-container">
        <div className="mycustom-marque">
          <div className="scrolling-wrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="comm">
                <div></div>
                <Link href="/contact" className="cmn-textslide">
                  book a call
                </Link>
                <div className="cmn-textslide icon"></div>
                <Link href="/contact" className="cmn-textslide">
                  book a call
                </Link>
                <div className="cmn-textslide icon"></div>
                <Link href="/contact" className="cmn-textslide">
                  book a call
                </Link>
                <div className="cmn-textslide icon"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

