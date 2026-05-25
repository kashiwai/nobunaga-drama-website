"use client";
import React, { useState, useEffect } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function AdminMailPage() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // セッション保持
  useEffect(() => {
    const saved = sessionStorage.getItem("nob_admin_secret");
    if (saved) { setSecret(saved); setAuthed(true); }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret.length < 6) { setAuthError("シークレットを入力してください"); return; }
    sessionStorage.setItem("nob_admin_secret", secret);
    setAuthed(true);
    setAuthError("");
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/admin/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": secret,
        },
        body: JSON.stringify({ to, subject, body }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setMessage(`送信完了 (ID: ${data.id})`);
        setTo(""); setSubject(""); setBody("");
      } else {
        setStatus("error");
        setMessage(data.error || "送信失敗");
        if (res.status === 401) { setAuthed(false); sessionStorage.removeItem("nob_admin_secret"); }
      }
    } catch {
      setStatus("error");
      setMessage("通信エラー。再度お試しください。");
    }
  };

  const inputCls = "w-full bg-ink-950 border border-stone-700 text-stone-100 placeholder-stone-600 text-sm px-4 py-3 outline-none focus:border-gold-600/60 transition-colors font-mono";

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <p className="text-gold-500 text-xs tracking-[0.4em] text-center mb-8">NOBUNAGA — ADMIN</p>
          <form onSubmit={handleAuth} className="flex flex-col gap-3">
            <input
              type="password"
              value={secret}
              onChange={e => setSecret(e.target.value)}
              placeholder="Admin Secret"
              className={inputCls}
              autoFocus
            />
            {authError && <p className="text-crimson-400 text-xs">{authError}</p>}
            <button type="submit"
              className="bg-crimson-700 hover:bg-crimson-600 text-white text-sm tracking-widest py-3 transition-colors">
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 px-4 py-12">
      <div className="max-w-2xl mx-auto">

        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-gold-500 text-xs tracking-[0.4em] mb-1">NOBUNAGA — ADMIN</p>
            <h1 className="text-stone-100 text-xl tracking-wider">メール送信</h1>
          </div>
          <div className="flex gap-3 text-xs">
            <a href="/admin/mail/registrations"
              className="text-stone-500 hover:text-stone-300 transition-colors tracking-wider">
              登録者一覧
            </a>
            <button onClick={() => { setAuthed(false); sessionStorage.removeItem("nob_admin_secret"); }}
              className="text-stone-600 hover:text-stone-400 transition-colors tracking-wider">
              ログアウト
            </button>
          </div>
        </div>

        <div className="border-t border-stone-800 mb-8" />

        {/* 差出人表示 */}
        <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-stone-900/30 border border-stone-800">
          <span className="text-stone-600 text-xs tracking-wider w-14">FROM</span>
          <span className="text-stone-400 text-sm font-mono">info@nobunaga-movie.com</span>
        </div>

        {/* 送信フォーム */}
        <form onSubmit={handleSend} className="flex flex-col gap-4">
          <div>
            <label className="text-stone-600 text-xs tracking-wider block mb-1.5">TO</label>
            <input
              type="email"
              value={to}
              onChange={e => setTo(e.target.value)}
              placeholder="送信先メールアドレス"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label className="text-stone-600 text-xs tracking-wider block mb-1.5">SUBJECT</label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="件名"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label className="text-stone-600 text-xs tracking-wider block mb-1.5">BODY</label>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="本文（改行はそのまま反映されます）"
              required
              rows={12}
              className={`${inputCls} resize-y leading-relaxed`}
            />
          </div>

          {/* プレビュー */}
          {body && (
            <div className="border border-stone-800 bg-stone-900/20 px-4 py-3">
              <p className="text-stone-600 text-xs tracking-wider mb-2">PREVIEW</p>
              <div className="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">{body}</div>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className={`py-3.5 text-sm tracking-[0.2em] font-bold transition-colors mt-2 ${
              status === "loading"
                ? "bg-stone-800 text-stone-600 cursor-not-allowed"
                : "bg-crimson-700 hover:bg-crimson-600 text-white shadow-lg shadow-crimson-900/30"
            }`}
          >
            {status === "loading" ? "送信中..." : "送信する"}
          </button>
        </form>

        {/* ステータス */}
        {message && (
          <div className={`mt-4 px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-950/50 border border-emerald-800 text-emerald-400"
              : "bg-crimson-950/50 border border-crimson-800 text-crimson-400"
          }`}>
            {message}
          </div>
        )}

        <p className="text-stone-700 text-xs text-center mt-10 tracking-wider">
          nobunaga-movie.com / admin
        </p>
      </div>
    </div>
  );
}
