import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => {
  return (
    <Layout title={'Overreacted'} location={location}>
      <main className='m-5'>
        <title>Home Page</title>
        <h1 className="text-xl font-normal no-underline text-red-400">Hello world!</h1>
      </main>
    </Layout>
  )
}

export default IndexPage
