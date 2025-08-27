import { cookies } from 'next/headers';
import { adminAuth } from '../firebase/admin';

const COOKIE_NAME = process.env.FIREBASE_COOKIE_NAME || 'fb_session';
const MAX_AGE_DAYS = parseInt(process.env.FIREBASE_COOKIE_MAX_AGE_DAYS || '7', 10);
const MAX_AGE_MS = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

export async function createSessionCookieFromIdToken(idToken: string) {
  const expiresIn = MAX_AGE_MS;
  const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: Math.floor(expiresIn / 1000),
    path: '/',
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function verifySessionCookie() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;
  if (!sessionCookie) return null;

  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, true);
    return decoded;
  } catch {
    return null;
  }
}

export function getSessionCookieName() {
  return COOKIE_NAME;
}