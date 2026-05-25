import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第六天魔王、蒼き狼へ | NOBUNAGA: The Shadow of Khan",
  description:
    "本能寺で炎に消えた織田信長が、謎の転移によってモンゴル高原へ。若きテムジンとの邂逅が始まる。AI実写ドラマシリーズ。",
  keywords: ["織田信長", "テムジン", "チンギスハーン", "AI ドラマ", "本能寺", "モンゴル"],
  openGraph: {
    title: "第六天魔王、蒼き狼へ",
    description: "本能寺の炎から始まる、時を超えた邂逅。",
    type: "website",
  },
};

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/episodes/ep01", label: "第1話" },
  { href: "/characters", label: "キャラクター" },
  { href: "/world", label: "世界観" },
  { href: "/production", label: "AI制作" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink-900 text-stone-100 min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-900/95 backdrop-blur-sm border-b border-crimson-900/50">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            {/* ロゴ */}
            <a
              href="/"
              className="text-gold-500 font-bold tracking-widest text-sm shrink-0 hover:text-gold-400 transition-colors"
            >
              第六天魔王
            </a>

            {/* デスクトップナビ */}
            <div className="hidden sm:flex gap-1 text-xs text-stone-400">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 hover:text-gold-400 hover:bg-gold-600/5 transition-colors rounded tracking-widest text-ja"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* モバイルナビ (横スクロール) */}
            <div className="flex sm:hidden gap-3 text-xs text-stone-400 overflow-x-auto max-w-[70vw] scrollbar-hide">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap hover:text-gold-400 transition-colors tracking-wider text-ja shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="border-t border-crimson-900/30 mt-24 py-10 text-center">
          <p className="text-stone-500 text-xs tracking-widest mb-2">
            第六天魔王、蒼き狼へ / NOBUNAGA: The Shadow of Khan
          </p>
          <p className="text-stone-600 text-xs">
            AI実写ドラマシリーズ — Powered by Seedance2 / Higgsfield / Topview / Fish Audio
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-stone-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-stone-400 transition-colors text-ja"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
