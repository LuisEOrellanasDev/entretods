export interface UserBalance {
  userId: string;
  name: string;
  balance: number; // positive = owed money, negative = owes money
}

export interface Settlement {
  fromUserId: string;
  fromUserName: string;
  toUserId: string;
  toUserName: string;
  amount: number;
}

export interface ExpenseData {
  id: string;
  amount: number;
  payerId: string;
  participants: {
    userId: string;
    share: number;
  }[];
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * Calculate net balances for all users based on expenses
 */
export function calculateBalances(expenses: ExpenseData[], users: UserData[]): UserBalance[] {
  const balances = new Map<string, number>();

  // Initialize all users with 0 balance
  users.forEach(user => {
    balances.set(user.id, 0);
  });

  // Process each expense
  expenses.forEach(expense => {
    const totalShares = expense.participants.reduce((sum, p) => sum + p.share, 0);

    expense.participants.forEach(participant => {
      const userShare = (participant.share / totalShares) * expense.amount;

      // Subtract what the user owes for this expense
      const currentBalance = balances.get(participant.userId) || 0;
      balances.set(participant.userId, currentBalance - userShare);

      // Add what the payer paid
      if (participant.userId === expense.payerId) {
        const payerBalance = balances.get(expense.payerId) || 0;
        balances.set(expense.payerId, payerBalance + expense.amount);
      }
    });

    // If payer is not in participants, they still paid the full amount
    if (!expense.participants.some(p => p.userId === expense.payerId)) {
      const payerBalance = balances.get(expense.payerId) || 0;
      balances.set(expense.payerId, payerBalance + expense.amount);
    }
  });

  // Convert to UserBalance array
  return users.map(user => ({
    userId: user.id,
    name: `${user.firstName} ${user.lastName}`,
    balance: Math.round((balances.get(user.id) || 0) * 100) / 100 // Round to 2 decimals
  }));
}

/**
 * Calculate optimal settlements using a greedy algorithm
 * This minimizes the number of transactions needed
 */
export function calculateSettlements(balances: UserBalance[]): Settlement[] {
  const settlements: Settlement[] = [];

  // Create working copies sorted by balance
  const creditors = balances
    .filter(b => b.balance > 0.01) // Those owed money (with small tolerance for floating point)
    .sort((a, b) => b.balance - a.balance); // Highest first

  const debtors = balances
    .filter(b => b.balance < -0.01) // Those who owe money
    .map(b => ({ ...b, balance: Math.abs(b.balance) })) // Make positive for easier calculation
    .sort((a, b) => b.balance - a.balance); // Highest debt first

  let creditorIndex = 0;
  let debtorIndex = 0;

  while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
    const creditor = creditors[creditorIndex];
    const debtor = debtors[debtorIndex];

    // Calculate settlement amount (minimum of what's owed and what's due)
    const settlementAmount = Math.min(creditor.balance, debtor.balance);

    if (settlementAmount > 0.01) { // Only create settlement if meaningful amount
      settlements.push({
        fromUserId: debtor.userId,
        fromUserName: debtor.name,
        toUserId: creditor.userId,
        toUserName: creditor.name,
        amount: Math.round(settlementAmount * 100) / 100 // Round to 2 decimals
      });

      // Update balances
      creditor.balance -= settlementAmount;
      debtor.balance -= settlementAmount;
    }

    // Move to next creditor or debtor if current one is settled
    if (creditor.balance <= 0.01) {
      creditorIndex++;
    }
    if (debtor.balance <= 0.01) {
      debtorIndex++;
    }
  }

  return settlements;
}

/**
 * Main function to calculate both balances and settlements
 */
export function calculateTravelSettlement(expenses: ExpenseData[], users: UserData[]) {
  const balances = calculateBalances(expenses, users);
  const settlements = calculateSettlements(balances);

  return {
    balances,
    settlements,
    totalExpenses: expenses.reduce((sum, exp) => sum + exp.amount, 0),
    isSettled: settlements.length === 0
  };
}
