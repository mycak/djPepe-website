import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from './SEO'
import Footer from '../components/Footer'
import Description from '../components/Oferta/Description'
import PhotoGallery from '../components/Oferta/PhotoGallery'
import SVGList from '../components/Oferta/SVGList'

const OfferStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .content--container {
    display: flex;
    flex-direction: row;
  }
  .leftside--container {
    width: 40%;
  }
`
const oferta = ({ data }) => (
  <>
    <SEO />
    <OfferStyles>
      <div className="content--container">
        <div className="leftside--container">
          <Description />
          <SVGList />
        </div>
        <PhotoGallery imageData={data} />
      </div>
      <Footer />
    </OfferStyles>
  </>
)

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about1.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "about2.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "about3.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "about4.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "about5.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "about6.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "about7.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "about8.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: { eq: "about9.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default oferta
