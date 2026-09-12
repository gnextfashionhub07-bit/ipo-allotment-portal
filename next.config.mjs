/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.allotmentstatusofipo.in', 'blogger.googleusercontent.com', 'images.unsplash.com'],
  },
  async redirects() {
    return [
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
      }
    ];
  }
};

export default nextConfig;
