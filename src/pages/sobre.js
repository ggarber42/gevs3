import React from "react"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const PaginaSobre = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(sobre)/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
      }
    }
  `)

  const markDown = data.allMarkdownRemark.edges[0].node.frontmatter

  console.log(markDown)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!markDown.image.childImageSharp
              ? markDown.image.childImageSharp.fluid.src
              : markDown.image.childImageSharp.fluid.src
          })`,
          height: '70vh',
          backgroundPositionY: '100vh',
        }}
       />
        <p> {markDown.description} </p>
    </Layout>
  )
}

export default PaginaSobre
