import GatsbyLink from 'gatsby-link'
import React from 'react'

const Template = (props) => {
  console.log('Template:')

  console.log('props = ', props)
  console.log('pageResources = ', props.pageResources)
  console.log('path = ', props.pageResources.page.path)
  return (
    <div>
      Template:
      <p>{props.pageResources.page.path}</p>
      <GatsbyLink to="/">Home</GatsbyLink>
    </div>
  )
}

export default Template
