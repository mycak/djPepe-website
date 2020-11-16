import React from 'react'
import styled from 'styled-components'
import djSVG from '../../assets/images/dj.svg'
import Title from './Title'

const HeaderStyles = styled.div`
  width: 100%;
  .header--text {
    display: flex;
    flex-direction: row;
  }
  h2 {
    flex: 1;
    font-size: clamp(10px, 1.5vw, 2rem);
  }
  .header--text p {
    margin-top: 0.3em;
    margin-right: 2em;
    flex: 5;
    font-size: clamp(16px, 3vw, 6rem);
  }
  .pic--container {
    margin-top: 4em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    width: 40vw;
    height: 40vh;
  }
  .pic--container img {
    max-width: 100%;
    max-height: 100%;
  }
  .colorize {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(334deg)
      brightness(105%) contrast(103%);
  }
  .quote {
    font-style: italic;
  }
  .signature {
    font-size: clamp(10px, 1.5vw, 3rem);
    letter-spacing: 0px;
    word-spacing: 0px;
  }
`
const Header = () => (
  <HeaderStyles>
    <Title />
    {/* <div className="header--pic">
      <div className="pic--container">
        <img src={djSVG} alt="djPepe" className="colorize" />
      </div>
    </div> */}
    <div className="header--text">
      <h2>O mnie</h2>
      <p>
        <span className="quote">
          "By stać się kimś w swoim fachu, trzeba mieć talent, determinację do
          ciężkiej pracy i odrobinę szaleństwa w duszy"
        </span>
        <span className="signature"> - Anna J. Szepielak</span>
      </p>
    </div>
  </HeaderStyles>
)

export default Header
