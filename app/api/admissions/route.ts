import { NextResponse } from "next/server";

/**
 * Admissions inquiry endpoint.
 *
 * EMAIL SETUP (one-time, ~5 minutes):
 *   1. Create a free account at https://resend.com
 *   2. In the Resend dashboard, create an API key (starts with "re_")
 *   3. In the project root, create a file named `.env.local` containing:
 *        RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
 *        ADMISSIONS_EMAIL=your-inbox@example.com
 *   4. Restart the dev server (or redeploy on Vercel with the same two
 *      values added under Project Settings → Environment Variables).
 *
 * Until the key is present, submissions are logged to the server console
 * so the form is fully testable without any account.
 */

interface Inquiry {
  parentName: string;
  phone: string;
  email?: string;
  childName: string;
  applyingClass: string;
  previousSchool?: string;
  message?: string;
}

function isValid(body: unknown): body is Inquiry {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.parentName === "string" && b.parentName.trim().length > 0 &&
    typeof b.phone === "string" && b.phone.trim().length > 0 &&
    typeof b.childName === "string" && b.childName.trim().length > 0 &&
    typeof b.applyingClass === "string" && b.applyingClass.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { error: "Parent name, phone, child name, and class are required." },
      { status: 400 },
    );
  }

  const inquiry = body;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ADMISSIONS_EMAIL;

  if (!apiKey || !to) {
    console.log("[admissions inquiry — RESEND_API_KEY not set, logging only]", inquiry);
    return NextResponse.json({ ok: true, delivered: "console" });
  }

  const lines = [
    `Parent/Guardian: ${inquiry.parentName}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email || "—"}`,
    `Child: ${inquiry.childName}`,
    `Class applying for: ${inquiry.applyingClass}`,
    `Previous school: ${inquiry.previousSchool || "—"}`,
    "",
    inquiry.message || "",
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "PIPS Kassesay Website <onboarding@resend.dev>",
      to: [to],
      reply_to: inquiry.email || undefined,
      subject: `Admissions inquiry — ${inquiry.childName} (${inquiry.applyingClass})`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[admissions inquiry — Resend error]", res.status, detail);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: "email" });
}
