import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "世界観・年表 | 第六天魔王、蒼き狼へ",
  description:
    "1582年本能寺と1162年モンゴル高原。二つの時代が交差する世界観と年表。",
};

const TIMELINE_EVENTS = [
  {
    year: "1162年",
    era: "モンゴル高原",
    event: "テムジン誕生",
    detail:
      "オノン川のほとりで、イェスゲイ・バアトルの子として生まれる。握りこぶしに血の塊を持って産まれたとされ、後の覇者の誕生を予兆させた。",
    side: "mongol",
  },
  {
    year: "1162年〜",
    era: "モンゴル高原",
    event: "草原の戦乱時代",
    detail:
      "父の死後、孤立したテムジンは厳しい草原の生存競争の中で生き延びる。ジャムカとの出会いと義兄弟の誓い。部族の統合へ向けて歩み始める。",
    side: "mongol",
  },
  {
    year: "1182年",
    era: "モンゴル高原",
    event: "テムジン、部族戦争の時代",
    detail:
      "20歳のテムジンは部族間の争いの渦中にいる。ジャムカとの確執が深まりつつも、ボルテとの絆が彼の支柱となっていた。そこに信長が出現する——",
    side: "mongol",
    highlight: true,
  },
  {
    year: "1534年",
    era: "戦国日本",
    event: "織田信長誕生",
    detail:
      "尾張国に、織田信秀の子として誕生。幼少期の奇行から「尾張の大うつけ」と呼ばれるが、その実、類まれな軍略の天才であった。",
    side: "japan",
  },
  {
    year: "1560年",
    era: "戦国日本",
    event: "桶狭間の戦い",
    detail:
      "今川義元率いる2万5千の大軍を、奇襲によって撃破。信長の名が天下に轟いた瞬間。「天下布武」への道が開かれる。",
    side: "japan",
  },
  {
    year: "1582年",
    era: "戦国日本",
    event: "本能寺の変 — そして転移",
    detail:
      "天正十年六月二日、京・本能寺にて明智光秀の謀反。炎の中で死を迎えようとした信長は、謎の力によって遙か昔のモンゴル高原へと転移する。",
    side: "japan",
    highlight: true,
  },
  {
    year: "1206年",
    era: "モンゴル帝国",
    event: "チンギス・ハーン即位",
    detail:
      "テムジンが全モンゴルを統一し、クリルタイにてチンギス・ハーンの称号を得る。世界史上最大の帝国が誕生する。この歴史の裏に、信長との邂逅があったとしたら——",
    side: "mongol",
  },
];

const WORLD_CONCEPTS = [
  {
    title: "天下布武",
    subtitle: "Tenka Fubu",
    description:
      "「武力をもって天下を平定する」——信長の政治理念。戦国日本という閉じた世界でその理念を燃やし続けた男が、世界帝国の黎明期に転移したとき、その思想は何を引き起こすのか。",
    color: "crimson",
  },
  {
    title: "蒼き狼の伝説",
    subtitle: "The Legend of the Blue Wolf",
    description:
      "モンゴルの建国神話では、民族の祖先は「蒼き狼」と「白い牝鹿」であるとされる。テムジンは自らをその末裔と信じた。「蒼き狼」の伝説と「第六天魔王」の意志が交わる時、歴史は変わる。",
    color: "gold",
  },
  {
    title: "転移の謎",
    subtitle: "The Mystery of Transfer",
    description:
      "なぜ信長はモンゴルへ転移したのか。「観測者」と呼ばれる謎の存在が関与しているとされるが、その目的は不明。時間と空間の外に立つこの存在が、二つの運命を意図的に交差させた可能性がある。",
    color: "stone",
  },
];

