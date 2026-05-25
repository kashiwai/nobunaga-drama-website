"use client";
import React, { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "already" | "error";

interface RegistrationFormProps {
  compact?: boolean;
}

export function RegistrationForm({ compact = false }: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    const trimmed = email.trim();
    if (!trimmed) {
      inputRef.current?.focus();
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setMessage(data.message);
      } else if (data.already) {
        setStatus("already");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error ?? "登録に失敗しました");
      }
    } catch {
      setStatus("error");
      setMessage("通信エラーが発生しました。再度お試しください。");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center ${compact ? "py-2" : "py-6"}`}>
        <div className="text-gold-400 text-2xl mb-3">✦</div>
        <p className="text-gold-400 font-bold tracking-wider text-ja text-sm md:text-base mb-1">
          登録が完了しました
        </p>
        <p className="text-stone-400 text-xs tracking-wide text-ja">
          配信開始時に、ご登録のメールアドレスへ視聴URLをお送りします。
        </p>
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className={`text-center ${compact ? "py-2" : "py-6"}`}>
        <p className="text-stone-400 text-sm text-ja tracking-wide">{message}</p>
        <p className="text-stone-600 text-xs mt-1">配信開始時にご連絡します。</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className={`flex flex-col sm:flex-row gap-2 ${compact ? "" : "max-w-lg mx-auto"}`}>
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className={`
            flex-1 bg-ink-900 border text-stone-100 placeholder-stone-700
            text-sm tracking-wider px-4 outline-none
            transition-colors font-mono
            ${status === "error"
              ? "border-crimson-600 focus:border-crimson-500"
              : "border-stone-700 focus:border-gold-600/70"}
            ${compact ? "py-2.5" : "py-3.5"}
          `}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`
            flex-shrink-0 font-bold tracking-[0.2em] text-sm border transition-colors
            ${compact ? "px-6 py-2.5" : "px-8 py-3.5"}
            ${status === "loading"
              ? "border-stone-700 text-stone-600 cursor-not-allowed"
              : "bg-crimson-700 hover:bg-crimson-600 border-crimson-600 text-white shadow-lg shadow-crimson-900/30"}
          `}
        >
          {status === "loading" ? "登録中..." : "配信登録"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-crimson-400 text-xs mt-2 tracking-wide text-center sm:text-left">
          {message}
        </p>
      )}

      {!compact && (
        <p className="text-stone-700 text-[11px] mt-3 text-center tracking-wide">
          メールアドレスのみ取得。スパム送信・第三者提供は一切行いません。
        </p>
      )}
    </form>
  );
}
