import React from "react";

interface CharacterCardProps {
  id: string;
  name_ja: string;
  name_en: string;
  archetype: string;
  description_ja: string;
  description_en: string;
  image: string | null;
  href?: string;
}

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  nobunaga:  "linear-gradient(160deg, #1a0505 0%, #3d0c0c 60%, #0a0a0f 100%)",
  temujin:   "linear-gradient(160deg, #0a1205 0%, #1a3010 60%, #0a0a0f 100%)",
  borte:     "linear-gradient(160deg, #05101a 0%, #0c2030 60%, #0a0a0f 100%)",
  jamuka:    "linear-gradient(160deg, #100a05 0%, #2a1a0a 60%, #0a0a0f 100%)",
  mitsuhide: "linear-gradient(160deg, #050514 0%, #0d0d2a 60%, #0a0a0f 100%)",
  observer:  "linear-gradient(160deg, #0a0a0f 0%, #1a1a2a 60%, #0a0a0f 100%)",
};

export function CharacterCard({
  id, name_ja, name_en, archetype, description_ja, image, href = "/characters",
}: CharacterCardProps) {
  return (
    <a
      href={href}
      className="character-card group block border border-stone-800/80 hover:border-crimson-700 bg-ink-800 overflow-hidden transition-all duration-300"
    >
      {/* 画像 / プレースホルダー */}
      <div
        className="w-full aspect-[3/4] relative overflow-hidden"
        style={{ background: PLACEHOLDER_GRADIENTS[id] ?? PLACEHOLDER_GRADIENTS.observer }}
      >
        {image ? (
          <img
            src={image}
            alt={name_ja}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <span className="text-[120px] font-bold leading-none opacity-10 text-white select-none">
              {name_ja[0]}
            </span>
          </div>
        )}
        {/* 下グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent opacity-80" />
        {/* アーキタイプバッジ */}
        <div className="absolute top-3 left-3">
          <span className="text-crimson-400 text-[10px] tracking-[0.4em] uppercase font-bold bg-ink-900/80 px-2 py-1">
            {archetype}
          </span>
        </div>
      </div>

      {/* テキスト */}
      <div className="p-4 pt-3">
        <p className="text-gold-400 font-bold tracking-wider text-ja text-base mb-0.5 leading-tight">
          {name_ja}
        </p>
        <p className="text-stone-500 text-[11px] tracking-widest uppercase mb-2">{name_en}</p>
        <p className="text-stone-400 text-xs leading-relaxed text-ja line-clamp-2">{description_ja}</p>
      </div>
    </a>
  );
}
