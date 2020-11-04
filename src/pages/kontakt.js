import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'

const ContactStyles = styled.div`
  min-height: 100vh;
  text-align: center;
  h2 {
    margin-top: 5em;
  }
`
const Kontakt = () => (
  <>
    <SEO />
    <ContactStyles>
      <h2>Kontakt</h2>
    </ContactStyles>
  </>
)

export default Kontakt
