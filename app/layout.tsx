import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLoader from "@/components/AppLoader";
import ScriptsInitializer from "@/components/ScriptsInitializer";
import ImagePopup from "@/components/ImagePopup";
import VideoPopup from "@/components/VideoPopup";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

