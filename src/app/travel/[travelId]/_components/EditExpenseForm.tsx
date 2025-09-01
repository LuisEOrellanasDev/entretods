'use client'

import { useState, useRef, useEffect } from 'react'
import { useServerAction } from '@/lib/hooks/useServerAction'
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
  const formRef = useRef<HTMLFormElement>(null)

  const { execute: executeEditExpense, isPending, error } = useServerAction(
    async (formData: FormData) => {
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
    },
    {
      successMessage: 'Gasto editado correctamente',
      errorMessage: 'Error al editar el gasto'
    }
  )

  useEffect(() => {
    const participantIds = expense.participants.map(p => p.userId)
    setSelectedParticipants(participantIds)

    const shares: Record<string, string> = {}
    expense.participants.forEach(p => {
      shares[p.userId] = p.share.toString()
    })
    setCustomShares(shares)

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
    const formData = new FormData(e.currentTarget)
    executeEditExpense(formData)
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
          disabled={isPending}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isPending}
            defaultValue={expense.title}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
            disabled={isPending}
            defaultValue={expense.description || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
            disabled={isPending}
            min="0"
            step="0.01"
            defaultValue={expense.amount}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
            disabled={isPending}
            defaultValue={expense.category || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
            disabled={isPending}
            defaultValue={expense.payerId}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
                  disabled={isPending}
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
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
                  disabled={isPending}
                  className="mr-2 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                />
                <span className="text-sm">División equitativa</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={splitType === 'custom'}
                  onChange={() => setSplitType('custom')}
                  disabled={isPending}
                  className="mr-2 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
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
                      disabled={isPending}
                      value={customShares[participantId] || ''}
                      onChange={(e) => setCustomShares(prev => ({
                        ...prev,
                        [participantId]: e.target.value
                      }))}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
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
            disabled={isPending}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isPending || selectedParticipants.length === 0}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isPending ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}
