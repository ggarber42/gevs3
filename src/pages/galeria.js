import React from "react"
import { graphql, useStaticQuery } from "gatsby"


import Layout from "../components/Layout"
import SEO from "../components/seo"
import { ImageCover, GaleriaText } from "../components/Utils/Ui"

const PaginaGaleria = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(galeria)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const markdown = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <SEO
        title={markdown.frontmatter.title}
        description={markdown.frontmatter.description}
      />
      <ImageCover fluid={markdown.frontmatter.image.childImageSharp.fluid} />
      <GaleriaText>
        <h1 style={{fontWeight: "boldest" }}>
          Em construção...
        </h1>
      </GaleriaText>
    </Layout>
  )
}

export default PaginaGaleria
