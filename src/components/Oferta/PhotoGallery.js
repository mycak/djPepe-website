import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PhotosGrid = styled.div`
  /* border: solid red; */
  width: 60%;
  padding-top: 2.5em;
  padding-bottom: 1em;
  padding-right: 2em;
  padding-left: 1em;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, minmax(20px, 0.6fr));
  grid-template-rows: repeat(auto-fit, minmax(20px, 200px));
  img {
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(20px, 0.6fr));
  }
`

const PhotoGallery = ({ imageData }) => (
  <PhotosGrid>
    {Object.keys(imageData).map((key, i) => (
      <Img key={i} fluid={imageData[key].childImageSharp.fluid} />
    ))}
  </PhotosGrid>
)

export default PhotoGallery
