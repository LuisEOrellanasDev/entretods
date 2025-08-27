'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useServerAction } from '@/lib/hooks/useServerAction';
import { LoadingButton } from '@/components/ui/LoadingButton';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { formatCurrency } from '@/lib/utils/currency';
import { useToast } from '@/components/providers/ToastProvider';
import { removeParticipant } from '../_actions/removeParticipant';
import { Participant } from '@/types/participant';

interface RemoveParticipantFormProps {
  travelId: string;
  participant: Participant;
  participantHasHistory?: boolean;
}

export function RemoveParticipantForm({ travelId, participant, participantHasHistory = false }: RemoveParticipantFormProps) {
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { addToast } = useToast();
  const router = useRouter();

  const { execute: executeRemove, isPending } = useServerAction(
    removeParticipant,
    {
      onSuccess: () => {
        setShowConfirmDialog(false);
        setSelectedParticipant('');
        addToast({
          type: 'success',
          title: 'Éxito',
          message: 'Participante removido correctamente'
        });
        router.refresh();
      },
      onError: (error: Error) => {
        addToast({
          type: 'error',
          title: 'Error',
          message: error.message
        });
      }
    }
  );

  const selectedParticipantData = participant;
  const hasHistory = participantHasHistory;

  const handleRemoveClick = () => {
    if (!selectedParticipant) return;
    if (hasHistory) {
      addToast({
        type: 'error',
        title: 'No se puede remover',
        message: 'El participante tiene historial de gastos y no puede ser removido'
      });
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleConfirmRemove = async () => {
    if (!selectedParticipantData) return;

    await executeRemove({
      travelId,
      userId: selectedParticipantData.id,
      exitDate: new Date()
    });
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
    setSelectedParticipant('');
  };

  const getHistoryMessage = (hasHistory: boolean) => {
    if (!hasHistory) {
      return 'El participante no tiene historial de gastos y puede ser removido sin problemas';
    } else {
      return 'El participante tiene historial de gastos y no puede ser removido para mantener la integridad del historial';
    }
  };

  const getHistoryColor = (hasHistory: boolean) => {
    return hasHistory ? 'text-red-700 bg-red-50 border-red-200' : 'text-green-700 bg-green-50 border-green-200';
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <label htmlFor="participant-select" className="block text-sm font-medium text-gray-700 mb-1">
            Seleccionar participante a remover
          </label>
          <select
            id="participant-select"
            value={selectedParticipant}
            onChange={(e) => setSelectedParticipant(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          >
            <option value="">Selecciona un participante...</option>
            <option key={participant.id} value={participant.id}>
              {participant.name} ({participant.email})
            </option>
          </select>
        </div>

        {selectedParticipant && (
          <>
            {/* History Information */}
            <div className={`border rounded-md p-4 ${getHistoryColor(hasHistory)}`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {hasHistory ? (
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">
                    Estado del participante
                  </h3>
                  <p className="mt-1 text-sm">
                    {getHistoryMessage(hasHistory)}
                  </p>
                  {hasHistory && (
                    <p className="mt-2 text-sm font-medium">
                      ⚠️ No se puede remover para preservar el historial
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Warning Information */}
            {!hasHistory && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Advertencia
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Al remover a <strong>{selectedParticipantData.name}</strong> del viaje:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Se calculará su balance final hasta la fecha actual</li>
                        <li>No podrá participar en gastos futuros</li>
                        <li>Los gastos anteriores en los que participó se mantendrán</li>
                        <li>Esta acción no se puede deshacer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex justify-end">
          <LoadingButton
            onClick={handleRemoveClick}
            isLoading={isPending}
            disabled={!selectedParticipant || hasHistory}
            className={`px-4 py-2 rounded-md text-white ${hasHistory
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700 disabled:bg-gray-300'
              }`}
          >
            {hasHistory ? 'No se puede remover' : 'Remover Participante'}
          </LoadingButton>
        </div>
      </div>

      <ConfirmDialog
        isOpen={showConfirmDialog}
        onClose={handleCancel}
        onConfirm={handleConfirmRemove}
        title="Confirmar remoción de participante"
        message={`¿Estás seguro de que quieres remover a ${selectedParticipantData.name} del viaje? Esta acción calculará su balance final y no se puede deshacer.`}
        type="danger"
        confirmText="Sí, remover"
        cancelText="Cancelar"
      />
    </>
  );
}
