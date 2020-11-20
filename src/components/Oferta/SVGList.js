import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import svg1 from '../../assets/images/dj.svg'
import svg2 from '../../assets/images/dj2.svg'
import svg3 from '../../assets/images/dj3.svg'
import svg4 from '../../assets/images/dj4.svg'

gsap.registerPlugin(ScrollTrigger)
const SVGListStyles = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const SVG = styled.div`
  opacity: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  img {
    max-width: 20%;
    height: auto;
  }
  p {
    color: #adb5bd;
  }
  .filter--white {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(16deg)
      brightness(113%) contrast(101%);
  }
`

const SVGList = () => {
  const icons = useRef(null)
  useEffect(() => {
    const iconArray = [...icons.current.children]
    iconArray.forEach(icon => {
      gsap.to(icon, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: icon,
          start: '130% bottom',
        },
      })
    })
  })
  return (
    <SVGListStyles ref={icons}>
      <SVG>
        <img src={svg4} alt="wesela" className="filter--white" />
        <p>Wesela</p>
      </SVG>
      <SVG>
        <img src={svg2} alt="bale" className="filter--white" />
        <p>Bale</p>
      </SVG>
      <SVG>
        <img src={svg3} alt="imprezy" className="filter--white" />
        <p>Imprezy</p>
      </SVG>
      <SVG>
        <img src={svg1} alt="eventy" className="filter--white" />
        <p>Eventy</p>
      </SVG>
    </SVGListStyles>
  )
}

export default SVGList
