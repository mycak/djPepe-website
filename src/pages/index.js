import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Hero from '../components/Homepage/Hero'
import News from '../components/Homepage/News'
import SEO from './SEO'

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .image--wrapper {
    max-height: auto;
    max-width: auto;
  }
  h2 {
    margin-left: auto;
    margin-right: 2em;
    margin-top: 100px;
    margin-bottom: 2em;
  }
`

export default function HomePage({ data }) {
  return (
    <>
      <SEO />
      <HomePageStyles className="section">
        <Hero />
        <h2>Aktualności</h2>
        <News
          dataImage={data.image1}
          order
          title="Music Snow Festival "
          date="4.02.20"
        />
        <News
          dataImage={data.image2}
          title="Techno Weeding Party "
          date="13.06.20"
        />
        <Footer />
      </HomePageStyles>
    </>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about1.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "about4.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
