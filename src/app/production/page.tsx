import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI制作 | 第六天魔王、蒼き狼へ",
  description:
    "Seedance2・Topview・Fish Audio・GPT-image-2・Higgsfield MCPによるAI実写ドラマ制作パイプラインの全貌。",
};

const TOOLS = [
  {
    name: "Seedance2",
    role: "キャラクター一貫性のある動画生成",
    detail:
      "同一キャラクターを複数カットにわたって一貫したビジュアルで生成できるSeedance2を主軸に使用。信長・テムジン等の主要キャラクターのLoRAプロンプトを最適化し、表情・衣装・照明の一貫性を維持する。",
    tag: "VIDEO",
    color: "crimson",
  },
  {
    name: "Topview",
    role: "風景・VFX・確立ショット",
    detail:
      "俯瞰ショット、パノラマ風景、スケールの大きなVFXシーンにはTopviewを使用。本能寺の炎上シーン、モンゴル草原の広大な風景など、映画的なロングショットを担当する。",
    tag: "LANDSCAPE",
    color: "gold",
  },
  {
    name: "Fish Audio",
    role: "AI音声合成",
    detail:
      "各キャラクターに合わせたAI音声を合成。信長の低くゆっくりとした権威ある声、テムジンの若く命令的な声など、キャラクターの個性を音声で表現。日本語・モンゴル語の両方に対応。",
    tag: "AUDIO",
    color: "stone",
  },
  {
    name: "GPT-image-2",
    role: "キャラクター参照画像生成",
    detail:
      "動画生成の前段階として、各キャラクターの参照画像を生成。衣装・顔・体型の一貫した参照セットを作成し、Seedance2のLoRA学習データとして活用する。",
    tag: "IMAGE",
    color: "gold",
  },
  {
    name: "Higgsfield MCP",
    role: "Claude Code経由の直接生成",
    detail:
      "Higgsfield MCPサーバーをClaude Codeに接続することで、コード編集と動画生成をシームレスに統合。プロンプトの調整・生成・確認サイクルを自動化し、制作速度を大幅に向上させる。",
    tag: "MCP",
    color: "crimson",
  },
];

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "脚本・カット表",
    description: "シーン構成・セリフ・カメラワークをMarkdown形式で設計",
    tools: ["Claude"],
  },
  {
    step: "02",
    title: "参照画像生成",
    description: "各キャラクターのビジュアル参照セットを作成",
    tools: ["GPT-image-2"],
  },
  {
    step: "03",
    title: "動画生成",
    description: "カット表に基づいてシーンごとに動画を生成",
    tools: ["Seedance2", "Topview", "Higgsfield MCP"],
  },
  {
    step: "04",
    title: "音声合成",
    description: "セリフ・ナレーション・SE・BGMを生成・合成",
    tools: ["Fish Audio"],
  },
  {
    step: "05",
    title: "編集・仕上げ",
    description: "カット繋ぎ・色調補正・テロップ挿入・音声ミックス",
    tools: ["編集ツール"],
  },
];

