const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Swedish Net`,
    description: `Säkerhet och teknik för samhällsviktiga anläggningar och funktioner`,
    author: `@irvingdc`,
    siteUrl: `https://www.swedishnet.se`
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.swedishnet.se",
        sitemap: "https://www.swedishnet.se/sitemap.xml",
        policy:
          process.env.GATSBY_ACTIVE_ENV === "QA"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        stylesheets: path.join(__dirname, "src/stylesheets"),
        locales: path.join(__dirname, "src/locales"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137967697-2",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#f57a52",
          "link-color": "#f57a52",
        },
      },
    },
  ],
};