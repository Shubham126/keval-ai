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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedName = name.trim().replace(/[\r\n]/g, ' ');
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim();

    // TODO: Replace with your actual email sending logic
    // For now, we'll just log and return success
    // You can integrate with services like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    console.log('Contact form submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    });

    // Example: If you want to use the mail() function from a server action,
    // you would need to set up email configuration in your environment

    // For production, you should:
    // 1. Set up an email service (Resend, SendGrid, etc.)
    // 2. Add API keys to environment variables
    // 3. Implement actual email sending here

    // Simulate successful submission
    return NextResponse.json(
      {
        message: 'Thank you! Your message has been sent.',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'Oops! Something went wrong and we couldn\'t send your message.',
      },
      { status: 500 }
    );
  }
}
