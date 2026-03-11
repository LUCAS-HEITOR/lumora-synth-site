// Vercel Serverless Function — PayPal Order Creation
// POST /api/create-paypal-order

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, amount, currency, return_url, cancel_url } = req.body;

  if (!title || !amount) {
    return res.status(400).json({ error: 'Missing required fields: title, amount' });
  }

  const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
    return res.status(500).json({ error: 'PayPal configuration missing' });
  }

  const BASE_URL = 'https://api-m.paypal.com';

  try {
    // Get access token
    const authResponse = await fetch(`${BASE_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });

    const authData = await authResponse.json();
    if (!authResponse.ok) {
      console.error('[PayPal] Auth error:', authData);
      return res.status(500).json({ error: 'PayPal authentication failed' });
    }

    // Create order
    const orderResponse = await fetch(`${BASE_URL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authData.access_token}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: String(title).substring(0, 127),
            amount: {
              currency_code: currency || 'USD',
              value: String(Number(amount).toFixed(2)),
            },
          },
        ],
        application_context: {
          return_url: return_url || 'https://lumora-synth.vercel.app/checkout',
          cancel_url: cancel_url || 'https://lumora-synth.vercel.app/checkout',
          user_action: 'PAY_NOW',
          brand_name: 'Lumora Synth',
        },
      }),
    });

    const orderData = await orderResponse.json();
    if (!orderResponse.ok) {
      console.error('[PayPal] Order error:', orderData);
      return res.status(orderResponse.status).json({
        error: 'Order creation failed',
        details: orderData.message || 'Unknown error',
      });
    }

    return res.status(200).json({
      id: orderData.id,
      status: orderData.status,
      links: orderData.links,
    });
  } catch (error) {
    console.error('[PayPal] Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
