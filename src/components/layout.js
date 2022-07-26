import * as React from 'react'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="mt-5 mx-5 border-2 p-3 border-gray-400-500 ">
      <div className="text-red-500">Layout:</div>
      <div>rootPath: {rootPath}</div>
      <div>location.pathname: {location.pathname}</div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
