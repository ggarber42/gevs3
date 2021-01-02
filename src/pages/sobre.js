import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Fade } from "react-reveal"

import { ImageCover, PageText, TextContainer } from "../components/Utils/Ui"
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
                  fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
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
      <ImageCover fluid={markDown.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <Fade left delay={500}>
            <h1>{markDown.title}</h1>
          </Fade>
          <PageText> {markDown.description} </PageText>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaSobre
