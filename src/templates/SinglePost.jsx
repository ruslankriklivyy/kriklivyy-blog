import * as React from "react"
import { graphql } from "gatsby"
import Gitalk from "gatsby-plugin-gitalk"
import "@suziwen/gitalk/dist/gitalk.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({ data }) => {
  const html = data.markdownRemark.html
  const { title, url, date } = data.markdownRemark.frontmatter
  let gitalkConfig = {
    id: url,
    title,
  }

  deckDeckGoHighlightElement()

  return (
    <Layout>
      <div className="single-post">
        <Seo title={`${title} | Kriklivyy Blog`} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Gitalk options={gitalkConfig} />
      </div>
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
