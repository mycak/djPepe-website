import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const SocialsStyles = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: clamp(10px, 1.5vw, 3em);
  }
  p {
    font-size: clamp(10px, 1.5vw, 3em);
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .socialIcons--container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
    margin-top: 1em;
  }
  .icon--container {
    width: 50%;
    min-height: 15vh;
  }
  .icon--container a {
    font-size: clamp(2em, 6vw, 5em);
  }
  .pseudonym {
    font-size: clamp(2em, 6vw, 5em);
    margin-bottom: 1rem;
  }
  @media (max-width: 900px) {
    .socialIcons--container {
      width: 50%;
    }
  }
`

const Socials = () => (
  <SocialsStyles>
    <p className="pseudonym">Dj Pepe</p>
    <p className="name">Piotr Pińkowki</p>
    <a href="tel:795 216 534" className="phone">
      +48 795 216 534
    </a>
    <a href="mailto:DjPepe@gmail.com" className="mail">
      DjPepe@gmail.com
    </a>
    <div className="socialIcons--container">
      <div className="icon--container">
        <a href="https://www.facebook.com/dj.pepe.982">
          {' '}
          <AiFillFacebook />
        </a>
      </div>
      <div className="icon--container">
        <a href="https://www.instagram.com/eltoro.music/">
          {' '}
          <AiFillInstagram />
        </a>
      </div>
    </div>
  </SocialsStyles>
)

export default Socials
