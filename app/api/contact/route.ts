import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create the HTML email template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background: #ffffff;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #fbbf24;
          }
          .field-label {
            font-weight: 600;
            color: #1f2937;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .field-value {
            color: #374151;
            font-size: 16px;
            word-wrap: break-word;
          }
          .message-field {
            background: #fffbeb;
            border-left-color: #f59e0b;
          }
          .footer {
            margin-top: 30px;
            padding: 20px;
            background: #f3f4f6;
            border-radius: 8px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
          }
          .priority {
            background: #fef3c7;
            border: 1px solid #fbbf24;
            border-radius: 6px;
            padding: 12px;
            margin: 20px 0;
            text-align: center;
            font-weight: 500;
            color: #92400e;
          }
          .timestamp {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Lead Alert!</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Someone is interested in your services</p>
          </div>

          <div class="priority">
            ⚡ New potential client inquiry - Respond within 24 hours for best conversion rates!
          </div>

          <div class="field">
            <div class="field-label">Contact Name</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></div>
          </div>

          ${company ? `
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${company}</div>
          </div>
          ` : ''}

          ${service ? `
          <div class="field">
            <div class="field-label">Service Interested In</div>
            <div class="field-value">${service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
          </div>
          ` : ''}

          ${budget ? `
          <div class="field">
            <div class="field-label">Project Budget</div>
            <div class="field-value">${budget.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
          </div>
          ` : ''}

          <div class="field message-field">
            <div class="field-label">Project Details</div>
            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
          </div>

          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <p>1. Respond to ${email} within 24 hours</p>
            <p>2. Schedule a discovery call to discuss the project</p>
            <p>3. Prepare a proposal based on their requirements</p>

            <div class="timestamp">
              Received on ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
        </div>
      </body>
    </html>
    `;

        // Create customer acknowledgment email template
    const customerEmailContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Golden Glow IT Solutions</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background: #ffffff;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: 600;
          }
          .content {
            color: #374151;
            font-size: 16px;
            margin-bottom: 25px;
          }
          .highlight-box {
            background: #fef3c7;
            border: 1px solid #fbbf24;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
          }
          .highlight-box h3 {
            color: #92400e;
            margin: 0 0 10px 0;
            font-size: 18px;
          }
          .next-steps {
            background: #f3f4f6;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
          }
          .next-steps h3 {
            color: #1f2937;
            margin: 0 0 15px 0;
            font-size: 18px;
          }
          .next-steps ul {
            margin: 0;
            padding-left: 20px;
            color: #4b5563;
          }
          .next-steps li {
            margin-bottom: 8px;
          }
          .contact-info {
            background: #fffbeb;
            border-left: 4px solid #fbbf24;
            padding: 20px;
            margin: 25px 0;
          }
          .footer {
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
          }
          .signature {
            margin-top: 25px;
            padding: 20px;
            background: #f9fafb;
            border-radius: 8px;
          }
          .signature strong {
            color: #1f2937;
            font-size: 16px;
          }
          .signature div {
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Thank You, ${name}!</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 16px;">Your project inquiry has been received</p>
          </div>

          <div class="content">
            <p>Hi ${name},</p>

            <p>Thank you for reaching out to <strong>Golden Glow IT Solutions</strong>! We're excited about the possibility of working together on your ${service ? service.replace('-', ' ').toLowerCase() : 'project'}.</p>

            <p>I've received your project details and will personally review your requirements to prepare a tailored response that addresses your specific needs.</p>
          </div>

          <div class="highlight-box">
            <h3>🕐 Response Timeline</h3>
            <p style="margin: 0; color: #92400e; font-weight: 500;">You'll hear back from me within 24 hours with next steps and any clarifying questions.</p>
          </div>

          <div class="next-steps">
            <h3>What happens next:</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> I'll send you a detailed response to your inquiry</li>
              <li><strong>Discovery Call:</strong> We'll schedule a call to discuss your project in detail</li>
              <li><strong>Custom Proposal:</strong> You'll receive a tailored proposal with timeline and investment</li>
              <li><strong>Project Kickoff:</strong> Once approved, we'll begin transforming your vision into reality</li>
            </ul>
          </div>

          ${service && budget ? `
          <div class="contact-info">
            <h4 style="margin: 0 0 10px 0; color: #1f2937;">Your Project Summary:</h4>
            <p style="margin: 5px 0;"><strong>Service:</strong> ${service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            <p style="margin: 5px 0;"><strong>Budget Range:</strong> ${budget.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            ${company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          ` : ''}

          <div class="content">
            <p>In the meantime, feel free to browse my <a href="https://yourwebsite.com/services" style="color: #f59e0b; text-decoration: none;">services page</a> to learn more about my development approach and expertise.</p>

            <p>If you have any urgent questions, don't hesitate to reach out directly:</p>
          </div>

          <div class="contact-info">
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> goldenglowitsolutions@gmail.com</p>
            <p style="margin: 5px 0;"><strong>📱 WhatsApp:</strong> +55 22 98125-0144</p>
          </div>

          <div class="signature">
            <strong>Best regards,</strong><br>
            <div style="margin-top: 8px;">
              <strong>Josué Barros</strong><br>
              <div>Founder & Lead Developer</div>
              <div>Golden Glow IT Solutions</div>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated confirmation. You'll receive a personal response within 24 hours.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">© ${new Date().getFullYear()} Golden Glow IT Solutions. Transforming digital visions into reality.</p>
          </div>
        </div>
      </body>
    </html>
    `;

    // Debug log
    console.log('Attempting to send emails with Resend...');
    console.log('API Key available:', !!process.env.RESEND_API_KEY);

    // Send email to business owner (your existing email)
    const businessEmail = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Using Resend default domain - change after domain verification
      to: ['goldenglowitsolutions@gmail.com'],
      subject: `🚀 New Lead: ${name} - ${service ? service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'General Inquiry'}`,
      html: htmlContent,
      replyTo: email,
    });

    // Send acknowledgment email to customer
    const customerEmail = await resend.emails.send({
      from: 'Josué Barros - Golden Glow IT Solutions <onboarding@resend.dev>',
      to: [email],
      subject: `✨ Thank you for your inquiry, ${name}! We'll be in touch within 24h`,
      html: customerEmailContent,
      replyTo: 'goldenglowitsolutions@gmail.com',
    });

    console.log('Business email sent successfully:', businessEmail);
    console.log('Customer email sent successfully:', customerEmail);

        return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      businessEmail: businessEmail,
      customerEmail: customerEmail
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
