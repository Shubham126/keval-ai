import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedName = name.trim().replace(/[\r\n]/g, ' ');
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    // Build email content
    const emailContent = `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`;

    // TODO: Replace with your actual email sending logic
    // For now, we'll just log it. You can integrate with:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    // etc.
    console.log('Contact Form Submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    });

    // In production, you would send an email here
    // Example with a service like Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'recipient@yourdomain.com',
    //   subject: 'New Contact Form Submission',
    //   text: emailContent,
    // });

    return NextResponse.json(
      { message: 'Thank you! Your message has been sent.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Oops! Something went wrong and we couldn\'t send your message.' },
      { status: 500 }
    );
  }
}
