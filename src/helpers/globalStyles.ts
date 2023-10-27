import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';

export const GlobalStyle = createGlobalStyle`
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
    line-height: 1.2;
  }
  body{
    background-color: #F6F4F4;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  .icon{
    width: 1rem;
    height: 1rem;
    transition: all .2s ease;
    &.filled{
      fill: ${theme.colors.primary};
    }
    &.rotated{
      transform: rotate(180deg);
    }
  }

  .animate-spin{
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    to{
      transform: rotate(360deg);
    }
  }
`;
