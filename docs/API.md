# API Documentation

This project **does not include any API endpoints**.

## Reason

The `Dev Portfolio` app is a **fully static site** with no backend, database, or serverless functions. All content is hardcoded in React components, and the contact form simulates submission client-side without sending data to any endpoint.

## Key Details

- **Contact Form**: Simulated via `setTimeout` and React state
- **No API Routes**: No `/api` directory or serverless functions
- **No External Requests**: Aside from Google Fonts and Tailwind CDN
- **No Auth, Storage, or Realtime**: Not required for static portfolio

## Form Simulation Logic

```ts
// In ContactForm.tsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (honeypot) return; // Block if honeypot filled

  setShowToast(true);
  setTimeout(() => setShowToast(false), 3000);

  // Reset form
  setName('');
  setEmail('');
  setMessage('');
};
```

## If You Need Real Email

To upgrade to real email delivery:

1. Create a Vercel Serverless Function at `api/contact.ts`
2. Use [Resend](https://resend.com) with `RESEND_API_KEY`
3. Add environment variable in Vercel dashboard
4. Update form to POST to `/api/contact`

But per current requirements: **no API is used or needed**.