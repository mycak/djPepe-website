import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink'
import loaderAnimation from './loaderAnimation'

gsap.registerPlugin(ScrollTrigger)

const NavigationStyles = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 4vh;
  ul {
    margin: 5px;
    padding: 0;
    max-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    text-align: center;
  }
  li {
    opacity: 0;
    width: 10%;
    height: 100%;
    &:nth-child(1) {
      width: 15%;
      margin-right: auto;
      transition: all 1s ease 1s;
    }
    &:nth-child(1) a {
      transition: all 1s ease 1s;
    }
    &:nth-child(1) a.active {
      opacity: 0;
      transition: all 1s ease 1s;
    }
    @media (max-width: 1000px) {
      width: 13%;
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
  const navList = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(navList.current.children, {
      opacity: 1,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.3,
    })
    gsap.to(nav.current, {
      backgroundColor: '#000000',
      scrollTrigger: {
        start: '200',
        end: '400',
        scrub: true,
      },
    })
  }, [])

  return (
    <NavigationStyles ref={nav} className="nav">
      <ul ref={navList}>
        <li>
          <TransitionLink
            exit={{
              length: 0,
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
            }}
            entry={{
              delay: 2,
              length: 1,
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
              length: 0,
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
            }}
            entry={{
              delay: 2,
              length: 1,
            }}
            to="/omnie"
          >
            O mnie
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            exit={{
              length: 0,
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
            }}
            entry={{
              delay: 2,
              length: 1,
            }}
            to="/oferta"
          >
            Oferta
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            exit={{
              length: 0,
              trigger: ({ exit, node }) => loaderAnimation(exit, node),
            }}
            entry={{
              delay: 2,
              length: 1,
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
