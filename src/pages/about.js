// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I’m Nirmal 👨🏾‍💻 🦄 the proud creator of this Gatsby site, which shows different types of pickles.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage