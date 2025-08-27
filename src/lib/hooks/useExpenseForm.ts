import { useState, useCallback } from 'react';
import { formatCurrency, isValidAmount } from '@/lib/utils/currency';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface ExpenseFormData {
  title: string;
  description: string;
  amount: string;
  category: string;
  payerId: string;
}

interface UseExpenseFormOptions {
  participants: User[];
  currentUserId: string;
  initialData?: Partial<ExpenseFormData>;
}

export function useExpenseForm({ participants, currentUserId, initialData }: UseExpenseFormOptions) {
  const [formData, setFormData] = useState<ExpenseFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    amount: initialData?.amount || '',
    category: initialData?.category || '',
    payerId: initialData?.payerId || currentUserId,
  });

  const [splitType, setSplitType] = useState<'equal' | 'custom'>('equal');
  const [participantShares, setParticipantShares] = useState<Record<string, number>>({});
  const [selectedParticipants, setSelectedParticipants] = useState<Set<string>>(
    new Set([currentUserId])
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleParticipantToggle = useCallback((participantId: string) => {
    setSelectedParticipants(prev => {
      const newSet = new Set(prev);
      if (newSet.has(participantId)) {
        newSet.delete(participantId);
      } else {
        newSet.add(participantId);
      }
      return newSet;
    });
  }, []);

  const handleCustomShareChange = useCallback((participantId: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setParticipantShares(prev => ({
      ...prev,
      [participantId]: numValue
    }));
  }, []);

  const calculateShares = useCallback((): Record<string, number> => {
    const amount = parseFloat(formData.amount) || 0;
    const selectedIds = Array.from(selectedParticipants);

    if (splitType === 'equal') {
      const sharePerPerson = amount / selectedIds.length;
      return selectedIds.reduce((acc, id) => ({
        ...acc,
        [id]: sharePerPerson
      }), {} as Record<string, number>);
    }

    return participantShares;
  }, [formData.amount, selectedParticipants, splitType, participantShares]);

  const validateForm = useCallback((): string[] => {
    const errors: string[] = [];

    if (!formData.title.trim()) {
      errors.push('El título es requerido');
    }

    const amount = parseFloat(formData.amount);
    if (!isValidAmount(amount)) {
      errors.push('El monto debe ser mayor a cero');
    }

    if (selectedParticipants.size === 0) {
      errors.push('Debe seleccionar al menos un participante');
    }

    // Only validate shares if amount is valid
    if (isValidAmount(amount)) {
      const shares = calculateShares();
      const totalShares = Object.values(shares).reduce((sum, share) => sum + share, 0);

      if (Math.abs(totalShares - amount) > 0.01) {
        errors.push('La suma de las participaciones debe ser igual al monto total');
      }
    }

    return errors;
  }, [formData, selectedParticipants, calculateShares]);

  const resetForm = useCallback(() => {
    setFormData({
      title: '',
      description: '',
      amount: '',
      category: '',
      payerId: currentUserId,
    });
    setSelectedParticipants(new Set([currentUserId]));
    setParticipantShares({});
    setSplitType('equal');
  }, [currentUserId]);

  const getFormattedSummary = useCallback(() => {
    const shares = calculateShares();
    return Array.from(selectedParticipants).map(participantId => {
      const participant = participants.find(p => p.id === participantId);
      const share = shares[participantId] || 0;

      return {
        participantId,
        participantName: participant ? `${participant.firstName} ${participant.lastName}` : 'Unknown',
        share,
        formattedShare: formatCurrency(share)
      };
    });
  }, [selectedParticipants, participants, calculateShares]);

  const shares = calculateShares();
  const totalAmount = Object.values(shares).reduce((sum: number, share: number) => sum + share, 0);

  return {
    // Form data
    formData,
    splitType,
    participantShares,
    selectedParticipants,

    // Calculated values
    shares,
    totalAmount,

    // Handlers
    handleInputChange,
    handleParticipantToggle,
    handleCustomShareChange,
    setSplitType,

    // Utilities
    validateForm,
    resetForm,
    getFormattedSummary,

    // Validation helpers
    isFormValid: () => validateForm().length === 0,
    getValidationErrors: validateForm,
  };
}
