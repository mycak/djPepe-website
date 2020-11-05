import React from 'react'
import styled from 'styled-components'
import Navigation from './Nav/Navigation'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Loader from './Nav/Loader'

const ContentStyles = styled.div`
  width: 100%;
  min-height: 90vh;
`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    <Loader />
    <ContentStyles>{children}</ContentStyles>
  </>
)

export default Layout
