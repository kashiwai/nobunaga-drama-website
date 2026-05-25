"use client";
import React, { useRef, useState } from "react";

interface VideoEmbedProps {
  youtubeId?: string | null;
  localSrc?: string | null;
  posterSrc?: string | null;
  comingSoonText?: string;
}

export function VideoEmbed({
  youtubeId,
  localSrc,
  posterSrc,
  comingSoonText = "OFFICIAL TRAILER / COMING SOON",
}: VideoEmbedProps) {
  const [ytPlaying, setYtPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ── YouTube優先 ──────────────────────────────────────
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    const thumbUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    return (
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        {!ytPlaying ? (
          <button
            onClick={() => setYtPlaying(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label="予告編を再生"
          >
            <img src={thumbUrl} alt="予告編" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.65)_100%)]" />
            <PlayButton />
          </button>
        ) : (
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  // ── ローカルmp4 ──────────────────────────────────────
  if (localSrc) {
    return (
      <div className="relative w-full aspect-video bg-black overflow-hidden group">
        <video
          ref={videoRef}
          src={localSrc}
          poster={posterSrc ?? undefined}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* ビネット */}
        <div className="absolute inset-0 pointer-events-none border border-stone-800/50" />
      </div>
    );
  }

  // ── Coming Soon プレースホルダー ──────────────────────
  return (
    <div className="relative w-full aspect-video bg-ink-900 border border-crimson-900/40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(185,28,28,0.08)_0%,_transparent_70%)]" />
      <div className="text-center relative z-10">
        <div className="w-16 h-16 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
          <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-gold-500/50 ml-1" />
        </div>
        <p className="text-stone-600 text-xs tracking-[0.5em] uppercase">{comingSoonText}</p>
      </div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_4px)] pointer-events-none" />
    </div>
  );
}

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 border border-gold-500/70 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
        <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[24px] border-transparent border-l-gold-400 ml-2" />
      </div>
    </div>
  );
}
