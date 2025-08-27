export const formatCurrency = (amount: number, currency = 'COP') => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[^\d.-]/g, ''));
};

export const isValidAmount = (amount: number): boolean => {
  return !isNaN(amount) && amount > 0;
};
