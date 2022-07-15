import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* noto-sansregular - latin */
  @font-face {
    font-family: 'Geomanist Book';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/geomanist-book-webfont.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Geomanist Regular';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/geomanist-regular-webfont.woff2') format('woff2');
  }
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ${({ theme }) => css`
    html {
      font-size: 16px;
    }
    body {
      font-family: ${theme.font.family.body.name};
    }
  `}
`

export default GlobalStyles
