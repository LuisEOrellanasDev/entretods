'use server';

import { adminAuth } from '../../../lib/firebase/admin';
import { createSessionCookieFromIdToken } from '../../../lib/firebase/firebaseSesion';
import { prisma } from '../../../lib/prisma';

export async function createSessionAction(idToken: string) {
  const decoded = await adminAuth.verifyIdToken(idToken);
  const uid = decoded.uid;
  const email = decoded.email;

  if (!email) {
    throw new Error('Email not found in Firebase token');
  }

  await prisma.user.upsert({
    where: { email },
    update: { firebaseUid: uid },
    create: { firebaseUid: uid, email, firstName: '', lastName: '' },
  });

  await createSessionCookieFromIdToken(idToken);

  return { success: true };
}