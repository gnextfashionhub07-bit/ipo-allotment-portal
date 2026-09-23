/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.allotmentstatusofipo.in', 'blogger.googleusercontent.com', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      // Legacy specific Blogger posts mapping to active blog guides
      {
        source: '/2026/08/how-to-check-ipo-allotment-status_01577388511.html',
        destination: '/blog/how-to-check-ipo-allotment-status',
        permanent: true,
      },
      {
        source: '/2026/08/what-happens-after-ipo-allotment.html',
        destination: '/blog/what-happens-after-ipo-allotment',
        permanent: true,
      },
      {
        source: '/2026/08/xtranet-technologies-ipo-2026-review.html',
        destination: '/blog/xtranet-technologies-ipo-review',
        permanent: true,
      },
      {
        source: '/2026/08/dhoot-transmission-ipo-review-price-band-2026.html',
        destination: '/blog/dhoot-transmission-ipo-review',
        permanent: true,
      },
      {
        source: '/2026/08/reliance-power-share-value-today-price.html',
        destination: '/blog/reliance-power-share-value-today-price',
        permanent: true,
      },
      {
        source: '/2026/08/gmp-in-ipo.html',
        destination: '/#gmp-calculator',
        permanent: true,
      },
      {
        source: '/2026/08/indo-mim-ipo-2026-review.html',
        destination: '/blog/how-to-check-ipo-allotment-status',
        permanent: true,
      },
      {
        source: '/2026/08/manipal-hospitals-ipo-2026-review.html',
        destination: '/blog/how-to-check-ipo-allotment-status',
        permanent: true,
      },
      {
        source: '/2026/08/veritas-finance-ipo-drhp-details-2026.html',
        destination: '/blog/how-to-check-ipo-allotment-status',
        permanent: true,
      },
      // Clean root migration for policy pages (with and without .html)
      {
        source: '/p/privacy-policy:ext*',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/p/terms-conditions:ext*',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/p/disclaimer:ext*',
        destination: '/disclaimer',
        permanent: true,
      },
      {
        source: '/p/about-us:ext*',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/p/contact-us:ext*',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-conditions.html',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms.html',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/disclaimer.html',
        destination: '/disclaimer',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact-us.html',
        destination: '/contact-us',
        permanent: true,
      },
      // Old Blogger feeds and labels
      {
        source: '/atom.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/feeds/:path*',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/search/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Universal fallback for any legacy Blogger date-based URLs
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:slug*',
        destination: '/blog',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
