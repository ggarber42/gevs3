import React from "react"
import Img from "gatsby-image"
import { Card } from "react-bootstrap"
import { Fade } from "react-reveal"

import { PageText } from "../components/Utils/Ui"

const Projeto = ({ image, nome, index }) => {
  return (
    <Fade bottom delay={200 + index*100}>
      <Card>
        <>
          <PageText>{nome}</PageText>
          <img src={image} />
        </>
      </Card>
    </Fade>
  )
}

export default Projeto
