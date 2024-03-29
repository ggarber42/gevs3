import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Fade } from "react-reveal"

import { ImageCover, PublicaoesContaier, TextContainer } from "../components/Utils/Ui"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const PaginaSobre = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(publicacoes)/" } }) {
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
            }
            html
          }
        }
      }
    }
  `)

  const markDown = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <SEO 
        title={markDown.frontmatter.title}
        description={markDown.frontmatter.description}
      />
      <ImageCover fluid={markDown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <Fade left delay={300}>
            <h1>{markDown.frontmatter.title}</h1>
          </Fade>
          <PublicaoesContaier dangerouslySetInnerHTML={{ __html: markDown.html}} /> 
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaSobre
