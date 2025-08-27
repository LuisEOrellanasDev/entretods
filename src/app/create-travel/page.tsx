import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import CreateTravelForm from './_components/CreateTravelForm'

export default async function CreateTravelPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Crear Viaje</h1>
          <p className="text-gray-600 mt-2">
            Organiza un nuevo viaje colaborativo y gestiona gastos con tus amigos
          </p>
        </div>

        <CreateTravelForm />
      </div>
    </div>
  )
}