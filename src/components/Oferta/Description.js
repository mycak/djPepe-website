import React from 'react'
import styled from 'styled-components'

const DescriptionStyles = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    margin-top: 4em;
    font-size: clamp(16px, 3vw, 2em);
    @media (max-width: 900px) {
      margin-top: 4em;
    }
  }
  p {
    color: #adb5bd;
    font-size: clamp(10px, 1.5vw, 2em);
    padding: 2em;
  }
  .highlight {
    color: #fff;
  }
`
const Description = () => (
  <DescriptionStyles>
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

export default Description
