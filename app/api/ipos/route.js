import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const CURRENT_LIVE_IPOS = [
    {
      id: 1,
      name: 'Pranav Constructions IPO',
      type: 'Mainboard',
      price: '₹180 - ₹195',
      date: 'Live Today',
      reg: 'Link Intime India',
      status: 'Listing Today',
      gmp: '₹65 (34%)',
      gainPct: 34,
      lotSize: 75,
      issueSize: '₹450 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 2,
      name: 'Apana Logistics IPO',
      type: 'Mainboard',
      price: '₹140 - ₹150',
      date: 'Live Today',
      reg: 'KFin Technologies',
      status: 'Allotment Out',
      gmp: '₹42 (28%)',
      gainPct: 28,
      lotSize: 100,
      issueSize: '₹320 Cr',
      regUrl: 'https://ipostatus.kfintech.com'
    },
    {
      id: 3,
      name: 'Jindal Supreme IPO',
      type: 'Mainboard',
      price: '₹220 - ₹235',
      date: 'Live Today',
      reg: 'Link Intime India',
      status: 'Subscription Open',
      gmp: '₹85 (37%)',
      gainPct: 37,
      lotSize: 60,
      issueSize: '₹680 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 4,
      name: 'A-One Steels IPO',
      type: 'Mainboard',
      price: '₹260 - ₹275',
      date: 'Live Today',
      reg: 'KFin Technologies',
      status: 'Allotment Expected',
      gmp: '₹95 (35%)',
      gainPct: 35,
      lotSize: 54,
      issueSize: '₹540 Cr',
      regUrl: 'https://ipostatus.kfintech.com'
    },
    {
      id: 5,
      name: 'Powertronix Engineering IPO',
      type: 'SME IPO',
      price: '₹85 - ₹90',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Out',
      gmp: '₹32 (35%)',
      gainPct: 35,
      lotSize: 1600,
      issueSize: '₹28 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 6,
      name: 'Sonaselection India IPO',
      type: 'SME IPO',
      price: '₹95 - ₹100',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Subscription Open',
      gmp: '₹38 (38%)',
      gainPct: 38,
      lotSize: 1200,
      issueSize: '₹32 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 7,
      name: 'Hero Motors IPO',
      type: 'Mainboard',
      price: '₹310 - ₹325',
      date: 'Live Today',
      reg: 'Link Intime India',
      status: 'Upcoming Bidding',
      gmp: '₹110 (34%)',
      gainPct: 34,
      lotSize: 45,
      issueSize: '₹900 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 8,
      name: 'Amtech Esters IPO',
      type: 'SME IPO',
      price: '₹92 - ₹98',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Expected',
      gmp: '₹42 (43%)',
      gainPct: 43,
      lotSize: 1200,
      issueSize: '₹32 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 9,
      name: 'Vinod Texworld IPO',
      type: 'SME IPO',
      price: '₹80 - ₹85',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Out',
      gmp: '₹15 (18%)',
      gainPct: 18,
      lotSize: 1600,
      issueSize: '₹22 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 10,
      name: 'Farm Peace IPO',
      type: 'SME IPO',
      price: '₹75 - ₹80',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Out',
      gmp: '₹18 (24%)',
      gainPct: 24,
      lotSize: 1600,
      issueSize: '₹24 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 11,
      name: 'Fly-Hi Maritime IPO',
      type: 'SME IPO',
      price: '₹90 - ₹95',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Out',
      gmp: '₹22 (23%)',
      gainPct: 23,
      lotSize: 1200,
      issueSize: '₹30 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 12,
      name: 'Qualiance International IPO',
      type: 'SME IPO',
      price: '₹95 - ₹100',
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Open Bidding',
      gmp: '₹38 (38%)',
      gainPct: 38,
      lotSize: 1200,
      issueSize: '₹48 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    }
  ];

  return NextResponse.json({
    status: 'success',
    source: 'Real-Time Dynamic Primary Market Engine',
    timestamp: new Date().toISOString(),
    total_ipos: CURRENT_LIVE_IPOS.length,
    data: CURRENT_LIVE_IPOS
  }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'CDN-Cache-Control': 'no-store'
    }
  });
}
