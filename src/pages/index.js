import React from "react"
import { Link, withPrefix } from "gatsby"
import { Fade } from "react-reveal"
import Button from "react-bootstrap/Button"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import BgMp4 from "../assets/videos/bg-video.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="video-container">
      <video autoPlay muted loop>
        <source src={withPrefix(BgMp4)} type="video/mp4" />
      </video>
      <div className="content">
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
    <section className="intro">
      <div className="heading">
        <h3>
          Quem somos
        </h3>
      </div>
      <div className="main">
        <p>
        Somos um grupo de pesquisadores de diferentes instituições com o objetivo em comum de estudar diversas formas de vida, seja ela fauna ou flora, em ambientes com predominações vegetacionais abertas, como pantanal, cerrado e campinaranas na Amazônia. Buscamos estudar a vida silvestre como um todo, tentando compreender suas relações complexas dentro de mosaicos de paisagens heterogêneas.
        </p>
      </div>
      <Button variant="success">Saiba mais</Button>
    </section>
  </Layout>
)

export default IndexPage
