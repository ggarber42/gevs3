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
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  background: #fff;
  // box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  ${media.lessThan("900px")`
    display: flex;
    flex-direction: column;
  `}
  background: #fff;
  padding: 1em;
  border-radius: 1em;
  p${PageText} {
    display: flex;
    align-items: center;
    font-size: 1.25em;
  }
  // transform: scale(.95);
  transition: all 0.5s ease;
  &:hover {
    // transform: scale(1);
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
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