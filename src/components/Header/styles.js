import styled from 'styled-components';

export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 35px;

   nav {
    display: flex;
    text-transform: uppercase;

    a {
        font-weight: bold;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.whiteColor};

    }
    a + a {
        margin-left: 20px;
    }
   }

   button {
    background-color: ${({ theme }) => theme.colors.navyBlue};
    color: ${({ theme }) => theme.colors.darkGreen};
    font-weight: bold;
    padding: 10px;
   }

   @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px;
    img {
        order: -2;
    }
    button {
        order: -1;
        width: 35%;
    }

    nav {
        margin-top: 20px;
    }

    a {
        font-size: 14px;
    }
   }
`;
