import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, company, phone, message, requestTypes, services, products, contactPreference } = body

  const transporter = nodemailer.createTransport({
    host: "mail.kantiss.com",
    port: 587,
    secure: false,
    auth: {
      user: "marketing@kantiss.com",
      pass: "Marketingkantiss",
    },
    tls: {
      rejectUnauthorized: false, // This option might be needed if using a self-signed SSL certificate
    }
  })

  try {
    // Prepare the content based on the request types
    let contentDetails = '';
    if (requestTypes.includes('services')) {
      contentDetails += `<p><strong>Services:</strong> ${services.join(', ') || 'N/A'}</p>`;
    }
    if (requestTypes.includes('products')) {
      contentDetails += `<p><strong>Products:</strong> ${products.join(', ') || 'N/A'}</p>`;
    }

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "marketing@kantiss.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Request Types:</strong> ${requestTypes.join(', ')}</p>
        ${contentDetails}
        <p><strong>Preferred Contact Method:</strong> ${contactPreference}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}