/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 384], // Added 160 for client logos
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  // Optimize CSS loading
  swcMinify: true,
  // Target modern browsers to reduce legacy JavaScript polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Enable experimental features for better CSS optimization
  experimental: {
    optimizeCss: false, // Keep false as critters caused build errors
  },
  // Remove console logs in production
  webpack: (config, { dev, isServer }) => {
    // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Target modern browsers - reduce polyfills
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
