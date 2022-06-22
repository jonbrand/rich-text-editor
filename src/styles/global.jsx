import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --background: #37352F;
      --background-secondary: #474c50;
      --red: #E03E3E;
      --green: #0F7B6C;
      --blue: #0B6E99;
      --gray: #9B9A97;
      --brown: #64473A;
      --orange: #D9730D;
      --yellow: #DFAB01;
      --purple: #6940A5;
      --pink: #AD1A72;

      --text-title: #363f5f;
      --text-button: #FFF;
      --text-body: #1C1C1C;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      color: #fff;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }

      overflow-x: hidden;
  }

  body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      color: var(---text-title);
  }

  html,
  body,
  #root {
      width: 100%;
      height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
      
  }

  button {
      cursor: pointer;
      color: red;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }
`;