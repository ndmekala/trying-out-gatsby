// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
      <p>I’m making this by following the <a href="https://www.gatsbyjs.com/docs/tutorial/">Gatsby Tutorial 🥂 </a>. Also, there are many types of pickles:</p>
      <StaticImage
        className="rounded-xl mt-4"
        alt="A diagram showing different types of pickles"
        src="../images/pickles.jpg"
        />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage