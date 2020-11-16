import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Title from './Title'

const HeaderStyles = styled.div`
  width: 100%;
  .header--text {
    display: flex;
    flex-direction: row;
  }
  h2 {
    opacity: 0;
    color: #adb5bd;
    flex: 1;
    font-size: clamp(10px, 1.5vw, 2rem);
  }
  .header--text p {
    opacity: 0;
    margin-top: 0.3em;
    margin-right: 2em;
    flex: 5;
    font-size: clamp(16px, 3vw, 6rem);
  }
  .quote {
    font-style: italic;
  }
  .signature {
    font-size: clamp(10px, 1.5vw, 3rem);
    letter-spacing: 0px;
    word-spacing: 0px;
    color: #adb5bd;
  }
`
const Header = () => {
  const quote = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(quote.current, {
      opacity: 1,
      delay: 2.3,
      duration: 1,
    })
  }, [])
  return (
    <HeaderStyles>
      <Title />
      <div className="header--text">
        <h2>O mnie</h2>
        <p ref={quote}>
          <span className="quote">
            "By stać się kimś w swoim fachu, trzeba mieć talent, determinację do
            ciężkiej pracy i odrobinę szaleństwa w duszy"
          </span>
          <span className="signature"> - Anna J. Szepielak</span>
        </p>
      </div>
    </HeaderStyles>
  )
}

export default Header
