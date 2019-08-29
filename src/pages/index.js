import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Li = styled.li`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 45px;
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul style={{ listStyle: "none" }}>
        {data.allWordpressPost.edges.map(post => (
          <Li key={post.node.wordpress_id}>
            <Link
              to={`/${post.node.slug}`}
              style={{
                color: "black",
                textDecoration: "none",
                boxShadow:'none'
              }}
            >
              {post.node.featured_media && (
                <Img
                  fixed={
                    post.node.featured_media.localFile.childImageSharp.fixed
                  }
                  alt={post.node.title}
                  style={{marginBottom:20}}
                />
              )}
            </Link>
              <div>
                <Link
                  to={`/${post.node.slug}`}
                  style={{
                    // display: "flex",
                    color: "black",
                    textDecoration: "none",
                  }}
                > <h3
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                  style={{ fontSize: 33, marginTop:0 }}
                /></Link>
                <p style={{ margin: 0, color: "grey", fontSize:16, marginTop:8, marginBottom:10 }}>
                  Written by {post.node.author.name} on {post.node.date}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>

          </Li>
        ))}
      </ul>
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          content
          slug
          excerpt
          wordpress_id
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 1000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
