import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink'
import loaderAnimation from './loaderAnimation'

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
    opacity: 0;
    width: 10%;
    &:nth-child(1) {
      width: 15%;
      margin-right: auto;
      transition: all 1s;
    }
    &:nth-child(1) a.active {
      opacity: 0;
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
    tl.to(nav.current.children, {
      opacity: 1,
      delay: 2.5,
      duration: 0.8,
      stagger: 0.3,
    })
  }, [])
  return (
    <NavigationStyles>
      <ul ref={nav}>
        <li>
          <TransitionLink
            exit={{
              length: 0.8,
            }}
            entry={{
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
              length: 4,
            }}
            activeClassName="active"
            to="/"
          >
            Dj Pepe{' '}
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            exit={{
              length: 0.8,
            }}
            entry={{
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
              length: 2,
            }}
            to="/omnie"
          >
            O mnie
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            exit={{
              length: 0.8,
            }}
            entry={{
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
              length: 2,
            }}
            to="/oferta"
          >
            Oferta
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            exit={{
              length: 0.8,
            }}
            entry={{
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
              length: 2,
            }}
            to="/kontakt"
          >
            Kontakt
          </TransitionLink>
        </li>
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
