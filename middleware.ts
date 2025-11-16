import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Redirect /services to /service
  if (request.nextUrl.pathname === '/services') {
    return NextResponse.redirect(new URL('/service', request.url));
  }

  // Security Headers
  // Content Security Policy - protect against XSS attacks
  // Note: 'unsafe-eval' and 'unsafe-inline' are needed for Next.js and some libraries
  // In production, consider tightening these restrictions
  // Note: CSP violations from browser extensions (e.g., perplexity.ai fonts) are expected
  // and safe to ignore - they don't affect site functionality
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://maps.googleapis.com https://maps.gstatic.com https://khms0.googleapis.com https://khms1.googleapis.com https://assets.calendly.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://www.google.com https://maps.googleapis.com https://maps.gstatic.com https://khms0.googleapis.com https://khms1.googleapis.com https://calendly.com;
    frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com https://calendly.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    require-trusted-types-for 'script';
  `.replace(/\s{2,}/g, ' ').trim();

  // Cross-Origin-Opener-Policy - origin isolation
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  
  // Cross-Origin-Embedder-Policy removed - conflicts with Google Maps
  // Google Maps doesn't send Cross-Origin-Resource-Policy header, so COEP blocks it
  // CSP and other headers provide sufficient security without COEP
  
  // Cross-Origin-Resource-Policy - allow cross-origin resources (Google Maps, fonts, etc.)
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  
  // X-Frame-Options removed - CSP frame-ancestors handles clickjacking protection
  // X-Frame-Options: DENY conflicts with embedding Google Maps iframe
  // CSP frame-ancestors 'none' prevents our page from being embedded elsewhere
  
  // Content Security Policy
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Permissions Policy (formerly Feature Policy)
  // Explicitly deny all features we don't use to prevent third-party access
  // This fixes "Potential permissions policy violation: payment is not allowed"
  // Note: ambient-light-sensor is not a standard Permissions Policy feature, removed to avoid errors
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=(), magnetometer=(), gyroscope=(), accelerometer=()'
  );
  
  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // X-Content-Type-Options
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // X-XSS-Protection (legacy but still recommended)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Cache Control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static') || 
      request.nextUrl.pathname.startsWith('/assets/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/)) {
    // Images
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (request.nextUrl.pathname.match(/\.(css|js)$/)) {
    // CSS and JS
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else {
    // HTML pages - shorter cache
    response.headers.set(
      'Cache-Control',
      'public, max-age=0, must-revalidate'
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/services',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
