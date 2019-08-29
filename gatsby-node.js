const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const BlogPosts = result.data.allWordpressPost.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })

  const Pages = result.data.allWordpressPage.edges
  Pages.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: PageTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })
}

