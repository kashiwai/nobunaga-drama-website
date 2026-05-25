export interface Character {
  id: string;
  name_ja: string;
  name_en: string;
  age: number;
  role: string;
  era: string;
  archetype: string;
  description_ja: string;
  description_en: string;
  personality_keywords: string[];
  visual_description: string;
  costume: { primary: string; alternative?: string };
  voice_style: string;
  lora_trigger: string;
}

export interface CutDialogue {
  character_id: string;
  line_ja: string;
  line_en: string;
}

export interface Cut {
  cut_id: string;
  scene: number;
  scene_name: string;
  duration_sec: number;
  tool: string;
  characters: string[];
  location: string;
  time_of_day: string;
  shot_type: string;
  camera_angle: string;
  camera_movement: string;
  action: string;
  prompt_en: string;
  reference_images: string[];
  dialogue: CutDialogue | null;
  bgm?: string;
  edit_notes?: string | null;
}

export interface Scene {
  id: number;
  name_ja: string;
  cut_count: number;
  duration_sec: number;
}

export interface Episode {
  id: string;
  number: number;
  title_ja: string;
  title_en: string;
  duration_target_sec: number;
  cut_count: number;
  scenes: Scene[];
}

// ── Static data (import from JSON at build time) ──────────────────

const characters: Character[] = [
  {
    id: "nobunaga",
    name_ja: "織田信長",
    name_en: "Oda Nobunaga",
    age: 49,
    role: "protagonist",
    era: "戦国日本 (1582)",
    archetype: "第六天魔王 / 覇王",
    description_ja:
      "戦国最強の覇王。本能寺で炎に消えたはずが、謎の力でモンゴル高原へ転移。若きテムジンとの邂逅が新たな運命の扉を開く。",
    description_en:
      "The mightiest warlord of Sengoku Japan. Transported to the Mongolian steppe after Honnoji, he encounters the young Temujin.",
    personality_keywords: ["fearless", "calculating", "innovative", "charismatic", "melancholic"],
    visual_description:
      "49歳の日本人男性。鋭い目と刻まれた顔立ち。黒と深紅の鎧（烏帽子なし）。傷と灰にまみれている。",
    costume: { primary: "破損した黒・深紅の当世具足。織田家紋の羽織" },
    voice_style: "低く、ゆっくり、権威に満ちている。決して怒鳴らない。",
    lora_trigger: "nobunaga_sengoku_warlord",
  },
  {
    id: "temujin",
    name_ja: "若きテムジン",
    name_en: "Young Temujin",
    age: 20,
    role: "deuteragonist",
    era: "12世紀モンゴル",
    archetype: "未来の世界征服者",
    description_ja:
      "後のチンギス・ハーン。草原を彷徨う若き戦士。鷹のような鋭い眼光と誰にも屈しない魂を持つ。",
    description_en:
      "The future Genghis Khan — a wandering young warrior with an eagle's eyes and an unbreakable will.",
    personality_keywords: ["fierce", "proud", "curious", "loyal", "visionary"],
    visual_description: "20歳のモンゴル人男性。日焼けした銅色の肌。鷹のような眼。モンゴルの革鎧。弓矢を常に携帯。",
    costume: { primary: "茶色と深青のモンゴルのデール（ローブ）に革鎧。狼の牙のネックレス" },
    voice_style: "若いが命令的。生の活力。モンゴル訛り。",
    lora_trigger: "temujin_young_mongol_warrior",
  },
  {
    id: "mitsuhide",
    name_ja: "明智光秀",
    name_en: "Akechi Mitsuhide",
    age: 55,
    role: "antagonist",
    era: "戦国日本 (1582)",
    archetype: "悲劇の謀反人",
    description_ja:
      "信長の家臣にして謀反人。「時は今」という決断の重さを背負い、本能寺の炎に消えた主君の死を確認しに行く。",
    description_en:
      "Nobunaga's most trusted general turned betrayer. He seeks to confirm his lord's death in the flames — and finds nothing.",
    personality_keywords: ["intellectual", "conflicted", "melancholic", "principled"],
    visual_description: "55歳の日本人男性。蒼白な顔と深い悲しみの目。青銀の鎧。血のついていない、完璧に整った装い。",
    costume: { primary: "明智家紋の青銀の当世具足。白い袴" },
    voice_style: "洗練されて、詩的で、取り憑かれている。ゆっくりと、毎言葉を量る。",
    lora_trigger: "mitsuhide_samurai_general",
  },
  {
    id: "ranmaru",
    name_ja: "森蘭丸",
    name_en: "Mori Ranmaru",
    age: 18,
    role: "supporting",
    era: "戦国日本 (1582)",
    archetype: "忠臣 / 犠牲的英雄",
    description_ja:
      "信長の小姓。若さと美しさの中に武将としての確固たる気概を持つ。本能寺の夜、主君を守るために命を賭ける。",
    description_en:
      "Nobunaga's trusted page — youth and beauty housing a warrior's iron will. He lays down his life at Honnoji.",
    personality_keywords: ["devoted", "brave", "elegant", "selfless"],
    visual_description: "18歳の日本人男性。中性的な美しい顔立ち。赤と金の軽鎧。優雅な動き。",
    costume: { primary: "赤と金の当世具足。赤い袴。腰の脇差" },
    voice_style: "若く、明確で、圧力下でも揺るぎない。最後のシーンで一度だけ声が割れる。",
    lora_trigger: "ranmaru_young_samurai_page",
  },
  {
    id: "observer",
    name_ja: "観測者",
    name_en: "The Observer",
    age: -1,
    role: "mysterious",
    era: "時代不明",
    archetype: "宇宙の観察者 / 運命の使者",
    description_ja:
      "時間と空間の外に存在する謎の人物。信長の転移を引き起こした存在かもしれない。性別・年齢不明。",
    description_en:
      "An entity beyond time. May have engineered Nobunaga's transfer. Gender and age unknown. Always watching.",
    personality_keywords: ["enigmatic", "ancient", "detached", "silent"],
    visual_description: "性別不明の人物。光を吸収する黒いローブ。影の中の顔。銀色に輝く目。地面に触れない動き。",
    costume: { primary: "形のない黒いローブ。装飾品なし（喉元の小さな銀の円板を除く）" },
    voice_style: "ほとんど話さない。話す時は複数の方向から聞こえる。ささやき声。",
    lora_trigger: "observer_cosmic_entity",
  },
  {
    id: "borte",
    name_ja: "ボルテ",
    name_en: "Borte",
    age: 18,
    role: "supporting",
    era: "12世紀モンゴル",
    archetype: "未来の皇后 / 鉄の意志の女性",
    description_ja:
      "テムジンの妻。彼の強さを誰より深く理解する。信長という異人の出現に、冷静な判断を下す。",
    description_en:
      "Temujin's wife. She understands his strength more deeply than anyone — and reads Nobunaga with cool precision.",
    personality_keywords: ["strong", "perceptive", "loyal", "pragmatic"],
    visual_description: "18歳のモンゴル人女性。力強いアーモンド型の黒い目。深青と赤のデール。銀の髪飾り。",
    costume: { primary: "金刺繍の青・赤のモンゴル女性デール。銀の髪飾り。腰の短刀" },
    voice_style: "直接的で明確。テムジンへは温かく、見知らぬ者へは冷静に評価する。",
    lora_trigger: "borte_mongolian_queen",
  },
  {
    id: "jamuka",
    name_ja: "ジャムカ",
    name_en: "Jamuka",
    age: 22,
    role: "supporting",
    era: "12世紀モンゴル",
    archetype: "義兄弟にして宿命のライバル",
    description_ja:
      "テムジンのアンダ（義兄弟）にして最大のライバル。信長の出現に対して、テムジンよりずっと警戒的に反応する。",
    description_en:
      "Temujin's sworn blood brother and greatest rival. He greets Nobunaga's arrival with far more suspicion than Temujin.",
    personality_keywords: ["proud", "strategic", "competitive", "suspicious"],
    visual_description: "22歳のモンゴル人男性。引き締まった俊敏な体つき。鋭い知的な目。黒い革鎧に狼の毛皮。",
    costume: { primary: "狼毛皮の肩当て付き暗褐色・黒のモンゴル鎧。弓と斧を常に携帯" },
    voice_style: "鋭く、短い。全ての文が小さな試練。競争心が滲み出る。",
    lora_trigger: "jamuka_mongolian_warrior",
  },
];

