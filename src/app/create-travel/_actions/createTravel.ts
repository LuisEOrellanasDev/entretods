'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface CreateTravelData {
  title: string;
  description: string;
}

export async function createTravel(formData: FormData) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const invitedEmailsJson = formData.get('invitedEmails') as string

  let invitedEmails: string[] = []
  try {
    invitedEmails = invitedEmailsJson ? JSON.parse(invitedEmailsJson) : []
  } catch (error) {
  }

  if (!title?.trim()) {
    throw new Error('El título es requerido')
  }

  let travelId: string

  try {
    const travel = await prisma.travel.create({
      data: {
        title: title.trim(),
        description: description?.trim() || null,
        userTravels: {
          create: {
            userId: session.user.id,
            role: 'admin',
          },
        },
      },
    })

    travelId = travel.id

    if (invitedEmails.length > 0) {
      for (const email of invitedEmails) {
        const existingUser = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        })

        if (existingUser) {
          await prisma.userTravel.create({
            data: {
              userId: existingUser.id,
              travelId: travel.id,
              role: 'member',
            },
          })
        } else {
        }
      }
    }
  } catch (error) {
    throw new Error('Error al crear el viaje')
  }

  redirect(`/travel/${travelId}`)
}
