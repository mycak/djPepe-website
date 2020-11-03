import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'

const ContentStyles = styled.div`
  width: 100%;
  min-height: 90vh;
`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    <ContentStyles>{children}</ContentStyles>
    <Footer />
  </>
)

export default Layout
