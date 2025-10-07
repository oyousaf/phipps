/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://phippsopticians.uk",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/outreach", "/outreach/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/outreach", "/outreach/"],
        allow: "/",
      },
    ],
  },
};
