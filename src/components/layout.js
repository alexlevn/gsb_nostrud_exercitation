import { Link } from 'gatsby'
import React from 'react'

const link = {
  textDecoration: 'none',
  color: 'green',
  fontSize: '1.1em',
  boxShadow: 'none',
  marginLeft: '10px',
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}`

  console.log('pathname = ', location.pathname)
  const header = (
    <h1>
      <Link to={'/'} style={link}>
        {title}
      </Link>
    </h1>
  )
  return (
    <div className="m-5 bg-gray-100 p-5 rounded-md border-0 border-gray-300 drop-shadow-xl">
      <header>
        {header}
        <title>Home Page</title>
      </header>
      <div>rootPath: {rootPath}</div>

      <main>{children}</main>
    </div>
  )
}

export default Layout
