import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — ページが見つかりません | 第六天魔王、蒼き狼へ",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="text-center max-w-lg">
        {/* 装飾 */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-crimson-700" />
          <span className="text-crimson-600 text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-crimson-700" />
        </div>

        {/* 404 番号 */}
        <p className="text-stone-800 text-[8rem] font-bold leading-none mb-2 select-none">
          404
        </p>

        {/* メッセージ */}
        <h1 className="text-3xl md:text-4xl font-bold text-ja mb-3 text-stone-300 tracking-widest">
          炎は消えた。
        </h1>
        <p className="text-stone-500 text-ja text-lg mb-8 tracking-wide">
          このページは存在しない。
        </p>
        <p className="text-stone-600 text-sm italic mb-10">
          The flames have faded. This page does not exist.
        </p>

        {/* 区切り */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-700" />
          <span className="text-stone-700 text-xs">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-700" />
        </div>

        {/* CTA */}
        <a
          href="/"
          className="inline-block px-10 py-3 bg-crimson-700 hover:bg-crimson-600 text-white font-bold tracking-[0.2em] text-sm transition-colors border border-crimson-600 shadow-lg shadow-crimson-900/40"
        >
          ホームへ戻る
        </a>

        <div className="mt-6 flex justify-center gap-4 text-xs text-stone-600">
          <a href="/episodes/ep01" className="hover:text-stone-400 transition-colors text-ja">
            第1話
          </a>
          <span>·</span>
          <a href="/characters" className="hover:text-stone-400 transition-colors text-ja">
            キャラクター
          </a>
          <span>·</span>
          <a href="/world" className="hover:text-stone-400 transition-colors text-ja">
            世界観
          </a>
        </div>
      </div>
    </div>
  );
}
