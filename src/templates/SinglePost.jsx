import * as React from "react"
import { graphql } from "gatsby"
import Gitalk from "gatsby-plugin-gitalk"
import "@suziwen/gitalk/dist/gitalk.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavigationBtns from "../components/NavigationBtns"
import TopBtn from "../components/TopBtn"

const SinglePost = ({ data, pageContext }) => {
  const { next, prev } = pageContext
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
        {/* <TopBtn /> */}
        <Seo title={`${title} | Kriklivyy Blog`} />
        <h1>{title}</h1>
        <span className="single-post__date">{date}</span>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <NavigationBtns next={next} prev={prev} />
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
