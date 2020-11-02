import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap'); */
  @font-face {
    font-family: Overpass;
    src: url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap');
  }

  :root {
    --black: #2E2E2E;
    --white: #fff;
  }
  html {
    font-family: Overpass;
    font-size: 10px;
    color: #fff;
    background: #2E2E2E;
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
