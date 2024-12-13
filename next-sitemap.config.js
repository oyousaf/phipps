/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://phippsopticians.uk',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allow all bots access
      ],
    },
  };
  