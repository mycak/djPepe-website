import React from 'react'
import styled from 'styled-components'

const LoaderStyles = styled.div`
  @keyframes delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
      -webkit-transform: scaleY(0.05);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
  margin: 0 auto;
  width: 60px;
  height: 50px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 500;

  > div {
    height: 100%;
    width: 8px;
    display: inline-block;
    /* float: left; */
    margin-left: 2px;
    animation: delay 0.9s infinite ease-in-out;
  }

  .bar1 {
    background-color: #754fa0;
  }
  .bar2 {
    background-color: #09b7bf;
    animation-delay: -0.7s;
  }
  .bar3 {
    background-color: #90d36b;
    animation-delay: -0.6s;
  }
  .bar4 {
    background-color: #f2d40d;
    animation-delay: -0.5s;
  }
  .bar5 {
    background-color: #fcb12b;
    animation-delay: -0.4s;
  }
  .bar6 {
    background-color: #ed1b72;
    animation-delay: -0.3s;
  }
`
const Loader = () => (
  <LoaderStyles className="loader--opacity">
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
    <div className="bar4" />
    <div className="bar5" />
    <div className="bar6" />
  </LoaderStyles>
)

export default Loader