export default function ProductionPage() {
  return (
    <div className="min-h-screen pt-14">
      {/* ── ヘッダー ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-ink-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-500 text-xs tracking-[0.5em] mb-6 uppercase">AI Production</p>
          <h1 className="text-4xl md:text-6xl font-bold text-ja mb-4">
            <span className="gold-text">AI制作</span>
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-6 leading-loose text-ja">
            最新のAI動画生成ツールを組み合わせた、
            <br />
            次世代の映像制作パイプライン。
          </p>
        </div>
      </section>

      {/* ── Why AI ──────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border border-gold-600/30 p-8 md:p-12 bg-ink-800/30 relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-black px-4">
            <span className="text-gold-500 text-xs tracking-[0.4em]">WHY AI</span>
          </div>
          <h2 className="text-white text-2xl font-bold text-ja mb-6">
            AIが拓く、歴史ドラマの新地平
          </h2>
          <p className="text-stone-300 text-ja leading-loose mb-4">
            「第六天魔王、蒼き狼へ」は、従来の映像制作では実現不可能だった
            スケールの歴史ドラマを、最先端のAI技術で実現しようとする実験的プロジェクトです。
          </p>
          <p className="text-stone-300 text-ja leading-loose mb-4">
            戦国日本とモンゴル高原という二つの時代を一人のクリエイターが描くために、
            Seedance2・Topview・Fish Audio・Higgsfield MCPを組み合わせた
            独自の制作パイプラインを構築しました。
          </p>
          <p className="text-stone-400 text-sm text-ja leading-loose italic border-l-2 border-gold-700 pl-4">
            AIは創造性を置き換えるのではなく、拡張する。
            一人の人間が持つビジョンを、かつてないスケールで映像化するための道具として。
          </p>
        </div>
      </section>

      <hr className="divider-crimson max-w-5xl mx-auto" />

      {/* ── ツール紹介 ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="gold-text text-2xl font-bold tracking-widest mb-2 text-ja">
          使用ツール
        </h2>
        <div className="h-px bg-gradient-to-r from-gold-600 to-transparent mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="border border-stone-800 bg-ink-800/40 p-6 hover:border-stone-600 transition-colors relative overflow-hidden"
            >
              {/* 背景アクセント */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 opacity-5 ${
                  tool.color === "crimson"
                    ? "bg-crimson-500"
                    : tool.color === "gold"
                    ? "bg-gold-500"
                    : "bg-stone-500"
                } rounded-full -translate-y-8 translate-x-8`}
              />

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white text-xl font-bold tracking-wider mb-1">
                    {tool.name}
                  </h3>
                  <p
                    className={`text-sm font-bold text-ja ${
                      tool.color === "crimson"
                        ? "text-crimson-400"
                        : tool.color === "gold"
                        ? "text-gold-400"
                        : "text-stone-400"
                    }`}
                  >
                    {tool.role}
                  </p>
                </div>
                <span className="text-xs tracking-widest text-stone-600 border border-stone-700 px-2 py-1">
                  {tool.tag}
                </span>
              </div>
              <p className="text-stone-400 text-sm text-ja leading-relaxed">{tool.detail}</p>
            </div>
          ))}
        </div>

        {/* 比較テーブル */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left py-3 px-4 text-gold-500 font-bold tracking-widest text-xs uppercase">
                  ツール
                </th>
                <th className="text-left py-3 px-4 text-stone-500 font-normal tracking-widest text-xs uppercase">
                  主な用途
                </th>
                <th className="text-left py-3 px-4 text-stone-500 font-normal tracking-widest text-xs uppercase">
                  強み
                </th>
                <th className="text-left py-3 px-4 text-stone-500 font-normal tracking-widest text-xs uppercase">
                  形式
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { tool: "Seedance2", use: "キャラクター動画", strength: "キャラ一貫性", format: "動画" },
                { tool: "Topview", use: "風景・俯瞰ショット", strength: "スケール表現", format: "動画" },
                { tool: "Fish Audio", use: "音声合成", strength: "感情表現", format: "音声" },
                { tool: "GPT-image-2", use: "参照画像", strength: "ビジュアル精度", format: "画像" },
                { tool: "Higgsfield MCP", use: "直接生成・自動化", strength: "ワークフロー統合", format: "動画" },
              ].map((row, i) => (
                <tr
                  key={row.tool}
                  className={`border-b border-stone-800/50 ${i % 2 === 0 ? "bg-ink-800/20" : ""}`}
                >
                  <td className="py-3 px-4 text-white font-bold">{row.tool}</td>
                  <td className="py-3 px-4 text-stone-400 text-ja">{row.use}</td>
                  <td className="py-3 px-4 text-stone-400 text-ja">{row.strength}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs text-stone-500 border border-stone-700 px-2 py-0.5">
                      {row.format}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="divider-crimson max-w-5xl mx-auto" />

      {/* ── 制作フロー ──────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="gold-text text-2xl font-bold tracking-widest mb-2 text-ja">
          制作フロー
        </h2>
        <div className="h-px bg-gradient-to-r from-gold-600 to-transparent mb-10" />

        <div className="relative">
          {PIPELINE_STEPS.map((step, i) => (
            <div key={step.step} className="flex gap-6 mb-2">
              {/* ステップ番号と縦線 */}
              <div className="flex flex-col items-center min-w-[3rem]">
                <div className="w-10 h-10 rounded-full border-2 border-crimson-700 bg-ink-900 flex items-center justify-center text-crimson-400 text-xs font-bold font-mono flex-shrink-0">
                  {step.step}
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-crimson-700/50 to-transparent mt-2 mb-2 min-h-[3rem]" />
                )}
              </div>

              {/* コンテンツ */}
              <div className={`flex-1 ${i < PIPELINE_STEPS.length - 1 ? "pb-8" : ""}`}>
                <div className="border border-stone-800 bg-ink-800/30 p-5 hover:border-stone-600 transition-colors">
                  <h3 className="text-white font-bold text-ja text-base mb-2">{step.title}</h3>
                  <p className="text-stone-400 text-sm text-ja leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-gold-500 border border-gold-700/50 px-2 py-0.5 bg-gold-900/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 最終出力 */}
        <div className="mt-6 border border-crimson-700/50 p-5 bg-crimson-900/10 text-center">
          <p className="text-crimson-400 text-xs tracking-[0.4em] mb-2 uppercase">Output</p>
          <p className="text-white font-bold text-ja text-lg">
            完成映像 — AI実写ドラマ「第六天魔王、蒼き狼へ」
          </p>
          <p className="text-stone-500 text-xs mt-2">
            全6話 / 各話約6分 / Seedance2 + Topview + Fish Audio
          </p>
        </div>
      </section>

      {/* ── フッターCTA ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/episodes/ep01"
            className="inline-block px-8 py-3 bg-crimson-700 hover:bg-crimson-600 text-white text-sm font-bold tracking-widest transition-colors"
          >
            第1話を見る
          </a>
          <a
            href="/world"
            className="inline-block px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-600/10 text-sm font-bold tracking-widest transition-colors"
          >
            世界観を見る
          </a>
        </div>
      </section>
    </div>
  );
}
