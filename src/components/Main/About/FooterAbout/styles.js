import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    max-width: 760px;
    display: flex;
    margin: 0 auto;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
    top: 6rem;

    img {
        position: absolute;
        width: 50%;
        bottom: 0;
        z-index: 1;
    }

    @media screen and (max-width: 768px) {
        width: 60%;
        flex-direction: column;
        top: 7rem;

        img {
            width: 180px;
            top: 1.9rem;
            right: 0.3rem;
        }
    }

    @media screen and (max-width: 540px) {
        width: 80%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
    }
`;

export const TextContainer = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 20px 0 0 20px;

    h2 {
        color: ${({ theme }) => theme.colors.darkGreen};
        padding: 1.9rem 0;
        width: 50%;
        max-width: 120px;
        margin-left: 15%;
        line-height: 2rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 20px 20px 0 0;

        h2 {
            padding: 0.9rem 0;
        }
    }
`;

export const ImageAndButtonContainer = styled.div`
    display: flex;
    width: 50%;
    height: 11.8rem;
    justify-content: flex-end;
    background: #FFFFFF;
    padding: 2%;
    border-radius: 0 20px  20px 0;

    a {
        z-index: 2;
        margin-right: 3%;
        top: 40%;
        position: absolute;
        button {
            background-color: ${({ theme }) => theme.colors.darkGreen};
            color: ${({ theme }) => theme.colors.navyBlue};
        }
    }

    img {
        width: 100%;
        position: relative;
        z-index: 0;
    }

    @media screen and (max-width: 768px) {

        border-radius: 0 0 20px 20px;
        width: 100%;
        height: 7rem;

        button {
            margin: auto;
            top: 70%;
            right: 0;
            left: 0;
            width: 13rem;
        }

        img {
            top: 0;
            right: 0;
            width: 100%;
        }
    }
`;
