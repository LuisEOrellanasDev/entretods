'use client';

import { useState } from 'react';
import { AddParticipantForm } from './AddParticipantForm';
import { Participant } from '@/types/participant';
import ParticipantList from './ParticipantList';

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
    if (expense.payerId === participantId) {
      balance += expense.amount;
    }
    const participation = expense.participants.find(p => p.userId === participantId);
    if (participation) {
      balance -= participation.share;
    }
  });

  return balance;
}

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

  const selectedParticipantBalance = selectedParticipant
    ? calculateParticipantBalance(selectedParticipant.id, expenses)
    : 0;

  if (!isAdmin) {
    return (
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <ParticipantList
          participants={participants}
          currentUserId={currentUserId}
          travelId={travelId}
        />
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

        </nav>
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === 'list' && (
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Participantes Activos
            </h3>
            <ParticipantList
              participants={activeParticipants}
              currentUserId={currentUserId}
              travelId={travelId}
            />
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


      </div>
    </div>
  );
}
