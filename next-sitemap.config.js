/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lughastudio.com',
  generateRobotsTxt: true,
  exclude: ['/admin', '/api/*'],
  
  // Explicitly define your routes
  additionalPaths: async (config) => {
    const pages = [
      '/', '/about', '/contact', '/corporate', '/faq', 
      '/legal', '/methodology', '/play', '/pricing', 
      '/resources', '/services', '/testimonials'
    ];
    
    return pages.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};