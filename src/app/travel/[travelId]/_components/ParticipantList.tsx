import { Participant } from '@/types/participant'
import { getUserInitials, getDisplayName } from '@/lib/utils/user'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { removeParticipant } from '../_actions/removeParticipant';
import { useState } from 'react';
import { useToast } from '@/components/providers/ToastProvider';

export default function ParticipantList({ participants, currentUserId, travelId }: {
  participants: Participant[];
  currentUserId: string;
  travelId: string;
}) {

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const { addToast } = useToast();

  const handleRemoveParticipant = async (participantId: string) => {
    try {

      const result = await removeParticipant({
        travelId: travelId,
        userId: participantId
      });

      if (result.success) {
        setShowConfirmDialog(false);
        setSelectedParticipant(null);
        addToast({
          type: 'success',
          title: 'Participante eliminado',
          message: 'El participante ha sido eliminado exitosamente del viaje'
        });
      } else {
        setShowConfirmDialog(false);
        setSelectedParticipant(null);
      }
    } catch (error) {
      setShowConfirmDialog(false);
      setSelectedParticipant(null);

      addToast({
        type: 'error',
        title: 'Error inesperado',
        message: error instanceof Error ? error.message : 'El participante no se puede eliminar, porque tiene gastos registrados.'
      });
    }
  }



  return (
    <div className="space-y-2 sm:space-y-3">
      {participants.map((participant) => (
        <div
          key={participant.id}
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-lg border gap-3 sm:gap-0 ${participant.id === currentUserId
            ? 'bg-blue-50 border-blue-200'
            : 'bg-gray-50 border-gray-200'
            }`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${participant.role === 'admin'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-100 text-gray-700'
              }`}>
              {getUserInitials({ firstName: participant.name.split(' ')[0] || '', lastName: participant.name.split(' ')[1] || '', email: participant.email })}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                {getDisplayName({ firstName: participant.name.split(' ')[0] || '', lastName: participant.name.split(' ')[1] || '', email: participant.email })}
                {participant.id === currentUserId && (
                  <span className="ml-2 text-sm text-blue-600">(Tú)</span>
                )}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">{participant.email}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full self-start sm:self-auto ${participant.role === 'admin'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-100 text-gray-700'
              }`}>
              {participant.role === 'admin' ? 'Admin' : 'Miembro'}
            </span>
            <span className="text-xs text-gray-500">
              Desde {participant.joinedAt.toLocaleDateString('es-CO')}
            </span>

            <button
              onClick={() => {
                setShowConfirmDialog(true);
                setSelectedParticipant(participant);
              }}

              className="text-xs text-red-600 hover:text-red-800"
            >
              Remover
            </button>
            <ConfirmDialog
              isOpen={showConfirmDialog}
              title="Eliminar Participante"
              message="¿Estás seguro de eliminar este participante?"
              confirmText="Eliminar"
              cancelText="Cancelar"
              onConfirm={() => handleRemoveParticipant(selectedParticipant?.id || '')}
              onClose={() => setShowConfirmDialog(false)}
            />
          </div>
        </div>
      ))}

      {participants.length === 0 && (
        <div className="text-center py-6 sm:py-8 text-gray-500">
          No hay participantes activos en este viaje
        </div>
      )}
    </div>
  );
}