import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --text: #120a24;
        --background: #f5f5f5;
        --primary: #a2ca44;
        --secondary: #ddd3f3;
        --accent: #99c337;
    }
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
