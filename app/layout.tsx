import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import AppLoader from "@/components/AppLoader";
import ScriptsInitializer from "@/components/ScriptsInitializer";
import ImagePopup from "@/components/ImagePopup";
import VideoPopup from "@/components/VideoPopup";
import MouseCursor from "@/components/MouseCursor";

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
    <html lang="en">
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
      <body className={`${montserrat.variable} ${sourceSans.variable} react-app`}>
        {/* Initialize custom scripts - No jQuery dependencies */}
        <ScriptsInitializer />
        
        {/* Popup handlers (replaces Magnific Popup) */}
        <ImagePopup />
        <VideoPopup />
        
        {/* Custom Mouse Cursor */}
        <MouseCursor />

        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}

