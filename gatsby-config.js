// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)
const tailwindConfig = require("./tailwind.config.js")

module.exports = {
  //configuration object
  trailingSlash: `always`,
  siteMetadata: {
    title: `OKEBET`,
    description: `OKEBET is the partnership of father and son bookmakers Norm and Gary Oke and M.B. Opie and S.C. McKay. Norm was first licensed as a Victorian bookmaker in 1998 and has worked at Victorian city and country race meetings. Norm currently works at all Melbourne metro tracks and several Victorian provincial tracks.`,
    author: `@okebet`,
    siteUrl: `https://okebet.infusion121.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({
            stage: 0,
          }),
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: `${__dirname}/src/templates`,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "OKEBET - Victorian bookmaker",
        short_name: "OKEBET",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#02111d",
        theme_color: "#02111d",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        sections: path.join(__dirname, "src/sections"),
        images: path.join(__dirname, "src/images"),
        styles: path.join(__dirname, "src/styles"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://admin.okbet.infusion121.com/graphql`,
      },
    },
    {
      // Dont include url from SSG
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/contact-iframe"] },
    },
  ],
}
