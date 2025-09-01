'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useServerAction } from '@/lib/hooks/useServerAction';
import { LoadingButton } from '@/components/ui/LoadingButton';
import { addParticipant } from '../_actions/addParticipant';
import { useToast } from '@/components/providers/ToastProvider';

interface AddParticipantFormProps {
  travelId: string;
}

export function AddParticipantForm({ travelId }: AddParticipantFormProps) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});
  const router = useRouter();
  const { addToast } = useToast();
  const { execute: handleAddParticipant, isPending } = useServerAction(
    addParticipant,
    {
      onSuccess: () => {
        setEmail('');
        setErrors({});
        router.refresh();
        addToast({
          type: 'success',
          title: 'Participante agregado correctamente',
          message: 'Participante agregado correctamente'
        });
      },
      onError: (error: Error) => {
        setErrors({ email: error.message });
      },
      errorMessage: ''
    }
  );

  const validateForm = () => {
    const newErrors: { email?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    await handleAddParticipant({
      travelId,
      email: email.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="participant-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email del participante
        </label>
        <input
          id="participant-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          placeholder="participante@ejemplo.com"
          disabled={isPending}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="flex justify-end">
        <LoadingButton
          type="submit"
          isLoading={isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Agregar Participante
        </LoadingButton>
      </div>
    </form>
  );
}
