"use client";
import React, { useState, useEffect, useCallback } from "react";

type Registration = { id: string; email: string; created_at: string; source: string };
type SendStatus = "idle" | "loading" | "success" | "error";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("ja-JP", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Tokyo",
  });
}

export default function RegistrationsPage() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // メール送信モーダル
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const [sendMsg, setSendMsg] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("nob_admin_secret");
    if (saved) { setSecret(saved); setAuthed(true); }
  }, []);

  const fetchData = useCallback(async (s: string) => {
    setLoading(true);
    const res = await fetch(`/api/admin/registrations`, {
      headers: { "x-admin-secret": s },
    });
    if (res.status === 401) { setAuthed(false); sessionStorage.removeItem("nob_admin_secret"); return; }
    const data = await res.json();
    setTotal(data.total ?? 0);
    setRegistrations(data.registrations ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchData(secret);
  }, [authed, secret, fetchData]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret.length < 6) { setAuthError("シークレットを入力してください"); return; }
    sessionStorage.setItem("nob_admin_secret", secret);
    setAuthed(true);
    setAuthError("");
  };

  const filtered = registrations.filter(r =>
    r.email.toLowerCase().includes(search.toLowerCase())
  );

  const allSelected = filtered.length > 0 && filtered.every(r => selected.has(r.email));
  const toggleAll = () => {
    if (allSelected) {
      const next = new Set(selected);
      filtered.forEach(r => next.delete(r.email));
      setSelected(next);
    } else {
      const next = new Set(selected);
      filtered.forEach(r => next.add(r.email));
      setSelected(next);
    }
  };
  const toggleOne = (email: string) => {
    const next = new Set(selected);
    next.has(email) ? next.delete(email) : next.add(email);
    setSelected(next);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sendStatus === "loading") return;
    setSendStatus("loading");
    setSendMsg("");

    const toList = Array.from(selected);
    const res = await fetch("/api/admin/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ to: toList, subject, body }),
    });
    const data = await res.json();
    if (data.ok) {
      setSendStatus("success");
      setSendMsg(`${data.sent}件送信完了${data.failed ? ` / ${data.failed}件失敗` : ""}`);
    } else {
      setSendStatus("error");
      setSendMsg(data.error || "送信失敗");
    }
  };

  const inputCls = "w-full bg-ink-950 border border-stone-700 text-stone-100 placeholder-stone-600 text-sm px-4 py-3 outline-none focus:border-gold-600/60 transition-colors font-mono";

  if (!authed) {
    return (
      <div className="min-h-screen bg-ink-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <p className="text-gold-500 text-xs tracking-[0.4em] text-center mb-8">NOBUNAGA — ADMIN</p>
          <form onSubmit={handleAuth} className="flex flex-col gap-3">
            <input type="password" value={secret} onChange={e => setSecret(e.target.value)}
              placeholder="Admin Secret" className={inputCls} autoFocus />
            {authError && <p className="text-crimson-400 text-xs">{authError}</p>}
            <button type="submit" className="bg-crimson-700 hover:bg-crimson-600 text-white text-sm tracking-widest py-3 transition-colors">
              ログイン
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-gold-500 text-xs tracking-[0.4em] mb-1">NOBUNAGA — ADMIN</p>
            <h1 className="text-stone-100 text-xl tracking-wider">登録者一覧</h1>
          </div>
          <div className="flex gap-4 text-xs mt-1">
            <a href="/admin/mail" className="text-stone-500 hover:text-stone-300 transition-colors tracking-wider">メール送信</a>
            <button onClick={() => { setAuthed(false); sessionStorage.removeItem("nob_admin_secret"); }}
              className="text-stone-600 hover:text-stone-400 transition-colors tracking-wider">ログアウト</button>
          </div>
        </div>

        {/* 統計カード */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "登録者数", value: total, unit: "名" },
            { label: "表示中", value: filtered.length, unit: "件" },
            { label: "選択中", value: selected.size, unit: "件" },
          ].map(({ label, value, unit }) => (
            <div key={label} className="bg-stone-900/40 border border-stone-800 px-5 py-4">
              <p className="text-stone-600 text-xs tracking-wider mb-1">{label}</p>
              <p className="text-stone-100 text-3xl font-light">
                {value}<span className="text-stone-600 text-sm ml-1">{unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* 操作バー */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="メールアドレスで絞り込み..."
            className="flex-1 bg-ink-950 border border-stone-800 text-stone-300 placeholder-stone-700 text-sm px-4 py-2.5 outline-none focus:border-stone-600 font-mono"
          />
          <button onClick={() => fetchData(secret)}
            className="px-4 py-2.5 border border-stone-700 text-stone-400 hover:text-stone-200 text-xs tracking-wider transition-colors">
            更新
          </button>
          {selected.size > 0 && (
            <button
              onClick={() => { setModal(true); setSendStatus("idle"); setSendMsg(""); }}
              className="px-5 py-2.5 bg-crimson-700 hover:bg-crimson-600 text-white text-xs tracking-wider transition-colors">
              選択した {selected.size} 件に送信
            </button>
          )}
          <a
            href={`/api/admin/emails?secret=${secret}`}
            className="px-4 py-2.5 border border-stone-700 text-stone-400 hover:text-stone-200 text-xs tracking-wider transition-colors"
          >
            CSV出力
          </a>
        </div>

        {/* テーブル */}
        <div className="border border-stone-800">
          {/* テーブルヘッダー */}
          <div className="grid grid-cols-[40px_1fr_180px_120px] text-xs text-stone-600 tracking-wider border-b border-stone-800 bg-stone-900/30">
            <div className="flex items-center justify-center py-3">
              <input type="checkbox" checked={allSelected} onChange={toggleAll}
                className="accent-crimson-600 w-3.5 h-3.5 cursor-pointer" />
            </div>
            <div className="py-3 px-4">メールアドレス</div>
            <div className="py-3 px-4">登録日時</div>
            <div className="py-3 px-4">ソース</div>
          </div>

          {loading ? (
            <div className="text-center text-stone-600 py-12 text-sm tracking-wider">読み込み中...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center text-stone-700 py-12 text-sm tracking-wider">登録者がいません</div>
          ) : (
            filtered.map((r, i) => (
              <div
                key={r.id}
                onClick={() => toggleOne(r.email)}
                className={`grid grid-cols-[40px_1fr_180px_120px] text-sm cursor-pointer transition-colors
                  ${i < filtered.length - 1 ? "border-b border-stone-800/60" : ""}
                  ${selected.has(r.email) ? "bg-crimson-950/30" : "hover:bg-stone-900/30"}`}
              >
                <div className="flex items-center justify-center py-3.5">
                  <input type="checkbox" checked={selected.has(r.email)}
                    onChange={() => toggleOne(r.email)}
                    onClick={e => e.stopPropagation()}
                    className="accent-crimson-600 w-3.5 h-3.5 cursor-pointer" />
                </div>
                <div className="py-3.5 px-4 font-mono text-stone-300 text-xs">{r.email}</div>
                <div className="py-3.5 px-4 text-stone-600 text-xs">{formatDate(r.created_at)}</div>
                <div className="py-3.5 px-4 text-stone-700 text-xs truncate">{r.source}</div>
              </div>
            ))
          )}
        </div>

        <p className="text-stone-800 text-xs text-center mt-8 tracking-wider">nobunaga-movie.com / admin</p>
      </div>

      {/* 送信モーダル */}
      {modal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-xl bg-ink-950 border border-stone-700">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800">
              <h2 className="text-stone-200 text-sm tracking-wider">
                {selected.size}件に一括送信
              </h2>
              <button onClick={() => setModal(false)} className="text-stone-600 hover:text-stone-300 text-lg">✕</button>
            </div>

            <form onSubmit={handleSend} className="p-6 flex flex-col gap-4">
              <div className="px-4 py-2 bg-stone-900/50 border border-stone-800">
                <p className="text-stone-600 text-xs mb-1 tracking-wider">FROM</p>
                <p className="text-stone-400 text-sm font-mono">info@nobunaga-movie.com</p>
              </div>
              <div className="px-4 py-2 bg-stone-900/50 border border-stone-800">
                <p className="text-stone-600 text-xs mb-1 tracking-wider">TO</p>
                <p className="text-stone-500 text-xs font-mono line-clamp-2">
                  {Array.from(selected).slice(0, 3).join(", ")}{selected.size > 3 ? ` …他${selected.size - 3}件` : ""}
                </p>
              </div>
              <input type="text" value={subject} onChange={e => setSubject(e.target.value)}
                placeholder="件名" required className={inputCls} />
              <textarea value={body} onChange={e => setBody(e.target.value)}
                placeholder="本文" required rows={8}
                className={`${inputCls} resize-y leading-relaxed`} />

              <button type="submit" disabled={sendStatus === "loading"}
                className={`py-3 text-sm tracking-widest font-bold transition-colors ${
                  sendStatus === "loading"
                    ? "bg-stone-800 text-stone-600 cursor-not-allowed"
                    : "bg-crimson-700 hover:bg-crimson-600 text-white"
                }`}>
                {sendStatus === "loading" ? `送信中...` : `${selected.size}件に送信`}
              </button>

              {sendMsg && (
                <div className={`px-4 py-3 text-sm ${
                  sendStatus === "success"
                    ? "bg-emerald-950/50 border border-emerald-800 text-emerald-400"
                    : "bg-crimson-950/50 border border-crimson-800 text-crimson-400"
                }`}>
                  {sendMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
