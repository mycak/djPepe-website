import React from 'react'
import styled from 'styled-components'

const NewsStyles = styled.div`
  height: 200vh;
  h2 {
    margin-top: 100px;
  }
`
const News = () => (
  <NewsStyles>
    <h2>Aktualności</h2>
  </NewsStyles>
)

export default News
