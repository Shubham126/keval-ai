'use client';

import { useEffect, useRef, useState } from 'react';

export default function MouseCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  console.log("[Render] MouseCursor rendered. mounted:", mounted);

  useEffect(() => {
    console.log("[Effect] Initial mount");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      console.log("[Effect] Not mounted yet, exiting");
      return;
    }

    console.log("[Effect] Mounted & running setup");

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    console.log("[Check] Touch device:", isTouchDevice);

    if (isTouchDevice) return;

    document.body.classList.add("custom-cursor-active");
    console.log("[Body] Added custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      console.log("[MouseMove] x:", e.clientX, "y:", e.clientY);

      const transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      if (innerRef.current) {
        innerRef.current.style.transform = transform;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = transform;
      }

      if (!isVisible) {
        console.log("[Visibility] Cursor now visible");
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;

      if (target) {
        const isHoveringLink =
          target.tagName === "A" ||
          !!target.closest("a") ||
          target.tagName === "BUTTON" ||
          !!target.closest("button") ||
          !!target.closest('[role="button"]') ||
          !!target.closest(".cursor-pointer") ||
          window.getComputedStyle(target).cursor === "pointer";

        console.log("[Hover Detection]", {
          tag: target.tagName,
          isHoveringLink,
        });

        setIsHovering(Boolean(isHoveringLink));
      } else {
        setIsHovering(false);
      }
    };

    console.log("[Event] Registering document mousemove listener");
    document.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      console.log("[Cleanup] Removing mousemove + cursor class");
      document.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mounted, isVisible]);

  if (!mounted) {
    console.log("[Render] Not mounted yet → returning null");
    return null;
  }

  const innerSize = isHovering ? 70 : 6;
  const outerSize = isHovering ? 80 : 30;
  const innerOpacity = isVisible ? 1 : 0;
  const outerOpacity = isVisible ? (isHovering ? 0.3 : 0.5) : 0;

  console.log("[Render] Final state", {
    isHovering,
    isVisible,
    innerSize,
    outerSize,
  });

  return (
    <>
      <div
        ref={innerRef}
        className="fixed pointer-events-none rounded-full z-[999999]"
        style={{
          top: 0,
          left: 0,
          width: innerSize,
          height: innerSize,
          opacity: innerOpacity,
          backgroundColor: isHovering ? "rgba(11, 37, 70, 0.3)" : "#0B2546",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out",
        }}
      />

      <div
        ref={outerRef}
        className="fixed pointer-events-none rounded-full border-2 z-[999998] box-border"
        style={{
          top: 0,
          left: 0,
          width: outerSize,
          height: outerSize,
          borderColor: "#0B2546",
          opacity: outerOpacity,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.08s ease-out, height 0.08s ease-out, opacity 0.08s ease-out, transform 0.08s ease-out",
        }}
      />
    </>
  );
}
