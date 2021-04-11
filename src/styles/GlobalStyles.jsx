import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }
  #root {
    background: #102250;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
