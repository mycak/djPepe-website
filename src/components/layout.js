import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'
import 'normalize.css'

const ContentStyles = styled.div`
  width: 100%;
  min-height: 90vh;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <ContentStyles>{children}</ContentStyles>
      <Footer />
    </>
  )
}
