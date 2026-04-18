/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lughastudio.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Set to true if you have thousands of pages
  sitemapSize: 5000,
  exclude: ['/admin', '/api/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      // Ensure images are included for search indexing
      images: [
      {
        loc: 'https://lughastudio.com/og-image.jpg',
        title: 'Lugha Studio - Swahili Learning',
      }
    ],
    };
  },
};