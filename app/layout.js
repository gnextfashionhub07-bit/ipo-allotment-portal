import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SchemaJsonLd from '../components/SchemaJsonLd';
import AgentationDev from '../components/AgentationDev';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.allotmentstatusofipo.in'),
  title: 'IPO Allotment Status Direct Portal & Live GMP Tracker 2026',
  description: 'Check live IPO allotment status instantly via Link Intime, KFintech, and Bigshare official registrars. Real-time GMP tracker, SEBI T+3 allotment dates, and ASBA bidding guides.',
  keywords: 'ipo allotment status, check ipo allotment, link intime ipo status, kfintech ipo allotment, ipo gmp today, live ipo tracker 2026',
  authors: [{ name: 'Mahesh Chavan', url: 'https://www.allotmentstatusofipo.in/about-us' }],
  creator: 'Mahesh Chavan',
  openGraph: {
    title: 'IPO Allotment Status Direct Portal & Live GMP Tracker 2026',
    description: 'Instant PAN search and live IPO allotment results across Link Intime, KFintech, Bigshare, and BSE/NSE.',
    url: 'https://www.allotmentstatusofipo.in/',
    siteName: 'Allotment Status of IPO',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-7009095515039268',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* RAW ADSENSE SCRIPT FOR VERIFICATION BOT */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7009095515039268"
          crossOrigin="anonymous"
        ></script>

        {/* GOOGLE ANALYTICS (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0NENXEQGRC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NENXEQGRC');
          `}
        </Script>

        {/* GOOGLE TAG MANAGER */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJSQH5M3');
          `}
        </Script>

        {/* ERROR GUARD FOR 3RD PARTY SCRIPTS & EXTENSIONS IN DEV */}
        <Script id="dev-error-guard" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.addEventListener('unhandledrejection', function(event) {
                if (event.reason && (
                  event.reason.message === 'Failed to fetch' || 
                  (event.reason.stack && event.reason.stack.includes('swg-basic.js')) ||
                  (event.reason.stack && event.reason.stack.includes('chrome-extension'))
                )) {
                  event.preventDefault();
                }
              });
            }
          `}
        </Script>

        {/* GOOGLE READER REVENUE MANAGER (Production Only) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              async
              src="https://news.google.com/swg/js/v1/swg-basic.js"
              strategy="afterInteractive"
            />
            <Script id="reader-revenue-manager" strategy="afterInteractive">
              {`
                try {
                  (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
                    basicSubscriptions.init({
                      type: "NewsArticle",
                      isPartOfType: ["Product"],
                      isPartOfProductId: "CAowmbXMDA:openaccess",
                      clientOptions: { theme: "light", lang: "en" },
                    });
                  });
                } catch(e) {}
              `}
            </Script>
          </>
        )}
        
        <SchemaJsonLd />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AgentationDev />
      </body>
    </html>
  );
}
