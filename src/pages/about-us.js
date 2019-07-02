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
      Up Safety Solutions provides quality safety equipment and clothing for various industries. We carry a wide range of safety equipment and clothing: safety glasses, respirators, protective sleeves, boot covers, non-slip boots and latex gloves to name a few. Let us be your go to safety equipment supplier for all of your industries needs; whether you are in food, cannabis, construction or manufacturing we have got you covered. Thank you for shopping with us for all of your safety needs!
      </p>
    </PageTransition>
  </Layout>
)

export default AboutUs
