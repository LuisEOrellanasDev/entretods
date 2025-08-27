'use client';

import { useState, useEffect } from 'react';
import { AddParticipantForm } from './AddParticipantForm';
import { RemoveParticipantForm } from './RemoveParticipantForm';
import { getDisplayName, getUserInitials } from '@/lib/utils/user';
import { Participant } from '@/types/participant';

interface ParticipantManagementProps {
  travelId: string;
  participants: Participant[];
  currentUserId: string;
  isAdmin: boolean;
  expenses?: Array<{
    id: string;
    amount: number;
    payerId: string;
    participants: Array<{
      userId: string;
      share: number;
    }>;
  }>;
}

type TabType = 'add' | 'remove' | 'list';

// Simple balance calculation function
function calculateParticipantBalance(
  participantId: string,
  expenses: Array<{
    amount: number;
    payerId: string;
    participants: Array<{
      userId: string;
      share: number;
    }>;
  }>
): number {
  let balance = 0;

  expenses.forEach(expense => {
    // Add what they paid
    if (expense.payerId === participantId) {
      balance += expense.amount;
    }

    // Subtract what they owe
    const participation = expense.participants.find(p => p.userId === participantId);
    if (participation) {
      balance -= participation.share;
    }
  });

  return balance;
}

// Check if participant has any expense history
function hasExpenseHistory(
  participantId: string,
  expenses: Array<{
    amount: number;
    payerId: string;
    participants: Array<{
      userId: string;
      share: number;
    }>;
  }>
): boolean {
  return expenses.some(expense =>
    expense.payerId === participantId ||
    expense.participants.some(p => p.userId === participantId)
  );
}

export function ParticipantManagement({
  travelId,
  participants,
  currentUserId,
  isAdmin,
  expenses = []
}: ParticipantManagementProps) {
  const [activeTab, setActiveTab] = useState<TabType>('list');
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);

  const activeParticipants = participants.filter(p => !p.leftAt);
  const removableParticipants = activeParticipants.filter(p => p.id !== currentUserId);

  // Calculate balance for selected participant
  const selectedParticipantBalance = selectedParticipant
    ? calculateParticipantBalance(selectedParticipant.id, expenses)
    : 0;

  if (!isAdmin) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
          Participantes del Viaje
        </h3>
        <ParticipantList participants={activeParticipants} currentUserId={currentUserId} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('list')}
            className={`flex-shrink-0 py-2 px-3 sm:px-4 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'list'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Participantes ({activeParticipants.length})
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`flex-shrink-0 py-2 px-3 sm:px-4 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'add'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Agregar Participante
          </button>
          {removableParticipants.length > 0 && (
            <button
              onClick={() => setActiveTab('remove')}
              className={`flex-shrink-0 py-2 px-3 sm:px-4 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'remove'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Remover Participante
            </button>
          )}
        </nav>
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === 'list' && (
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Participantes Activos
            </h3>
            <ParticipantList participants={activeParticipants} currentUserId={currentUserId} />
          </div>
        )}

        {activeTab === 'add' && (
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Agregar Nuevo Participante
            </h3>
            <AddParticipantForm
              travelId={travelId}
            />
          </div>
        )}

        {activeTab === 'remove' && (
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Remover Participante
            </h3>
            {!selectedParticipant ? (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Selecciona el participante que deseas remover del viaje:
                </p>
                <div className="space-y-2">
                  {removableParticipants.map((participant) => {
                    const hasHistory = hasExpenseHistory(participant.id, expenses);

                    return (
                      <button
                        key={participant.id}
                        onClick={() => setSelectedParticipant(participant)}
                        className={`w-full text-left p-3 border rounded-lg transition-colors ${hasHistory
                          ? 'border-red-200 bg-red-50 hover:bg-red-100'
                          : 'border-gray-200 hover:bg-gray-50'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                              {getUserInitials({ firstName: participant.name.split(' ')[0] || '', lastName: participant.name.split(' ')[1] || '', email: participant.email })}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{participant.name}</p>
                              <p className="text-sm text-gray-500">{participant.email}</p>
                            </div>
                          </div>
                          {hasHistory && (
                            <div className="text-right">
                              <p className="text-sm font-medium text-red-600">
                                Tiene historial de gastos
                              </p>
                              <p className="text-xs text-red-500">No se puede remover</p>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <RemoveParticipantForm
                travelId={travelId}
                participant={selectedParticipant}
                participantHasHistory={hasExpenseHistory(selectedParticipant.id, expenses)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ParticipantList({ participants, currentUserId }: {
  participants: Participant[];
  currentUserId: string;
}) {
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