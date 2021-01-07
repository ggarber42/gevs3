import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import Projeto from "../components/Projeto"
import {
  ImageCover,
  ProjetoContainer,
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

  console.log(markdown)

  return (
    <Layout>
      <SEO
        title={markdown.frontmatter.title}
        description={markdown.frontmatter.description}
      />
      <ImageCover fluid={markdown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer style={{ background: "#fbfbfb" }}>
        <div className="column is-10 is-offset-1">
          <Fade left delay={100}>
            <h1>{markdown.frontmatter.title}</h1>
          </Fade>
          <ProjetoContainer>
            {markdown.frontmatter.main.blurbs.map((blurb, index) => (
              // <Img fluid={blurb.image.childImageSharp.fluid} />
              <Projeto
                image={blurb.image.childImageSharp.fluid.src}
                nome={blurb.nome}
                index={index}
              />
            ))}
          </ProjetoContainer>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaProjetos
