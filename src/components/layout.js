import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="flex justify-center">
        <div className="bg-gray-100 rounded-xl p-8 w-96">
        <title>{pageTitle}</title>
        <nav>
            <ul className="font-medium text-cyan-600">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <h1 className="mb-1 mt-4 text-xl font-semibold">{pageTitle}</h1>
        {children}

        </div>
    </main>
  )
}

export default Layout