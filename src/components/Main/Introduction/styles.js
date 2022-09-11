import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 0 -2rem 0;
    display: flex;
    justify-content: space-around;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;

    img {
        width: 100%;
        max-width: 450px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    justify-content: flex-start;
    height: 37vmax;

    .gta {
        top: -2rem;
        border-bottom-right-radius: 0;
        background-color: transparent;

        .boneco-gta {
            position: relative;
            width: 7rem;
            top: -0.9rem;
            left: 0.5rem;
        }
        img + img {
            position: absolute;
            top: 3.2rem;
            left: -12rem;
            width: 12rem;
            transform: scaleX(-1);
        }
    }

    .minecraft {
        bottom: -2rem;
        border-top-left-radius: 0;
        border: none;

        img {
            position: absolute;
            left: 6rem;
            top: 3rem;
            width: 11rem;
        }

        img + img {
            position: relative;
            top: -0.4rem;
            left: 0;
            width: 5rem;
        }
    }

    @media screen and (max-width: 600px) {
        .minecraft, .gta {

            width: 5rem;
            height: 5rem;

            img + img {
                position: absolute;
                top: -0.4rem;
                width: 4rem;
            }

        }

        .gta .boneco-gta {
            position: absolute;
            top: -0.9rem;
            width: 6rem;
        }
    }

    @media screen and (min-width: 1090px) {
        .gta .linha {
            width: 20rem;
            top: 3rem;
            left: -20rem;
        }

        .minecraft .linha {
            width: 17rem;
        }
    }
`;

export const ApresentationContainer = styled.div`

    position: relative;
    width: 50%;
    max-width: 350px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 80px;
    gap: 10px;

    h1 {
        color: ${({ theme }) => theme.colors.lightGreen};
        padding: 3px;
        line-height: 2rem;
    }

    p {
        font-size: 12px;
        ${({ theme }) => theme.colors.cadetBlue}
    }

    button {
        width: 40%;
        min-width: 8rem;
        margin-top: 12px;
        background: ${({ theme }) => theme.colors.navyBlue};
    }
`;
