export function sanitizeErrorMessage(error: unknown): string {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (error instanceof Error) {
    if (isDevelopment) {
      return error.message;
    }

    const message = error.message.toLowerCase();

    if (message.includes('prisma') || message.includes('database')) {
      return 'Error de base de datos. Inténtalo de nuevo.';
    }
    if (message.includes('unauthorized') || message.includes('forbidden')) {
      return 'No tienes permisos para realizar esta acción.';
    }

    if (message.includes('required') || message.includes('invalid') || message.includes('validation')) {
      return error.message;
    }
    if (message.includes('network') || message.includes('connection') || message.includes('timeout')) {
      return 'Error de conexión. Verifica tu conexión a internet.';
    }

    if (message.includes('enoent') || message.includes('file not found')) {
      return 'Archivo no encontrado.';
    }
    return 'Ha ocurrido un error inesperado. Inténtalo de nuevo.';
  }

  if (typeof error === 'string') {
    return isDevelopment ? error : 'Ha ocurrido un error inesperado.';
  }

  return 'Error desconocido.';
}

export function logError(error: unknown, context?: string) {
  const timestamp = new Date().toISOString();
  const errorMessage = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error(`[${timestamp}] ${context ? `[${context}] ` : ''}${errorMessage}`);

  if (stack && process.env.NODE_ENV === 'development') {
    console.error(stack);
  }

  if (process.env.NODE_ENV === 'production') {
  }
}
