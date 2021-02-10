import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import contactImage from '../../assets/images/aboutMe.jpg';

const MainWrapper = styled.div`
  opacity: 0;
  min-height: 95.5vh;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.8) 80%
    ),
    url(${contactImage});
  background-size: cover;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
    background-position: 35% 70%;
  }
`;
const MainContainer = ({ children }) => {
  const bg = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(bg.current, {
      opacity: 1,
      delay: 0.5,
      duration: 0.8,
    });
  });
  return <MainWrapper ref={bg}>{children}</MainWrapper>;
};

export default MainContainer;
