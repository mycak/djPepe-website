import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
  width: 100%;
  min-height: 4vh;
  ul {
    margin: 0;
    padding: 0;
    max-width: 100%;
    min-height: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #ced4da;
  }
  li {
    margin-bottom: 5px;
    width: 15%;
    font-size: clamp(10px, 1.7vw, 20px);
    margin-right: 1em;
    &:nth-child(1) {
      margin-bottom: 0;
      width: 30%;
      margin-right: auto;
      font-size: clamp(8px, 1vw, 14px);
    }
    &:last-child {
      margin-right: 2em;
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <ul>
      <li>
        <Link to="">Powered by Piotr Myszkiewicz</Link>
      </li>
      <li>
        <Link to="">Facebook</Link>
      </li>
      <li>
        <Link to="">Instagram</Link>
      </li>
    </ul>
  </FooterStyles>
)

export default Footer
