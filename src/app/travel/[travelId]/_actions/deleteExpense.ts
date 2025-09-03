'use server'

import { revalidatePath } from 'next/cache'
import { requireAuth, requireTravelAccess } from '@/lib/auth/travelAuthPermisions'
import { prisma } from '@/lib/prisma'

export async function deleteExpense(expenseId: string, travelId: string) {
  const session = await requireAuth()

  await requireTravelAccess(session.user.id, travelId)

  const expense = await prisma.expense.findUnique({
    where: { id: expenseId }
  })

  if (!expense || expense.travelId !== travelId) {
    throw new Error('Gasto no encontrado')
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.expenseParticipant.deleteMany({
        where: { expenseId }
      })
      await tx.expense.delete({
        where: { id: expenseId }
      })
    })

    revalidatePath(`/travel/${travelId}`)

  } catch (error) {
    throw new Error('Error al eliminar el gasto')
  }
}
