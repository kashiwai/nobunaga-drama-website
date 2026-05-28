import { VideoEmbed } from "@/components/VideoEmbed";
import { CharacterCard } from "@/components/CharacterCard";
import { TimelineTable } from "@/components/TimelineRow";
import { AudioPlayer } from "@/components/AudioPlayer";
import { RegistrationForm } from "@/components/RegistrationForm";
import {
  HERO_CONTENT,
  TRAILER_CONTENT,
  STORY_CONTENT,
  EPISODE1_CONTENT,
  CHARACTERS_CONTENT,
  WORLD_CONTENT,
  PRODUCTION_CONTENT,
  MUSIC_CONTENT,
  SNS_CONTACT_CONTENT,
  VIDEO_CONFIG,
  SNS_CONFIG,
} from "@/content/website";
import { getEpisode01Summary } from "@/lib/data";

const SCENE_ICONS = ["", "⚔", "✦", "", "", "◎", "", "★", "◈"];

const SNS_LINKS = [
  { key: "youtube" as const,   label: "YouTube",   icon: "▶" },
  { key: "tiktok" as const,    label: "TikTok",    icon: "♪" },
  { key: "twitter" as const,   label: "X",         icon: "✕" },
  { key: "instagram" as const, label: "Instagram", icon: "◎" },
];

