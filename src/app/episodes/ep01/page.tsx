import { getEpisode01Summary, getCharacterById } from "@/lib/data";

const TOOL_COLORS: Record<string, string> = {
  Seedance2: "text-blue-400 bg-blue-900/30 border-blue-800",
  Topview:   "text-emerald-400 bg-emerald-900/30 border-emerald-800",
};

export default function Episode01Page() {
  const ep = getEpisode01Summary();

  const totalSec = ep.scenes.reduce((sum, s) => sum + s.duration_sec, 0);
  const minutes  = Math.floor(totalSec / 60);
  const seconds  = totalSec % 60;

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="mb-10">
          <p className="text-crimson-500 text-xs tracking-[0.4em] mb-3">EPISODE 01</p>
          <h1 className="text-3xl md:text-4xl font-bold text-ja mb-2">
            <span className="gold-text">第1話</span>
          </h1>
          <h2 className="text-2xl text-stone-200 text-ja tracking-wide mb-1">
            {ep.title_ja}
          </h2>
          <p className="text-stone-500 text-sm">{ep.title_en}</p>
          <div className="h-px w-64 bg-gradient-to-r from-gold-600 to-transparent mt-4" />
        </div>

        {/* メタ情報 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { label: "カット数", value: `${ep.cut_count}カット` },
            { label: "総尺",    value: `${minutes}分${seconds}秒` },
            { label: "目標尺",  value: `${Math.floor(ep.duration_target_sec / 60)}分` },
            { label: "シーン数", value: `${ep.scenes.length}シーン` },
          ].map((item) => (
            <div key={item.label} className="border border-stone-800 p-4 text-center">
              <p className="text-stone-500 text-xs tracking-wider mb-1">{item.label}</p>
              <p className="text-gold-400 font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* あらすじ */}
        <div className="mb-10 p-6 border border-crimson-900/50 bg-crimson-950/20">
          <p className="text-stone-500 text-xs tracking-wider mb-3">SYNOPSIS</p>
          <p className="text-stone-200 text-ja leading-loose">{ep.synopsis_ja}</p>
          <p className="text-stone-500 text-sm mt-3 leading-relaxed">{ep.synopsis_en}</p>
        </div>

        {/* ツール凡例 */}
        <div className="flex gap-4 mb-8 text-xs">
          <p className="text-stone-500 mr-2">使用ツール:</p>
          {["Seedance2", "Topview"].map((tool) => (
            <span
              key={tool}
              className={`border px-2 py-0.5 ${TOOL_COLORS[tool] || ""}`}
            >
              {tool}
            </span>
          ))}
        </div>

        {/* シーン一覧 */}
        <div className="space-y-6">
          {ep.scenes.map((scene) => (
            <div key={scene.id} className="border border-stone-800 overflow-hidden">
              {/* シーンヘッダー */}
              <div className="bg-ink-800 px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="text-crimson-500 text-xs mr-3">SCENE {scene.id}</span>
                  <span className="text-gold-400 font-bold text-ja">{scene.name_ja}</span>
                </div>
                <div className="text-xs text-stone-500">
                  {scene.cut_count}カット / {scene.duration_sec}秒
                </div>
              </div>

              {/* カット数バー */}
              <div className="h-1 bg-ink-900">
                <div
                  className="h-full bg-gradient-to-r from-crimson-700 to-crimson-500"
                  style={{ width: `${(scene.duration_sec / totalSec) * 100}%` }}
                />
              </div>

              <div className="p-5">
                <p className="text-stone-500 text-xs">
                  タイムライン上の位置: {ep.scenes.slice(0, scene.id - 1).reduce((s, x) => s + x.duration_sec, 0)}秒
                  〜 {ep.scenes.slice(0, scene.id).reduce((s, x) => s + x.duration_sec, 0)}秒
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 導線 */}
        <div className="mt-12 p-6 border border-stone-800 bg-ink-800/30">
          <p className="text-stone-400 text-sm text-ja mb-4">
            カット詳細・プロンプト・セリフCSVは以下のコマンドで出力できます：
          </p>
          <div className="space-y-2">
            {[
              { cmd: "npm run export:shotlist", desc: "カット表 → MD / CSV" },
              { cmd: "npm run export:prompts",  desc: "Seedance2 / Topview プロンプト" },
              { cmd: "npm run export:fish",     desc: "Fish Audio CSV" },
            ].map((item) => (
              <div key={item.cmd} className="flex items-center gap-3">
                <code className="text-crimson-400 text-sm bg-ink-900 px-3 py-1 font-mono">
                  {item.cmd}
                </code>
                <span className="text-stone-500 text-xs">→ {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
