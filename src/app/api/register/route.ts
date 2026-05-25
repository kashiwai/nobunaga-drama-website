import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendConfirmationEmail(email: string) {
  await resend.emails.send({
    from: "NOBUNAGA <info@nobunaga-movie.com>",
    to: email,
    subject: "【第六天魔王、蒼き狼へ】配信登録が完了しました",
    html: `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a080f;font-family:'Hiragino Mincho ProN',serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="color:#b8860b;font-size:12px;letter-spacing:0.4em;margin:0 0 16px;">AI 実写ドラマシリーズ</p>
      <h1 style="color:#fff;font-size:22px;font-weight:500;letter-spacing:0.1em;margin:0;line-height:1.6;">
        第六天魔王、蒼き狼へ
      </h1>
      <p style="color:#888;font-size:11px;letter-spacing:0.2em;margin:6px 0 0;">NOBUNAGA: The Shadow of Khan</p>
    </div>

    <div style="border-top:1px solid #2a2020;border-bottom:1px solid #2a2020;padding:28px 0;margin-bottom:28px;">
      <p style="color:#d4d0c8;font-size:15px;line-height:1.9;margin:0;">
        配信事前登録が完了しました。<br>
        2025年6月末の配信開始時に、本メールアドレスへ視聴URLをお送りします。
      </p>
    </div>

    <div style="background:#120e18;border:1px solid #1e1830;padding:20px 24px;margin-bottom:28px;">
      <p style="color:#b8860b;font-size:11px;letter-spacing:0.3em;margin:0 0 10px;">全24話 SF歴史ミステリードラマ</p>
      <p style="color:#a09890;font-size:13px;line-height:1.8;margin:0;">
        本能寺で炎に消えた織田信長が、謎の転移によってモンゴル高原へ。<br>
        若きテムジンとの邂逅が、歴史を塗り替える。
      </p>
    </div>

    <p style="color:#555;font-size:11px;text-align:center;line-height:1.8;margin:0;">
      このメールに心当たりのない場合は破棄してください。<br>
      制作：medpiano ／ <a href="https://nobunaga-movie.com" style="color:#b8860b;">nobunaga-movie.com</a>
    </p>
  </div>
</body>
</html>`,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "有効なメールアドレスを入力してください" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error("Supabase env vars not set");
    return NextResponse.json({ error: "サーバー設定エラー。管理者にお問い合わせください。" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { error } = await supabase
    .from("email_registrations")
    .insert({ email, source: "website_preregister" });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ already: true, message: "このメールアドレスはすでに登録済みです。" }, { status: 200 });
    }
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "登録に失敗しました。しばらくしてから再度お試しください。" }, { status: 500 });
  }

  // 確認メール送信（失敗しても登録自体は成功扱い）
  sendConfirmationEmail(email).catch((e) => console.error("Resend error:", e));

  return NextResponse.json({ ok: true, message: "登録が完了しました！配信開始時にご連絡します。" }, { status: 200 });
}
