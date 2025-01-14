import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-bg: #021f13;
    --secondary-bg: #620202;
    --primary-color: #f8b229;
    --secondary-color: #146b3a;
    --button-bg: #ea4630;
    --warning: #ea4630;
  }

  html {
    height: 100vh;
  }
  body {
    font-family: sans-serif;
    background: var(--primary-bg);
    color: var(--primary-color);
    height: 100%;
  }

  #root {
    height: 100%;
  }

  h2 {
    color: var(--primary-color);
  }
`;
