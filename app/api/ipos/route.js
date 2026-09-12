import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 60 seconds

const FALLBACK_IPOS = [
  { name: 'Farm Peace IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹24 (24%)' },
  { name: 'Fly-Hi Maritime IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹18 (18%)' },
  { name: 'Qualiance International IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹35 (35%)' },
  { name: 'Apana Logistics IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹12 (12%)' },
  { name: 'Amtech Esters IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹40 (40%)' },
  { name: 'Vinod Texworld IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹15 (15%)' },
  { name: 'Infrax Renewable IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹28 (28%)' },
  { name: 'Raksan Transformers IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹32 (32%)' },
  { name: 'Panchatv Bharat IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹10 (10%)' },
  { name: 'Om Galaxy IPO', issue_type: 'SME IPO', min_price: '90', max_price: '100', allotment_date: '08 Sep 2026', registrar_name: 'Bigshare / Maashitla', status: 'Subscription Open', gmp: '₹20 (20%)' }
];

export async function GET() {
  try {
    const res = await fetch('https://ipo-api-proxy.gnextfashionhub07.workers.dev', {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return NextResponse.json({ success: true, source: 'fallback', data: FALLBACK_IPOS });
    }

    const data = await res.json();
    if (data && data.data && data.data.length > 0) {
      return NextResponse.json({ success: true, source: 'live_worker', data: data.data });
    }

    return NextResponse.json({ success: true, source: 'fallback', data: FALLBACK_IPOS });
  } catch (error) {
    return NextResponse.json({ success: true, source: 'fallback_error', data: FALLBACK_IPOS });
  }
}
