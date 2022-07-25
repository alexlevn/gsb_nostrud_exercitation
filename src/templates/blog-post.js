import * as React from 'react'

const BlogPostTemplate = ({ data, location }) => {
  return (
    <div>
      Template:
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default BlogPostTemplate
