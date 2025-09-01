export interface Participant {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  joinedAt: Date;
  leftAt?: Date | null;
}

export interface ParticipantWithRole extends Participant {
  role: 'admin' | 'member';
}

export interface ExpenseParticipant {
  participantId: string;
  share: number;
}

export interface AddExpenseFormProps {
  travelId: string;
  participants: Participant[];
  currentUserId: string;
  onSuccess: () => void;
}

export interface RemoveParticipantFormProps {
  travelId: string;
  participant: Participant;
  onCancel?: () => void;
  onSuccess?: () => void;
}
