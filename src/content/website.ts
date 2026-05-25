// 公式サイト コンテンツ一元管理
// ここを編集することで全ページのテキスト・URLを変更できる

export const SITE_CONFIG = {
  title: "第六天魔王、蒼き狼へ",
  title_en: "NOBUNAGA: The Shadow of Khan",
  description: "本能寺で炎に消えた織田信長が、謎の転移によってモンゴル高原へ。若きテムジンとの邂逅が始まる。AI実写ドラマシリーズ。",
  label: "AI 実写ドラマシリーズ",
  site_url: "https://nobunaga-movie.com",
};

// 動画URL設定
// YouTube ID が設定されている場合はYouTubeを優先、なければローカルmp4を使用
export const VIDEO_CONFIG = {
  trailer_youtube_id: null as string | null,   // YouTubeアップ後にIDを入力: "dQw4w9WgXcQ"
  trailer_local_src: "/video/trailer.mp4",     // ローカルmp4（フォールバック）
  ep01_youtube_id: null as string | null,
};

// SNSリンク設定（未設定 = null で非表示）
export const SNS_CONFIG = {
  youtube: null as string | null,    // 例: "https://www.youtube.com/@nobunaga-drama"
  tiktok: null as string | null,
  twitter: null as string | null,
  instagram: null as string | null,
  contact_email: "contact@nobunaga-drama.jp",
};

// Hero セクション
export const HERO_CONTENT = {
  badge: "AI 実写ドラマシリーズ",
  copy_line1: "本能寺で終わったはずの天下布武は、",
  copy_line2: "300年前の草原で、世界帝国となった。",
  copy_en: "What ended at Honnoji became a world empire — three centuries earlier, on the steppe.",
  cta_ep1: "第1話を見る",
  cta_trailer: "公式予告を見る",
  cta_characters: "キャラクターを見る",
};

// Trailer セクション
export const TRAILER_CONTENT = {
  label: "Official Trailer",
  heading: "公式予告編",
  text_line1: "織田信長は、死ななかった。",
  text_line2: "彼が目覚めたのは、若きテムジンがまだ王ではなかった時代。",
  coming_soon: "OFFICIAL TRAILER / COMING SOON",
};

// Story セクション
export const STORY_CONTENT = {
  label: "Story",
  heading: "物語",
  paragraphs: [
    "1582年、本能寺。明智光秀の謀反により、織田信長は炎の中に消えた。だが、彼は死んでいなかった。",
    "目覚めた場所は、300年以上前のモンゴル高原。そこで信長は、まだ王ではない若きテムジンと出会う。",
    "戦国の知略は、草原の戦を変え、やがて世界史上最大の帝国を生み出していく。",
  ],
  epilogue: "これは、歴史の表に残らなかったもうひとつの天下布武である。",
  text_en: "In the flames of 1582, Oda Nobunaga vanishes — only to appear on the Mongolian steppe of 1182, face to face with the young warrior who will one day conquer the world. Two iron wills. One impossible encounter. History will never be the same.",
};

// Episode 1 セクション
export const EPISODE1_CONTENT = {
  label: "Episode 1",
  number: "第一話",
  heading: "本能寺、燃ゆ。草原、目覚む。",
  synopsis: "本能寺の炎の中、信長は謎の声に導かれ、時空の裂け目へ飲み込まれる。目覚めた先は、雪と風が支配するモンゴル高原。そこで彼は、若き草原の戦士テムジンと出会う。",
  cta: "第1話を見る",
};

