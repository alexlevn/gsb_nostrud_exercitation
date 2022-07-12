import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  // console.log('data = ', data)

  return (
    <Layout title={'Overreacted'} location={location}>
      <main className="m-5">
        
        <h1 className="text-xl font-normal no-underline text-red-400">
          daily.dev
        </h1>
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    
  }
`

// ... what bugs?

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }

//     allMarkdownRemark(sort: { fields: [frontmatter__date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `

// http://localhost:8000/___graphql
// http://localhost:3000/__graphql
