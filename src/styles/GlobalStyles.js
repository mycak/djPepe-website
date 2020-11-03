import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/SyneMono-Regular.ttf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: SyneMono;
    src: url(${font});
  }
  :root {
    --black: #2E2E2E;
    --white: #fff;
  }
  html {
    font-family: SyneMono;
    font-size: 10px;
    color: #fff;
    background: #000000;
    width: 100%;
    height: 100%;
  }
  body {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
export default GlobalStyles
