import { prisma } from '../prisma';
import { verifySessionCookie } from './firebaseSession';

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
