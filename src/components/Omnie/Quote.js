import React from 'react'
import styled from 'styled-components'

const QuoteStyles = styled.div`
  margin-left: 20%;
  width: 50%;
  font-size: clamp(14px, 3vw, 6rem);
  .quote {
    font-style: italic;
  }
  .signature {
    font-size: clamp(10px, 1.5vw, 3rem);
    letter-spacing: 0px;
    word-spacing: 0px;
  }
`
const Quote = () => (
  <QuoteStyles>
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

export default Quote
