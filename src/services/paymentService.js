// Payment service — Lumora Synth
// Mercado Pago PIX + PayPal REST API

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
    throw new Error(data.error || data.details || 'Failed to create PIX payment');
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
 * Cria ordem PayPal via serverless API.
 * Retorna links incluindo a URL de aprovação.
 */
export async function createPayPalOrder(orderData) {
  const response = await fetch('/api/create-paypal-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: orderData.title,
      amount: orderData.amount,
      currency: orderData.currency || 'USD',
      return_url: `${window.location.origin}/checkout?paypal=success`,
      cancel_url: `${window.location.origin}/checkout?paypal=cancel`,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.details || 'Failed to create PayPal order');
  }

  return data;
}

/**
 * Captura pagamento PayPal após aprovação.
 */
export async function capturePayPalOrder(orderId) {
  const response = await fetch('/api/capture-paypal-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.details || 'Failed to capture PayPal payment');
  }

  return data;
}
