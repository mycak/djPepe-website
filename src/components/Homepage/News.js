import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsStyles = styled.div`
  margin-bottom: 6em;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  font-size: clamp(8px, 1.3vw, 18px);
  align-items: center;
  justify-items: center;
  width: 70%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 1em;
  h3 {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: ${(props) => props.order[1]};
    margin-bottom: 2em;
  }
  .date {
    font-size: 70%;
    color: #adb5bd;
  }
  .image--container {
    grid-area: ${(props) => props.order[0]};
    min-width: 35vw;
    min-height: 50vh;
    @media (max-width: 900px) {
      min-height: 30vh;
    }
  }
  .image--container img {
    max-width: 100%;
    height: auto;
  }
  p {
    text-align: ${(props) => props.order[2]};
    color: #ced4da;
    width: 100%;
  }
`;

const News = ({ dataImage, order, title, date }) => {
  const grid = order
    ? ['2 / 1 / 3 / 2', 'start', 'left']
    : ['2 / 2 / 3 / 3', 'end', 'right'];
  const news = useRef(null);
  const newsTitle = useRef(null);
  const newsImage = useRef(null);
  const newsDescription = useRef(null);

  useEffect(() => {
    gsap.from(newsTitle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: news.current,
        start: '30% bottom',
        end: '120% bottom',
        scrub: true,
        stagger: 2,
      },
    });
    gsap.from(newsImage.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: news.current,
        start: '30% bottom',
        end: '100% bottom',
        scrub: true,
        stagger: 2,
      },
    });
    gsap.from(newsDescription.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: news.current,
        start: '50% bottom',
        end: '100% bottom',
        scrub: true,
        stagger: 2,
      },
    });
  }, []);
  return (
    <NewsStyles ref={news} order={grid}>
      <h3 ref={newsTitle} className="header">
        {title}
        <span className="date">{date}</span>
      </h3>
      <div className="image--container" ref={newsImage}>
        <Img fluid={dataImage.childImageSharp.fluid} />
      </div>
      <p ref={newsDescription}>
        Enim dolore proident culpa culpa aliquip ut et et cupidatat tempor. Enim
        commodo nisi et dolor consectetur ad magna. Eu minim laborum consequat
        mollit eu sit excepteur aliqua sunt dolor nostrud ipsum. Deserunt aliqua
        tempor commodo labore et excepteur. Cupidatat irure do exercitation
        labore ea aliquip proident Lorem sunt sint elit occaecat sit duis.
        Ullamco fugiat labore do aliquip.
      </p>
    </NewsStyles>
  );
};

export default News;
