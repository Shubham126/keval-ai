import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/all.min.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/main.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keval-AI - Empowering Diamond Trade with AI",
  description: "Keval-AI - Empowering Diamond Trade with AI Solutions",
  icons: {
    icon: "/assets/keval-image/logo/Keval AI Favicon- Blue.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap-scroll-trigger.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}
