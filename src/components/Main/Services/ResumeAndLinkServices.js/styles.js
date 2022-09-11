import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;


    img {
        width: 100%;
        position: relative;
        top: 1px;
    }

    div + img {
        transform: rotate(180deg);
        top: -1px;
    }
`;

export const ContentContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }

`;

export const ImageContainer = styled.div`
    width: 45%;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        width: 12rem;
        position: absolute;
        top: -2rem;
        right: 10%;
    }

    @media screen and (max-width: 460px) {
        right: 1rem;
    }

`;

export const InfoContainer = styled.div`
    display: flex;
    width: 45%;
    justify-content: center;
    align-items: center;

    div + div {
        background-color: ${({ theme }) => theme.colors.darkGreen};
        border-top-right-radius: 0;
    }

    div + div img {
        position: relative;
        top: -30px;
        width: 9rem;
        left: -18px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 10%;

        div + div {
            position: absolute;
            top: 13rem;
            right: 16%;
        }
    }

    @media screen and (max-width: 460px) {
        margin-left: 0;
        div + div {
            right: 4rem;
        }
    }
`;

export const TextContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px 0;

    h2 {
        color: ${({ theme }) => theme.colors.darkGreen};;
        width: 13rem;
        line-height: 2rem;
    }

    p {
        width: 16rem;
        font-size: 12px;
        color: #FFFFFF;
    }

    button {
        width: 8rem;
        font-size: 12px;
        background-color: ${({ theme }) => theme.colors.darkGreen};
        color:${({ theme }) => theme.colors.navyBlue};
    }

    @media screen and (max-width: 768px) {
        p {
            width: 12rem;
        }
    }

`;
