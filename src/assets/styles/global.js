import { createGlobalStyle } from 'styled-components';
import frameBg from '../images/frame-init.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        scroll-behavior:smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.darkGreen};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.whiteColor};
        background-image: url(${frameBg});
    }

    h1, h2 {
        font-family: 'Anton';
        font-weight: 300;
        text-transform: uppercase;
    }

    button {
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover{
            opacity: 0.8;
        }
    }

`;
