import Image from 'next/image';
import './hero.css';

export default function HomePage() {
  return (
    <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>
      THE NAMINA
    </div>
    <main>
      {/* ===== HERO 左文右圖 ===== */}
      <section className="hero">
        <div className="container hero-wrap">
          {/* 左邊文字 */}
          <div className="hero-left">
            <div className="brand-badge">THE NAMINA</div>
            <h1 className="hero-title">AI 八字起名平台</h1>
            <p className="hero-sub">
              結合 <strong>八字喜用</strong> × <strong>父母期望</strong> × <strong>粵普音律</strong>，
              一鍵產生<strong>高質 3 個候選名</strong>（HK$10）。
            </p>
            <div className="hero-ctas">
              <a href="/name" className="cta">立即試用</a>
              <a href="/about" className="cta-outline">了解更多</a>
            </div>
          </div>

          {/* 右邊圖片 */}
          <div className="hero-right">
            <Image
              src="/hero.png"
              alt="The Namina hero"
              width={760}
              height={520}
              priority
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* ===== 你原本嘅內容：已放入 main 之內 ===== */}
      <section style={{ maxWidth: 960, width: '100%', padding: '32px 20px', margin: '0 auto' }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>THE NAMINA</div>

        <h1 style={{ margin: '12px 0 0', fontSize: 36 }}>AI 八字起名平台</h1>
        <p style={{ color: '#345', marginTop: 8, fontSize: 18 }}>
          融合 <strong>八字喜用</strong> × <strong>父母期望</strong> × <strong>專業評核</strong>，
          為寶寶生成高質候選名字。
        </p>

        <a
          href="mailto:hello@thenamina.com"
          style={{
            display: 'inline-block',
            marginTop: 16,
            padding: '12px 16px',
            background: '#1a36d4',
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
            <li>以八字喜用生成候選名字</li>
            <li>配合字形字義與音韻評分</li>
            <li>家長偏好與禁忌可自定</li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
          <a href="/name" className="cta">立即試用</a>
          <a href="/about" className="cta-outline">了解更多</a>
        </div>
      </section>
    </main>
  );
}
