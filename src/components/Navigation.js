import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

const NavigationStyles = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  ul {
    margin: 5px;
    padding: 0;
    max-width: 100%;
    min-height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    text-align: center;
  }
  li {
    width: 10%;
    &:nth-child(1) {
      width: 15%;
      margin-right: auto;
      visibility: hidden;
    }
  }

  a {
    text-decoration: none;
    color: #ced4da;
    font-size: clamp(10px, 2vw, 20px);
  }
`

const Navigation = () => {
  const nav = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(nav.current.children, {
      opacity: 0,
      delay: 2.8,
      duration: 0.8,
      stagger: 0.3,
    })
  }, [])
  return (
    <NavigationStyles>
      <ul ref={nav}>
        <li>
          <Link to="/dj-Pepe">Dj Pepe </Link>
        </li>
        <li>
          <Link to="/o-mnie">O mnie</Link>
        </li>
        <li>
          <Link to="/oferta">Oferta</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
