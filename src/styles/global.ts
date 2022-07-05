import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Geomanist,Arial,sans-serif;
  }
  html {
    font-size: 16px;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f2f4f5;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
`

export default GlobalStyles
