import React from 'react'
import styled from 'styled-components'
import SEO from './SEO'

const AboutMeStyles = styled.div`
  min-height: 100vh;
  text-align: center;
  h2 {
    margin-top: 5em;
  }
`
const omnie = () => (
  <>
    <SEO />
    <AboutMeStyles>
      <h2>O mnie</h2>
    </AboutMeStyles>
  </>
)

export default omnie
