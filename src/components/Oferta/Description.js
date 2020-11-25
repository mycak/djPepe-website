import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const DescriptionStyles = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    margin-top: 3em;
    min-height: 5vh;
    width: 95%;
    opacity: 1;
  }
  h2 {
    opacity: 0;
    text-align: center;
    font-size: clamp(16px, 3vw, 2em);
    @media (max-width: 700px) {
      opacity: 1;
    }
  }
  p {
    opacity: 0;
    color: #adb5bd;
    font-size: clamp(10px, 1.5vw, 2em);
    padding: 2em;
    @media (max-width: 700px) {
      opacity: 1;
    }
  }
  .highlight {
    color: #fff;
  }
`
const Description = () => {
  const text = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(text.current.children, {
      opacity: 1,
      delay: 1,
      duration: 1,
      stagger: 0.5,
    })
  }, [])
  return (
    <DescriptionStyles ref={text}>
      <h2>Moje usługi</h2>
      <p>
        W zależności od Państwa potrzeb zadbam o odpowiedni repertuar na:{' '}
        <span className="highlight">​wesele</span>,{' '}
        <span className="highlight">poprawiny</span>, wieczór{' '}
        <span className="highlight"> kawalerski i panieński</span>, bal{' '}
        <span className="highlight">sylwestrowy, karnawałowy</span>,{' '}
        <span className="highlight">studniówkę</span>. Imprezy okolicznościowe:{' '}
        <span className="highlight">urodziny, osiemnastkę, rocznice</span> czy{' '}
        <span className="highlight">eventy </span> firmowe.
      </p>
    </DescriptionStyles>
  )
}

export default Description
