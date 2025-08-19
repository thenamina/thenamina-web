'use client';
import { useEffect } from 'react';

declare global {
  interface Window { paypal: any }
}

export default function PayPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=HKD&intent=capture`;
    script.onload = () => {
      window.paypal.Buttons({
        style: { shape:'pill', layout:'vertical', label:'pay' },
        createOrder: (_:any, actions:any) => actions.order.create({
          purchase_units: [{ amount: { currency_code:'HKD', value:'10.00' }, description:'The Namina - 3 候選名' }]
        }),
        onApprove: async (_:any, actions:any) => {
          await actions.order.capture();
          // 付款完成 → 跳去解鎖頁
          window.location.href = '/unlock';
        }
      }).render('#paypal-btn');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main className="container" style={{maxWidth:600}}>
      <h1>HK$10 解鎖</h1>
      <p style={{color:'#46566e'}}>付款後即時顯示 3 個候選名 + 簡短解釋。</p>
      <div id="paypal-btn" />
    </main>
  );
}
