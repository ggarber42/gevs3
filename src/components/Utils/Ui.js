import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"
import { Card } from "react-bootstrap";

export const ImageCover = styled(Img)`
  height: 65vh;
}
`
export const FlexContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  min-height: 50vh;
  margin-top: 1em;
  div {
    margin: 2em 0.5em 0;
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
export const ProjetoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1em;
  .card{
    padding: 3em 1em 1em;
    height: 130vh !important;
    ${media.lessThan("1056px")`
    height: 120vh !important;
    `};
    & > *{
      margin-bottom: 1em;
    }
    text-align: center;
    p{
      font-size: 1rem;
      height: 20vh;
      height: 20vh;
      display: flex;
      align-items: flex-start;
    }
    img{
      // max-height: 250px !important;
      // max-width: 270px !important;
      ${media.lessThan("1200px")`
        max-width: 330px !important;
      `}
      ${media.lessThan("810px")`
        max-width: 100% !important;
      `}
    }
  }
`

export const TextContainer = styled.section`
  background: #fff;
  padding: 3rem 1.5rem;
  h1 {
    color: #318749;
    font-size: 2em;
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.125;
    text-transform: uppercase;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  ${media.lessThan("900px")`
    .mobile{
      display: block;
    }
    .desktop{
      display: none;
    }
    `}
  .slick-arrow {
    color: #318749;
    width: 50px;
    height: auto;
    &:hover {
      color: #318749;
      opacity: 0.7;
    }
  }
  .slick-prev {
    left: -70px;
    z-index: 10;
    ${media.lessThan("900px")`
    left: 0px;
    `}
  }
  .slick-next {
    right: -70px;
    z-index: 10;
    ${media.lessThan("900px")`
    right: 0px;
    `}
  }
  .slick-slide {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      }
      & > div {
        text-align: center;
      }
    }
  }
`
export const PublicaoesContaier = styled.section`
  p {
    margin: 1em 0;
    a{
      color: #4a4a4a;
      &:hover{
        color: #3273dc;
        text-decoration: underline;
      }
    }
  }
`
export const EquipeContainer = styled.section`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
  &>div{

    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 150px;
      height: 150px;
    }
    a{
      color: #318749;
      &:hover{
        text-decoration: underline;
      }
    }
    & > div {
      text-align: center;
    }
  }
`

export const GaleriaText = styled.div`
display: flex;
min-height: 30vh;
justify-content: center;
align-items: center;
h1{
  font-size: 3rem;
  ${media.lessThan("900px")`
  font-size: 2rem;
    `}
}
`