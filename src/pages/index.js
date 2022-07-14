import * as React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  console.log('data = ', data)

  return (
    <main className="m-5">
      <h1 className="text-xl font-normal no-underline text-red-400">
        daily.dev
      </h1>
      <Link to="/first-post">First Post</Link>
      <Link to="/sitemap/sitemap-index.xml">Site Map</Link>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
