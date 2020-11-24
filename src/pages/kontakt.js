import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'
import Footer from '../components/Footer'
import contactImage from '../assets/images/contact.jpeg'
import Socials from '../components/Kontakt/Socials'
import ContactForm from '../components/Kontakt/ContactForm'

const ContactStyles = styled.div`
  height: 100vh;
  text-align: center;
`
const MainContainer = styled.div`
  height: 95.5vh;
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 1) 61%
    ),
    url(${contactImage});
  background-size: cover;
  display: flex;
  flex-direction: row;
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
