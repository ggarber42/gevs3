import React from "react"
import Img from "gatsby-image"
import { Card } from "react-bootstrap"
import { Fade } from "react-reveal"

import { PageText } from "../components/Utils/Ui"

const Projeto = ({ image, nome, index, desc }) => {
  return (
    <Fade bottom delay={200 + index*100}>
      <Card>
        <>
          <img src={image} />
          <h2>{nome}</h2>
          <PageText>{desc}</PageText>
        </>
      </Card>
    </Fade>
  )
}

export default Projeto
