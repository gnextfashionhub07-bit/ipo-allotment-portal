import { permanentRedirect } from 'next/navigation';

const MAPPINGS = {
  'how-to-check-ipo-allotment-status': '/blog/how-to-check-ipo-allotment-status',
  'what-happens-after-ipo-allotment': '/blog/what-happens-after-ipo-allotment',
  'xtranet-technologies': '/blog/xtranet-technologies-ipo-review',
  'dhoot-transmission': '/blog/dhoot-transmission-ipo-review',
  'reliance-power': '/blog/reliance-power-share-value-today-price',
  'bajaj-housing': '/blog/bajaj-housing-finance-ipo-allotment-review',
  'indo-mim': '/blog/how-to-check-ipo-allotment-status',
  'manipal-hospitals': '/blog/how-to-check-ipo-allotment-status',
  'veritas-finance': '/blog/how-to-check-ipo-allotment-status',
  'blog-post': '/blog/how-to-check-ipo-allotment-status',
  'gmp-in-ipo': '/#gmp-calculator',
  'pro-tips': '/blog/how-to-check-ipo-allotment-status',
  'cut-off': '/blog/how-to-check-ipo-allotment-status',
};

export default function LegacyBloggerRedirect({ params }) {
  const slug = decodeURIComponent(params?.slug || '').toLowerCase();

  for (const [key, dest] of Object.entries(MAPPINGS)) {
    if (slug.includes(key)) {
      permanentRedirect(dest);
    }
  }

  permanentRedirect('/blog');
}
