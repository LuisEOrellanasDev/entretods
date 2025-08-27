'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/providers/ToastProvider'
import { formatCurrency } from '@/lib/utils/currency'
import { addExpense } from '../_actions/addExpense'
import { Participant, AddExpenseFormProps } from '@/types/participant'
import { BackButton } from '@/components/ui/BackButton'

export function AddExpenseForm({ travelId, participants, currentUserId }: AddExpenseFormProps) {
  const { addToast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    category: '',
    payerId: currentUserId,
  })
  const [splitType, setSplitType] = useState<'equal' | 'custom'>('equal')
  const [participantShares, setParticipantShares] = useState<Record<string, number>>({})
  const [selectedParticipants, setSelectedParticipants] = useState<Set<string>>(
    new Set([currentUserId])
  )
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleParticipantToggle = (participantId: string) => {
    setSelectedParticipants(prev => {
      const newSet = new Set(prev)
      if (newSet.has(participantId)) {
        newSet.delete(participantId)
      } else {
        newSet.add(participantId)
      }
      return newSet
    })
  }

  const calculateShares = (): Record<string, number> => {
    const amount = parseFloat(formData.amount) || 0
    const selectedIds = Array.from(selectedParticipants)

    if (splitType === 'equal') {
      const sharePerPerson = amount / selectedIds.length
      return selectedIds.reduce((acc, id) => ({
        ...acc,
        [id]: sharePerPerson
      }), {} as Record<string, number>)
    }

    return participantShares
  }

  const handleCustomShareChange = (participantId: string, value: string) => {
    const numValue = parseFloat(value) || 0
    setParticipantShares(prev => ({
      ...prev,
      [participantId]: numValue
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (selectedParticipants.size === 0) {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Debe seleccionar al menos un participante'
      })
      return
    }

    const amount = parseFloat(formData.amount)
    if (!amount || amount <= 0) {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'El monto debe ser mayor a cero'
      })
      return
    }

    const shares = calculateShares()
    const totalShares = Object.values(shares).reduce((sum, share) => sum + share, 0)

    if (Math.abs(totalShares - amount) > 0.01) {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'La suma de las participaciones debe ser igual al monto total'
      })
      return
    }

    setIsSubmitting(true)

    try {
      await addExpense({
        travelId,
        payerId: formData.payerId,
        title: formData.title,
        description: formData.description || null,
        amount,
        category: formData.category || null,
        participantShares: shares
      })

      addToast({
        type: 'success',
        title: 'Éxito',
        message: 'Gasto agregado correctamente'
      })

      // Reset form
      setFormData({
        title: '',
        description: '',
        amount: '',
        category: '',
        payerId: currentUserId,
      })
      setSelectedParticipants(new Set([currentUserId]))
      setParticipantShares({})
      setSplitType('equal')

      if (formRef.current) {
        formRef.current.reset()
      }

      router.push(`/travel/${travelId}?tab=expenses`)

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        message: error instanceof Error ? error.message : 'Error al agregar el gasto'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const shares = calculateShares()

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      {/* Back Button */}
      <div className="mb-4 sm:mb-6">
        <BackButton
          href={`/travel/${travelId}?tab=expenses`}
          label="Volver a gastos"
        />
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Agregar Gasto</h2>

      <form id="expense-form" onSubmit={handleSubmit} ref={formRef} className="space-y-4 sm:space-y-4">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
            placeholder="Ej: Cena en restaurante"
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            disabled={isSubmitting}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base resize-none"
            placeholder="Detalles adicionales (opcional)"
          />
        </div>

        {/* Monto y Categoría */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Monto (COP) *
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
              placeholder="0"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
            >
              <option value="">Seleccionar categoría</option>
              <option value="Comida">Comida</option>
              <option value="Transporte">Transporte</option>
              <option value="Alojamiento">Alojamiento</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Compras">Compras</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
        </div>

        {/* Pagador */}
        <div>
          <label htmlFor="payerId" className="block text-sm font-medium text-gray-700 mb-1">
            Pagado por *
          </label>
          <select
            id="payerId"
            name="payerId"
            value={formData.payerId}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
          >
            {participants.map(participant => (
              <option key={participant.id} value={participant.id}>
                {participant.name}
              </option>
            ))}
          </select>
        </div>

        {/* Participantes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Participantes *
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-3">
            {participants.map(participant => (
              <label key={participant.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedParticipants.has(participant.id)}
                  onChange={() => handleParticipantToggle(participant.id)}
                  disabled={isSubmitting}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                />
                <span className="text-sm text-gray-700 flex-1 min-w-0 truncate">
                  {participant.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Tipo de División */}
        {selectedParticipants.size > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de División
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="splitType"
                  value="equal"
                  checked={splitType === 'equal'}
                  onChange={(e) => setSplitType(e.target.value as 'equal' | 'custom')}
                  disabled={isSubmitting}
                  className="text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">División Igual</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="splitType"
                  value="custom"
                  checked={splitType === 'custom'}
                  onChange={(e) => setSplitType(e.target.value as 'equal' | 'custom')}
                  disabled={isSubmitting}
                  className="text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">División Personalizada</span>
              </label>
            </div>
          </div>
        )}

        {/* División Personalizada */}
        {splitType === 'custom' && selectedParticipants.size > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Montos por Participante
            </label>
            <div className="space-y-3">
              {Array.from(selectedParticipants).map(participantId => {
                const participant = participants.find(p => p.id === participantId)
                if (!participant) return null

                return (
                  <div key={participantId} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-gray-700 flex-1 min-w-0 truncate">
                      {participant.name}
                    </span>
                    <input
                      type="number"
                      value={participantShares[participantId] || ''}
                      onChange={(e) => handleCustomShareChange(participantId, e.target.value)}
                      disabled={isSubmitting}
                      min="0"
                      step="0.01"
                      className="w-20 sm:w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="0"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Resumen */}
        {selectedParticipants.size > 0 && formData.amount && (
          <div className="bg-gray-50 p-3 sm:p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Resumen</h4>
            <div className="space-y-1 text-sm">
              {Array.from(selectedParticipants).map(participantId => {
                const participant = participants.find(p => p.id === participantId)
                const share = shares[participantId] || 0
                if (!participant) return null

                return (
                  <div key={participantId} className="flex justify-between items-center gap-2">
                    <span className="flex-1 min-w-0 truncate">{participant.name}:</span>
                    <span className="font-medium flex-shrink-0">{formatCurrency(share)}</span>
                  </div>
                )
              })}
              <div className="border-t pt-2 mt-2 flex justify-between items-center font-medium">
                <span>Total:</span>
                <span className="flex-shrink-0">{formatCurrency(Object.values(shares).reduce((sum: number, share: number) => sum + share, 0))}</span>
              </div>
            </div>
          </div>
        )}

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting || selectedParticipants.size === 0}
          className="w-full bg-blue-600 text-white py-2.5 sm:py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
        >
          {isSubmitting ? 'Agregando...' : 'Agregar Gasto'}
        </button>
      </form>
    </div>
  )
}
