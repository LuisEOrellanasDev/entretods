interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store (en producción usar Redis)
const store: RateLimitStore = {};

export async function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000 // 1 minuto
): Promise<RateLimitResult> {
  const now = Date.now();
  const key = identifier;

  // Limpiar entradas expiradas
  if (store[key] && now > store[key].resetTime) {
    delete store[key];
  }

  // Inicializar si no existe
  if (!store[key]) {
    store[key] = {
      count: 0,
      resetTime: now + windowMs
    };
  }

  store[key].count++;

  const success = store[key].count <= limit;
  const remaining = Math.max(0, limit - store[key].count);
  const reset = store[key].resetTime;

  return { success, remaining, reset };
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  return 'unknown';
}
