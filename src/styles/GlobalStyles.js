import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap');
@font-face {
    font-family: Overpass;
    src: url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap');
  }

:root {
  --black: #2E2E2E;
}
html {
  font-family: Overpass;
  font-size: 10px;
}
body {
    font-size: 2rem;
  }
`
export default GlobalStyles
