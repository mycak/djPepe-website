import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'
import Footer from '../components/Footer'
import Description from '../components/Oferta/Description'
import PhotoGallery from '../components/Oferta/PhotoGallery'

const OfferStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .content--container {
    display: flex;
    flex-direction: row;
  }
  /* border: solid red; */
`
const Oferta = () => (
  <>
    <SEO />
    <OfferStyles>
      <div className="content--container">
        <Description />
        <PhotoGallery />
      </div>
      <Footer />
    </OfferStyles>
  </>
)

export default Oferta
