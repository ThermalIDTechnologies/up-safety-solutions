require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Up Safety Solutions`,
    description: `Up Safety Solutions provides quality safety equipment and clothing for various industries.`,
    author: `Up Safety Solutions`,
    siteUrl: `https://www.upsafetysolutions.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Up Safety Solutions`,
        short_name: `UpSafety`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/UPSafety-Logo-VERTICAL.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `upsafetysolutions`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => product => `/${product.uid}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Zilla Slab`,
            variants: [`600`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-v2-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116389826-1",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ],
}
