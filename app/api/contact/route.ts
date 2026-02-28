import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: 'o.ifeoluwah@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; border-radius: 16px; border: 2px solid #2d2520; overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1a1512 0%, #0d0d0d 100%); padding: 30px; text-align: center; border-bottom: 2px solid #8b6f47;">
                        <h1 style="margin: 0; color: #d4a574; font-size: 28px; font-weight: bold;">
                          💌 New Message Received
                        </h1>
                        <p style="margin: 10px 0 0 0; color: #a0826d; font-size: 14px;">
                          Someone wants to connect with you!
                        </p>
                      </td>
                    </tr>
                    
                    <!-- From Info -->
                    <tr>
                      <td style="padding: 30px;">
                        <div style="background-color: #1a1512; border-left: 4px solid #d4a574; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 8px 0;">
                                <span style="color: #8b6f47; font-weight: bold; font-size: 14px;">FROM:</span>
                                <span style="color: #d4a574; font-size: 16px; margin-left: 10px; font-weight: 600;">${name}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0;">
                                <span style="color: #8b6f47; font-weight: bold; font-size: 14px;">EMAIL:</span>
                                <a href="mailto:${email}" style="color: #d4a574; font-size: 16px; margin-left: 10px; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                          </table>
                        </div>
                        
                        <!-- Message Content -->
                        <div style="background-color: #1a1512; padding: 25px; border-radius: 8px; border: 1px solid #2d2520;">
                          <h3 style="margin: 0 0 15px 0; color: #d4a574; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                            📝 Message
                          </h3>
                          <p style="margin: 0; color: #a0826d; line-height: 1.8; font-size: 15px; white-space: pre-wrap;">${message}</p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #0a0a0a; padding: 25px; text-align: center; border-top: 2px solid #2d2520;">
                        <p style="margin: 0; color: #6b5d52; font-size: 13px;">
                          Sent from your portfolio contact form
                        </p>
                        <p style="margin: 8px 0 0 0; color: #6b5d52; font-size: 12px;">
                          © 2026 Ifeoluwa Oluwafemi | Backend Engineer
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
