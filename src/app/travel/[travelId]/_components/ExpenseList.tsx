'use client'

import { useState } from 'react'
import { useToast } from '@/components/providers/ToastProvider'
import { formatCurrency } from '@/lib/utils/currency'
import { deleteExpense } from '../_actions/deleteExpense'
import { EditExpenseForm } from './EditExpenseForm'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { Participant } from '@/types/participant'

interface ExpenseData {
  id: string
  title: string
  description: string | null
  amount: number
  category: string | null
  payerId: string
  createdAt: Date
  payer: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  participants: Array<{
    userId: string
    share: number
    user: {
      id: string
      firstName: string
      lastName: string
      email: string
    }
  }>
}

interface ExpenseListProps {
  travelId: string
  expenses: ExpenseData[]
  participants: Participant[]
  currentUserId: string
  travelIsActive: boolean
}

export function ExpenseList({ expenses, travelId, participants, currentUserId, travelIsActive }: ExpenseListProps) {
  const [editingExpense, setEditingExpense] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean
    expenseId: string
    expenseTitle: string
  }>({ isOpen: false, expenseId: '', expenseTitle: '' })
  const { addToast, removeToast } = useToast()

  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Gastos del Viaje</h2>
        <div className="text-center py-8 text-gray-500">
          <p>No hay gastos registrados aún.</p>
          <p className="text-sm">Agrega el primer gasto usando el formulario.</p>
        </div>
      </div>
    )
  }

  const getDisplayName = (user: { firstName: string; lastName: string; email: string }) => {
    const fullName = `${user.firstName} ${user.lastName}`.trim()
    return fullName || user.email
  }

  const handleDelete = async (expenseId: string) => {
    setIsDeleting(expenseId)
    try {
      await deleteExpense(expenseId, travelId)
      addToast({
        type: 'success',
        title: 'Gasto eliminado',
        message: 'El gasto se eliminó correctamente'
      })
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error al eliminar',
        message: 'No se pudo eliminar el gasto. Inténtalo de nuevo.'
      })
    } finally {
      setIsDeleting(null)
      setConfirmDialog({ isOpen: false, expenseId: '', expenseTitle: '' })
    }
  }

  const handleEditSuccess = () => {
    setEditingExpense(null)
    addToast({
      type: 'success',
      title: 'Gasto actualizado',
      message: 'Los cambios se guardaron correctamente'
    })
  }

  const handleEditCancel = () => {
    setEditingExpense(null)
  }

  const handleConfirmDelete = () => {
    handleDelete(confirmDialog.expenseId)
  }

  const handleCancelDelete = () => {
    setConfirmDialog({ isOpen: false, expenseId: '', expenseTitle: '' })
  }

  // If editing an expense, show the edit form
  if (editingExpense) {
    const expense = expenses.find(e => e.id === editingExpense)
    if (expense) {
      const expenseData = {
        id: expense.id,
        title: expense.title,
        description: expense.description,
        amount: Number(expense.amount),
        category: expense.category,
        payerId: expense.payer.id,
        participants: expense.participants.map(p => ({
          userId: p.user.id,
          share: Number(p.share)
        }))
      }

      return (
        <EditExpenseForm
          travelId={travelId}
          participants={participants}
          currentUserId={currentUserId}
          expense={expenseData}
          onCancel={handleEditCancel}
          onSuccess={handleEditSuccess}
        />
      )
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Gastos del Viaje</h2>
          <p className="text-sm text-gray-500 mt-1">
            Total: {expenses.length} gastos
          </p>
        </div>

        <div className="divide-y">
          {expenses.map((expense) => (
            <div key={expense.id} className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{expense.title}</h3>
                  {expense.description && (
                    <p className="text-sm text-gray-600 mt-1">{expense.description}</p>
                  )}
                  {expense.category && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {expense.category}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      {formatCurrency(expense.amount)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(expense.createdAt).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">

                    {travelIsActive && (<button
                      onClick={() => setEditingExpense(expense.id)}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      Editar
                    </button>)}


                    {travelIsActive && (<button
                      onClick={() => setConfirmDialog({
                        isOpen: true,
                        expenseId: expense.id,
                        expenseTitle: expense.title
                      })}
                      disabled={isDeleting === expense.id}
                      className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors disabled:opacity-50"
                    >
                      {isDeleting === expense.id ? 'Eliminando...' : 'Eliminar'}
                    </button>)}
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <div className="mb-2">
                  <span className="font-medium">Pagado por:</span> {getDisplayName(expense.payer)}
                </div>

                <div>
                  <span className="font-medium">Participantes:</span>
                  <div className="mt-1 space-y-1">
                    {expense.participants.map((participant) => (
                      <div key={participant.user.id} className="flex justify-between">
                        <span>{getDisplayName(participant.user)}</span>
                        <span className="font-medium">{formatCurrency(participant.share)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title="Eliminar Gasto"
        message={`¿Estás seguro de que quieres eliminar "${confirmDialog.expenseTitle}"? Esta acción no se puede deshacer.`}
        confirmText="Eliminar"
        cancelText="Cancelar"
        type="danger"
        onConfirm={handleConfirmDelete}
        onClose={handleCancelDelete}
      />
    </>
  )
}
