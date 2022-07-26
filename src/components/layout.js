import { Link } from 'gatsby'
import * as React from 'react'
import Bio from './bio'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const [visibleMenu, setVisibleMenu] = React.useState(false)

  if (isRootPath) {
    header = (
      <div className="text-3xl font-extrabold font-nunito">
        <Link to="/" className="text-pc-pink">
          {title}
        </Link>
        {/* small slogan */}
        <div className="text-xs font-normal font-nunito text-center text-gray-300">
          == write
          <span className="text-red-500"> & </span>
          share ==
        </div>
      </div>
    )
  } else {
    header = (
      <Link to="/" className="text-pc-yellow">
        {title}
      </Link>
    )
  }

  return (
    <div className="bg-pc-darker min-h-screen text-pc-light ">
      <div
        className="global-wrapper bg-pc-dark min-h-screen relative "
        data-is-root-path={isRootPath}
      >
        {/* <div
          className="flex justify-between items-center absolute m-auto left-0  top-0  w-full overflow-hidden z-50 bg-pc-darker mb-10 px-5
        sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:z-0"
        > */}

        {/* <div
          className="flex justify-between items-center 
          absolute m-auto left-0  top-0  
          w-full overflow-hidden 
          z-50 bg-pc-darker mb-10 px-5
          sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:z-0"
        > */}

        <div
          className="flex justify-between items-center 
          px-5 
          
          md:absolute md:top-0 md:left-0
          w-full overflow-hidden 
          z-50 bg-pc-darker 

          sm:fixed sm:top-0 sm:left-0 sm:right-0  
          "
        >
          <div className="my-10">{header}</div>

          <div className="md:flex hidden">
            <div className="menu-item mr-5">Snippets Code</div>
            <div className="menu-item lg:text-red-500 mr-5">Javascript</div>
            <div className="menu-item mr-5">Golang</div>
            <div className="menu-item">Demo</div>
          </div>

          <div className="md:hidden sm:inline-block">
            <svg
              className="w-6 h-6"
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>

        <Bio />
        <div>Hello</div>
        {/* <div className='debug'>{children}</div> */}
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
