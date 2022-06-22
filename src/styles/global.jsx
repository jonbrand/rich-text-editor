import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --background: #F0F2F5;
      --red: #E52E4D;
      --green: #33cc05;

      --blue: #5429CC;
      --blue-light: #6933FF;

      --text-title: #363f5f;
      --text-button: #FFF;
      --text-body: #1C1C1C;
      
      --grey-medium: #969cb3;
      --grey-light: #C0C0C0;
      --black: #000000;
      --black-medium: #1C1C1C;
      

      --shape: #ffffff;

  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
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
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }
`;