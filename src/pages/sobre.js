import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Fade } from "react-reveal"
import { AiOutlineGlobal } from "react-icons/ai"

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
                }
              }
            }
            rawMarkdownBody
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
          <PageText> {markDown.rawMarkdownBody} </PageText>
          <a target="_blank" href="http://dgp.cnpq.br/dgp/espelhogrupo/368850">
            <AiOutlineGlobal size={40} color="#318749" />
          </a>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaSobre
