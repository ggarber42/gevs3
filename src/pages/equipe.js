import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { ImageCover, PageText, TextContainer } from "../components/Utils/Ui"

const PaginaEquipe = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(equipe)/"  }}){
       edges{
        node{
          id
          frontmatter{
            title
            path
            description
            image{
              childImageSharp{
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
              }
            }
            main{
              blurbs{
                image{
                    childImageSharp{
                      fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
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

  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter

  console.log(frontmatter.main.blurbs)

  return (
    <Layout>
      <SEO title="Page two" />
      <ImageCover fluid={frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <Fade left delay={300}>
            <h1>{frontmatter.title}</h1>
          </Fade>
          {frontmatter.main.blurbs.map(blurb => (
            <Img fluid={blurb.image.childImageSharp.fluid} />
          ))}
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaEquipe
