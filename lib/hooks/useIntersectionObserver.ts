import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook to replace jQuery Waypoints with Intersection Observer API
 */
export function useIntersectionObserver<T extends HTMLElement>(
  callback: () => void,
  options?: IntersectionObserverInit
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
}

