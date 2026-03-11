// Payment service — Lumora Synth
// Integração real com Mercado Pago PIX e PayPal

/**
 * Cria pagamento PIX via Mercado Pago (serverless API no Vercel).
 */
export async function createMercadoPagoPayment(orderData) {
  const response = await fetch('/api/create-pix', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: orderData.title,
      description: orderData.title,
      amount: orderData.unit_price,
      email: orderData.email,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to create PIX payment');
  }

  return {
    success: true,
    id: data.id,
    status: data.status,
    qr_code: data.qr_code,
    qr_code_base64: data.qr_code_base64,
    ticket_url: data.ticket_url,
  };
}

/**
 * Verifica status do pagamento PIX.
 */
export async function checkPaymentStatus(paymentId) {
  const response = await fetch(`/api/check-payment?id=${encodeURIComponent(paymentId)}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to check payment');
  }

  return data;
}

/**
 * PayPal — redireciona para PayPal.me para pagamentos internacionais.
 * Abordagem simples sem API backend.
 */
export function createPayPalPayment(orderData) {
  // Gera link PayPal.me com valor
  // Substitua 'LumoraSynth' pelo seu username PayPal real
  const paypalUsername = 'LumoraSynth';
  const amount = orderData.amount;
  const currency = orderData.currency || 'USD';
  const paypalUrl = `https://www.paypal.com/paypalme/${paypalUsername}/${amount}${currency}`;

  return {
    success: true,
    redirectUrl: paypalUrl,
  };
}
