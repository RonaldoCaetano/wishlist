import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #ffffff;
    --black: #000000;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100%;
    background: var(--background);
    color: var(--black)
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p,
  a {
    font-size: 2rem;
  }
  a {
    color: var(--black);
    text-decoration: none
  }
`;

export default GlobalStyles;
