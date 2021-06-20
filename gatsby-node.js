const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                url
              }
            }
          }
        }
      }
    `
  )

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { url } = node.frontmatter
    actions.createPage({
      path: `/posts${url}`,
      component: path.resolve("./src/templates/SinglePost.jsx"),
      context: { url },
    })
  })
}
