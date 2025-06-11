/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      // Rewrite for sitemap
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      // Rewrite for robots
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;
