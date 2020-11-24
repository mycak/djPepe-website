import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'
import Footer from '../components/Footer'
import Socials from '../components/Kontakt/Socials'
import ContactForm from '../components/Kontakt/ContactForm'
import MainContainer from '../components/Kontakt/MainContainer'

const ContactStyles = styled.div`
  height: 100vh;
  text-align: center;
`
const Kontakt = () => (
  <>
    <SEO />
    <ContactStyles>
      <MainContainer>
        <Socials />
        <ContactForm />
      </MainContainer>
      <Footer />
    </ContactStyles>
  </>
)

export default Kontakt
