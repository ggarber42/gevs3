import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import {
  ImageCover,
  PageText,
  TextContainer,
  FlexContainer,
} from "../components/Utils/Ui"

const PaginaProjetos = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projetos)/" } }
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
              main {
                blurbs {
                  image {
                    childImageSharp {
                      fluid(maxHeight: 300, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                      fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  nome
                }
              }
            }
          }
        }
      }
    }
  `)

  const markdown = data.allMarkdownRemark.edges[0].node

  console.log(data)

  return (
    <Layout>
      <SEO
        title={markdown.frontmatter.title}
        description={markdown.frontmatter.description}
      />
      <ImageCover fluid={markdown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <Fade left delay={300}>
            <h1>{markdown.frontmatter.title}</h1>
          </Fade>
          <FlexContainer>
            {markdown.frontmatter.main.blurbs.map((blurb, index) =>
              blurb.image ? (
                <Img fluid={blurb.image.childImageSharp.fluid} />
              ) : null
            )}
          </FlexContainer>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaProjetos
