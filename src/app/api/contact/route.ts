import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendViaResend(payload: ContactPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "portfolio@shivammathur.dev",
      to: [process.env.CONTACT_TO_EMAIL || "sm0181196@gmail.com"],
      subject: `[Portfolio Contact] ${payload.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #00d4ff;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${payload.name} &lt;${payload.email}&gt;</p>
          <p><strong>Subject:</strong> ${payload.subject}</p>
          <hr style="border-color: #333;" />
          <p style="white-space: pre-wrap;">${payload.message}</p>
        </div>
      `,
      reply_to: payload.email,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }
}

async function sendViaSendgrid(payload: ContactPayload): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) throw new Error("SENDGRID_API_KEY not set");

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: process.env.CONTACT_TO_EMAIL || "sm0181196@gmail.com" }],
          subject: `[Portfolio Contact] ${payload.subject}`,
        },
      ],
      from: { email: process.env.CONTACT_FROM_EMAIL || "portfolio@shivammathur.dev" },
      reply_to: { email: payload.email, name: payload.name },
      content: [
        {
          type: "text/html",
          value: `
            <div style="font-family: sans-serif; max-width: 600px;">
              <h2 style="color: #00d4ff;">New Contact Form Submission</h2>
              <p><strong>From:</strong> ${payload.name} &lt;${payload.email}&gt;</p>
              <p><strong>Subject:</strong> ${payload.subject}</p>
              <hr style="border-color: #333;" />
              <p style="white-space: pre-wrap;">${payload.message}</p>
            </div>
          `,
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SendGrid API error ${res.status}: ${body}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length." },
        { status: 400 }
      );
    }

    const payload: ContactPayload = { name, email, subject, message };
    let sent = false;

    // Try Resend first
    if (process.env.RESEND_API_KEY) {
      try {
        await sendViaResend(payload);
        sent = true;
      } catch (err) {
        console.error("[contact] Resend failed:", err);
      }
    }

    // Fall back to SendGrid
    if (!sent && process.env.SENDGRID_API_KEY) {
      try {
        await sendViaSendgrid(payload);
        sent = true;
      } catch (err) {
        console.error("[contact] SendGrid failed:", err);
      }
    }

    // Graceful fallback — log locally when no provider is configured
    if (!sent) {
      console.log("[contact] No email provider configured. Logging message locally:");
      console.log(JSON.stringify({ name, email, subject, message, timestamp: new Date().toISOString() }, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
