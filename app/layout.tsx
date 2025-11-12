import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLoader from "@/components/AppLoader";
import ScriptsInitializer from "@/components/ScriptsInitializer";
import ImagePopup from "@/components/ImagePopup";
import VideoPopup from "@/components/VideoPopup";

import "./globals.css";

// Optimize font loading with display swap and preload
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Google Maps */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
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
      <body className={`${inter.className} react-app`}>
        {/* Initialize custom scripts - No jQuery dependencies */}
        <ScriptsInitializer />
        
        {/* Popup handlers (replaces Magnific Popup) */}
        <ImagePopup />
        <VideoPopup />

        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}

