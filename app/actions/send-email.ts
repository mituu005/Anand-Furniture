'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return { 
        success: false, 
        error: 'Email service is not configured. Please define RESEND_API_KEY in .env.local.' 
      };
    }

    const resend = new Resend(apiKey);

    // Send the email
    const data = await resend.emails.send({
      from: 'Anand Furnitures <onboarding@resend.dev>',
      to: 'jainajay2882@gmail.com',
      subject: `New Message: ${formData.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fafaf9;">
          <h2 style="color: #c29a5b; border-bottom: 2px solid #c29a5b; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #444;">Name:</td>
              <td style="padding: 8px 0; color: #222;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Email:</td>
              <td style="padding: 8px 0; color: #222;"><a href="mailto:${formData.email}" style="color: #c29a5b; text-decoration: none;">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Phone:</td>
              <td style="padding: 8px 0; color: #222;"><a href="tel:${formData.phone}" style="color: #c29a5b; text-decoration: none;">${formData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Subject:</td>
              <td style="padding: 8px 0; color: #222;">${formData.subject}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; background-color: #ffffff; padding: 15px; border-radius: 6px; border-left: 4px solid #c29a5b; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
            <h4 style="margin-top: 0; color: #444; margin-bottom: 10px;">Message:</h4>
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #333;">${formData.message}</p>
          </div>
          <p style="font-size: 11px; color: #888; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
            This email was sent automatically from the Anand Furnitures website contact form.
          </p>
        </div>
      `,
      replyTo: formData.email,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message || 'An unexpected error occurred.' };
  }
}
