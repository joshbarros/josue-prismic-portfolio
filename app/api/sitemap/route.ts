import { NextResponse } from 'next/server';

const baseUrl = 'https://goldenglowitsolutions.com';

const pages = [
  '',
  '/about',
  '/services',
  '/contact',
];

const locales = ['en', 'pt', 'es'];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((page) => {
    return locales
      .map((locale) => {
        const url = locale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`;
        const alternateLinks = locales
          .map((altLocale) => {
            const altUrl = altLocale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${altLocale}${page}`;
            return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}" />`;
          })
          .join('\n');

        return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page}" />
  </url>`;
      })
      .join('\n');
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
