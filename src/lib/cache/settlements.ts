import { calculateTravelSettlement } from '@/lib/settlement';

interface CacheEntry {
  data: ReturnType<typeof calculateTravelSettlement>;
  timestamp: number;
  expiry: number;
}

class SettlementCache {
  private cache = new Map<string, CacheEntry>();
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  private generateKey(travelId: string, expensesHash: string): string {
    return `${travelId}:${expensesHash}`;
  }

  private hashExpenses(expenses: any[]): string {
    // Create a simple hash based on expense IDs and amounts
    const expenseData = expenses.map(e => `${e.id}:${e.amount}:${e.payerId}`).join('|');
    return btoa(expenseData).slice(0, 16);
  }

  private isExpired(entry: CacheEntry): boolean {
    return Date.now() > entry.expiry;
  }

  get(travelId: string, expenses: any[], users: any[]): ReturnType<typeof calculateTravelSettlement> | null {
    const expensesHash = this.hashExpenses(expenses);
    const key = this.generateKey(travelId, expensesHash);
    const entry = this.cache.get(key);

    if (!entry || this.isExpired(entry)) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  set(travelId: string, expenses: any[], data: ReturnType<typeof calculateTravelSettlement>): void {
    const expensesHash = this.hashExpenses(expenses);
    const key = this.generateKey(travelId, expensesHash);
    const timestamp = Date.now();

    this.cache.set(key, {
      data,
      timestamp,
      expiry: timestamp + this.TTL,
    });
  }

  invalidate(travelId: string): void {
    // Remove all entries for this travel
    for (const [key] of this.cache) {
      if (key.startsWith(`${travelId}:`)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }

  // Cleanup expired entries periodically
  cleanup(): void {
    for (const [key, entry] of this.cache) {
      if (this.isExpired(entry)) {
        this.cache.delete(key);
      }
    }
  }

  getStats() {
    const now = Date.now();
    const entries = Array.from(this.cache.values());
    const expired = entries.filter(entry => this.isExpired(entry)).length;
    const active = entries.length - expired;

    return {
      total: entries.length,
      active,
      expired,
      oldestEntry: entries.length > 0 ? Math.min(...entries.map(e => e.timestamp)) : null,
    };
  }
}

// Global cache instance
const settlementCache = new SettlementCache();

// Cleanup expired entries every 10 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    settlementCache.cleanup();
  }, 10 * 60 * 1000);
}

export function getCachedSettlement(
  travelId: string,
  expenses: any[],
  users: any[]
): ReturnType<typeof calculateTravelSettlement> {
  // Try to get from cache first
  const cached = settlementCache.get(travelId, expenses, users);
  if (cached) {
    return cached;
  }

  // Calculate and cache the result
  const result = calculateTravelSettlement(expenses, users);
  settlementCache.set(travelId, expenses, result);

  return result;
}

export function invalidateSettlementCache(travelId: string): void {
  settlementCache.invalidate(travelId);
}

export function getSettlementCacheStats() {
  return settlementCache.getStats();
}
