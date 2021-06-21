import * as React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({ data }) => {
  const html = data.markdownRemark.html
  const { title, url, date } = data.markdownRemark.frontmatter
  deckDeckGoHighlightElement()

  return (
    <Layout>
      <Seo title={`${title} | Kriklivyy.js`} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
