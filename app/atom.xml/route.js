import { ARTICLES } from '../../content/articles';

export async function GET() {
  const baseUrl = 'https://www.allotmentstatusofipo.in';
  
  const staticPages = [
    '',
    '/blog',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  const blogPages = ARTICLES.map((a) => `/blog/${a.slug}`);
  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${path === '' ? 'hourly' : 'daily'}</changefreq>
      <priority>${path === '' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.6'}</priority>
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
