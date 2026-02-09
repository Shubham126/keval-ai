import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import AppLoader from "@/components/AppLoader";
import ScriptsInitializer from "@/components/ScriptsInitializer";
import ImagePopup from "@/components/ImagePopup";
import VideoPopup from "@/components/VideoPopup";
import MouseCursorClientWrapper from "./MouseCursorClientWrapper";

import "./globals.css";

// Montserrat for headings, buttons, titles
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Source Sans 3 for body text
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Keval-AI - Empowering Diamond Trade with AI",
  description: "Keval-AI - Empowering Diamond Trade with AI Solutions",
  authors: [{ name: "Gramentheme" }],
  icons: { icon: "/assets/keval-image/logo/Keval AI Favicon- Blue.png" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to own domain for faster CSS/JS delivery */}
        <link rel="preconnect" href="https://keval-ai.netlify.app" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preconnect and DNS prefetch for Google Maps */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />

        {/* Trusted Types for DOM-based XSS protection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
                try {
                  window.trustedTypes.createPolicy('default', {
                    createHTML: (string) => string,
                    createScript: (string) => string,
                    createScriptURL: (string) => string,
                  });
                } catch (e) {
                  // Policy already exists or browser doesn't support it
                }
              }
            `,
          }}
        />
      </head>

      <body
        className={`${montserrat.variable} ${sourceSans.variable} react-app`}
        suppressHydrationWarning
      >
        {/* Initialize custom scripts - No jQuery dependencies */}
        <ScriptsInitializer />

        {/* Popup handlers */}
        <ImagePopup />
        <VideoPopup />

        {/* Custom Mouse Cursor (now safely in client wrapper) */}
        <MouseCursorClientWrapper />

        {/* App content */}
        <AppLoader>{children}</AppLoader>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      console.log("[RAW CURSOR] injected");

      if (!window.__rawCursorLoaded) {
        window.__rawCursorLoaded = true;
        
        const inner = document.createElement("div");
        const outer = document.createElement("div");

        inner.id = "raw-cursor-inner";
        outer.id = "raw-cursor-outer";

        inner.style.width = "6px";
        inner.style.height = "6px";
        inner.style.background = "#0B2546";
        inner.style.borderRadius = "50%";
        inner.style.transition = "all 0.3s ease-out";

        outer.style.width = "30px";
        outer.style.height = "30px";
        outer.style.border = "2px solid #0B2546";
        outer.style.borderRadius = "50%";
        outer.style.opacity = "0.5";
        outer.style.transition = "all 0.1s ease-out";

        document.body.appendChild(inner);
        document.body.appendChild(outer);

        document.addEventListener("mousemove", (e) => {
          inner.style.transform = \`translate(\${e.clientX}px,\${e.clientY}px) translate(-50%, -50%)\`;
          outer.style.transform = \`translate(\${e.clientX}px,\${e.clientY}px) translate(-50%, -50%)\`;
        });

        document.addEventListener("mouseover", (e) => {
          const el = e.target;
          const hover = el.tagName === "A" ||
                        el.tagName === "BUTTON" ||
                        el.closest("a") ||
                        el.closest("button") ||
                        el.closest('[role="button"]') ||
                        getComputedStyle(el).cursor === "pointer";

          if (hover) {
            inner.style.width = "70px";
            inner.style.height = "70px";
            inner.style.background = "rgba(11,37,70,0.3)";

            outer.style.width = "80px";
            outer.style.height = "80px";
            outer.style.opacity = "0.3";
          } else {
            inner.style.width = "6px";
            inner.style.height = "6px";
            inner.style.background = "#0B2546";

            outer.style.width = "30px";
            outer.style.height = "30px";
            outer.style.opacity = "0.5";
          }
        });
      }
    `,
          }}
        ></script>

        {/* ChatFlow AI SDK - Global Integration */}
        <Script
          src="https://chat-fn.netlify.app/chatbot-sdk.js"
          data-api-key="saiwk_2988c98fd104b223d8b8a01625d5dbd41b3fa118130cb3793238b6848386dda7"
          data-preselected-website="keval-ai.netlify.app"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
