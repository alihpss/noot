import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 35px;
`;

export const TextContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: ${({ theme }) => theme.colors.lightGreen};
        text-align: center;
        max-width: 300px;
        font-size: 32px;
        margin-bottom: 8px;
        line-height: 2.5rem;
    }

    p {
        max-width: 380px;
        text-align: center;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.cadetBlue};
    }
`;

export const ServicesContainer = styled.div`
    width: 60%;
    max-width: 500px;
    margin: 60px auto 30px auto;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    transition: all 0.7s ease-in;

    div {
        background-color: transparent;
        width: 100%;
        height: 8rem;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            width: 3rem;
            height: 3rem;
            padding: 5px;
            margin-left: 2rem;
        }

        p {
            width: 6rem;
            font-size: 14px;
            margin-left: 1.5rem;
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors.lightGreen};

            img {
                filter: brightness(0.3);
            }

            p {
                color: ${({ theme }) => theme.colors.darkGreen};
                font-weight: bold;
            }
        }
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        grid-gap: 20px 10px;
        align-content: center;
        justify-content: center;
        justify-items: center;
        overflow-x: hidden;

        div {
            justify-content: space-evenly;

            img, p {
                margin-left: 0;
            }
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;

        div {
        border-top-right-radius: 0;
        left: 14%;
        position: relative;

        img {
            position: absolute;
            bottom: -0.1rem;
            left: -0.5rem;
            width: 7rem;
        }
    }

    & ~ & {
        justify-content: center;
        div {
            top: -0.5rem;
            left: 3%;

            img {
                width: 8rem;
                left: -1.4rem;
                top: -1rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;

        & ~ & {
            margin-top: 1rem;

            div {
                top: 0;
            }
        }
    }
`;
