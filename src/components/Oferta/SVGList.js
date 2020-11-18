import React from 'react'
import styled from 'styled-components'
import svg1 from '../../assets/images/dj.svg'
import svg2 from '../../assets/images/dj2.svg'
import svg3 from '../../assets/images/dj3.svg'
import svg4 from '../../assets/images/dj4.svg'

const SVGListStyles = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
`
const SVG = styled.div`
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

const SVGList = () => (
  <SVGListStyles>
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

export default SVGList