export default function WorldPage() {
  return (
    <div className="min-h-screen pt-14">
      {/* ── ヘッダー ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-ink-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(185,28,28,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-500 text-xs tracking-[0.5em] mb-6 uppercase">World & Timeline</p>
          <h1 className="text-4xl md:text-6xl font-bold text-ja mb-4">
            <span className="flame-text">世界観</span>
            <span className="text-stone-400 text-2xl md:text-4xl">・</span>
            <span className="gold-text">年表</span>
          </h1>
          <p className="text-stone-400 text-sm md:text-base mt-6 leading-loose text-ja">
            1582年本能寺の炎から、1182年モンゴル高原へ。
            <br />
            400年の時を超えた邂逅が織りなす、もう一つの歴史。
          </p>
        </div>
      </section>

      {/* ── 世界設定 ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="gold-text text-2xl font-bold tracking-widest mb-2 text-ja">世界設定</h2>
        <div className="h-px bg-gradient-to-r from-gold-600 to-transparent mb-10" />

        {/* 二つの世界 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-crimson-900/60 bg-ink-800/40 p-6 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-crimson-700" />
            <p className="text-crimson-400 text-xs tracking-[0.4em] mb-3 uppercase">World A</p>
            <h3 className="text-white text-xl font-bold text-ja mb-2">戦国日本 · 1582年</h3>
            <p className="text-stone-400 text-xs text-ja leading-loose mb-4">
              天正十年 / Tensho 10
            </p>
            <p className="text-stone-300 text-sm text-ja leading-relaxed">
              信長による天下統一目前の日本。本能寺の変という歴史の転換点。
              この世界の「信長」は永遠に消えた——あるいは消えたように見えた。
            </p>
            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-stone-500 text-xs text-ja">主要人物: 信長・光秀・蘭丸</p>
            </div>
          </div>

          <div className="border border-gold-600/30 bg-ink-800/40 p-6 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-600" />
            <p className="text-gold-500 text-xs tracking-[0.4em] mb-3 uppercase">World B</p>
            <h3 className="text-white text-xl font-bold text-ja mb-2">モンゴル高原 · 1182年</h3>
            <p className="text-stone-400 text-xs text-ja leading-loose mb-4">
              12世紀 / The Age of the Wolf
            </p>
            <p className="text-stone-300 text-sm text-ja leading-relaxed">
              まだチンギス・ハーンが誕生する前の草原。テムジンは20歳の戦士として
              部族戦争の渦中にいる。世界帝国の萌芽が宿る時代。
            </p>
            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-stone-500 text-xs text-ja">主要人物: テムジン・ボルテ・ジャムカ</p>
            </div>
          </div>
        </div>

        {/* 問いかけ */}
        <div className="text-center border border-stone-800 p-8 bg-ink-800/20 mb-12">
          <p className="text-stone-400 text-sm tracking-widest mb-4 uppercase">The Central Question</p>
          <p className="text-gold-400 text-2xl md:text-3xl font-bold text-ja leading-relaxed">
            「もし信長がここにいたなら——」
          </p>
          <p className="text-stone-500 text-sm italic mt-4">
            "What if Nobunaga had been here...?"
          </p>
        </div>

        {/* 世界コンセプト */}
        <div className="grid md:grid-cols-3 gap-6">
          {WORLD_CONCEPTS.map((concept) => (
            <div key={concept.title} className="border border-stone-800 p-6 bg-ink-800/30">
              <h3
                className={`text-xl font-bold text-ja mb-1 ${
                  concept.color === "crimson"
                    ? "text-crimson-400"
                    : concept.color === "gold"
                    ? "text-gold-400"
                    : "text-stone-300"
                }`}
              >
                {concept.title}
              </h3>
              <p className="text-stone-600 text-xs tracking-widest mb-4 uppercase">
                {concept.subtitle}
              </p>
              <p className="text-stone-400 text-sm text-ja leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider-crimson max-w-5xl mx-auto" />

      {/* ── 年表 ─────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="gold-text text-2xl font-bold tracking-widest mb-2 text-ja">年表</h2>
        <div className="h-px bg-gradient-to-r from-gold-600 to-transparent mb-10" />

        {/* 凡例 */}
        <div className="flex gap-6 mb-10 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-crimson-700 rounded-sm" />
            <span className="text-stone-500">戦国日本</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gold-600 rounded-sm" />
            <span className="text-stone-500">モンゴル高原</span>
          </div>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 中央線 */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-700 to-transparent hidden md:block" />

          <div className="space-y-6">
            {TIMELINE_EVENTS.map((event, i) => (
              <div
                key={i}
                className={`flex gap-4 md:gap-8 items-start ${
                  event.highlight
                    ? "border border-crimson-900/70 bg-ink-800/60 p-4 -mx-2"
                    : ""
                }`}
              >
                {/* 年号 */}
                <div className="min-w-[5rem] text-right">
                  <span
                    className={`text-sm font-bold tracking-wider ${
                      event.side === "japan" ? "text-crimson-400" : "text-gold-500"
                    }`}
                  >
                    {event.year}
                  </span>
                  <p className="text-stone-600 text-xs mt-1 text-ja">{event.era}</p>
                </div>

                {/* ドット */}
                <div className="relative flex items-center justify-center mt-1 hidden md:flex">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      event.side === "japan"
                        ? "border-crimson-600 bg-crimson-900"
                        : "border-gold-500 bg-gold-900/30"
                    } ${event.highlight ? "scale-125" : ""}`}
                  />
                </div>

                {/* コンテンツ */}
                <div className="flex-1 pb-4 border-b border-stone-800/50">
                  <h3 className="text-white font-bold text-ja text-base mb-2">
                    {event.event}
                    {event.highlight && (
                      <span className="ml-2 text-crimson-500 text-xs tracking-widest">★ KEY</span>
                    )}
                  </h3>
                  <p className="text-stone-400 text-sm text-ja leading-relaxed">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
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
            href="/characters"
            className="inline-block px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-600/10 text-sm font-bold tracking-widest transition-colors"
          >
            キャラクター紹介
          </a>
        </div>
      </section>
    </div>
  );
}
