import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HamburgerMenu from "react-hamburger-menu"

// import logoGevs from "../../static/img/logo_gevs.png"
import Navlinks from "../Navlinks"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <AniLink cover bg="#fff" to="/" title="Logo" direction="right">
        {/* <img
          src={logoGevs}
          alt="Kaldi"
          style={{ width: "200px", maxHeight: "75px" }}
        /> */}
      </AniLink>
      <ul className="navbar-nav">
        <Navlinks />
      </ul>
      <HamburgerMenu
        className="hamburger-button"
        menuClicked={handleClick}
        isOpen={isOpen}
        width={18}
        height={18}
        strokeWidth={3}
      />
      <ul className={`vertical-nav ${isOpen ? "open" : "close"}`}>
        <Navlinks />
      </ul>
    </header>
  );
};

export default Header;
