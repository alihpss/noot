import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    position: relative;

    img {
        width: 100%;
        max-width: 450px;
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
        img {
            position: absolute;
            top: -1.7rem;
            left: -0.7rem;
            width: 8rem;
        }
    }

    .minecraft {
        bottom: -2rem;

        img {
            position: absolute;
            top: -0.4rem;
            width: 5rem;
        }
    }

    @media screen and (max-width: 600px) {
        .minecraft, .gta {

            width: 5rem;
            height: 5rem;

            img {
                position: absolute;
                top: -0.4rem;
                width: 4rem;
            }

        }

        .gta img {
            position: absolute;
            top: -0.8rem;
            width: 6rem;
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
        line-height: 2.4rem;
    }

    p {
        font-size: 12px;
    }

    button {
        width: 40%;
        min-width: 8rem;
        margin-top: 12px;
        background: ${({ theme }) => theme.colors.navyBlue};
    }
`;
