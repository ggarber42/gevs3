import React from "react"
import "react-bulma-components/dist/react-bulma-components.min.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logoGevs from "../../assets/img/logo_gevs_verde.png"
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logoGevs} alt="Logo Gevs" />
      </div>
      <div className="container">
        <div style={{ maxWidth: "100vw", width: "100%" }} className="columns">
          <div className="column is-4">
            <ul>
              <li>
                <AniLink
                  cover
                  direction="left"
                  bg="#fff"
                  duration={1}
                  className="navbar-item"
                  to="/"
                >
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink
                  cover
                  direction="left"
                  bg="#fff"
                  duration={1}
                  className="navbar-item"
                  to="/sobre"
                >
                  Sobre
                </AniLink>
              </li>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/equipe"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Equipe
                </AniLink>
              </li>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/projetos"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Projetos
                </AniLink>
              </li>
            </ul>
          </div>
          <div className="column is-4">
            <ul>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/publicacoes"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Publicações
                </AniLink>
              </li>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/parceiros"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Parceiros
                </AniLink>
              </li>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/galeria"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Galeria
                </AniLink>
              </li>
              <li>
                <AniLink
                  className="navbar-item"
                  cover
                  to="/contato"
                  direction="left"
                  duration={1}
                  bg="#fff"
                >
                  Contato
                </AniLink>
              </li>
            </ul>
          </div>
          <div className="column is-4 social">
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyleft">
        <a target="_blank" href="https://www.devgarber.me">
          Desenvolvido por Garber - {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  )
}

export default Footer
