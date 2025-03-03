/** @type {import('next-sitemap').IConfig} */
const { menuItems } = require('./src/components/phone/menu.ts');

module.exports = {
  siteUrl: 'https://www.willingbhutan.com',  
  generateRobotsTxt: true, 
  sitemapSize: 10000, 
  changefreq: 'daily',  
  priority: 0.7, 
  exclude: ['/not-found'], 
  transform: async (config, path) => {
    // Define metadata for each menu item
    const dynamicPages = menuItems.reduce((acc, item) => {
      acc[item.href] = { priority: 0.8, changefreq: 'monthly' };
      return acc;
    }, {});

    // Check if the current path matches a dynamic page
    if (dynamicPages[path]) {
      return {
        loc: path,  // Location of the page
        priority: dynamicPages[path].priority,  
        changefreq: dynamicPages[path].changefreq, 
      };
    }

    // Default transformation for other pages
    return {
      loc: path,
      priority: config.priority,
      changefreq: config.changefreq,
    };
  },
  trailingSlash: false,  
};
