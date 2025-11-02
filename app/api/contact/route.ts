import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get the form fields and sanitize
    const firstName = (body.firstName || '').trim();
    const lastName = (body.lastName || '').trim();
    const name = `${firstName} ${lastName}`.trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const message = (body.message || '').trim();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    const recipient = 'kevalai24@gmail.com';

    // Build the email content.
    let emailContent = `Name: ${name}\n`;
    emailContent += `Email: ${email}\n`;
    if (phone) {
      emailContent += `Phone: ${phone}\n`;
    }
    emailContent += `Message: ${message}\n`;

    // Build the email headers.
    let emailHeaders = `From: ${name} <${email}>\r\n`;
    emailHeaders += `Reply-To: ${email}\r\n`;
    emailHeaders += `Content-Type: text/plain; charset=UTF-8\r\n`;

    // In Next.js, you would typically use a service like:
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // - Resend
    // For now, we'll log it and return success
    // TODO: Implement actual email sending service
    
    console.log('Email would be sent to:', recipient);
    console.log('Email content:', emailContent);

    // For production, uncomment and configure one of these:
    // Option 1: Using Nodemailer (install: npm install nodemailer)
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: email,
    //   to: recipient,
    //   subject: 'Contact Form Submission',
    //   text: emailContent,
    // });

    // Set a 200 (okay) response code.
    return NextResponse.json(
      { message: 'Thank You! Your message has been sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    // Set a 500 (internal server error) response code.
    return NextResponse.json(
      { error: "Oops! Something went wrong and we couldn't send your message." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Not a POST request, set a 403 (forbidden) response code.
  return NextResponse.json(
    { error: 'There was a problem with your submission, please try again.' },
    { status: 403 }
  );
}

