import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_TC({ weight: ['400','700','900'], subsets: ['latin'] });

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
      <body className={noto.className}>
        {children}
      </body>
    </html>
  );
}
