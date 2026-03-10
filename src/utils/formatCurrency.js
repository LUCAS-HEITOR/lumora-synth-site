// Currency formatting utility

export function formatCurrency(amount, currency = 'USD') {
  if (amount == null) return '—';

  const formatter = new Intl.NumberFormat(currency === 'BRL' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
}
