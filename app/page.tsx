export default function HomePage() {
  return (
    <main>
      {/* 🚀 Banner 區域 */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h1>🚀 The Namina</h1>
        <p>AI 八字起名平台</p>
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
        </div>
      </section>
    </main>
  );
}
