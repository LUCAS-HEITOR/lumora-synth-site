// Vercel Serverless Function — Check PIX Payment Status
// GET /api/check-payment?id=PAYMENT_ID

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing payment id' });
  }

  const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Payment configuration missing' });
  }

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(id)}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to check payment' });
    }

    return res.status(200).json({
      id: data.id,
      status: data.status,
      status_detail: data.status_detail,
    });
  } catch (error) {
    console.error('[MercadoPago] Check payment error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
