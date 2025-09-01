export interface UserBalance {
  userId: string;
  name: string;
  balance: number;
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

export function calculateBalances(expenses: ExpenseData[], users: UserData[]): UserBalance[] {
  const balances = new Map<string, number>();

  users.forEach(user => {
    balances.set(user.id, 0);
  });

  expenses.forEach(expense => {
    const totalShares = expense.participants.reduce((sum, p) => sum + p.share, 0);

    expense.participants.forEach(participant => {
      const userShare = (participant.share / totalShares) * expense.amount;

      const currentBalance = balances.get(participant.userId) || 0;
      balances.set(participant.userId, currentBalance - userShare);
    });
    const payerBalance = balances.get(expense.payerId) || 0;
    balances.set(expense.payerId, payerBalance + expense.amount);
  });

  return users.map(user => {
    const balance = balances.get(user.id) || 0;
    return {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      balance: balance
    };
  });
}

export function calculateSettlements(balances: UserBalance[]): Settlement[] {
  const settlements: Settlement[] = [];

  const creditors = balances
    .filter(b => b.balance > 0.01)
    .sort((a, b) => b.balance - a.balance);

  const debtors = balances
    .filter(b => b.balance < -0.01)
    .map(b => ({ ...b, balance: Math.abs(b.balance) }))
    .sort((a, b) => b.balance - a.balance);

  let creditorIndex = 0;
  let debtorIndex = 0;

  while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
    const creditor = creditors[creditorIndex];
    const debtor = debtors[debtorIndex];

    const settlementAmount = Math.min(creditor.balance, debtor.balance);

    if (settlementAmount > 0.01) {
      settlements.push({
        fromUserId: debtor.userId,
        fromUserName: debtor.name,
        toUserId: creditor.userId,
        toUserName: creditor.name,
        amount: Math.round(settlementAmount * 100) / 100
      });

      creditor.balance -= settlementAmount;
      debtor.balance -= settlementAmount;
    }
    if (creditor.balance <= 0.01) {
      creditorIndex++;
    }
    if (debtor.balance <= 0.01) {
      debtorIndex++;
    }
  }

  return settlements;
}

export function calculateTravelSettlement(expenses: ExpenseData[], users: UserData[]) {
  const balances = calculateBalances(expenses, users);
  const balancesCopy = balances.map(b => ({ ...b }));
  const settlements = calculateSettlements(balancesCopy);

  return {
    balances,
    settlements,
    totalExpenses: expenses.reduce((sum, exp) => sum + exp.amount, 0),
    isSettled: settlements.length === 0
  };
}