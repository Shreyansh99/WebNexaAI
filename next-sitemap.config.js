module.exports = {
  siteUrl: 'https://webnexaai.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}; 