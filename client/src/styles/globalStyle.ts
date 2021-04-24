import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Variables */
  html {
    --color-primary: #00A99D;
    --color-primary-light: #ff00ff;
    --color-primary-dark: #ff00ff;
    --color-secondary: #162750;
    --color-secondary-light: #ff00ff;
    --color-secondary-dark: #ff00ff;
    --color-text-body: #39496a;
    --color-gray-100: #f5f5f5;
    --color-gray-200: #d5d5d5;
    --color-gray-300: #999;
  }
  #root {
    height: 100vh;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    color: var(--color-text-body);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--color-secondary);
  }
  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }

  button {
    cursor: pointer;
  }

  code, pre {
    padding: 0 0 !important;
    margin: 0 !important;
    background: none !important;
  }


  .rotate-cw-90 {
    transform: rotate(90deg);
  }
  .rotate-cw-90 {
    transform: rotate(180deg);
  }
  .rotate-ccw-90 {
    transform: rotate(-90deg);
  }
`;

export default GlobalStyle;
