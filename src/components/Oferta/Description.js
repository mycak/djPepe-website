import React from 'react'
import styled from 'styled-components'

const DescriptionStyles = styled.div`
  min-height: 95.5vh;
  width: 50%;
  h2 {
    text-align: center;
    margin-top: 4em;
    font-size: clamp(16px, 3vw, 2em);
    @media (max-width: 900px) {
      margin-top: 7em;
    }
  }
  p {
    font-size: clamp(10px, 1.5vw, 2em);
    padding: 2em;
  }
`
const Description = () => (
  <DescriptionStyles>
    <h2>Moje usługi</h2>
    <p>
      W zależności od Państwa potrzeb zadbam o odpowiedni repertuar na: ​wesele,
      poprawiny, wieczór kawalerski i panieński, bal sylwestrowy, karnawałowy,
      studniówkę, imprez okolicznościowe: urodziny, osiemnastkę, rocznice, czy
      eventy firmowe.
    </p>
  </DescriptionStyles>
)

export default Description
