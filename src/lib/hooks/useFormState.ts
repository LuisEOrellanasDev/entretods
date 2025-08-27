import { useState, useCallback } from 'react';
import { useToast } from '@/components/providers/ToastProvider';

export interface FormState<T> {
  data: T;
  isSubmitting: boolean;
  errors: Partial<Record<keyof T, string>>;
}

export interface UseFormStateOptions<T> {
  initialData: T;
  onSubmit: (data: T) => Promise<void>;
  onSuccess?: () => void;
  validate?: (data: T) => Partial<Record<keyof T, string>>;
  successMessage?: string;
  errorMessage?: string;
}

export function useFormState<T extends Record<string, any>>({
  initialData,
  onSubmit,
  onSuccess,
  validate,
  successMessage = 'Operación completada exitosamente',
  errorMessage = 'Error al procesar la solicitud'
}: UseFormStateOptions<T>) {
  const { addToast } = useToast();

  const [state, setState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    errors: {}
  });

  const updateField = useCallback((field: keyof T, value: any) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined }
    }));
  }, []);

  const updateData = useCallback((newData: Partial<T>) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, ...newData }
    }));
  }, []);

  const setErrors = useCallback((errors: Partial<Record<keyof T, string>>) => {
    setState(prev => ({ ...prev, errors }));
  }, []);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      isSubmitting: false,
      errors: {}
    });
  }, [initialData]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Validación
    if (validate) {
      const validationErrors = validate(state.data);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setState(prev => ({ ...prev, isSubmitting: true, errors: {} }));

    try {
      await onSubmit(state.data);

      addToast({
        type: 'success',
        title: 'Éxito',
        message: successMessage
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        message: error instanceof Error ? error.message : errorMessage
      });
    } finally {
      setState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [state.data, validate, onSubmit, onSuccess, successMessage, errorMessage, addToast, setErrors]);

  return {
    ...state,
    updateField,
    updateData,
    setErrors,
    reset,
    handleSubmit,
    hasErrors: Object.keys(state.errors).length > 0
  };
}
