// Payment methods — Lumora Synth (bilingual: en / pt-BR)

import { localizeList } from '../utils/localize';

export const paymentMethods = [
  {
    id: 'paypal',
    name: 'PayPal',
    description: {
      en: 'Credit card, debit card, PayPal balance — pay in USD',
      pt: 'Cartão de crédito, débito, saldo PayPal — pague em USD',
    },
    region: 'INTL',
    currencies: ['USD'],
    icon: '💳',
  },
  {
    id: 'mercado-pago',
    name: 'Mercado Pago (PIX)',
    description: {
      en: 'PIX instant payment — for Brazilian clients (BRL equivalent)',
      pt: 'Pagamento instantâneo via PIX — para clientes brasileiros (equivalente em BRL)',
    },
    region: 'BR',
    currencies: ['BRL'],
    icon: '🇧🇷',
  },
];

export function getLocalizedPaymentMethods(lang) {
  return localizeList(paymentMethods, lang);
}

export function getMethodsByRegion(regionCode) {
  if (regionCode === 'BR') return paymentMethods.filter((m) => m.region === 'BR');
  return paymentMethods.filter((m) => m.region === 'INTL');
}
