import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      Home Page !
      <br />
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <div key={post.fields.slug}>
            <h4>{title}</h4>
            <div>{post.frontmatter.date}</div>
            <div>{post.excerpt}</div>
          </div>
        )
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
