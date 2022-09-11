import styled from 'styled-components';

export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 35px;

   button {
        background-color: ${({ theme }) => theme.colors.navyBlue};
        color: ${({ theme }) => theme.colors.darkGreen};
   }

   @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px;
        img {
            order: -2;
        }
        .button {
            order: -1;
            width: 35%;
        }
   }
`;

export const Navigation = styled.nav`
    display: flex;
    text-transform: uppercase;

        .page-links {
            font-weight: bold;
            text-decoration: none;
            color: ${({ theme }) => theme.colors.whiteColor};


        }

        .page-links + .page-links {
            margin-left: 20px;
        }

    @media screen and (max-width: 768px) {
        margin-top: 20px;

        .page-links {
            font-size: 14px;
        }
    }
`;
