import { useState, useCallback } from 'react';
import { formatCurrency, isValidAmount } from '@/lib/utils/currency';

interface Participant {
  id: string;
  name: string;
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
  participants: Participant[];
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

  const handleToggleAllParticipants = useCallback(() => {
    if (selectedParticipants.size === participants.length) {
      setSelectedParticipants(new Set());
    } else {
      setSelectedParticipants(new Set(participants.map(p => p.id)));
    }
  }, [participants, selectedParticipants.size]);

  const allParticipantsSelected = participants.length > 0 && selectedParticipants.size === participants.length;

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

  const getCustomSharesValidation = useCallback(() => {
    if (splitType !== 'custom') return { isValid: true, difference: 0, message: '' };

    const totalAmount = parseFloat(formData.amount) || 0;
    if (totalAmount <= 0) return { isValid: true, difference: 0, message: '' };

    const shares = calculateShares();
    const totalShares = Object.values(shares).reduce((sum, share) => sum + share, 0);
    const difference = totalAmount - totalShares;

    if (Math.abs(difference) < 0.01) {
      return { isValid: true, difference: 0, message: '' };
    }

    if (difference > 0) {
      return {
        isValid: false,
        difference,
        message: `Los montos ingresados no llegan al valor total del gasto, faltan ${formatCurrency(difference)}`
      };
    } else {
      return {
        isValid: false,
        difference: Math.abs(difference),
        message: `El monto excede el valor del gasto por ${formatCurrency(Math.abs(difference))}`
      };
    }
  }, [splitType, formData.amount, calculateShares]);

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

    if (isValidAmount(amount)) {
      const shares = calculateShares();
      const totalShares = Object.values(shares).reduce((sum, share) => sum + share, 0);

      if (Math.abs(totalShares - amount) > 0.01) {
        errors.push('La suma de las participaciones debe ser igual al monto total');
      }
    }

    const customSharesValidation = getCustomSharesValidation();
    if (!customSharesValidation.isValid) {
      errors.push(customSharesValidation.message);
    }

    return errors;
  }, [formData, selectedParticipants, calculateShares, getCustomSharesValidation]);

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
        participantName: participant ? participant.name : 'Unknown',
        share,
        formattedShare: formatCurrency(share)
      };
    });
  }, [selectedParticipants, participants, calculateShares]);

  const shares = calculateShares();
  const totalAmount = Object.values(shares).reduce((sum: number, share: number) => sum + share, 0);

  return {
    formData,
    splitType,
    participantShares,
    selectedParticipants,

    shares,
    totalAmount,
    allParticipantsSelected,
    handleInputChange,
    handleParticipantToggle,
    handleCustomShareChange,
    handleToggleAllParticipants,
    setSplitType,
    validateForm,
    resetForm,
    getFormattedSummary,
    isFormValid: () => validateForm().length === 0,
    getValidationErrors: validateForm,
    getCustomSharesValidation,
  };
}
