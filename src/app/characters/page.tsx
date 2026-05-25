import { getCharacters } from "@/lib/data";

const ROLE_LABELS: Record<string, string> = {
  protagonist:    "主人公",
  deuteragonist:  "相棒",
  antagonist:     "敵対者",
  antagonist_ep01:"敵対者",
  supporting:     "助演",
  supporting_ep01:"助演",
  mysterious:     "謎の存在",
};

const ROLE_COLORS: Record<string, string> = {
  protagonist:    "text-crimson-400 border-crimson-700",
  deuteragonist:  "text-gold-400 border-gold-600",
  antagonist:     "text-stone-400 border-stone-600",
  antagonist_ep01:"text-stone-400 border-stone-600",
  supporting:     "text-blue-400 border-blue-700",
  supporting_ep01:"text-blue-400 border-blue-700",
  mysterious:     "text-purple-400 border-purple-700",
};

export default function CharactersPage() {
  const characters = getCharacters();

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="mb-12">
          <p className="text-stone-500 text-xs tracking-[0.4em] mb-3">CAST & CHARACTERS</p>
          <h1 className="gold-text text-4xl font-bold tracking-widest text-ja mb-3">
            登場人物
          </h1>
          <div className="h-px w-48 bg-gradient-to-r from-gold-600 to-transparent" />
          <p className="text-stone-400 text-sm mt-4 text-ja">
            固定キャラクター 7名。キャラクターの一貫性が本作品の最重要事項です。
          </p>
        </div>

        {/* キャラクターリスト */}
        <div className="space-y-8">
          {characters.map((char, index) => (
            <div
              key={char.id}
              className="border border-stone-800 hover:border-stone-700 bg-ink-800/30 p-6 md:p-8 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* アバター */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-ink-700 border border-stone-700 flex items-center justify-center">
                    <span className="text-5xl text-stone-500">{char.name_ja[0]}</span>
                  </div>
                  <p className="text-stone-600 text-xs text-center mt-2">ref画像配置予定</p>
                </div>

                {/* 情報 */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h2 className="text-gold-400 text-2xl font-bold tracking-wider text-ja">
                      {char.name_ja}
                    </h2>
                    <span className="text-stone-500 text-sm mt-1">{char.name_en}</span>
                    <span
                      className={`text-xs border px-2 py-0.5 mt-1 ${
                        ROLE_COLORS[char.role] || "text-stone-400 border-stone-600"
                      }`}
                    >
                      {ROLE_LABELS[char.role] || char.role}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 mb-4 text-xs">
                    <div>
                      <span className="text-stone-500">年齢: </span>
                      <span className="text-stone-300">{char.age > 0 ? `${char.age}歳` : "不明"}</span>
                    </div>
                    <div>
                      <span className="text-stone-500">時代: </span>
                      <span className="text-stone-300">{char.era}</span>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-stone-500">原型: </span>
                      <span className="text-stone-300">{char.archetype}</span>
                    </div>
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed text-ja mb-4">
                    {char.description_ja}
                  </p>

                  {/* キーワード */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {char.personality_keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs border border-stone-700 text-stone-400 px-2 py-0.5"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* 技術情報 */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4 p-4 bg-ink-900/50 border border-stone-800">
                    <div>
                      <p className="text-stone-500 text-xs tracking-wider mb-1">VISUAL DESCRIPTION</p>
                      <p className="text-stone-400 text-xs text-ja leading-relaxed">
                        {char.visual_description}
                      </p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-xs tracking-wider mb-1">VOICE STYLE</p>
                      <p className="text-stone-400 text-xs text-ja leading-relaxed mb-2">
                        {char.voice_style}
                      </p>
                      <p className="text-stone-500 text-xs tracking-wider mb-1">LORA TRIGGER</p>
                      <code className="text-crimson-400 text-xs">{char.lora_trigger}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
