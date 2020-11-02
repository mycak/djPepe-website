import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default function HomePage({ data }) {
  return (
    <HomePageStyles>
      <Img fluid={data.file.childImageSharp.fluid} />
    </HomePageStyles>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 70, maxHeight: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
