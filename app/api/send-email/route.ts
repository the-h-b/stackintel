import nodemailer, { Transporter } from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  designation: string;
  reason: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: ContactFormData = await request.json();

    const { name, companyName, email, phoneNumber, designation, reason } = data;

    // Create transporter with TypeScript type safety
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true", // Boolean cast
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    // Define mail options for recipients
    const mailOptionsToRecipients = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: `pankaj@stackintel.in,gaurav@stackintel.in,salil@stackintel.in,deep.hakani@stackintel.in,abhay.desai@stackintel.in`,
      subject: "New Contact Form Submission",
      text: `You have received a new message from your website contact form.
        Name: ${name}
        Company Name: ${companyName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Designation: ${designation}
        Reason: ${reason}`,
    };

    // Define mail options for sender
    const mailOptionsToSender = {
      from: `"StackIntel Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting StackIntel",
      text: `Dear ${name},
      Thank you for reaching out to us. We have received your message and will get back to you shortly.

      Best regards,
      The StackIntel Team`,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsToRecipients),
      transporter.sendMail(mailOptionsToSender),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
