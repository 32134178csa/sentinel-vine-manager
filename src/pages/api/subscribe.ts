import type { NextApiRequest, NextApiResponse } from 'next';
import { SESv2Client, CreateContactCommand } from '@aws-sdk/client-sesv2';

const client = new SESv2Client({ region: 'us-east-1' });
const CONTACT_LIST_NAME = 'sentinel-newsletter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const command = new CreateContactCommand({
      ContactListName: CONTACT_LIST_NAME,
      EmailAddress: email.toLowerCase().trim(),
    });

    await client.send(command);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    // Handle duplicate subscriptions gracefully
    if (error instanceof Error && error.name === 'AlreadyExistsException') {
      return res.status(200).json({
        success: true,
        message: 'Email already subscribed',
      });
    }

    console.error('SES subscription error:', error);
    return res.status(500).json({
      error: 'Failed to subscribe. Please try again later.',
    });
  }
}
