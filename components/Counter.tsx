'use client';

import { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Reusable Counter component using react-countup (replaces jQuery CounterUp)
 */
export default function Counter({ 
  target, 
  prefix = '', 
  suffix = '', 
  duration = 2,
  className = 'count'
}: CounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useIntersectionObserver<HTMLSpanElement>(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  });

  return (
    <span className={className} ref={ref}>
      {hasAnimated ? (
        <CountUp 
          start={0} 
          end={target} 
          duration={duration} 
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}

