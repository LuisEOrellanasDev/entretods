'use server'

import { revalidatePath } from 'next/cache'
import { requireAuth, requireTravelAccess, validateTravelParticipant, validateExpenseParticipants } from '@/lib/auth/travelAuthPermisions'
import { prisma } from '@/lib/prisma'

interface AddExpenseParams {
  travelId: string
  payerId: string
  title: string
  description: string | null
  amount: number
  category: string | null
  participantShares: Record<string, number>
}

export async function addExpense(params: AddExpenseParams) {
  const session = await requireAuth()

  const { travelId, payerId, title, description, amount, category, participantShares } = params

  await requireTravelAccess(session.user.id, travelId)

  await validateTravelParticipant(payerId, travelId)

  const participantIds = Object.keys(participantShares)
  await validateExpenseParticipants(participantIds, travelId)
  const totalShares = Object.values(participantShares).reduce((sum, share) => sum + share, 0)
  if (Math.abs(totalShares - amount) > 0.01) {
    throw new Error('La suma de las participaciones debe ser igual al monto total')
  }

  try {
    await prisma.$transaction(async (tx) => {
      const expense = await tx.expense.create({
        data: {
          travelId,
          payerId,
          title,
          description,
          amount,
          category
        }
      })

      const participantData = participantIds.map(userId => ({
        expenseId: expense.id,
        userId,
        share: participantShares[userId]
      }))

      await tx.expenseParticipant.createMany({
        data: participantData
      })
    })

    revalidatePath(`/travel/${travelId}`)

  } catch (error) {
    throw new Error('Error al crear el gasto')
  }
}

