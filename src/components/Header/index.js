import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HamburgerMenu from "react-hamburger-menu"

import logoGevs from "../../assets/img/logo_gevs.png"
import Navlinks from "../Navlinks"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <AniLink className="logo" cover bg="#fff" to="/" title="Logo" direction="right">
        <img
          src={logoGevs}
          alt="Gevs"
          style={{ width: "200px", maxHeight: "75px" }}
        />
      </AniLink>
      <nav >
        <Navlinks />
      </nav>
      <nav className={`vertical-nav ${isOpen ? "open" : "close"}`}>
        <Navlinks />
      </nav>
      <HamburgerMenu
        className="hamburger-button"
        menuClicked={handleClick}
        isOpen={isOpen}
        width={18}
        height={18}
        strokeWidth={3}
      />
    </header>
  );
};

export default Header;
