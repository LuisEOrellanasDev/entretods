'use client';

import { formatCurrency } from '@/lib/utils/currency';

interface BalanceSummaryProps {
  balances: Array<{
    userId: string;
    name: string;
    balance: number;
  }>;
}

export function BalanceSummary({ balances }: BalanceSummaryProps) {
  // Sort balances: positive first (owed money), then negative (owes money)
  const sortedBalances = [...balances].sort((a, b) => b.balance - a.balance);

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Lista de Totales</h3>
      <div className="space-y-2">
        {sortedBalances.map((participant) => {
          const isPositive = participant.balance > 0;
          const isZero = Math.abs(participant.balance) < 0.01;

          return (
            <div
              key={participant.userId}
              className={`flex justify-between items-center p-3 rounded-lg ${isZero
                ? 'bg-green-50 border border-green-200'
                : isPositive
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-red-50 border border-red-200'
                }`}
            >
              <span className="font-medium text-gray-900">
                {participant.name}
              </span>
              <span className={`font-semibold ${isZero
                ? 'text-green-700'
                : isPositive
                  ? 'text-blue-700'
                  : 'text-red-700'
                }`}>
                {isZero ? '✓ Al día' : formatCurrency(participant.balance)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>💡 Tip:</span>
          <span>Verde = Al día, Azul = Se le debe, Rojo = Debe dinero</span>
        </div>
      </div>
    </div>
  );
}
