import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'

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
    </OfferStyles>
  </>
)

export default Oferta
