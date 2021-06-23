import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PostItem from "./PostItem"

import "./posts.scss"

const Posts = () => {
  return (
    <div className="posts">
      <StaticQuery
        query={postsQuery}
        render={data => {
          return (
            <>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostItem key={node.id} {...node.frontmatter} />
              ))}
            </>
          )
        }}
      />
    </div>
  )
}

const postsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            descr
            url
            poster
          }
        }
      }
    }
  }
`

export default Posts
