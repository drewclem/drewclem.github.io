import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default function Template({data}) {
  const article = data.markdownRemark;

  return (
    <Layout>
    <div>
      <h2 className='blog-title'>{article.frontmatter.title}</h2>
      <h6>{article.frontmatter.publishdate}</h6>
      <p dangerouslySetInnerHTML={{__html: article.html}}/>
      <Link to='/blog'></Link>
    </div>
    </Layout>
  )
}

export const articleQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }){
      html
      frontmatter {
        path
        title
        publishdate
      }
    }
  }
`