'use client';
import { useState } from 'react';

type Gender = 'boy' | 'girl';

export default function NameFormPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{free:string; full?:string[]} | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    setLoading(false);
    setResult(json);
  }

  return (
    <main className="container" style={{maxWidth:720}}>
      <h1>為 BB 取名</h1>
      <p style={{color:'#46566e'}}>免費睇 1 個參考名；付款 HK$10 即可解鎖 3 個候選名 + 簡短解釋。</p>

      <form onSubmit={onSubmit} style={{display:'grid', gap:12, background:'#fff', border:'1px solid #e6eef6', borderRadius:12, padding:16}}>
        <label>姓氏（中文）
          <input name="surname" required placeholder="陳 / 李 / 王" style={inputStyle}/>
        </label>

        <label>性別
          <select name="gender" defaultValue={'boy'} style={inputStyle as any}>
            <option value="boy">男</option>
            <option value="girl">女</option>
          </select>
        </label>

        <label>出生日期（公曆）
          <input type="date" name="birthDate" required style={inputStyle}/>
        </label>

        <label>出生時間
          <input type="time" name="birthTime" required style={inputStyle}/>
        </label>

        <label>父母期望（以逗號分隔 3–5 個）
          <input name="wishes" placeholder="仁、慧、樂觀、健康、創意" style={inputStyle}/>
        </label>

        <button disabled={loading} className="cta" type="submit">
          {loading ? '生成中…' : '生成名字'}
        </button>
      </form>

      {/* 結果展示 */}
      {result && (
        <section className="card" style={{marginTop:16}}>
          <h3>免費參考名</h3>
          <p style={{fontSize:22, fontWeight:800}}>{result.free}</p>

          <a className="cta" href="/pay" style={{marginTop:8, display:'inline-block'}}>HK$10 解鎖 3 個候選名</a>
        </section>
      )}
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  display:'block', width:'100%', padding:'12px 14px', border:'1px solid #e1e8f5', borderRadius:10, marginTop:6
};
