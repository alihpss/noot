import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
    }

    body {
        background: ${({ theme }) => theme.colors.darkGreen};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.whiteColor}
    }

    h1, h2 {
        font-family: 'Anton';
        font-weight: 300;
        text-transform: uppercase;
    }

    button {
        cursor: pointer;
    }

`;
