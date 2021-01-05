import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { isMobile } from "react-device-detect"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { ImageCover, TextContainer } from "../components/Utils/Ui"
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

  // const [settings, setSettings] = useState({
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: window.innerWidth > 900 ? 4 : 1,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // })

  // const handleResize = () => setSettings({
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: window.innerWidth > 900 ? 4 : 1,
  //   slidesToScroll: window.innerWidth > 900 ? 4 : 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // })

  // window.addEventListener('resize', handleResize)

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  if (isMobile) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    settings.slidesToShow = 1;
    settings.slidesToScroll = 1;
  } else {
    settings.slidesToShow = 4;
    settings.slidesToScroll = 4;
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <ImageCover fluid={markdown.frontmatter.image.childImageSharp.fluid} />
      <TextContainer>
        <div className="column is-10 is-offset-1">
          <h1>{markdown.frontmatter.title}</h1>
          <Slider
            {...settings}
            nextArrow={<FaArrowAltCircleRight type="next" size={5} />}
            prevArrow={<FaArrowAltCircleLeft type="prev" size={5} />}
          >
            {markdown.frontmatter.main.blurbs.map(blurb => (
              // <Img fixed={blurb.image.childImageSharp.fixed} />
              <Membro
                image={blurb.image.childImageSharp.fixed}
                nome={blurb.nome}
                lates={blurb.lates}
              />
            ))}
          </Slider>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default PaginaEquipe
