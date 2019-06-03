import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from '../components/blogRoll'

class Blog extends Component {
  render(){
    return(
      <Layout>
        <SEO title="Blog" />
        <div className='interior-anchor'></div>
        <h1 className="page-title">Blog</h1>
        <BlogRoll />
      </Layout>
    )
  }
}

export default Blog
