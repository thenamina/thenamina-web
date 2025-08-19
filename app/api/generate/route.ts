import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const surname = (body.surname || '').toString().trim();
  const gender = (body.gender || 'boy') as 'boy'|'girl';
  const wishes = (body.wishes || '').toString();

  // TODO: 之後在此處接入真正八字 + 字庫演算法
  // Demo：簡易字庫
  const poolBoy = ['浩', '朗', '睿', '俊', '澤', '宥'];
  const poolGirl = ['瑋', '穎', '悅', '芯', '穗', '諾'];
  const pick = (arr:string[]) => arr[Math.floor(Math.random()*arr.length)];

  const name1 = surname + pick(gender === 'boy' ? poolBoy : poolGirl) + pick(gender === 'boy' ? poolBoy : poolGirl);
  const name2 = surname + pick(gender === 'boy' ? poolBoy : poolGirl) + pick(gender === 'boy' ? poolBoy : poolGirl);
  const name3 = surname + pick(gender === 'boy' ? poolBoy : poolGirl) + pick(gender === 'boy' ? poolBoy : poolGirl);

  // 免費只展示第一個
  return NextResponse.json({
    free: name1,
    // full: [name1, name2, name3], // 付款後再顯示
  });
}
