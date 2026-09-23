import { permanentRedirect } from 'next/navigation';

const STATIC_PAGE_MAPPINGS = {
  'privacy-policy': '/privacy-policy',
  'terms-conditions': '/terms',
  'terms': '/terms',
  'disclaimer': '/disclaimer',
  'about-us': '/about-us',
  'about': '/about-us',
  'contact-us': '/contact-us',
  'contact': '/contact-us',
};

export default function LegacyBloggerStaticRedirect({ params }) {
  const rawSlug = decodeURIComponent(params?.slug || '').toLowerCase().replace(/\.html$/, '');

  for (const [key, dest] of Object.entries(STATIC_PAGE_MAPPINGS)) {
    if (rawSlug.includes(key)) {
      permanentRedirect(dest);
    }
  }

  permanentRedirect('/');
}
