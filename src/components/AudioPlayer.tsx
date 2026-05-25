"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  artist?: string | null;
  type: "OP" | "ED";
}

function formatTime(sec: number): string {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, artist, type }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const typeColor = type === "OP" ? "text-crimson-400" : "text-gold-400";
  const typeBorder = type === "OP" ? "border-crimson-800/60" : "border-gold-600/30";
  const barColor = type === "OP" ? "bg-crimson-600" : "bg-gold-500";

  return (
    <div className={`border ${typeBorder} bg-ink-800/50 p-5 group hover:bg-ink-800/80 transition-colors`}>
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-4">
        {/* 再生ボタン */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "一時停止" : "再生"}
          className={`flex-shrink-0 w-12 h-12 border flex items-center justify-center transition-colors ${
            playing
              ? "border-gold-500/60 bg-gold-600/10 hover:bg-gold-600/20"
              : "border-stone-700 hover:border-stone-500 bg-ink-900/60 hover:bg-ink-700"
          }`}
        >
          {playing ? (
            /* 一時停止 */
            <span className="flex gap-1">
              <span className="w-[3px] h-4 bg-gold-400 block" />
              <span className="w-[3px] h-4 bg-gold-400 block" />
            </span>
          ) : (
            /* 再生 */
            <span
              className="w-0 h-0 ml-1"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "14px solid #d4af37",
              }}
            />
          )}
        </button>

        {/* 楽曲情報 + シークバー */}
        <div className="flex-1 min-w-0">
          {/* タイトル行 */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-[10px] tracking-[0.4em] uppercase font-bold ${typeColor} flex-shrink-0`}>
              {type}
            </span>
            <span className="text-white text-sm font-bold tracking-wide text-ja truncate">{title}</span>
            {artist && (
              <span className="text-stone-500 text-[11px] tracking-wider flex-shrink-0 hidden sm:inline">
                / {artist}
              </span>
            )}
          </div>

          {/* シークバー */}
          <div
            ref={progressRef}
            onClick={seek}
            className="relative h-[3px] bg-stone-800 cursor-pointer group/bar mb-1.5"
          >
            {/* バッファ表示風 */}
            <div className="absolute inset-0 bg-stone-700/40" />
            {/* 再生済み */}
            <div
              className={`absolute top-0 left-0 h-full ${barColor} transition-none`}
              style={{ width: `${progress}%` }}
            />
            {/* ノブ */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${barColor} opacity-0 group-hover/bar:opacity-100 transition-opacity`}
              style={{ left: `calc(${progress}% - 5px)` }}
            />
          </div>

          {/* 時間表示 */}
          <div className="flex justify-between text-[11px] text-stone-600 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
