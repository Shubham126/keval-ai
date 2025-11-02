'use client';

import { useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = '', duration = 4000 }: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        countRef.current!.textContent = target + suffix;
        clearInterval(timer);
      } else {
        countRef.current!.textContent = Math.floor(start) + suffix;
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, suffix, duration]);

  return <span className="count" ref={countRef}>0{suffix}</span>;
}

export default function CounterSection() {
  return (
    <section
      className="py-5 bg-cover"
      style={{
        backgroundImage: "url('/assets/img/choous-us-bg.jpg')",
      }}
    >
      <div className="section-title style-4 title-anim">
        <h3 className="text-center text-white heading_text">
          driven by results
        </h3>
      </div>
      <div className="container">
        <div className="counter-wrapper-3">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="counter-box-items">
                <h2>
                  <Counter target={100} suffix="+" />
                </h2>
                <p>Projects completed</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="counter-box-items">
                <h2>
                  <Counter target={99} suffix="%" />
                </h2>
                <p>Satisfied customers</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="counter-box-items">
                <h2>
                  <Counter target={80} suffix="k" />
                </h2>
                <p>Saved per month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