export default function HomePage() {
  const ep01 = getEpisode01Summary();

  return (
    <div className="min-h-screen">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 1: Hero
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden pt-14">
        {/* キービジュアル背景 */}
        <div className="absolute inset-0 bg-ink-900" />
        <img
          src="/keyvisuals/hero.png"
          alt="第六天魔王、蒼き狼へ キービジュアル"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "55% center" }}
        />

        {/* グラデーションオーバーレイ層 */}
        {/* 下から黒へ（テキスト可読性） */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
        {/* 右側を暗くしてテキストエリアを確保（PC） */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-l from-ink-900/90 via-ink-900/40 to-transparent" />
        {/* 上部ナビ下を少し暗く */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ink-900/70 to-transparent" />
        {/* ビネット */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />

        {/* コンテンツ: PC=右寄り / SP=中央下 */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 pb-16 md:pb-0">
          <div className="md:ml-auto md:w-[48%] text-center md:text-right">

            {/* バッジ */}
            <p className="text-gold-500/80 text-[11px] tracking-[0.6em] mb-6 font-light uppercase">
              {HERO_CONTENT.badge}
            </p>

            {/* タイトルロゴ画像 */}
            <h1 className="mb-8">
              <img
                src="/keyvisuals/logo_v2.png"
                alt="第六天魔王、蒼き狼へ / NOBUNAGA: The Shadow of Khan"
                className="w-full max-w-[420px] md:max-w-[500px] mx-auto md:ml-auto md:mr-0"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(185,28,28,0.5)) drop-shadow(0 0 60px rgba(212,175,55,0.25))",
                }}
              />
            </h1>

            {/* 区切り */}
            <div className="flex items-center justify-center md:justify-end gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-crimson-700/70 md:hidden" />
              <div className="text-crimson-600 text-sm">✦</div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-crimson-700/70" />
            </div>

            {/* ヒーローコピー */}
            <p className="text-stone-100 text-base sm:text-lg md:text-xl leading-relaxed text-ja font-bold mb-1 tracking-wide drop-shadow-lg">
              {HERO_CONTENT.copy_line1}
            </p>
            <p className="text-stone-100 text-base sm:text-lg md:text-xl leading-relaxed text-ja font-bold mb-8 tracking-wide drop-shadow-lg">
              {HERO_CONTENT.copy_line2}
            </p>

            {/* CTA ボタン群 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <a
                href="/episodes/ep01"
                className="btn-primary inline-block px-7 py-3.5 bg-crimson-700 hover:bg-crimson-600 text-white font-bold tracking-[0.2em] text-sm border border-crimson-600 transition-colors shadow-lg shadow-crimson-900/50"
              >
                {HERO_CONTENT.cta_ep1}
              </a>
              <a
                href="#trailer"
                className="inline-block px-7 py-3.5 border border-gold-500/60 text-gold-400 hover:bg-gold-600/10 hover:border-gold-400 font-bold tracking-[0.2em] text-sm transition-colors"
              >
                {HERO_CONTENT.cta_trailer}
              </a>
              <a
                href="/characters"
                className="inline-block px-7 py-3.5 border border-stone-600/60 text-stone-400 hover:border-stone-500 hover:text-stone-300 font-bold tracking-[0.2em] text-sm transition-colors"
              >
                {HERO_CONTENT.cta_characters}
              </a>
            </div>
          </div>
        </div>

        {/* 下矢印 */}
        <a
          href="#trailer"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-600 hover:text-stone-400 transition-colors animate-bounce"
          aria-label="下へスクロール"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </a>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 2: 事前登録バナー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="register" className="relative py-10 md:py-14 px-5 overflow-hidden">
        {/* 背景グロウ */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_rgba(185,28,28,0.08)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/60 to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* バッジ */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="text-gold-500 text-[11px] tracking-[0.6em] uppercase font-bold">
              Pre-Registration
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>

          {/* メインコピー */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-ja tracking-wider leading-snug mb-3">
            完全無料 — 全24話 配信予定
          </h2>
          <p className="text-crimson-400 text-sm md:text-base font-bold tracking-widest mb-2 text-ja">
            2025年6月末より順次配信開始
          </p>
          <p className="text-stone-400 text-sm text-ja leading-relaxed mb-8 max-w-xl mx-auto">
            登録者限定で各話の視聴URLをメールでお届けします。<br className="hidden sm:block" />
            メールアドレスを登録するだけで、無料で全話視聴できます。
          </p>

          {/* 登録フォーム */}
          <div className="max-w-lg mx-auto mb-6">
            <RegistrationForm />
          </div>

          {/* 特典説明 */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8">
            {[
              { icon: "✦", text: "完全無料" },
              { icon: "◎", text: "全24話" },
              { icon: "▶", text: "メール通知" },
            ].map((item) => (
              <div key={item.text} className="text-center">
                <div className="text-crimson-500 text-base mb-1">{item.icon}</div>
                <p className="text-stone-500 text-xs tracking-widest text-ja">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 3: Trailer
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="trailer" className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          {/* ラベル */}
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {TRAILER_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {TRAILER_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-8" />

          <p className="text-stone-300 text-base md:text-lg text-ja leading-relaxed mb-2 font-bold">
            {TRAILER_CONTENT.text_line1}
          </p>
          <p className="text-stone-400 text-sm md:text-base text-ja leading-relaxed mb-8">
            {TRAILER_CONTENT.text_line2}
          </p>

          <VideoEmbed
            youtubeId={VIDEO_CONFIG.trailer_youtube_id}
            localSrc={VIDEO_CONFIG.trailer_local_src}
            comingSoonText={TRAILER_CONTENT.coming_soon}
          />
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 3: Story
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="story" className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {STORY_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {STORY_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-10" />

          {/* ボーダーカード */}
          <div className="border border-crimson-900/50 p-7 md:p-10 relative">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-ink-900 px-4">
              <span className="text-gold-600 text-[10px] tracking-[0.5em] uppercase">Story</span>
            </div>
            {/* 角装飾 */}
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-crimson-800/50" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-crimson-800/50" />

            {STORY_CONTENT.paragraphs.map((para, i) => (
              <p key={i} className="text-stone-200 leading-relaxed text-ja text-base md:text-lg mb-5 last:mb-0">
                {para}
              </p>
            ))}
            <p className="text-gold-500 leading-relaxed text-ja text-base md:text-lg font-bold mt-6 pt-6 border-t border-crimson-900/30">
              {STORY_CONTENT.epilogue}
            </p>
          </div>

          {/* 英語 */}
          <p className="text-stone-500 text-xs sm:text-sm italic leading-relaxed border-l-2 border-crimson-800 pl-5 mt-8">
            {STORY_CONTENT.text_en}
          </p>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 4: Episode 1
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="episode1" className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-1">
            {EPISODE1_CONTENT.label}
          </p>
          <p className="text-stone-600 text-[10px] tracking-[0.4em] uppercase mb-3">
            {EPISODE1_CONTENT.number}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {EPISODE1_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-8" />

          <p className="text-stone-300 text-base md:text-lg text-ja leading-relaxed mb-10">
            {EPISODE1_CONTENT.synopsis}
          </p>

          {/* シーングリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mb-10">
            {ep01.scenes.map((scene, i) => (
              <div
                key={scene.id}
                className="border border-stone-800/80 hover:border-crimson-800 bg-ink-800/40 p-4 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-crimson-700 text-[10px] font-mono tracking-wider">Scene {scene.id}</span>
                  <span className="text-stone-700 text-sm">{SCENE_ICONS[i] ?? "◆"}</span>
                </div>
                <p className="text-stone-200 text-sm text-ja leading-tight font-bold mb-2 group-hover:text-stone-100 transition-colors">
                  {scene.name_ja}
                </p>
                <p className="text-stone-600 text-[11px]">{scene.cut_count}カット</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/episodes/ep01"
              className="inline-block px-8 py-3 bg-crimson-700 hover:bg-crimson-600 text-white text-sm font-bold tracking-widest transition-colors border border-crimson-600"
            >
              {EPISODE1_CONTENT.cta}
            </a>
            <span className="text-stone-600 text-xs tracking-wide">
              全{ep01.cut_count}カット / 約{Math.round(ep01.duration_target_sec / 60)}分
            </span>
          </div>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 5: Characters
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="characters" className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {CHARACTERS_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {CHARACTERS_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-10" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
            {CHARACTERS_CONTENT.characters.map((char) => (
              <CharacterCard key={char.id} {...char} href="/characters" />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/characters"
              className="inline-block text-stone-500 hover:text-gold-400 text-xs tracking-[0.4em] transition-colors border border-stone-800 hover:border-gold-600/40 px-6 py-2.5 uppercase"
            >
              {CHARACTERS_CONTENT.cta} →
            </a>
          </div>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 6: World / Timeline
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="world" className="py-12 md:py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {WORLD_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {WORLD_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-10" />

          <TimelineTable items={WORLD_CONTENT.timeline} />

          <div className="text-center mt-10">
            <a
              href="/world"
              className="inline-block text-stone-500 hover:text-gold-400 text-xs tracking-[0.4em] transition-colors border border-stone-800 hover:border-gold-600/40 px-6 py-2.5 uppercase"
            >
              {WORLD_CONTENT.cta} →
            </a>
          </div>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 7: AI Production
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="production" className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {PRODUCTION_CONTENT.label}
          </p>
          <h2 className="text-stone-100 text-xl md:text-2xl font-bold tracking-wider text-ja mb-2 leading-relaxed max-w-2xl">
            {PRODUCTION_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-crimson-800/50 to-transparent mb-10" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {PRODUCTION_CONTENT.body.map((para, i) => (
              <p key={i} className="text-stone-400 text-sm md:text-base text-ja leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* AIツールグリッド */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-10">
            {PRODUCTION_CONTENT.tools.map((tool) => (
              <div
                key={tool.name}
                className="border border-stone-800 hover:border-gold-600/30 p-4 text-center transition-colors group"
              >
                <p className="text-gold-500 font-bold text-sm tracking-wider mb-1 group-hover:text-gold-400 transition-colors">
                  {tool.name}
                </p>
                <p className="text-stone-500 text-xs text-ja">{tool.role}</p>
              </div>
            ))}
          </div>

          <div>
            <a
              href="/production"
              className="text-stone-500 hover:text-gold-400 text-xs tracking-[0.4em] transition-colors uppercase"
            >
              {PRODUCTION_CONTENT.cta} →
            </a>
          </div>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 8: Music
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="music" className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {MUSIC_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {MUSIC_CONTENT.heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-600/60 to-transparent mb-10" />

          {/* OP / ED プレーヤーカード */}
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {MUSIC_CONTENT.tracks.map((track) => (
              <div
                key={track.type}
                className="border border-stone-800/60 bg-ink-800/30 relative overflow-hidden"
              >
                {/* 背景装飾 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(185,28,28,0.05)_0%,_transparent_70%)] pointer-events-none" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-stone-700/40" />

                {/* ヘッダー */}
                <div className="px-5 pt-5 pb-4 border-b border-stone-800/60">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block text-[10px] tracking-[0.5em] uppercase font-bold px-3 py-1 border border-gold-600/40 text-gold-500 bg-gold-600/5">
                      {track.type}
                    </span>
                    <span className="text-stone-600 text-[11px] tracking-widest">
                      {track.type_label}
                    </span>
                  </div>
                  <p className="text-white text-lg md:text-xl font-bold tracking-wider text-ja leading-tight mb-0.5">
                    {track.title}
                  </p>
                  {track.artist && (
                    <p className="text-gold-500 text-xs tracking-widest font-bold">{track.artist}</p>
                  )}
                  <p className="text-stone-600 text-xs text-ja leading-relaxed mt-2">
                    {track.description}
                  </p>
                </div>

                {/* オーディオプレーヤー */}
                <div className="p-4">
                  <AudioPlayer
                    src={track.audio_src}
                    title={track.title}
                    artist={track.artist}
                    type={track.type}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* アーティストプロフィール */}
          <div className="border border-stone-800/60 bg-ink-800/20 overflow-hidden">
            <div className="grid md:grid-cols-[280px_1fr] gap-0">
              {/* 画像 */}
              <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-ink-900">
                <img
                  src={MUSIC_CONTENT.artist.image}
                  alt={MUSIC_CONTENT.artist.name}
                  className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                  style={{ objectPosition: "center 15%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-800/60 hidden md:block pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 to-transparent md:hidden pointer-events-none" />
              </div>

              {/* テキスト */}
              <div className="p-7 md:p-10 flex flex-col justify-center">
                {/* Artist バッジ */}
                <p className="text-crimson-500 text-[10px] tracking-[0.5em] uppercase mb-4">
                  Ending Theme Artist
                </p>

                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-[0.2em] mb-1">
                  {MUSIC_CONTENT.artist.name}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold-500 text-xs tracking-widest">
                    {MUSIC_CONTENT.artist.debut}
                  </span>
                  <span className="text-stone-700">·</span>
                  <span className="text-stone-500 text-xs tracking-wider">
                    {MUSIC_CONTENT.artist.genre}
                  </span>
                </div>

                <div className="h-px bg-gradient-to-r from-crimson-800/50 to-transparent mb-6" />

                <p className="text-stone-300 text-sm text-ja leading-relaxed mb-4">
                  {MUSIC_CONTENT.artist.profile}
                </p>
                <p className="text-stone-600 text-xs italic leading-relaxed border-l-2 border-stone-800 pl-4">
                  {MUSIC_CONTENT.artist.profile_en}
                </p>

                {/* 楽曲タイトル表示 */}
                <div className="mt-8 pt-6 border-t border-stone-800/60">
                  <p className="text-stone-600 text-[10px] tracking-[0.4em] uppercase mb-2">
                    Ending Theme
                  </p>
                  <p className="text-gold-400 text-lg font-bold tracking-wider text-ja">
                    {MUSIC_CONTENT.tracks.find((t) => t.type === "ED")?.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-crimson max-w-5xl mx-auto" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Section 9: SNS / Contact
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-crimson-500 text-[11px] tracking-[0.5em] uppercase mb-3">
            {SNS_CONTACT_CONTENT.label}
          </p>
          <h2 className="gold-text text-2xl md:text-3xl font-bold tracking-widest text-ja mb-2">
            {SNS_CONTACT_CONTENT.heading}
          </h2>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-gold-600/50 to-transparent mb-12" />

          {/* 登録フォーム（コンパクト版） */}
          <div className="max-w-md mx-auto mb-12 p-6 border border-crimson-900/40 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink-900 px-4">
              <span className="text-crimson-500 text-[10px] tracking-[0.5em] uppercase">配信登録</span>
            </div>
            <p className="text-stone-400 text-xs text-ja mb-4 tracking-wide">
              メールアドレスを登録すると、各話の視聴URLが届きます。
            </p>
            <RegistrationForm compact />
          </div>

          {/* SNSリンク */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {SNS_LINKS.map(({ key, label, icon }) => {
              const href = SNS_CONFIG[key];
              return href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 hover:border-gold-600/50 text-stone-400 hover:text-gold-400 text-sm tracking-widest transition-colors"
                >
                  <span className="text-xs">{icon}</span>
                  {label}
                </a>
              ) : (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-800/50 text-stone-700 text-sm tracking-widest cursor-not-allowed"
                  title="Coming soon"
                >
                  <span className="text-xs">{icon}</span>
                  {label}
                </span>
              );
            })}
          </div>

          {/* Contact */}
          <div className="border border-crimson-900/40 p-8 md:p-10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink-900 px-6">
              <span className="text-stone-600 text-[10px] tracking-[0.5em] uppercase">Contact</span>
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-crimson-900/40" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-crimson-900/40" />

            <p className="text-stone-400 text-sm text-ja leading-relaxed mb-8">
              {SNS_CONTACT_CONTENT.contact_text}
            </p>
            <a
              href={`mailto:${SNS_CONFIG.contact_email}`}
              className="inline-block px-10 py-4 border border-gold-500/50 text-gold-400 hover:bg-gold-600/10 hover:border-gold-400 font-bold tracking-[0.2em] text-sm transition-colors"
            >
              {SNS_CONTACT_CONTENT.contact_cta}
            </a>
            <p className="text-stone-700 text-xs mt-4 tracking-wider">{SNS_CONFIG.contact_email}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
