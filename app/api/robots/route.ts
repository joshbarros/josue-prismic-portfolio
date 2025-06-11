import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Block admin areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.well-known/

# Allow all languages
Allow: /en/
Allow: /pt/
Allow: /es/

# Sitemap location
Sitemap: https://goldenglowitsolutions.com/sitemap.xml

# Crawl delay for polite crawling
Crawl-delay: 1

# Specific directives for major crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
