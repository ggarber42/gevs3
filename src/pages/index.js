import React from "react"
import { Link, withPrefix } from "gatsby"
import { Fade } from "react-reveal"

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
  </Layout>
)

export default IndexPage
