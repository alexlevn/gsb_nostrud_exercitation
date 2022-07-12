import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;

  return (
    <div>
      <h3>{post.frontmatter.title}</h3>
    </div>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
