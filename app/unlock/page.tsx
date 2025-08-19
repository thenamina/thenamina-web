'use client';
import { useEffect, useState } from 'react';

export default function UnlockPage() {
  const [names, setNames] = useState<string[]|null>(null);

  useEffect(() => {
    // 簡化：重新 call 一次 API 生成 3 個名（正式版應用訂單ID/Session做校驗）
    (async () => {
      const res = await fetch('/api/generate', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ surname:'陳', gender:'boy' }) });
      const json = await res.json();
      // Demo：隨機補滿 3 個
      const pool = ['浩', '朗', '睿', '俊', '澤', '宥', '瑋', '穎', '悅', '芯', '諾'];
      const rnd = () => pool[Math.floor(Math.random()*pool.length)];
      const base = json.free as string;
      setNames([ base, base[0]+rnd()+rnd(), base[0]+rnd()+rnd() ]);
    })();
  }, []);

  return (
    <main className="container" style={{maxWidth:720}}>
      <h1>已解鎖：3 個候選名</h1>
      {!names ? <p>載入中…</p> : (
        <ul style={{fontSize:24, lineHeight:1.9}}>
          {names.map((n,i)=><li key={i}><strong>{n}</strong> — 好意頭、讀音順口</li>)}
        </ul>
      )}
      <a className="cta" href="mailto:hello@thenamina.com" style={{display:'inline-block', marginTop:10}}>需要專家再校對？</a>
    </main>
  );
}
