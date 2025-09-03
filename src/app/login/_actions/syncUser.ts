'use server';

import { prisma } from '@/lib/prisma';

import { adminAuth } from '@/lib/firebase/admin';

import { createSessionCookieFromIdToken } from '@/lib/firebase/firebaseSesion';

type SyncUserInput = {
  idToken: string;
  firstName: string;
  lastName: string;
};

export async function syncUserAction(input: SyncUserInput) {
  const { idToken, firstName, lastName } = input;

  const decoded = await adminAuth.verifyIdToken(idToken);

  const uid = decoded.uid;
  const email = decoded.email;
  if (!email) {
    throw new Error('Email not found in Firebase token');
  }
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      firebaseUid: uid,
      firstName,
      lastName,
    },
    create: {
      firebaseUid: uid,
      email,
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      firebaseUid: true,
    }
  });

  await createSessionCookieFromIdToken(idToken);

  return {
    success: true,
    user,
  };
}