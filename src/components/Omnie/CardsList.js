import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Quote from './Quote'

const MainStyles = styled.div`
  font-size: clamp(10px, 1.3vw, 18px);
  min-height: 100vh;
  .image--container {
    margin: 1em;
    min-width: 30vw;
    min-height: 45vh;
  }
  .image--container img {
    max-width: 100%;
    height: auto;
  }
  .history--card {
    width: 53%;
    margin-top: 4em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: row;
  }
  .card--1 {
    margin-left: 35%;
  }
  .card--2 {
    margin-left: 5%;
  }
  .card--1 p,
  .card--2 p {
    text-align: left;
  }
  .card--3 {
    margin-left: 10%;
  }
  .card--3 p {
    text-align: right;
  }
`
const CardsList = ({ imageData }) => (
  <MainStyles>
    <div className="history--card card--1">
      <div className="image--container">
        <Img fluid={imageData.image1.childImageSharp.fluid} />
      </div>
      <div className="text--container">
        <p>
          Swoją przygodę z muzyką rozpocząłem w szkole średniej. Początkowo jak
          każdy młody fascynat muzyki marzyłem o założeniu zespołu - i tak się
          stało. Po kilku latach doszedłem do wniosku, że chciałbym rozwijać się
          w trochę innym kierunku i zacząłem uczyć się obsługi adapterów oraz
          odtwarzaczy CD. 15 lat doświadczenia w branży pozwala mi tworzyć
          niepowtarzalny klimat imprezy z moim i Państwa udziałem.
        </p>
      </div>
    </div>
    <div className="history--card card--2">
      <div className="image--container">
        <Img fluid={imageData.image2.childImageSharp.fluid} />
      </div>
      <div className="text--container">
        <p>
          Dolore voluptate consequat ad occaecat esse laborum proident. Labore
          irure reprehenderit culpa ipsum aute adipisicing ipsum sint occaecat
          ullamco. Qui proident sint aliqua dolore ipsum laboris Lorem aliqua
          sunt ea amet amet culpa sint. Ipsum mollit veniam eu cupidatat minim
          excepteur aliquip laborum voluptate aute et id ut.
        </p>
      </div>
    </div>
    <Quote />
    <div className="history--card card--3">
      <div className="text--container">
        <p>
          Dolore voluptate consequat ad occaecat esse laborum proident. Labore
          irure reprehenderit culpa ipsum aute adipisicing ipsum sint occaecat
          ullamco. Qui proident sint aliqua dolore ipsum laboris Lorem aliqua
          sunt ea amet amet culpa sint. Ipsum mollit veniam eu cupidatat minim
          excepteur aliquip laborum voluptate aute et id ut.
        </p>
      </div>
      <div className="image--container">
        <Img fluid={imageData.image3.childImageSharp.fluid} />
      </div>
    </div>
  </MainStyles>
)

export default CardsList
