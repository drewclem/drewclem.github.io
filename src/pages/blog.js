import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>

    <SEO title="Blog" />
    <div className='interior-anchor'></div>

    <h1 className="page-title">Blog</h1>

    <div className='article'>

      <h3>Building a weather app with Vanilla Javascript</h3>

      <p style={{
        marginBottom: 20
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>

      <button className='btn-blue'>Read</button>
    </div>

  </Layout>
)

export default Blog
