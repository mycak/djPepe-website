import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from './SEO';
import Footer from '../components/Footer';
import Header from '../components/Omnie/Header';
import CardsList from '../components/Omnie/CardsList';

const AboutMeStyles = styled.div`
  height: 100%;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const omnie = ({ data }) => (
  <>
    <SEO />
    <AboutMeStyles>
      <Header />
      <CardsList imageData={data} />
      <Footer />
    </AboutMeStyles>
  </>
);

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about7.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "about8.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "about9.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default omnie;
