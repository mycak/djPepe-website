import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/images/hero.jpg'

gsap.registerPlugin(ScrollTrigger)

const HeroStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  h1 {
    padding-left: 5%;
    padding-top: 10%;
    font-size: clamp(1.5em, 5vw, 6em);
  }
  .postscript {
    font-size: clamp(0.2em, 2vw, 6em);
  }
  .background--layer {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 2%,
      rgba(255, 255, 255, 0) 30%
    );
  }
`

const Hero = () => {
  const header = useRef(null)
  const heroContainer = useRef(null)

  useEffect(() => {
    gsap.to(heroContainer.current, {
      y: 120,
      ease: 'none',
      opacity: 0,
      scrollTrigger: {
        trigger: heroContainer.current,
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
        toggleActions: 'play none none none',
        duration: 2,
      },
    })

    const tl = gsap.timeline()
    tl.from(heroContainer.current, {
      opacity: 0,
      delay: 0.7,
      duration: 2,
    })
    tl.from(header.current, {
      opacity: 0,
      y: '-=20',
      duration: 0.7,
    })
  }, [])

  return (
    <HeroStyles ref={heroContainer}>
      <div className="background--layer">
        <h1 ref={header}>
          Dj Pepe <span className="postscript">artysta</span>
        </h1>
      </div>
    </HeroStyles>
  )
}

export default Hero
