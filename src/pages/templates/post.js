import { graphql } from 'gatsby'
import React from 'react'
// import Helmet from 'react-helmet'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;

  // console.log('post = ', post)
  console.log('data = ', data)

  return (
    <div>
      {/* <h3>{post.frontmatter.title}</h3> */}
      Template file
    </div>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`
