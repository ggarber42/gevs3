import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Fade } from "react-reveal"

import {
  ImageCover,
  PageText,
  TextContainer,
  FlexContainer,
} from "../components/Utils/Ui"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const PaginaParceiros = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(parceiros)/" } }
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
                  link
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
      <TextContainer>
        <div className="column is-10 is-offset-1">
        <Fade left delay={300}>
          <h1>{markdown.frontmatter.title}</h1>
        </Fade>
          <FlexContainer>
            {markdown.frontmatter.main.blurbs.map((blurb, index) => (
              <Fade bottom delay={index * 200}>
                  <a target="_blank" href={blurb.link}>
                    <Img fixed={blurb.image.childImageSharp.fixed} />
                  </a>
              </Fade>
            ))}
          </FlexContainer>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaParceiros
