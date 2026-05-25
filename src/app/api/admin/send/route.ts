import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { to, subject, body } = await req.json().catch(() => ({}));

  if (!to || !subject || !body) {
    return NextResponse.json({ error: "to / subject / body は必須です" }, { status: 400 });
  }

  const recipients: string[] = Array.isArray(to) ? to : [to];

  // 複数宛先は1件ずつ送信（Resend無料プランはBCC一括不可）
  if (recipients.length === 1) {
    const { data, error } = await resend.emails.send({
      from: "NOBUNAGA <info@nobunaga-movie.com>",
      to: recipients,
      subject,
      replyTo: "info@nobunaga-movie.com",
      html: body.replace(/\n/g, "<br>"),
      text: body,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, sent: 1, id: data?.id });
  }

  // 一括送信: バッチ処理（10件ずつ）
  let sent = 0;
  const errors: string[] = [];
  const BATCH = 10;

  for (let i = 0; i < recipients.length; i += BATCH) {
    const batch = recipients.slice(i, i + BATCH);
    const results = await Promise.allSettled(
      batch.map(email =>
        resend.emails.send({
          from: "NOBUNAGA <info@nobunaga-movie.com>",
          to: [email],
          subject,
          replyTo: "info@nobunaga-movie.com",
          html: body.replace(/\n/g, "<br>"),
          text: body,
        })
      )
    );
    results.forEach((r, idx) => {
      if (r.status === "fulfilled" && !r.value.error) sent++;
      else errors.push(batch[idx]);
    });
  }

  return NextResponse.json({ ok: true, sent, failed: errors.length, failedEmails: errors });
}
