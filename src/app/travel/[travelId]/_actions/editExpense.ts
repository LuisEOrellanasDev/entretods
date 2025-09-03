'use server'

import { revalidatePath } from 'next/cache'
import { requireAuth, requireTravelAccess, validateTravelParticipant, validateExpenseParticipants } from '@/lib/auth/travelAuthPermisions'
import { prisma } from '@/lib/prisma'

interface EditExpenseParams {
  expenseId: string
  travelId: string
  payerId: string
  title: string
  description: string | null
  amount: number
  category: string | null
  participantShares: Record<string, number>
}

export async function editExpense(params: EditExpenseParams) {
  const session = await requireAuth()

  const { expenseId, travelId, payerId, title, description, amount, category, participantShares } = params

  await requireTravelAccess(session.user.id, travelId)

  const existingExpense = await prisma.expense.findUnique({
    where: { id: expenseId }
  })

  if (!existingExpense || existingExpense.travelId !== travelId) {
    throw new Error('Gasto no encontrado')
  }

  await validateTravelParticipant(payerId, travelId)

  const participantIds = Object.keys(participantShares)
  await validateExpenseParticipants(participantIds, travelId)

  const totalShares = Object.values(participantShares).reduce((sum, share) => sum + share, 0)
  if (Math.abs(totalShares - amount) > 0.01) {
    throw new Error('La suma de las participaciones debe ser igual al monto total')
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.expense.update({
        where: { id: expenseId },
        data: {
          payerId,
          title,
          description,
          amount,
          category
        }
      })

      await tx.expenseParticipant.deleteMany({
        where: { expenseId }
      })
      const participantData = participantIds.map(userId => ({
        expenseId,
        userId,
        share: participantShares[userId]
      }))

      await tx.expenseParticipant.createMany({
        data: participantData
      })
    })

    revalidatePath(`/travel/${travelId}`)

  } catch (error) {
    throw new Error('Error al actualizar el gasto')
  }
}
