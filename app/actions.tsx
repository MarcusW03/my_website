'use server';

export type FormResult =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function handleSubmit(
  _prevState: FormResult,
  formData: FormData,
): Promise<FormResult> {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (typeof name !== 'string' || name.trim() === '') {
    return { status: 'error', message: 'Name is required.' };
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { status: 'error', message: 'A valid email is required.' };
  }
  if (typeof message !== 'string' || message.trim() === '') {
    return { status: 'error', message: 'Message is required.' };
  }

  const webhookURL = process.env.SLACK_WEBHOOK_URL;
  if (!webhookURL) {
    return { status: 'error', message: 'Server configuration error.' };
  }

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `*New Contact Form Submission*\n\n*Name:* ${name.trim()}\n*Email:* ${email.trim()}\n*Message:* ${message.trim()}`,
      }),
    });

    if (!response.ok) {
      return { status: 'error', message: 'Failed to send message. Please try again.' };
    }

    return { status: 'success' };
  } catch {
    return { status: 'error', message: 'An error occurred. Please try again.' };
  }
}
