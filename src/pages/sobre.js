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
                }
              }
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)

  console.log(data);

  const markDown = data.allMarkdownRemark.edges[0].node

  console.log(markDown)

  return (
    <Layout>
      <SEO title={markDown.frontmatter.title}/>
      <ImageCover fluid={markDown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <Fade left delay={800}>
            <h1>{markDown.frontmatter.title}</h1>
          </Fade>
          <PageText> {markDown.rawMarkdownBody} </PageText>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaSobre
