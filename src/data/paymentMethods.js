// Payment methods — Lumora Synth (bilingual: en / pt-BR)

import { localizeList } from '../utils/localize';

export const paymentMethods = [
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    description: {
      en: 'Pix, credit card, boleto — for Brazilian clients',
      pt: 'Pix, cartão de crédito, boleto — para clientes brasileiros',
    },
    region: 'BR',
    currencies: ['BRL'],
    icon: '🇧🇷',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: {
      en: 'Credit card, PayPal balance — for international clients',
      pt: 'Cartão de crédito, saldo PayPal — para clientes internacionais',
    },
    region: 'INTL',
    currencies: ['USD', 'EUR'],
    icon: '🌐',
  },
];

export function getLocalizedPaymentMethods(lang) {
  return localizeList(paymentMethods, lang);
}

export function getMethodsByRegion(regionCode) {
  if (regionCode === 'BR') return paymentMethods.filter((m) => m.region === 'BR');
  return paymentMethods.filter((m) => m.region === 'INTL');
}
