import React from 'react'
import styled from 'styled-components'

const PhotosGrid = styled.div`
  display: grid;
  border: solid red;
  min-height: 100%;
  width: 50%;
`

const PhotoGallery = () => (
  <PhotosGrid>
    <img />
    <img />
  </PhotosGrid>
)

export default PhotoGallery
