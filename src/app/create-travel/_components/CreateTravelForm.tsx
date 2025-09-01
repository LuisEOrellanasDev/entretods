'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createTravel } from '../_actions/createTravel'
import { BackButton } from '@/components/ui/BackButton'

export default function CreateTravelForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [invitedEmails, setInvitedEmails] = useState<string[]>([])
  const [emailInput, setEmailInput] = useState('')

  const handleAddEmail = () => {
    if (emailInput.trim() && !invitedEmails.includes(emailInput.trim())) {
      setInvitedEmails([...invitedEmails, emailInput.trim()])
      setEmailInput('')
    }
  }

  const handleRemoveEmail = (emailToRemove: string) => {
    setInvitedEmails(invitedEmails.filter(email => email !== emailToRemove))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('invitedEmails', JSON.stringify(invitedEmails));

    try {
      await createTravel(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <BackButton
          href="/dashboard"
          label="Volver al dashboard"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6">Crear Nuevo Viaje</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Título del Viaje *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Fin de semana en la playa, Salida al centro, etc."
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe la actividad, lugar, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Invitar Participantes
          </label>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddEmail())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@ejemplo.com"
              />
              <button
                type="button"
                onClick={handleAddEmail}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Agregar
              </button>
            </div>

            {invitedEmails.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Participantes invitados:</p>
                <div className="flex flex-wrap gap-2">
                  {invitedEmails.map((email, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {email}
                      <button
                        type="button"
                        onClick={() => handleRemoveEmail(email)}
                        className="text-blue-600 hover:text-blue-800 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Nota:</strong> Serás asignado automáticamente como administrador del viaje.
                Podrás invitar participantes después de crearlo.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creando...' : 'Crear Viaje'}
        </button>
      </form>
    </div>
  )
}