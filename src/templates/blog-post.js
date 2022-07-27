import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <article className="text-pc-light">
        
          <div className="grid gap-4">
            <div className="bg-pc-darker rounded-md col-span-1 col-auto">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </div>
            <div className="bg-pc-darker rounded-md col-span-1">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </div>
          </div>

          <div className='mt-10 block'>
            Hello
          </div>
        

        <header>
          <h1 className="text-3xl font-medium text-pc-yellow">
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.date}</p>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="acticleBody"
        />

        <hr />

        <footer>
          <Bio />
        </footer>

        <nav className="blog-post-nav">
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
