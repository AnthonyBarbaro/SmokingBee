import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * Expects JSON: { name: string, email: string, message: string }
 */
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validate user input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 2. Create Nodemailer transporter (Use SMTP settings from .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER, // SMTP login (antiprobloo@gmail.com)
        pass: process.env.SMTP_PASS, // SMTP password
      },
      secure: false, // Set to true if using port 465 (SSL)
      tls: {
        rejectUnauthorized: false, // Prevents issues with self-signed certificates
      },
    });

    // 3. Send the email (User's email goes in replyTo)
    const mailOptions = {
      from: `"The Smoking Bee Contact Form" <antiprobloo@gmail.com>`, // Always send from antiprobloo@gmail.com
      replyTo: email, // User's email, so you can reply to them
      to: "info@thesmokingbee.com", // Your business email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      // Optional: Use HTML format
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
