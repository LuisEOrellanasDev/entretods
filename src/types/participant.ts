import { UserRole } from "../../generated/prisma";

export interface Participant {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  joinedAt: Date;
  leftAt?: Date | null;
}

export interface ParticipantWithRole extends Participant {
  role: UserRole;
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
