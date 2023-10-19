import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:700|Poppins:400');
  :root{
    --text: #000000;
    --background: #F6F4F4;
    --primary: #3e3f31;
    --secondary: #e2dae1;
    --accent: #72656b;
  }
  *, *::before, *::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: #F6F4F4;
  }
`;
