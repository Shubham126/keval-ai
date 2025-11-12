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
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://maps.googleapis.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://www.google.com https://maps.googleapis.com;
    frame-src 'self' https://www.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    require-trusted-types-for 'script';
  `.replace(/\s{2,}/g, ' ').trim();

  // Cross-Origin-Opener-Policy - origin isolation
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  
  // Cross-Origin-Embedder-Policy - additional isolation
  // Using 'credentialless' instead of 'require-corp' to allow third-party iframes (Google Maps)
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  
  // X-Frame-Options - prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Content Security Policy
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Permissions Policy (formerly Feature Policy)
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
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
