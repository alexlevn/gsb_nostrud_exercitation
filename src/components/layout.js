import { Link } from 'gatsby'
import * as React from 'react'
import Bio from './bio'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-3xl font-extrabold font-nunito">
        <Link to="/" className="text-pc-pink">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/" className="text-pc-yellow">
        {title}
      </Link>
    )
  }

  return (
    <div className="bg-pc-darker min-h-screen">
      <div
        className="global-wrapper bg-pc-dark min-h-screen"
        data-is-root-path={isRootPath}
      >
        <header className="global-header">{header}</header>
        <Bio />
        <main>{children}</main>
        <footer className="text-pc-light">
          @ {new Date().getFullYear()}, Personal blog by {` `}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noreferrer"
            className="font-extrabold font-mont text-pc-yellow"
          >
            Alex Lee
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
