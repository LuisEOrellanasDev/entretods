import { calculateTravelSettlement } from '../settlement';

export interface TravelBalanceData {
  expenses: Array<{
    id: string;
    amount: number;
    payerId: string;
    participants: Array<{
      userId: string;
      share: number;
    }>;
  }>;
  users: Array<{
    id: string;
    firstName: string;
    lastName: string;
  }>;
}

/**
 * Get a specific user's balance from travel data using the existing settlement calculation
 */
export function getUserBalanceFromTravel(
  travelData: TravelBalanceData,
  userId: string
): number {
  const settlement = calculateTravelSettlement(travelData.expenses, travelData.users);
  const userBalance = settlement.balances.find(b => b.userId === userId);
  return userBalance?.balance || 0;
}
