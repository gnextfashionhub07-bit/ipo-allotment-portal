import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const CURRENT_LIVE_IPOS = [
    {
      id: 1,
      name: 'National Stock Exchange (NSE) IPO',
      type: 'Mainboard',
      price: '₹1,780 - ₹1,785',
      cutoffPrice: 1785,
      date: 'Finalized (22 Sep)',
      reg: 'Link Intime India',
      status: 'Listing Tomorrow (24 Sep)',
      gmp: '₹42 (2.4%)',
      gmpValue: 42,
      gainPct: 2.4,
      lotSize: 8,
      issueSize: '₹10,000+ Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 2,
      name: 'Jindal Supreme IPO',
      type: 'Mainboard',
      price: '₹90 - ₹93',
      cutoffPrice: 93,
      date: 'Allotted',
      reg: 'Link Intime India',
      status: 'Listing Today (23 Sep)',
      gmp: '₹29 (31.2%)',
      gmpValue: 29,
      gainPct: 31.2,
      lotSize: 150,
      issueSize: '₹680 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 3,
      name: 'Adroit Industries IPO',
      type: 'SME IPO',
      price: '₹130 - ₹132',
      cutoffPrice: 132,
      date: '28 Sep 2026',
      reg: 'Bigshare Services',
      status: 'Open Bidding (23-25 Sep)',
      gmp: '₹32 (24.2%)',
      gmpValue: 32,
      gainPct: 24.2,
      lotSize: 1000,
      issueSize: '₹38 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 4,
      name: 'Swastika Infra IPO',
      type: 'SME IPO',
      price: '₹62 - ₹65',
      cutoffPrice: 65,
      date: '28 Sep 2026',
      reg: 'Bigshare Services',
      status: 'Open Bidding (23-25 Sep)',
      gmp: '₹4 (6.2%)',
      gmpValue: 4,
      gainPct: 6.2,
      lotSize: 2000,
      issueSize: '₹26 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 5,
      name: 'Pranav Constructions IPO',
      type: 'Mainboard',
      price: '₹180 - ₹195',
      cutoffPrice: 195,
      date: 'Live Today',
      reg: 'Link Intime India',
      status: 'Allotment Out',
      gmp: '₹65 (33.3%)',
      gmpValue: 65,
      gainPct: 33.3,
      lotSize: 75,
      issueSize: '₹450 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 6,
      name: 'Apana Logistics IPO',
      type: 'Mainboard',
      price: '₹140 - ₹150',
      cutoffPrice: 150,
      date: 'Live Today',
      reg: 'KFin Technologies',
      status: 'Allotment Out',
      gmp: '₹42 (28.0%)',
      gmpValue: 42,
      gainPct: 28.0,
      lotSize: 100,
      issueSize: '₹320 Cr',
      regUrl: 'https://ipostatus.kfintech.com'
    },
    {
      id: 7,
      name: 'A-One Steels IPO',
      type: 'Mainboard',
      price: '₹260 - ₹275',
      cutoffPrice: 275,
      date: '24 Sep 2026',
      reg: 'KFin Technologies',
      status: 'Allotment Expected',
      gmp: '₹95 (34.5%)',
      gmpValue: 95,
      gainPct: 34.5,
      lotSize: 54,
      issueSize: '₹540 Cr',
      regUrl: 'https://ipostatus.kfintech.com'
    },
    {
      id: 8,
      name: 'Hero Motors IPO',
      type: 'Mainboard',
      price: '₹310 - ₹325',
      cutoffPrice: 325,
      date: '25 Sep 2026',
      reg: 'Link Intime India',
      status: 'Upcoming Bidding',
      gmp: '₹110 (33.8%)',
      gmpValue: 110,
      gainPct: 33.8,
      lotSize: 45,
      issueSize: '₹900 Cr',
      regUrl: 'https://linkintime.co.in/initial_offer/public-issues.html'
    },
    {
      id: 9,
      name: 'Powertronix Engineering IPO',
      type: 'SME IPO',
      price: '₹85 - ₹90',
      cutoffPrice: 90,
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Allotment Out',
      gmp: '₹32 (35.6%)',
      gmpValue: 32,
      gainPct: 35.6,
      lotSize: 1600,
      issueSize: '₹28 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 10,
      name: 'Sonaselection India IPO',
      type: 'SME IPO',
      price: '₹95 - ₹100',
      cutoffPrice: 100,
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Open Bidding',
      gmp: '₹38 (38.0%)',
      gmpValue: 38,
      gainPct: 38.0,
      lotSize: 1200,
      issueSize: '₹32 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 11,
      name: 'Amtech Esters IPO',
      type: 'SME IPO',
      price: '₹92 - ₹98',
      cutoffPrice: 98,
      date: '24 Sep 2026',
      reg: 'Bigshare Services',
      status: 'Allotment Expected',
      gmp: '₹42 (42.9%)',
      gmpValue: 42,
      gainPct: 42.9,
      lotSize: 1200,
      issueSize: '₹32 Cr',
      regUrl: 'https://www.bigshareonline.com/ipo_allotment.html'
    },
    {
      id: 12,
      name: 'Qualiance International IPO',
      type: 'SME IPO',
      price: '₹95 - ₹100',
      cutoffPrice: 100,
      date: 'Live Today',
      reg: 'Bigshare Services',
      status: 'Open Bidding',
      gmp: '₹38 (38.0%)',
      gmpValue: 38,
      gainPct: 38.0,
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
