'use server';

import { redirect } from 'next/navigation';
import { adminAuth } from '@/lib/firebase/admin';
import { createSessionCookieFromIdToken } from '@/lib/firebase/firebaseSesion';
import { prisma } from '@/lib/prisma';

export async function createSessionAction(idToken: string) {
  const decoded = await adminAuth.verifyIdToken(idToken);
  const uid = decoded.uid;
  const email = decoded.email;

  if (!email) {
    throw new Error('Email not found in Firebase token');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });
  if (!existingUser) {
    try {
      await adminAuth.deleteUser(uid);
    } catch (firebaseError) {
    }
    throw new Error('USER_NOT_IN_DATABASE');
  }

  await prisma.user.update({
    where: { email },
    data: { firebaseUid: uid }
  });

  await createSessionCookieFromIdToken(idToken);

  return { success: true };
}