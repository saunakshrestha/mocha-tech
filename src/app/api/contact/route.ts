import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Minimal "backend-like" API endpoint.
 *
 * 80/20 note:
 * Most full-stack roles expect you to handle at least:
 * - basic validation
 * - returning structured JSON errors
 * - wiring a frontend form to an API
 *
 * Production refactor suggestions:
 * - rate limiting, spam protection (Turnstile), and persistence (Prisma)
 * - transactional email via a provider (SendGrid/Resend) instead of a log
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      projectDetails?: string;
      message?: string;
    };

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // Placeholder "send": for now we log. Swap to EmailJS/Resend later.
    console.log("[contact]", {
      name: body.name,
      email: body.email,
      projectDetails: body.projectDetails ?? "",
      message: body.message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }
}

