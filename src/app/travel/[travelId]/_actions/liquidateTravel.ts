'use server'

import { prisma } from '@/lib/prisma'
import { requireAuth, requireTravelAdmin } from '@/lib/auth/travelAuthPermisions'
import { revalidatePath } from 'next/cache'
import { sanitizeErrorMessage } from '@/lib/utils/errors'
import { TravelStatus } from '@/generated/prisma'

interface LiquidateTravelData {
  travelId: string
}

export async function liquidateTravel(data: LiquidateTravelData) {
  try {
    const session = await requireAuth()
    await requireTravelAdmin(session.user.id, data.travelId)

    const travel = await prisma.travel.findUnique({
      where: { id: data.travelId },
      select: { title: true, status: true }
    })

    if (!travel) {
      throw new Error('Viaje no encontrado')
    }

    if (travel.status !== TravelStatus.ACTIVE) {
      throw new Error('El viaje ya está liquidado')
    }

    await prisma.travel.update({
      where: { id: data.travelId },
      data: {
        status: TravelStatus.INACTIVE,
        updatedAt: new Date()
      }
    })

    revalidatePath(`/travel/${data.travelId}`)
    revalidatePath('/dashboard')

    return {
      success: true,
      message: 'Viaje liquidado correctamente'
    }
  } catch (error) {
    throw new Error(sanitizeErrorMessage(error))
  }
}
