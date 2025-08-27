import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit, getClientIP } from './lib/utils/rateLimit';

const COOKIE_NAME = process.env.FIREBASE_COOKIE_NAME || 'fb_session';

// 👉 Función inline para construir el CSP
function buildCSPHeader(nonce: string, isProd: boolean) {
  const scriptSrc = isProd
    ? `'self' 'nonce-${nonce}' 'strict-dynamic'`
    : `'self' 'nonce-${nonce}' 'unsafe-eval' wasm-unsafe-eval 'strict-dynamic'`;

  const connectSrc = [
    `'self'`,
    'https://*.googleapis.com',
    'https://www.googleapis.com',
    'https://identitytoolkit.googleapis.com',
    'https://*.firebaseio.com',
  ].join(' ');

  return [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: https:`,
    `font-src 'self' data:`,
    `connect-src ${connectSrc}`,
  ].join('; ');
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 🔐 Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // 🔑 CSP con nonce dinámico
  const nonce = crypto.randomUUID();
  const isProd = process.env.NODE_ENV === 'production';
  response.headers.set(
    'Content-Security-Policy-Report-Only', // 👈 cambia a "Content-Security-Policy" en prod final
    buildCSPHeader(nonce, isProd)
  );

  const clientIP = getClientIP(request);
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ['/dashboard', '/travel', '/create-travel'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // 🔄 Root path
  if (pathname === '/') {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // � Redirect legacy /auth/* to new routes
  if (pathname.startsWith('/auth/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (pathname.startsWith('/auth/register')) {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  // �🔒 Protected routes
  if (isProtectedRoute) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // ⏳ Rate limiting para login/register
  if (
    pathname === '/login' ||
    pathname === '/register'
  ) {
    const rateLimitResult = await rateLimit(`auth:${clientIP}`, 10, 60000);
    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({
          error: 'Demasiados intentos. Intenta de nuevo más tarde.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }
  }

  // ⏳ Rate limiting para acciones
  if (pathname.includes('/_actions/')) {
    const rateLimitResult = await rateLimit(`actions:${clientIP}`, 30, 60000);
    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({
          error: 'Límite de acciones excedido. Intenta más tarde.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
