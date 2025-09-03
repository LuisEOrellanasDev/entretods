'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useServerAction } from '@/lib/hooks/useServerAction'
import { useExpenseForm } from '@/lib/hooks/useExpenseForm'
import { formatCurrency } from '@/lib/utils/currency'
import { addExpense } from '../_actions/addExpense'
import { AddExpenseFormProps } from '@/types/participant'
import { NumericFormat } from 'react-number-format'

export function AddExpenseForm({ travelId, participants, currentUserId, onSuccess }: AddExpenseFormProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const {
    formData,
    splitType,
    participantShares,
    selectedParticipants,
    shares,
    handleInputChange,
    handleParticipantToggle,
    handleCustomShareChange,
    handleToggleAllParticipants,
    allParticipantsSelected,
    setSplitType,
    validateForm,
    resetForm,
    isFormValid,
    getCustomSharesValidation
  } = useExpenseForm({
    participants,
    currentUserId
  })

  const { execute: executeAddExpense, isPending } = useServerAction(
    async () => {
      const validationErrors = validateForm()
      if (validationErrors.length > 0) {
        throw new Error(validationErrors[0])
      }

      await addExpense({
        travelId,
        payerId: formData.payerId,
        title: formData.title,
        description: formData.description || null,
        amount: parseFloat(formData.amount),
        category: formData.category || null,
        participantShares: shares
      })

      resetForm()
      if (formRef.current) {
        formRef.current.reset()
      }
      router.push(`/travel/${travelId}?tab=expenses`)
    },
    {
      successMessage: 'Gasto agregado correctamente',
      errorMessage: 'Error al agregar el gasto'
    }
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    executeAddExpense()
    onSuccess()
  }


  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">

      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Agregar Gasto</h2>

      <form id="expense-form" onSubmit={handleSubmit} ref={formRef} className="space-y-4 sm:space-y-4">
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
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
            placeholder="Ej: Cena en restaurante"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            disabled={isPending}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base resize-none"
            placeholder="Detalles adicionales (opcional)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Monto
            </label>
            <NumericFormat
              id="amount"
              name="amount"
              value={formData.amount}
              thousandSeparator='.'
              decimalSeparator=','
              prefix="$"
              allowNegative={false}
              onValueChange={(values) => {
                handleInputChange({
                  target: {
                    name: 'amount',
                    value: values.value
                  }
                } as React.ChangeEvent<HTMLInputElement>)
              }}
              required
              disabled={isPending}
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
              disabled={isPending}
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
            disabled={isPending}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm sm:text-base"
          >
            {participants.map(participant => (
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

          <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                checked={allParticipantsSelected}
                onChange={handleToggleAllParticipants}
                disabled={isPending}
              /> seleccionar todos
            </label>
            {participants.map(participant => (
              <label key={participant.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedParticipants.has(participant.id)}
                  onChange={() => handleParticipantToggle(participant.id)}
                  disabled={isPending}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                />
                <span className="text-sm text-gray-700 flex-1 min-w-0 truncate">
                  {participant.name}
                </span>
              </label>
            ))}
          </div>
        </div>

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
                  disabled={isPending}
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
                  disabled={isPending}
                  className="text-blue-600 focus:ring-blue-500 disabled:opacity-50 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">División Personalizada</span>
              </label>
            </div>
          </div>
        )}

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
                    <NumericFormat
                      value={participantShares[participantId] || ''}
                      onValueChange={(values) => handleCustomShareChange(participantId, values.value)}
                      disabled={isPending}
                      className="w-20 sm:w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="0"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="$"
                    />
                  </div>
                )
              })}
            </div>

            {(() => {
              const validation = getCustomSharesValidation();
              if (!validation.isValid && formData.amount) {
                return (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-800">{validation.message}</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        )}

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

        <button
          type="submit"
          disabled={isPending || selectedParticipants.size === 0 || !isFormValid()}
          className="w-full bg-blue-600 text-white py-2.5 sm:py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
        >
          {isPending ? 'Agregando...' : 'Agregar Gasto'}
        </button>
      </form>
    </div>
  )
}