// Characters セクション
export const CHARACTERS_CONTENT = {
  label: "Characters",
  heading: "登場人物",
  cta: "全キャラクターを見る",
  characters: [
    {
      id: "nobunaga",
      name_ja: "織田信長",
      name_en: "Oda Nobunaga",
      archetype: "第六天魔王",
      description_ja: "本能寺で死なず、草原に落ちた第六天魔王。天下布武の意志は時空を超える。",
      description_en: "The Demon King of the Sixth Heaven — transported beyond time.",
      image: "/characters/nobunaga/ref_001.png",
    },
    {
      id: "temujin",
      name_ja: "若きテムジン",
      name_en: "Young Temujin",
      archetype: "蒼き狼",
      description_ja: "後のチンギス・ハーン。まだ王ではない若き狼。",
      description_en: "The future conqueror — not yet a Khan.",
      image: "/characters/temujin/ref_001.png",
    },
    {
      id: "borte",
      name_ja: "ボルテ",
      name_en: "Borte",
      archetype: "草原の女傑",
      description_ja: "テムジンの妻。信長の危険性を最初に見抜く女。",
      description_en: "The first to sense the danger Nobunaga carries.",
      image: "/characters/borte/ref_001.png",
    },
    {
      id: "jamuka",
      name_ja: "ジャムカ",
      name_en: "Jamukha",
      archetype: "宿敵",
      description_ja: "テムジンの盟友にして宿敵。旧き草原の誇り。",
      description_en: "Blood brother turned rival. The pride of the old steppe.",
      image: "/characters/jamuka/ref_001.png",
    },
    {
      id: "mitsuhide",
      name_ja: "明智光秀",
      name_en: "Akechi Mitsuhide",
      archetype: "裏切りの幻影",
      description_ja: "信長の記憶に現れる裏切りの幻影。",
      description_en: "A ghost of betrayal haunting Nobunaga's memory.",
      image: "/characters/mitsuhide/ref_001.png",
    },
    {
      id: "ranmaru",
      name_ja: "森蘭丸",
      name_en: "Mori Ranmaru",
      archetype: "忠義の残像",
      description_ja: "信長の小姓として仕えた少年。本能寺の炎とともに記憶に刻まれた忠義の魂。",
      description_en: "Nobunaga's devoted page — a soul forever seared into memory by the flames of Honnoji.",
      image: "/characters/ranmaru/ref_001.png",
    },
    {
      id: "observer",
      name_ja: "観測者",
      name_en: "The Observer",
      archetype: "謎の存在",
      description_ja: "信長を時空の彼方へ送った謎の存在。",
      description_en: "The enigma who sent Nobunaga across time.",
      image: "/characters/observer/ref_001.png",
    },
  ],
};

// World / Timeline セクション
export const WORLD_CONTENT = {
  label: "History × Fiction",
  heading: "史実と本作の交差点",
  cta: "詳細な年表を見る",
  timeline: [
    {
      year: "1582年",
      fact: "史実：本能寺の変",
      fiction: "本作：信長、時空転移",
      highlight: true,
    },
    {
      year: "12世紀末",
      fact: "史実：テムジン台頭期",
      fiction: "本作：信長、草原で目覚める",
      highlight: true,
    },
    {
      year: "1206年",
      fact: "史実：チンギス・ハーン即位",
      fiction: "本作：信長の天下布武が世界史へ接続する",
      highlight: false,
    },
    {
      year: "13世紀",
      fact: "史実：モンゴル帝国拡大",
      fiction: "本作：信長の思想が帝国の仕組みに影を落とす",
      highlight: false,
    },
  ],
};

// AI Production セクション
export const PRODUCTION_CONTENT = {
  label: "AI Production",
  heading: "AIで、失われた歴史ロマンを映像化する。",
  body: [
    "本作は、生成AIによる映像、AI音声、脚本補助、編集支援を活用して制作される歴史ロマン・ショートドラマシリーズです。",
    "人間の企画、脚本、演出、編集判断と、AIの映像生成能力を組み合わせることで、これまで個人や小規模チームでは実現が難しかった世界史スケールの歴史劇を制作します。",
  ],
  tools: [
    { name: "Seedance2", role: "キャラクター動画生成" },
    { name: "Higgsfield", role: "動的VFXショット" },
    { name: "Topview", role: "俯瞰・風景生成" },
    { name: "Fish Audio", role: "AI音声合成" },
    { name: "Remotion", role: "映像編集・テロップ" },
    { name: "Claude", role: "脚本補助・演出設計" },
  ],
  cta: "AI制作の詳細を見る",
};

// Music セクション
export const MUSIC_CONTENT = {
  label: "Music",
  heading: "オリジナルサウンドトラック",
  tracks: [
    {
      type: "OP" as const,
      type_label: "オープニング",
      title: "NOBUNAGA",
      artist: null as string | null,
      description: "天下布武の覇気と時空の裂け目を響かせる、重厚なオープニングテーマ。",
      audio_src: "/audio/opening.mp3",
    },
    {
      type: "ED" as const,
      type_label: "エンディング",
      title: "蒼き狼の夢たち",
      artist: "MISAMISA",
      description: "草原を渡る風と、遠き夢を歌ったエンディングテーマ。",
      audio_src: "/audio/ending.mp3",
    },
  ],
  artist: {
    id: "misamisa",
    name: "MISAMISA",
    image: "/music/misamisa.jpg",
    debut: "2025年デビュー",
    genre: "ゲーム音楽・アニメ音楽",
    profile: "ゲーム音楽・アニメ系楽曲を中心に2025年デビューした新人アーティスト。和と現代の融合サウンドで独自の世界観を確立しつつある。",
    profile_en: "Emerging artist who debuted in 2025, specializing in game and anime music. Building a distinctive sound that bridges traditional Japanese aesthetics with contemporary production.",
  },
};

// SNS / Contact セクション
export const SNS_CONTACT_CONTENT = {
  label: "Follow the Project",
  heading: "プロジェクトをフォロー",
  contact_text: "制作協力、配信、取材、出資、共同制作に関するお問い合わせはこちら。",
  contact_cta: "お問い合わせ",
};
