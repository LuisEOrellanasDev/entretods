'use client'

import { useState, useRef, useEffect } from 'react'
import { editExpense } from '../_actions/editExpense'
import { Participant } from '@/types/participant'

interface ExpenseData {
  id: string
  title: string
  description: string | null
  amount: number
  category: string | null
  payerId: string
  participants: Array<{
    userId: string
    share: number
  }>
}

interface EditExpenseFormProps {
  travelId: string
  participants: Participant[]
  currentUserId: string
  expense: ExpenseData
  onCancel: () => void
  onSuccess: () => void
}

export function EditExpenseForm({
  travelId,
  participants,
  currentUserId,
  expense,
  onCancel,
  onSuccess
}: EditExpenseFormProps) {
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([])
  const [splitType, setSplitType] = useState<'equal' | 'custom'>('custom')
  const [customShares, setCustomShares] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize form with existing expense data
  useEffect(() => {
    const participantIds = expense.participants.map(p => p.userId)
    setSelectedParticipants(participantIds)

    const shares: Record<string, string> = {}
    expense.participants.forEach(p => {
      shares[p.userId] = p.share.toString()
    })
    setCustomShares(shares)

    // Check if it's an equal split
    const uniqueShares = [...new Set(expense.participants.map(p => p.share))]
    if (uniqueShares.length === 1) {
      setSplitType('equal')
    } else {
      setSplitType('custom')
    }
  }, [expense])

  const handleParticipantToggle = (participantId: string) => {
    setSelectedParticipants(prev => {
      if (prev.includes(participantId)) {
        return prev.filter(id => id !== participantId)
      } else {
        return [...prev, participantId]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const amount = parseFloat(formData.get('amount') as string)

      let participantShares: Record<string, number> = {}

      if (splitType === 'equal') {
        const sharePerPerson = amount / selectedParticipants.length
        selectedParticipants.forEach(id => {
          participantShares[id] = sharePerPerson
        })
      } else {
        selectedParticipants.forEach(id => {
          participantShares[id] = parseFloat(customShares[id] || '0')
        })
      }

      await editExpense({
        expenseId: expense.id,
        travelId,
        payerId: formData.get('payerId') as string,
        title: formData.get('title') as string,
        description: formData.get('description') as string || null,
        amount,
        category: formData.get('category') as string || null,
        participantShares
      })

      onSuccess()

    } catch (error) {
      setError('Error al editar el gasto')
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalCustomShares = selectedParticipants.reduce((sum, id) => {
    return sum + (parseFloat(customShares[id] || '0'))
  }, 0)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Editar Gasto</h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={expense.title}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Taxi al aeropuerto"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            rows={2}
            defaultValue={expense.description || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Detalles adicionales..."
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Monto (COP) *
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            min="0"
            step="0.01"
            defaultValue={expense.amount}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            defaultValue={expense.category || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccionar categoría</option>
            <option value="Transporte">Transporte</option>
            <option value="Alojamiento">Alojamiento</option>
            <option value="Comida">Comida</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Compras">Compras</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div>
          <label htmlFor="payerId" className="block text-sm font-medium text-gray-700 mb-1">
            Pagado por *
          </label>
          <select
            id="payerId"
            name="payerId"
            required
            defaultValue={expense.payerId}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {participants.map((participant) => (
              <option key={participant.id} value={participant.id}>
                {participant.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Participantes *
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-2">
            {participants.map((participant) => (
              <label key={participant.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedParticipants.includes(participant.id)}
                  onChange={() => handleParticipantToggle(participant.id)}
                  className="mr-2"
                />
                <span className="text-sm">{participant.name}</span>
              </label>
            ))}
          </div>
        </div>

        {selectedParticipants.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de división
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={splitType === 'equal'}
                  onChange={() => setSplitType('equal')}
                  className="mr-2"
                />
                <span className="text-sm">División equitativa</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={splitType === 'custom'}
                  onChange={() => setSplitType('custom')}
                  className="mr-2"
                />
                <span className="text-sm">Montos personalizados</span>
              </label>
            </div>
          </div>
        )}

        {splitType === 'custom' && selectedParticipants.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Montos por participante
            </label>
            <div className="space-y-2">
              {selectedParticipants.map((participantId) => {
                const participant = participants.find(p => p.id === participantId)
                return (
                  <div key={participantId} className="flex items-center space-x-2">
                    <span className="text-sm w-32 truncate">
                      {participant?.name}
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={customShares[participantId] || ''}
                      onChange={(e) => setCustomShares(prev => ({
                        ...prev,
                        [participantId]: e.target.value
                      }))}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="0.00"
                    />
                  </div>
                )
              })}
              <div className="text-sm text-gray-600">
                Total: ${totalCustomShares.toLocaleString()}
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting || selectedParticipants.length === 0}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}
