import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'
import Footer from '../components/Footer'
import Header from '../components/Omnie/Header'

const AboutMeStyles = styled.div`
  height: 100%;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const omnie = () => (
  <>
    <SEO />
    <AboutMeStyles>
      <Header />
      <Footer />
    </AboutMeStyles>
  </>
)

export default omnie
