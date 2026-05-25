import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { to, subject, body, replyTo } = await req.json().catch(() => ({}));

  if (!to || !subject || !body) {
    return NextResponse.json({ error: "to / subject / body は必須です" }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "NOBUNAGA <info@nobunaga-movie.com>",
    to: Array.isArray(to) ? to : [to],
    subject,
    replyTo: replyTo || "info@nobunaga-movie.com",
    html: body.replace(/\n/g, "<br>"),
    text: body,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
