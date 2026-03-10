// Payment service stubs — Lumora Synth
// Replace these stubs with real API calls when integrating

/**
 * Mercado Pago integration stub (for Brazilian clients).
 *
 * To integrate:
 * 1. Install: npm install mercadopago
 * 2. Create a backend endpoint that uses the MercadoPago SDK to create a preference
 * 3. Use the preference ID to redirect the user or render the MercadoPago checkout brick
 *
 * Docs: https://www.mercadopago.com.br/developers/en/docs
 */
export async function createMercadoPagoPayment(orderData) {
  // TODO: Replace with real API call to your backend
  // Your backend should:
  //   1. Receive { title, quantity, unit_price, currency_id }
  //   2. Create a MercadoPago preference using the SDK
  //   3. Return the preference init_point URL
  console.log('[MercadoPago] Creating payment:', orderData);

  return {
    success: true,
    redirectUrl: '#mercadopago-checkout', // Replace with real init_point
    preferenceId: 'MOCK_PREFERENCE_ID',
  };
}

/**
 * PayPal integration stub (for international clients).
 *
 * To integrate:
 * 1. Install: npm install @paypal/react-paypal-js
 * 2. Wrap your checkout with PayPalScriptProvider
 * 3. Render PayPalButtons component with createOrder and onApprove handlers
 *
 * Docs: https://developer.paypal.com/docs/checkout/
 */
export async function createPayPalOrder(orderData) {
  // TODO: Replace with real API call to your backend
  // Your backend should:
  //   1. Receive { description, amount, currency }
  //   2. Call PayPal Orders API to create an order
  //   3. Return the order ID
  console.log('[PayPal] Creating order:', orderData);

  return {
    success: true,
    orderId: 'MOCK_PAYPAL_ORDER_ID',
  };
}

export async function capturePayPalOrder(orderId) {
  // TODO: Call your backend to capture the PayPal order after buyer approval
  console.log('[PayPal] Capturing order:', orderId);

  return {
    success: true,
    status: 'COMPLETED',
  };
}
