import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <PageTransition>
      <SEO title="About Us" />
      <h1>ABOUT US</h1>
      <p>
        COMING SOON!
      </p>
    </PageTransition>
  </Layout>
)

export default AboutUs
