import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_TOKEN!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ error: 'Phone number and message are required.' });
  }

  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER!,
      to: phone,
    });

    console.log('SMS sent successfully:', result.sid);
    res.status(200).json({ success: true, sid: result.sid });
  } catch (error: any) {
    console.error('Twilio Error:', error.message);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
}