export function getCharacters(): Character[] {
  return characters;
}

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}

export function getEpisode01Summary() {
  return {
    id: "ep01",
    number: 1,
    title_ja: "本能寺の炎、蒼き草原へ",
    title_en: "Flames of Honnoji, To the Azure Steppe",
    duration_target_sec: 356,
    cut_count: 54,
    synopsis_ja:
      "天正十年六月二日。本能寺で明智光秀の謀反に遭った織田信長は、炎の中で死を迎えようとしていた。しかし謎の転移によって、彼は遙か昔のモンゴル高原に出現する。そこで若きテムジンと出会い、二つの魂の運命が交差し始める。",
    synopsis_en:
      "June 2nd, 1582. Oda Nobunaga faces death at Honnoji as Akechi Mitsuhide's forces close in. At the moment of his death, a mysterious force transports him across time and space to the Mongolian steppe — where he meets a young man named Temujin.",
    scenes: [
      { id: 1, name_ja: "序章 — 本能寺の夜",  cut_count: 8,  duration_sec: 42 },
      { id: 2, name_ja: "本能寺の戦い",        cut_count: 10, duration_sec: 65 },
      { id: 3, name_ja: "転移",               cut_count: 8,  duration_sec: 48 },
      { id: 4, name_ja: "モンゴル高原",        cut_count: 14, duration_sec: 98 },
      { id: 5, name_ja: "邂逅",               cut_count: 8,  duration_sec: 56 },
      { id: 6, name_ja: "エピローグ",          cut_count: 6,  duration_sec: 47 },
    ],
  };
}
