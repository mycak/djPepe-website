import gsap from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
  opacity: 0;
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
    cursor: pointer;
  }
  li {
    margin-bottom: 0;
    width: 15%;
    font-size: clamp(10px, 1.4vw, 20px);
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

const Footer = () => {
  const footer = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(footer.current, {
      opacity: 1,
      delay: 2,
      duration: 2,
    })
  })

  return (
    <FooterStyles ref={footer}>
      <ul>
        <li>
          <a to="">Powered by Piotr Myszkiewicz</a>
        </li>
        <li>
          <a to="">Facebook</a>
        </li>
        <li>
          <a to="">Instagram</a>
        </li>
      </ul>
    </FooterStyles>
  )
}

export default Footer
