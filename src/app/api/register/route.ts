import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
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
    // 重複登録
    if (error.code === "23505") {
      return NextResponse.json({ already: true, message: "このメールアドレスはすでに登録済みです。" }, { status: 200 });
    }
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "登録に失敗しました。しばらくしてから再度お試しください。" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "登録が完了しました！配信開始時にご連絡します。" }, { status: 200 });
}
