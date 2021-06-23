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

  const posts = data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    const { url } = node.frontmatter
    actions.createPage({
      path: `/posts${url}`,
      component: path.resolve("./src/templates/SinglePost.jsx"),
      context: {
        url,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}
