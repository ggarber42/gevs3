import React, { useEffect, useState } from "react"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Link, withPrefix } from "gatsby"
import { Fade } from "react-reveal"
import Button from "react-bootstrap/Button"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { TextContainer, PageText } from "../components/Utils/Ui"
import BgMp4 from "../assets/videos/bg-video.mp4"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  return (
    <Layout>
      <SEO title="Home" description="Grupo de Estudos em Vida Silvestre"/>
      <section className="video-container">
        <video autoPlay muted loop>
          <source src={withPrefix(BgMp4)} type="video/mp4" />
        </video>
        <div
          className="content"
          style={loaded ? { display: "grid" } : { display: "none" }}
        >
          <Fade bottom>
            <h1>
              Bem Vindo <br />
              ao GEVS
            </h1>
          </Fade>
          <Fade delay={1200} bottom>
            <h3>
              Grupo de Estudos em Vida <br />
              Silvestre
            </h3>
          </Fade>
        </div>
      </section>
      <TextContainer className="intro">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="heading">
              <Fade left delay={500}>
                <h3>Quem somos</h3>
              </Fade>
            </div>
            <div className="main">
              <p>
                Somos um grupo de pesquisadores de diferentes instituições com o
                objetivo em comum de estudar diversas formas de vida, seja ela
                fauna ou flora, em ambientes com predominações vegetacionais
                abertas, como pantanal, cerrado e campinaranas na Amazônia.
                Buscamos estudar a vida silvestre como um todo, tentando
                compreender suas relações complexas dentro de mosaicos de
                paisagens heterogêneas.
              </p>
            </div>
            <AniLink
              cover
              bg="#fff"
              to="/sobre"
              title="Logo"
              direction="right"
              style={{
                color: "#fff",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Button variant="success" style={{ cursor: "pointer" }}>
                Saiba mais
              </Button>
            </AniLink>
          </div>
        </div>
      </TextContainer>
    </Layout>
  )
}

export default IndexPage
