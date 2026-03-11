// Vercel Serverless Function — PayPal Order Capture
// POST /api/capture-paypal-order

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({ error: 'Missing orderId' });
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

    // Capture order
    const captureResponse = await fetch(
      `${BASE_URL}/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.access_token}`,
        },
      }
    );

    const captureData = await captureResponse.json();
    if (!captureResponse.ok) {
      console.error('[PayPal] Capture error:', captureData);
      return res.status(captureResponse.status).json({
        error: 'Capture failed',
        details: captureData.message || 'Unknown error',
      });
    }

    return res.status(200).json({
      id: captureData.id,
      status: captureData.status,
    });
  } catch (error) {
    console.error('[PayPal] Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
