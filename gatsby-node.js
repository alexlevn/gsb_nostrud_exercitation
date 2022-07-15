const path = require('path')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPagesaaa = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `,
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
      },
    })
  })
}

// ERROR 2: -----
// const path = require('path')

// exports.createPages = (props) => {
//   const { boundActionCreators, graphql } = props;
//   console.log('boundActionCreators = ', boundActionCreators)
//   console.log('graphql = ', graphql)
//   console.log('props = ', props)
//   const { createPage } = boundActionCreators

//   const postTemplate = path.resolve('src/templates/post.js')

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then((res) => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }

//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: postTemplate,
//       })
//     })
//   })
// }

// ERROR --------
// const path = require('path')

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   const postTemplate = path.resolve('/src/templates/post.js')

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then((res) => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }

//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: postTemplate,
//       })
//     })
//   })
// }
