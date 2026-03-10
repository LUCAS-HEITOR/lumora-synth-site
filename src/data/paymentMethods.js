// Payment methods — Lumora Synth

export const paymentMethods = [
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    description: 'Pix, credit card, boleto — for Brazilian clients',
    region: 'BR',
    currencies: ['BRL'],
    icon: '🇧🇷',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Credit card, PayPal balance — for international clients',
    region: 'INTL',
    currencies: ['USD', 'EUR'],
    icon: '🌐',
  },
];

export function getMethodsByRegion(regionCode) {
  if (regionCode === 'BR') return paymentMethods.filter((m) => m.region === 'BR');
  return paymentMethods.filter((m) => m.region === 'INTL');
}
