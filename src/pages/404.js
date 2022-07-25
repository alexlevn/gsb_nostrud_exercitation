import * as React from 'react'
import { graphql } from 'gatsby'

const NotFoundPage = () => {
  return (
    <div>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <h1>404: Not Found</h1>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
