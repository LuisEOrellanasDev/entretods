interface AuditLogEntry {
  userId: string;
  action: string;
  resource: string;
  resourceId?: string;
  details?: Record<string, any>;
  ip?: string;
  userAgent?: string;
  timestamp: Date;
}

const auditLogs: AuditLogEntry[] = [];

export async function logAuditEvent(entry: Omit<AuditLogEntry, 'timestamp'>) {
  const logEntry: AuditLogEntry = {
    ...entry,
    timestamp: new Date(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 AUDIT LOG:', JSON.stringify(logEntry, null, 2));
  }
  auditLogs.push(logEntry);
}

export const AuditActions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',

  TRAVEL_CREATE: 'TRAVEL_CREATE',
  TRAVEL_UPDATE: 'TRAVEL_UPDATE',
  TRAVEL_DELETE: 'TRAVEL_DELETE',
  TRAVEL_JOIN: 'TRAVEL_JOIN',
  TRAVEL_LEAVE: 'TRAVEL_LEAVE',

  EXPENSE_CREATE: 'EXPENSE_CREATE',
  EXPENSE_UPDATE: 'EXPENSE_UPDATE',
  EXPENSE_DELETE: 'EXPENSE_DELETE',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
} as const;

export const AuditResources = {
  USER: 'USER',
  TRAVEL: 'TRAVEL',
  EXPENSE: 'EXPENSE',
  AUTH: 'AUTH',
  SYSTEM: 'SYSTEM',
} as const;
