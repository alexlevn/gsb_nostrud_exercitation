import { graphql } from 'gatsby'
import * as React from 'react'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <main>
      Home Page !
      <br />
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <div key={post.fields.slug}>
            <h2>{title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </main>
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
`
