import React, {Component} from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends Component {
  render(){
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return(
      <div>
        { posts &&
            posts.map(({node: post}) => (
              <div className='article'>
                <h3>{post.frontmatter.title}</h3>
                <p class='date'><small>{post.frontmatter.publishdate}</small></p>
                <p style={{
                  marginBottom: 20
                }}>{post.excerpt}</p>
                <Link className='btn-blue' to={post.frontmatter.path}>Read</Link>
              </div>
            ))
        }
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query = {graphql `
      query BlogRollQuery {
        allMarkdownRemark{
          edges{
            node{
              excerpt(pruneLength: 300)
              id
              frontmatter{
                title
                publishdate(formatString: "MMMM DD, YYYY")
                path
              }
            }
          }
        }
      }
    `}
    render = {(data, count) => <BlogRoll data={data} count={count} />}
  />
)