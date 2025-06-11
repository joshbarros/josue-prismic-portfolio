import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { translations, type Language } from '@/translations';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  language?: Language; // Add language preference
}

// Helper function to get translation with fallback
function getTranslation(lang: Language, key: string, replacements: Record<string, string> = {}): string {
  const keys = key.split('.');
  let value: any = translations[lang] || translations.en;

  for (const k of keys) {
    value = value?.[k];
  }

  if (typeof value !== 'string') {
    // Fallback to English if translation not found
    value = translations.en;
    for (const k of keys) {
      value = value?.[k];
    }
  }

  if (typeof value === 'string') {
    // Replace placeholders
    for (const [placeholder, replacement] of Object.entries(replacements)) {
      value = value.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
    }
  }

  return value || key;
}

// Helper function to format service name
function formatServiceName(service: string, lang: Language): string {
  if (!service) return '';

  const serviceMapping: Record<string, Record<Language, string>> = {
    'website-development': {
      en: 'Website Development',
      pt: 'Desenvolvimento de Website',
      es: 'Desarrollo de Sitio Web'
    },
    'ecommerce-development': {
      en: 'Ecommerce Development',
      pt: 'Desenvolvimento de Ecommerce',
      es: 'Desarrollo de Ecommerce'
    },
    'mobile-development': {
      en: 'Mobile Development',
      pt: 'Desenvolvimento Mobile',
      es: 'Desarrollo Móvil'
    },
    'custom-solutions': {
      en: 'Custom Solutions',
      pt: 'Soluções Personalizadas',
      es: 'Soluciones Personalizadas'
    },
    'other': {
      en: 'Other Services',
      pt: 'Outros Serviços',
      es: 'Otros Servicios'
    }
  };

  return serviceMapping[service]?.[lang] || service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Helper function to format budget range
function formatBudgetRange(budget: string, lang: Language): string {
  if (!budget) return '';

  const budgetMapping: Record<string, Record<Language, string>> = {
    'under-5k': {
      en: 'Under $5,000',
      pt: 'Menos de R$25.000',
      es: 'Menos de $5,000'
    },
    '5k-10k': {
      en: '$5,000 - $10,000',
      pt: 'R$25.000 - R$50.000',
      es: '$5,000 - $10,000'
    },
    '10k-25k': {
      en: '$10,000 - $25,000',
      pt: 'R$50.000 - R$125.000',
      es: '$10,000 - $25,000'
    },
    '25k-50k': {
      en: '$25,000 - $50,000',
      pt: 'R$125.000 - R$250.000',
      es: '$25,000 - $50,000'
    },
    '50k-plus': {
      en: '$50,000+',
      pt: 'R$250.000+',
      es: '$50,000+'
    }
  };

  return budgetMapping[budget]?.[lang] || budget.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Generate localized date string
function getLocalizedDate(lang: Language): string {
  const now = new Date();

  const localeMap: Record<Language, string> = {
    en: 'en-US',
    pt: 'pt-BR',
    es: 'es-ES'
  };

  return now.toLocaleString(localeMap[lang], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, service, budget, message, language = 'en' } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Format service and budget names
    const formattedService = formatServiceName(service || '', language);
    const formattedBudget = formatBudgetRange(budget || '', language);
    const localizedDate = getLocalizedDate(language);

    // Create business notification email (always in Portuguese for you)
    const businessHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${getTranslation('pt', 'email.business.title')}</title>
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
            <h1>${getTranslation('pt', 'email.business.title')}</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${getTranslation('pt', 'email.business.subtitle')}</p>
          </div>

          <div class="priority">
            ${getTranslation('pt', 'email.business.priority')}
          </div>

          <div class="field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.contactName')}</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.emailAddress')}</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></div>
          </div>

          ${company ? `
          <div class="field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.company')}</div>
            <div class="field-value">${company}</div>
          </div>
          ` : ''}

          ${service ? `
          <div class="field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.serviceInterested')}</div>
            <div class="field-value">${formattedService}</div>
          </div>
          ` : ''}

          ${budget ? `
          <div class="field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.projectBudget')}</div>
            <div class="field-value">${formattedBudget}</div>
          </div>
          ` : ''}

          <div class="field message-field">
            <div class="field-label">${getTranslation('pt', 'email.business.labels.projectDetails')}</div>
            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
          </div>

          <div class="footer">
            <p><strong>${getTranslation('pt', 'email.business.footer.nextSteps')}</strong></p>
            <p>${getTranslation('pt', 'email.business.footer.step1', { email })}</p>
            <p>${getTranslation('pt', 'email.business.footer.step2')}</p>
            <p>${getTranslation('pt', 'email.business.footer.step3')}</p>

            <div class="timestamp">
              ${getTranslation('pt', 'email.business.footer.timestamp', { date: localizedDate })}
            </div>
          </div>
        </div>
      </body>
    </html>
    `;

    // Create customer acknowledgment email in their preferred language
    const customerHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${getTranslation(language, 'email.customer.title', { name })}</title>
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
            <h1>${getTranslation(language, 'email.customer.title', { name })}</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 16px;">${getTranslation(language, 'email.customer.subtitle')}</p>
          </div>

          <div class="content">
            <p>${getTranslation(language, 'email.customer.greeting', { name })}</p>

            <p>${getTranslation(language, 'email.customer.intro', {
              service: formattedService ? formattedService.toLowerCase() : getTranslation(language, 'contactPage.form.fields.service.options.other')
            })}</p>

            <p>${getTranslation(language, 'email.customer.review')}</p>
          </div>

          <div class="highlight-box">
            <h3>${getTranslation(language, 'email.customer.responseTitle')}</h3>
            <p style="margin: 0; color: #92400e; font-weight: 500;">${getTranslation(language, 'email.customer.responseText')}</p>
          </div>

          <div class="next-steps">
            <h3>${getTranslation(language, 'email.customer.nextSteps.title')}</h3>
            <ul>
              <li>${getTranslation(language, 'email.customer.nextSteps.step1')}</li>
              <li>${getTranslation(language, 'email.customer.nextSteps.step2')}</li>
              <li>${getTranslation(language, 'email.customer.nextSteps.step3')}</li>
              <li>${getTranslation(language, 'email.customer.nextSteps.step4')}</li>
            </ul>
          </div>

          ${service && budget ? `
          <div class="contact-info">
            <h4 style="margin: 0 0 10px 0; color: #1f2937;">${getTranslation(language, 'email.customer.projectSummary')}</h4>
            <p style="margin: 5px 0;"><strong>${getTranslation(language, 'email.customer.projectLabels.service')}</strong> ${formattedService}</p>
            <p style="margin: 5px 0;"><strong>${getTranslation(language, 'email.customer.projectLabels.budget')}</strong> ${formattedBudget}</p>
            ${company ? `<p style="margin: 5px 0;"><strong>${getTranslation(language, 'email.customer.projectLabels.company')}</strong> ${company}</p>` : ''}
          </div>
          ` : ''}

          <div class="content">
            <p>${getTranslation(language, 'email.customer.browse')}</p>

            <p>${getTranslation(language, 'email.customer.urgent')}</p>
          </div>

          <div class="contact-info">
            <p style="margin: 5px 0;">${getTranslation(language, 'email.customer.contact.email')}</p>
            <p style="margin: 5px 0;">${getTranslation(language, 'email.customer.contact.whatsapp')}</p>
          </div>

          <div class="signature">
            <strong>${getTranslation(language, 'email.customer.signature.regards')}</strong><br>
            <div style="margin-top: 8px;">
              <strong>${getTranslation(language, 'email.customer.signature.name')}</strong><br>
              <div>${getTranslation(language, 'email.customer.signature.title1')}</div>
              <div>${getTranslation(language, 'email.customer.signature.title2')}</div>
            </div>
          </div>

          <div class="footer">
            <p>${getTranslation(language, 'email.customer.footer.automation')}</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">${getTranslation(language, 'email.customer.footer.copyright', { year: new Date().getFullYear().toString() })}</p>
          </div>
        </div>
      </body>
    </html>
    `;

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at goldenglowitsolutions@gmail.com' },
        { status: 503 }
      );
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Debug log
    console.log('Attempting to send emails with Resend...');
    console.log('API Key available:', !!process.env.RESEND_API_KEY);
    console.log('Customer language:', language);

    // Send email to business owner (in Portuguese)
    const businessEmailSubject = getTranslation('pt', 'email.business.subject', {
      name,
      service: formattedService || 'Consulta Geral'
    });

    const businessEmail = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['goldenglowitsolutions@gmail.com'],
      subject: businessEmailSubject,
      html: businessHtmlContent,
      replyTo: email,
    });

    // Send acknowledgment email to customer (in their language)
    const customerEmailSubject = getTranslation(language, 'email.customer.subject', { name });

    const customerEmail = await resend.emails.send({
      from: 'Josué Barros - Golden Glow IT Solutions <onboarding@resend.dev>',
      to: [email],
      subject: customerEmailSubject,
      html: customerHtmlContent,
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
