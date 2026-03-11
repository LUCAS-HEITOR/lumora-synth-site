// Métodos de pagamento — Lumora Synth

export const paymentMethods = [
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    description: 'Pix, cartão de crédito, boleto — para clientes brasileiros',
    region: 'BR',
    currencies: ['BRL'],
    icon: '🇧🇷',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Cartão de crédito, saldo PayPal — para clientes internacionais',
    region: 'INTL',
    currencies: ['USD', 'EUR'],
    icon: '🌐',
  },
];

export function getMethodsByRegion(regionCode) {
  if (regionCode === 'BR') return paymentMethods.filter((m) => m.region === 'BR');
  return paymentMethods.filter((m) => m.region === 'INTL');
}
