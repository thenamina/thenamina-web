export default function Home() {
  return (
    <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center' }}>
      <section style={{ maxWidth: 860, width: '100%', padding: '32px 20px' }}>
        {/* 簡單字標 */}
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>THE NAMINA</div>

        <h1 style={{ margin: '12px 0 0', fontSize: 36 }}>AI 八字起名平台</h1>
        <p style={{ color: '#345', marginTop: 8, fontSize: 18 }}>
          結合 <strong>八字喜用</strong> × <strong>父母期望</strong> × <strong>粵普音律</strong>，
          為寶寶生成高質名字與清晰解釋。
        </p>

        <a
          href="mailto:hello@thenamina.com"
          style={{
            display: 'inline-block',
            marginTop: 16,
            padding: '12px 16px',
            background: '#1363ff',
            color: '#fff',
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          聯絡我們
        </a>

        <div style={{ marginTop: 28, borderTop: '1px dashed #e6eef6', paddingTop: 16 }}>
          <div style={{ fontWeight: 700 }}>賣點</div>
          <ul style={{ margin: '8px 0 0', color: '#345', lineHeight: 1.7 }}>
            <li>八字喜用匹配（相生流通優先）</li>
            <li>父母期望語義權重化挑選</li>
            <li>粵普音律檢查與諧音避忌</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
