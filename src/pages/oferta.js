import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'
import Footer from '../components/Footer'

const OfferStyles = styled.div`
  min-height: 100vh;
  text-align: center;
  h2 {
    margin-top: 5em;
  }
`
const Oferta = () => (
  <>
    <SEO />
    <OfferStyles>
      <h2>Oferta</h2>
      <Footer />
    </OfferStyles>
  </>
)

export default Oferta
