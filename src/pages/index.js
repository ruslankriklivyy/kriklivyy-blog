import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About"
import Posts from "../components/Posts"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="All posts | Kriklivyy.js" />
      <About />
      <Posts />
    </Layout>
  )
}

export default IndexPage
