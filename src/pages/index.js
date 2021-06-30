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
        src="https://richmondmagazine.com/downloads/28812/download/Dine_Infographic_dp0420_2.jpg?cb=00119531e0cf1097d160cefd7648a7a9&w=640&h="
        />
        <div className="flex justify-center">
          <StaticImage
            className="rounded-xl mt-4 w-16"
            alt="A diagram showing different types of pickles"
            src="../images/icon.png"
            />
        </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage