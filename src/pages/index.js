import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import Hero from '../components/Hero'
import News from '../components/News'
import SEO from './SEO'

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .image--wrapper {
    max-height: auto;
    max-width: auto;
  }
`

export default function HomePage() {
  return (
    <>
      <SEO />
      <HomePageStyles>
        <Hero />
        <News />
      </HomePageStyles>
    </>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "hero.jpg" }) {
//       childImageSharp {
//         fluid(maxHeight: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
