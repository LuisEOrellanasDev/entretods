'use server'

import { prisma } from '@/lib/prisma'
import { requireAuth, requireTravelAdmin } from '@/lib/auth/utils'
import { revalidatePath } from 'next/cache'
import { logAuditEvent, AuditActions, AuditResources } from '@/lib/utils/auditLog'
import { sanitizeErrorMessage } from '@/lib/utils/errors'

interface LiquidateTravelData {
  travelId: string
}

export async function liquidateTravel(data: LiquidateTravelData) {
  try {
    const session = await requireAuth()
    await requireTravelAdmin(session.user.id, data.travelId)

    // Get travel info for audit log
    const travel = await prisma.travel.findUnique({
      where: { id: data.travelId },
      select: { title: true, isActive: true }
    })

    if (!travel) {
      throw new Error('Viaje no encontrado')
    }

    if (!travel.isActive) {
      throw new Error('El viaje ya está liquidado')
    }

    // Mark travel as inactive (liquidated)
    await prisma.travel.update({
      where: { id: data.travelId },
      data: {
        isActive: false,
        updatedAt: new Date()
      }
    })

    // Log audit event
    await logAuditEvent({
      userId: session.user.id,
      action: AuditActions.TRAVEL_UPDATE,
      resource: AuditResources.TRAVEL,
      resourceId: data.travelId,
      details: {
        action: 'liquidated',
        travelTitle: travel.title,
        liquidatedBy: session.user.id,
        liquidatedAt: new Date().toISOString()
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
