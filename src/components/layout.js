import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <main className="flex justify-center">
        <div className="bg-gray-100 rounded-xl mt-8 p-8 w-96">
        <title>{pageTitle}</title>
        <p className="text-center mb-4">{data.site.siteMetadata.title}</p>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <h1>{pageTitle}</h1>
        {children}

        </div>
    </main>
  )
}

export default Layout