import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from './prisma';
import { verifySessionCookie } from './auth/firebaseSession';

const COOKIE_NAME = process.env.FIREBASE_COOKIE_NAME || 'fb_session'

const PROTECTED_ROUTES = ['/dashboard', '/expenses', '/profile', '/create-travel', '/travel']

export async function auth() {
  const decoded = await verifySessionCookie();
  if (!decoded?.uid) return null;

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { firebaseUid: decoded.uid },
        decoded.email ? { email: decoded.email } : undefined,
      ].filter(Boolean) as any,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  if (!user) return null;

  return {
    user: {
      ...user,
      name: `${user.firstName} ${user.lastName}`.trim(),
    },
  };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtectedRoute = PROTECTED_ROUTES.some(route =>
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    const token = request.cookies.get(COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'none'"
  )

  return response
}
