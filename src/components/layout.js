import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
        <div className="bg-gray-500 rounded-xl p-8">
        <title>{pageTitle}</title>
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