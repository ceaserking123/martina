import { NextResponse } from "next/server";

// Wires up to Resend (https://resend.com) if RESEND_API_KEY and CONTACT_TO_EMAIL
// are set as environment variables. Until then it honestly reports "unconfigured"
// rather than pretending the message was sent — see README.md for setup steps.
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: "Contact form not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `New message from ${name} via the portfolio site`,
      text: `${message}\n\n— ${name} (${email})`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
