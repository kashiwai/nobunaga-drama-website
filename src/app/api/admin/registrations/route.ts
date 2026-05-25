import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function auth(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret")
    ?? req.headers.get("x-admin-secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data, error, count } = await supabase
    .from("email_registrations")
    .select("id, email, created_at, source", { count: "exact" })
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ total: count ?? 0, registrations: data ?? [] });
}
