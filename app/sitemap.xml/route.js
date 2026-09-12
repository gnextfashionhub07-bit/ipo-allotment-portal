export async function GET() {
  const baseUrl = 'https://www.allotmentstatusofipo.in';
  
  const staticPages = [
    '',
    '/blog',
    '/blog/how-to-check-ipo-allotment-status',
    '/blog/what-happens-after-ipo-allotment',
    '/blog/xtranet-technologies-ipo-review',
    '/blog/dhoot-transmission-ipo-review',
    '/blog/reliance-power-share-value-today-price',
    '/p/about-us',
    '/p/contact-us',
    '/p/privacy-policy',
    '/p/terms',
    '/p/disclaimer',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${path === '' ? 'hourly' : 'daily'}</changefreq>
      <priority>${path === '' ? '1.0' : path.includes('/blog/') ? '0.8' : '0.6'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
