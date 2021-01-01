import React from "react"

import Navlinks from "../Navlinks"
import logoGevs from "../../assets/img/logo_gevs_verde.png"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logoGevs} alt="Logo Gevs" />
      </div>
      <div className="content">
        <Navlinks />
      </div>
      <div className="copyleft">
        <a target="_blank" href="https://www.devgarber.me">
          Feito por Garber - {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  )
}

export default Footer
