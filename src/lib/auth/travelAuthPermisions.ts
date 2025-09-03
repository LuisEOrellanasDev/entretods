import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth/auth';
import { prisma } from '@/lib/prisma';
import { UserRole } from '../../../generated/prisma';

export async function requireAuth() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/login');
  }

  return session;
}

export async function requireTravelAccess(userId: string, travelId: string) {
  const userTravel = await prisma.userTravel.findUnique({
    where: {
      userId_travelId: {
        userId,
        travelId
      }
    }
  });

  if (!userTravel) {
    redirect('/dashboard');
  }

  return userTravel;
}

export async function requireTravelAdmin(userId: string, travelId: string) {
  const userTravel = await prisma.userTravel.findUnique({
    where: {
      userId_travelId: {
        userId,
        travelId
      }
    }
  });

  if (!userTravel) {
    throw new Error('No tienes acceso a este viaje');
  }

  if (userTravel.role !== UserRole.ADMIN) {
    throw new Error('Solo los administradores pueden realizar esta acción');
  }

  return userTravel;
}

export async function validateTravelParticipant(userId: string, travelId: string) {
  const userTravel = await prisma.userTravel.findUnique({
    where: {
      userId_travelId: {
        userId,
        travelId
      }
    }
  });

  if (!userTravel) {
    throw new Error('El usuario debe ser un participante del viaje');
  }

  return userTravel;
}

export async function validateExpenseParticipants(
  participantIds: string[],
  travelId: string
) {
  const validParticipants = await prisma.userTravel.findMany({
    where: {
      travelId,
      userId: {
        in: participantIds
      }
    }
  });

  if (validParticipants.length !== participantIds.length) {
    throw new Error('Todos los participantes deben ser miembros del viaje');
  }

  return validParticipants;
}
