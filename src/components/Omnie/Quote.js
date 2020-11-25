import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const QuoteStyles = styled.div`
  margin-left: 35%;
  width: 50%;
  font-size: clamp(14px, 3vw, 6rem);
  .quote {
    font-style: italic;
  }
  .signature {
    font-size: clamp(10px, 1.5vw, 3rem);
    letter-spacing: 0px;
    word-spacing: 0px;
    color: #adb5bd;
  }
  @media (max-width: 1100px) {
    margin-bottom: 4em;
  }
  @media (max-width: 750px) {
    margin-bottom: 2em;
    margin-top: 3em;
  }
`
const Quote = () => {
  const quote = useRef(null)

  useEffect(() => {
    gsap.from(quote.current, {
      x: -25,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: quote.current,
        start: '80% bottom',
      },
    })
  }, [])
  return (
    <QuoteStyles ref={quote}>
      <p>
        <span className="quote">
          "Nigdy wcześniej nie spotkałem się z tak profesjonalnym podejściem w
          branży eventowej. Wspaniały wieczór. Bardzo się cieszę, że będziemy
          dalej współpracować."
        </span>
        <span className="signature"> - H&M Event Director</span>
      </p>
    </QuoteStyles>
  )
}

export default Quote
