import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const ImageCover = styled(Img)`
  height: 65vh;
}
`
export const FlexContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  min-height: 50vh;
  margin-top: 1em;
  div{
    margin: 2em .5em 0;
  }
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
  h1 {
    color: #a5ef5c;
    font-size: 2em;
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.125;
    text-transform: uppercase;
  }
  .slick-arrow {
    color: #318749;
    width: 50px;
    height: auto;
    &:hover {
      color: #318749;
      opacity: 0.7;
    }
  }
  .slick-prev{
    left: -70px;
  }
  .slick-next{
    right: -70px;
  }
  .slick-slide img{
    height: 150px !important;
    width: auto !important;
  }
`
export const PublicaoesContaier = styled.section`
p{
  margin: 1em 0;
}
`