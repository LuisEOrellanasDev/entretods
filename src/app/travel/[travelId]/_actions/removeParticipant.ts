'use server'

import { prisma } from '@/lib/prisma'
import { requireAuth, requireTravelAdmin } from '@/lib/auth/utils'
import { revalidatePath } from 'next/cache'
import { logAuditEvent, AuditActions, AuditResources } from '@/lib/utils/auditLog'
import { sanitizeErrorMessage } from '@/lib/utils/errors'
import { calculateTravelSettlement } from '@/lib/settlement'

interface RemoveParticipantData {
  travelId: string
  userId: string
  exitDate?: Date
}

export async function removeParticipant(data: RemoveParticipantData) {
  try {
    const session = await requireAuth()
    await requireTravelAdmin(session.user.id, data.travelId)

    const participant = await prisma.userTravel.findUnique({
      where: {
        userId_travelId: {
          userId: data.userId,
          travelId: data.travelId
        }
      },
      include: {
        user: true
      }
    })

    if (!participant) {
      throw new Error('Participante no encontrado')
    }

    const exitDate = data.exitDate || new Date()

    const expenses = await prisma.expense.findMany({
      where: {
        travelId: data.travelId,
        createdAt: {
          lte: exitDate
        },
        OR: [
          { payerId: data.userId },
          {
            participants: {
              some: {
                userId: data.userId
              }
            }
          }
        ]
      },
      include: {
        participants: {
          select: {
            userId: true,
            share: true
          }
        }
      }
    })

    const allParticipants = await prisma.userTravel.findMany({
      where: { travelId: data.travelId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      }
    })

    const expenseData = expenses.map(expense => ({
      id: expense.id,
      amount: Number(expense.amount),
      payerId: expense.payerId,
      participants: expense.participants.map(p => ({
        userId: p.userId,
        share: Number(p.share),
      })),
    }))

    const users = allParticipants.map(p => ({
      id: p.user.id,
      firstName: p.user.firstName,
      lastName: p.user.lastName,
    }))
    const settlement = calculateTravelSettlement(expenseData, users)
    const participantBalance = settlement.balances.find(b => b.userId === data.userId)

    // Validation: Check if participant has any expense history
    if (expenses.length > 0) {
      throw new Error(`No se puede remover al participante porque ya tiene historial de gastos en este viaje. Los participantes solo pueden ser removidos si no han participado en ningún gasto.`)
    }

    await prisma.userTravel.update({
      where: {
        userId_travelId: {
          userId: data.userId,
          travelId: data.travelId
        }
      },
      data: {
        leftAt: exitDate,
        exitBalance: participantBalance?.balance || 0
      }
    })

    await logAuditEvent({
      userId: session.user.id,
      action: AuditActions.TRAVEL_LEAVE,
      resource: AuditResources.TRAVEL,
      resourceId: data.travelId,
      details: {
        participantId: data.userId,
        participantName: `${participant.user.firstName} ${participant.user.lastName}`,
        exitDate: exitDate.toISOString(),
        exitBalance: participantBalance?.balance || 0,
        removedBy: session.user.id
      }
    })

    revalidatePath(`/travel/${data.travelId}`)

    return {
      success: true,
      settlement: {
        balance: participantBalance?.balance || 0,
        owes: (participantBalance?.balance || 0) < 0,
        amount: Math.abs(participantBalance?.balance || 0)
      }
    }
  } catch (error) {
    throw new Error(sanitizeErrorMessage(error))
  }
}
