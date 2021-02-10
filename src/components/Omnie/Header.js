import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Title from './Title';
import contactImage from '../../assets/images/contact.jpg';

const HeaderStyles = styled.div`
  opacity: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) -20%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.6) 90%,
      rgba(0, 0, 0, 1) 100%
    ),
    /* linear-gradient(180deg, rgba(0, 0, 0, 0) 79%, rgba(0, 0, 0, 1) 96%), */
      url(${contactImage});
  background-position: 0% 70%;
  background-size: cover;
  @media (max-width: 750px) {
    background-position: 35% 70%;
  }
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
`;
const Header = () => {
  const quote = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(bg.current, {
      opacity: 1,
      delay: 0.8,
      duration: 0.8,
    });
    tl.to(quote.current, {
      delay: 1.8,
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <HeaderStyles ref={bg}>
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
  );
};

export default Header;
