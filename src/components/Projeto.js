import React from "react"
import Img from "gatsby-image"

import { ProjetoContainer, PageText } from "../components/Utils/Ui"

const Projeto = ({ image, nome, index }) => {
  return (
    <ProjetoContainer>
      {index % 2 === 0 ? (
        <>
          <PageText>{nome}</PageText>
          <Img fluid={image} />
        </>
      ) : (
        <>
          <Img fluid={image} />
          <PageText>{nome}</PageText>
        </>
      )}
    </ProjetoContainer>
  )
}

export default Projeto
