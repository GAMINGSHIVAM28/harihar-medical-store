import { send } from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// EmailJS helper for client-side form submissions.
// Set your EmailJS keys in a local .env file using the VITE_ prefix.
export async function sendEmail(templateParams) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment.'
    );
  }

  return send(serviceId, templateId, templateParams, publicKey);
}
