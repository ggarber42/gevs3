import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-reveal"


import Layout from "../components/Layout"
import SEO from "../components/seo"
import {
  ImageCover,
  TextContainer,
  EquipeContainer,
} from "../components/Utils/Ui"
import Membro from "../components/Membro"

const PaginaEquipe = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(equipe)/" } }) {
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
                  lates
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
      <SEO title="Equipe" />
      <ImageCover fluid={markdown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
        <Fade left delay={300}>
          <h1>{markdown.frontmatter.title}</h1>
        </Fade>
          <EquipeContainer>
            {markdown.frontmatter.main.blurbs.map(blurb => (
              // <Img fixed={blurb.image.childImageSharp.fixed} />
              <Membro
                image={blurb.image.childImageSharp.fluid.src}
                nome={blurb.nome}
                lates={blurb.lates}
              />
            ))}
          </EquipeContainer>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaEquipe
