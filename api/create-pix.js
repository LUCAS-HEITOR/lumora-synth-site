// Vercel Serverless Function — Mercado Pago PIX Payment
// POST /api/create-pix

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, description, amount, email } = req.body;

  if (!title || !amount || !email) {
    return res.status(400).json({ error: 'Missing required fields: title, amount, email' });
  }

  const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Payment configuration missing' });
  }

  try {
    const response = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'X-Idempotency-Key': `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      },
      body: JSON.stringify({
        transaction_amount: Number(amount),
        description: title,
        payment_method_id: 'pix',
        payer: {
          email: email,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[MercadoPago] API error:', data);
      return res.status(response.status).json({
        error: 'Payment creation failed',
        details: data.message || 'Unknown error',
      });
    }

    return res.status(200).json({
      success: true,
      id: data.id,
      status: data.status,
      qr_code: data.point_of_interaction?.transaction_data?.qr_code,
      qr_code_base64: data.point_of_interaction?.transaction_data?.qr_code_base64,
      ticket_url: data.point_of_interaction?.transaction_data?.ticket_url,
    });
  } catch (error) {
    console.error('[MercadoPago] Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
