'use server'

import { prisma } from '@/lib/prisma'
import { requireAuth, requireTravelAdmin } from '@/lib/auth/utils'
import { revalidatePath } from 'next/cache'
import { logAuditEvent, AuditActions, AuditResources } from '@/lib/utils/auditLog'
import { sanitizeErrorMessage } from '@/lib/utils/errors'

interface AddParticipantData {
  travelId: string
  email: string
}

export async function addParticipant(data: AddParticipantData) {
  try {
    const session = await requireAuth()
    await requireTravelAdmin(session.user.id, data.travelId)

    // Check if user exists in the database
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    })

    // If user doesn't exist, require them to register first
    if (!user) {
      throw new Error('Este usuario no está registrado en la plataforma. Debe registrarse primero antes de ser agregado al viaje.')
    }

    // Check if user is already an active participant
    const existingParticipant = await prisma.userTravel.findUnique({
      where: {
        userId_travelId: {
          userId: user.id,
          travelId: data.travelId
        }
      }
    })

    if (existingParticipant && !existingParticipant.leftAt) {
      throw new Error('Esta persona ya es participante del viaje')
    }

    // If user was previously in the travel but left, reactivate them
    if (existingParticipant && existingParticipant.leftAt) {
      await prisma.userTravel.update({
        where: {
          userId_travelId: {
            userId: user.id,
            travelId: data.travelId
          }
        },
        data: {
          leftAt: null,
          exitBalance: null,
          joinedAt: new Date()
        }
      })
    } else {
      // Add new user to travel
      await prisma.userTravel.create({
        data: {
          userId: user.id,
          travelId: data.travelId,
          role: 'member',
          joinedAt: new Date()
        }
      })
    }

    await logAuditEvent({
      userId: session.user.id,
      action: AuditActions.TRAVEL_JOIN,
      resource: AuditResources.TRAVEL,
      resourceId: data.travelId,
      details: {
        participantEmail: data.email,
        participantName: `${user.firstName} ${user.lastName}`,
        addedBy: session.user.id
      }
    })

    revalidatePath(`/travel/${data.travelId}`)

    return {
      success: true,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    }
  } catch (error) {
    throw new Error(sanitizeErrorMessage(error))
  }
}
