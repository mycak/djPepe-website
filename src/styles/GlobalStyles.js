import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/SyneMono-Regular.ttf'

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: Syne Mono;
    src: url(${font});
  } */
  :root {
    --black: #2E2E2E;
    --white: #fff;
  }
  html {
    font-family: Syne Mono;
    font-size: 10px;
    color: #fff;
    background: #000000;
    width: 100%;
    height: 100%;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
  html::-webkit-scrollbar { width: 0 !important }
  body {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &:before,&:after{
    content: '';
    min-height: 100vh;
    width:100%;
    position:fixed;
    left:0;
    background: #201b18;
    }
    &:before{
      top: 0;
      transform: translateY(-100%);
    }
    &:after{
      bottom: 0;
      transform: translateY(100%);
    }
  }
  .loader--opacity {
    opacity: 0;
  }
`
export default GlobalStyles
