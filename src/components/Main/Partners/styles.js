import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.darkGreen};
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 90px 90px 90px;
    width: 60%;
    max-width: 720px;
    padding: 60px;
    box-shadow:-2px 5px 12px 1px #000000;

    @media screen and (max-width:768px){
        width: 90%;
        padding: 50px;
        justify-content: space-between;
    }
`;

export const TextContainer = styled.div`
    width: 40%;
    height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
        width: 8rem;
        font-size: 30px;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 14px;
    }

    @media screen and (max-width:768px){
        width: 40%;

        h2 {
            width: 100%;
            font-size: 20px;
        }

        p {
            font-size: 12px;
        }

    }
`;

export const ClientsLogoContainer = styled.div`
    width: 40%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    grid-gap: 15px;

    @media screen and (max-width:768px){
        width: 40%;
        align-content: space-evenly;
    }
`;

export const Partner = styled.div`
   width: 100%;
   height: 4rem;
   max-height: 5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background: ${({ theme }) => theme.colors.lightGray};

   img {
       width: 60%;
       max-width: 4rem;
       height: 2rem;
    }

    @media screen and (max-width:768px){
        width: 100%;

        img {
            width: 100%;
            max-width: 5rem;
        }
    }

`;
