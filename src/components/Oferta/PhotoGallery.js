import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import gsap from 'gsap'
import ModalImage from './ModalImage'

const PhotosGrid = styled.div`
  width: 60%;
  margin-top: 4em;
  margin-bottom: 2em;
  padding-right: 2em;
  padding-left: 1em;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(20px, 0.6fr));
  grid-template-rows: repeat(auto-fit, minmax(20px, 200px));
  .image--container {
    opacity: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    transition: all 1s 1s;
  }
  img:hover {
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(20px, 0.6fr));
  }
`

const PhotoGallery = ({ imageData }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const photos = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(photos.current.children, {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    })
  }, [])

  const openModal = (data, i) => {
    setCurrentImage(i)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <PhotosGrid ref={photos}>
      {Object.keys(imageData).map((key, i) => (
        <div
          className="image--container"
          role="button"
          onClick={() => openModal(imageData, i)}
          onKeyDown={e => {
            e.persist()
            if (e.key === 'Enter') {
              openModal(imageData, i)
            }
          }}
          tabIndex={0}
          key={i}
          data-id={i}
        >
          <Img
            fluid={imageData[key].childImageSharp.fluid}
            data-id={i}
            style={{ height: '100%', width: '100%' }}
            imgStyle={{ objectFit: 'cover', transition: 'all .2s' }}
          />
        </div>
      ))}
      <ModalImage
        isOpen={modalOpen}
        closeModal={closeModal}
        imageData={Object.values(imageData)}
        currentImage={currentImage}
      />
    </PhotosGrid>
  )
}

export default PhotoGallery
