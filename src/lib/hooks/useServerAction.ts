import { useState, useTransition } from 'react';
import { useToast } from '@/components/providers/ToastProvider';

interface UseServerActionOptions {
  onSuccess?: (result?: any) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useServerAction<T extends any[], R>(
  action: (...args: T) => Promise<R>,
  options: UseServerActionOptions = {}
) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast();

  const execute = (...args: T) => {
    setError(null);

    startTransition(async () => {
      try {
        const result = await action(...args);

        if (options.successMessage) {
          addToast({
            type: 'success',
            title: 'Éxito',
            message: options.successMessage
          });
        }

        options.onSuccess?.(result);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);

        // Only show toast if errorMessage is not explicitly disabled
        if (options.errorMessage !== '') {
          addToast({
            type: 'error',
            title: 'Error',
            message: options.errorMessage || errorMessage
          });
        }

        options.onError?.(err instanceof Error ? err : new Error(errorMessage));
      }
    });
  };

  return {
    execute,
    isPending,
    error,
    reset: () => setError(null)
  };
}
