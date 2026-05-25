-- Supabase SQL Editor で実行してください
-- https://supabase.com → プロジェクト → SQL Editor

CREATE TABLE IF NOT EXISTS email_registrations (
  id         uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  email      text        UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source     text        DEFAULT 'website'
);

-- インデックス
CREATE INDEX IF NOT EXISTS idx_email_registrations_email ON email_registrations(email);
CREATE INDEX IF NOT EXISTS idx_email_registrations_created_at ON email_registrations(created_at DESC);

-- RLS: サービスロールキーのみ書き込み可、一般ユーザーは不可
ALTER TABLE email_registrations ENABLE ROW LEVEL SECURITY;

-- サービスロールはフルアクセス（APIから使用）
CREATE POLICY "service_role_all" ON email_registrations
  FOR ALL USING (auth.role() = 'service_role');
