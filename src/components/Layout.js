import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navigation from './Nav/Navigation'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Loader from './Nav/Loader'
import { addSmoothScroll } from '../utilis/addSmoothScroll'

const ContentStyles = styled.div`
  width: 100%;
  height: 100vh;
`
const Layout = ({ children }) => {
  useEffect(() => {
    addSmoothScroll()
  })
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Loader />
      <ContentStyles className="scroller">{children}</ContentStyles>
    </>
  )
}

export default Layout
