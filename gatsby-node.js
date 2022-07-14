const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    ;['abc', 'def'].forEach((path) => {
      createPage({
        path: path,
        component: postTemplate,
      })
    })
  })
}
// const path = require('path');

// exports.createPages = ({boundActionCreators, graphql}) => {
//   const {createPage} = boundActionCreators;

//   return ["abc", "def"].map(name => {
//     createPage({
//       path: name,
//       // component: path.resolve('./src/templates/post.js'),
//       component: () => <div>Hello component: ${name}</div>,
//     })
//   }

// }
