import { Link } from 'gatsby'
import React from 'react'

const link = {
  textDecoration: 'none',
  color: '#333333',
  fontSize: '1.1em',
  boxShadow: 'none',
  marginLeft: '10px',
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}`

  console.log('pathname = ', location.pathname)
  const header = (
    <h1
      style={{
        color: '#333333',
        marginTop: 0,
        backgroundColor: 'lightyellow',
      }}
    >
      <Link to={'/'}>{title}</Link>
    </h1>
  )
  return (
    <div>
      <header>{header}</header>
      <div>rootPath: {rootPath}</div>

      <main>{children}</main>
    </div>
  )
}

export default Layout
