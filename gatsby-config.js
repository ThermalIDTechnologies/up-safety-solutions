require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Up Safety Solutions`,
    description: `Up Safety Solutions provides quality personal protective equipment, safety equipment and clothing for various industries. We carry a wide range of safety equipment and clothing: safety glasses, respirators, protective sleeves, boot covers, non-slip boots and latex gloves to name a few. Let us be your go to safety equipment supplier for all of your industries needs; whether you are in food, cannabis, construction or manufacturing we have got you covered. Thank you for shopping with us for all of your safety needs!`,
    author: `Up Safety Solutions`,
    siteUrl: `https://www.upsafetysolutions.com`,
    nav: [
      { path: '/all-products', name: 'All Products' },
      { path: '/#category-head-face-protection', name: 'Head and Face Protection' },
      { path: '/#category-protective-apparel', name: 'Protective Apparel' },
      { path: '/#category-eyewear', name: 'Eyewear' },
      { path: '/about-us', name: 'About Us' },
      { path: '/contact-us', name: 'Contact' },
    ],
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
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/UPSafety-Logo-VERTICAL.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/UPSafety-Logo-VERTICAL.png",
   
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
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
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `sku`],
        resolvers: {
          PrismicProduct: {
            title: node => node.data.title.text,
            sku: node => node.data.item_code_sku.text,
            img: node => node.data.cart_image.url,
            path: node => node.uid,
          },
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
