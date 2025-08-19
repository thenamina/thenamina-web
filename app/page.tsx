export default function HomePage() {
  return (
    <main>
      {/* 🚀 Hero 區 */}
<section style={{ 
  padding: "80px 20px", 
  textAlign: "center", 
  background: "linear-gradient(135deg, #f0f4ff, #e6f0ff)" 
}}>
  <h1 style={{ 
    fontSize: "48px", 
    fontWeight: 900, 
    marginBottom: "20px",
    color: "#1a1a1a" 
  }}>
    The Namina
  </h1>

  <p style={{ 
    fontSize: "20px", 
    color: "#444", 
    maxWidth: "600px", 
    margin: "0 auto 30px" 
  }}>
    AI 八字智能起名平台 ✨  
    結合專業算法，為你提供獨一無二嘅名字建議。
  </p>
  <section style={{ textAlign: "center", padding: "80px 20px" }}>
  <h1 style={{ fontSize: "48px", fontWeight: 900, marginBottom: "20px" }}>
    The Namina
  </h1>
  <p style={{ fontSize: "20px", color: "#444", maxWidth: "600px", margin: "0 auto 30px" }}>
    AI 中文改名平台 — 一鍵生成獨特又有寓意嘅名字。
  </p>

  <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
    <a href="/name" className="cta">立即試用</a>
    <a href="/about" className="cta-outline">了解更多</a>
  </div>
</section>

      {/* 原本嘅內容 */}
      <section style={{ maxWidth: 960, width: '100%', padding: '32px 20px', margin: '0 auto' }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>THE NAMINA</div>

        <h1 style={{ margin: '12px 0 0', fontSize: 36 }}>AI 八字起名平台</h1>
        <p style={{ color: '#345', marginTop: 8, fontSize: 18 }}>
          融合 <strong>八字命理</strong> × <strong>父母期望</strong> × <strong>專業審核</strong>，
          為寶寶生成獨特專屬的好名字。
        </p>

        <a
          href="mailto:hello@thenamina.com"
          style={{
            display: 'inline-block',
            marginTop: 16,
            padding: '12px 16px',
            background: '#1363df',
            color: '#fff',
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          聯絡我們
        </a>

        <div style={{ marginTop: 28, borderTop: '1px dashed #e6eef6', paddingTop: 16 }}>
          <div style={{ fontWeight: 700 }}>功能特色</div>
          <ul style={{ margin: '8px 0', color: '#345', lineHeight: 1.7 }}>
            <li>以八字命盤精準推薦適合名字</li>
            <li>父母輸入期望元素進行優化</li>
            <li>專業審核確保寓意與發音美感</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "20px" }}>
  <a href="/name" className="cta">立即試用</a>
  <a href="/about" className="cta-outline">了解更多</a>
</div>
        </div>
      </section>
    </main>
  );
}
