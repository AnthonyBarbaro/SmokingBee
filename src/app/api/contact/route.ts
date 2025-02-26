// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * Expects JSON: { name: string, email: string, message: string }
 */
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validate data (simple check)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 2. Create a Nodemailer transporter
    //    Replace these with your actual SMTP settings or service (e.g. Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: false, // or true if using TLS
    });

    // 3. Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // shows who the email is from
      to: "info@thesmokingbee.com", // your store's email
      subject: "Contact Form Submission - The Smoking Bee",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      // You could also do HTML if you prefer
      // html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>${message}</p>`,
    });

    // 4. Respond with success
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
