import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface UseCounterOptions {
  target: number;
  duration?: number;
  startFrom?: number;
}

/**
 * Custom hook for animated counters that reset when component goes out of view or route changes
 */
export function useCounter({ target, duration = 2, startFrom = 0 }: UseCounterOptions) {
  const [count, setCount] = useState(startFrom);
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const pathname = usePathname();

  // Reset function
  const reset = useCallback(() => {
    setCount(startFrom);
    isAnimatingRef.current = false;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, [startFrom]);

  // Reset on route change
  useEffect(() => {
    reset();
  }, [pathname, reset]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimatingRef.current) {
            // Start animation when element enters view
            isAnimatingRef.current = true;
            setCount(startFrom);

            const startTime = performance.now();
            const startValue = startFrom;
            const endValue = target;
            const animDuration = duration * 1000; // Convert to milliseconds

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / animDuration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

              setCount(currentValue);

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
              } else {
                setCount(endValue);
                isAnimatingRef.current = false;
                animationRef.current = null;
              }
            };

            animationRef.current = requestAnimationFrame(animate);
          } else if (!entry.isIntersecting && isAnimatingRef.current) {
            // Reset when element goes out of view
            reset();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, startFrom, reset]);

  return { count, ref: elementRef };
}

