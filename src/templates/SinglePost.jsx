import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({ data }) => {
  const { title, url, date } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title={`${title} | Kriklivyy.js`} />
      <h1>{title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        date
        title
        url
      }
    }
  }
`

export default SinglePost
