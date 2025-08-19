import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Namina — AI 八字起名平台',
  description: 'AI + 八字演算法，為新生寶寶生成貼合命格與父母期望的好名。',
  openGraph: {
    title: 'The Namina — AI 八字起名平台',
    description: 'AI + 八字演算法，為新生寶寶生成貼合命格與父母期望的好名。',
    url: 'https://thenamina.com',
    siteName: 'The Namina',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'zh-HK',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, system-ui, Segoe UI, Roboto, Noto Sans, PingFang HK, sans-serif',
          background: '#f7fbff',
        }}
      >
        {children}
      </body>
    </html>
  );
}
