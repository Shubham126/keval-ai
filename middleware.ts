import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect /services to /service
  if (request.nextUrl.pathname === '/services') {
    return NextResponse.redirect(new URL('/service', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/services',
};



