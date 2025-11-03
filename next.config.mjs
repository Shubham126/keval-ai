/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['swiper', 'gsap'],
  },
  // Compiler optimizations
  swcMinify: true,
  // Reduce bundle size
  compress: true,
  // Power performance
  poweredByHeader: false,
  // Optimize production builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;

