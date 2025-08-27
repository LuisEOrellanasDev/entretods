'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserBalance, Settlement } from '../../../../lib/settlement';
import { formatCurrency } from '@/lib/utils/currency';
import { useToast } from '@/components/providers/ToastProvider';
import { liquidateTravel } from '../_actions/liquidateTravel';

interface SettlementViewProps {
  balances: UserBalance[];
  settlements: Settlement[];
  totalExpenses: number;
  isSettled: boolean;
  travelId: string;
  isAdmin: boolean;
  travelIsActive: boolean;
}

export default function SettlementView({
  balances,
  settlements,
  totalExpenses,
  isSettled,
  travelId,
  isAdmin,
  travelIsActive
}: SettlementViewProps) {
  const [isLiquidating, setIsLiquidating] = useState(false);
  const { addToast } = useToast();
  const router = useRouter();

  const handleLiquidateTravel = async () => {
    if (!confirm('¿Estás seguro de que quieres marcar este viaje como liquidado? Esta acción no se puede deshacer.')) {
      return;
    }

    setIsLiquidating(true);
    try {
      await liquidateTravel({ travelId });
      addToast({
        type: 'success',
        title: 'Viaje Liquidado',
        message: 'El viaje ha sido marcado como liquidado correctamente'
      });
      router.refresh();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        message: error instanceof Error ? error.message : 'Error al liquidar el viaje'
      });
    } finally {
      setIsLiquidating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Resumen del Viaje
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-blue-700">Total de Gastos</p>
            <p className="text-xl font-bold text-blue-900">
              {formatCurrency(totalExpenses)}
            </p>
          </div>
          <div>
            <p className="text-sm text-blue-700">Estado</p>
            <p className={`text-xl font-bold ${isSettled ? 'text-green-600' : 'text-orange-600'}`}>
              {isSettled ? 'Liquidado' : 'Pendiente'}
            </p>
          </div>
        </div>
      </div>

      {/* User Balances */}
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Balance por Persona
        </h3>
        <div className="space-y-3">
          {balances.map((balance) => (
            <div
              key={balance.userId}
              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="font-medium text-gray-900">
                {balance.name}
              </span>
              <span className={`font-bold ${balance.balance > 0
                ? 'text-green-600'
                : balance.balance < 0
                  ? 'text-red-600'
                  : 'text-gray-600'
                }`}>
                {balance.balance > 0 && '+'}
                {formatCurrency(balance.balance)}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span className="text-gray-600">Le deben dinero</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-gray-600">Debe dinero</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded"></div>
              <span className="text-gray-600">Está al día</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settlement Suggestions */}
      {settlements.length > 0 && (
        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Pagos Sugeridos para Liquidar
          </h3>
          <div className="space-y-3">
            {settlements.map((settlement, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      <span className="text-red-600">{settlement.fromUserName}</span>
                      {' → '}
                      <span className="text-green-600">{settlement.toUserName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Pago sugerido
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(settlement.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> Estos {settlements.length} pagos son la forma más eficiente
              de liquidar todas las deudas del viaje.
            </p>
          </div>
        </div>
      )}

      {/* All settled message */}
      {isSettled && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900">
                ¡Viaje Liquidado!
              </h3>
              <p className="text-green-700">
                Todas las cuentas están saldadas. No hay pagos pendientes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Liquidate Travel Button */}
      {isAdmin && travelIsActive && (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Finalizar Viaje
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Marca este viaje como liquidado. Esta acción no se puede deshacer.
              </p>
            </div>
            <button
              onClick={handleLiquidateTravel}
              disabled={isLiquidating}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isLiquidating ? 'Liquidando...' : 'Viaje Liquidado'}
            </button>
          </div>
        </div>
      )}

      {/* Travel already liquidated message */}
      {!travelIsActive && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Viaje Finalizado
              </h3>
              <p className="text-gray-600">
                Este viaje ha sido marcado como liquidado y ya no está activo.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
