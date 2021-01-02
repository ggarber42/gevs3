import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const ImageCover = styled(Img)`
  height: 85vh;
`

export const PageText = styled.p`
  font-size: 1.5em;
  margin-bottom: 0.6666em;
  text-align: justify;
  font-weight: 300;
  ${media.lessThan("760px")`
    font-size: 1.25rem;
  `}
  ${media.lessThan("400px")`
    font-size: 1rem;
  `}
`
export const TextContainer = styled.section`
  background: #fff;
  padding: 3rem 1.5rem;
  h1{
    color: #a5ef5c;
    font-size: 2em;
    margin-bottom: .5em;
    font-weight: 600;
    line-height: 1.125;
    text-transform: uppercase;
  }
`
