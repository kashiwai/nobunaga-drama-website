import React from "react";

interface TimelineItem {
  year: string;
  fact: string;
  fiction: string;
  highlight: boolean;
}

export function TimelineTable({ items }: { items: TimelineItem[] }) {
  return (
    <div className="w-full">
      {/* ヘッダー */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 mb-2">
        <div className="text-right pr-5">
          <span className="text-stone-500 text-[11px] tracking-[0.4em] uppercase">史実</span>
        </div>
        <div className="w-px" />
        <div className="pl-5">
          <span className="text-crimson-500 text-[11px] tracking-[0.4em] uppercase">本作</span>
        </div>
      </div>

      {/* 仕切り線 */}
      <div className="grid grid-cols-[1fr_auto_1fr]">
        <div className="border-b border-stone-800" />
        <div className="w-px" />
        <div className="border-b border-stone-800" />
      </div>

      {items.map((item, i) => (
        <div key={i} className="grid grid-cols-[1fr_auto_1fr] group">
          {/* 左: 史実 */}
          <div className={`text-right pr-6 py-5 ${item.highlight ? "border-r-0" : ""}`}>
            <p className={`text-xs mb-1 tracking-widest font-mono ${item.highlight ? "text-gold-500" : "text-stone-500"}`}>
              {item.year}
            </p>
            <p className={`text-sm text-ja leading-relaxed ${item.highlight ? "text-stone-200 font-bold" : "text-stone-400"}`}>
              {item.fact}
            </p>
          </div>

          {/* 中央: 縦線 + ノード */}
          <div className="flex flex-col items-center w-px relative">
            <div className="w-px flex-1 bg-gradient-to-b from-stone-800 via-gold-600/30 to-stone-800" />
            <div className={`w-2 h-2 border flex-shrink-0 my-1 ${item.highlight ? "border-crimson-500 bg-crimson-700" : "border-stone-600 bg-ink-900"}`} />
            <div className="w-px flex-1 bg-gradient-to-b from-stone-800 via-gold-600/30 to-stone-800" />
          </div>

          {/* 右: 本作 */}
          <div className="pl-6 py-5">
            <p className={`text-sm text-ja leading-relaxed ${item.highlight ? "text-crimson-400 font-bold" : "text-stone-400"}`}>
              {item.fiction}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
