import styled from 'styled-components';

export const Container = styled.div`
    margin-top: -3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & + & {
        overflow-x: hidden;
        margin-top: 10px;

        div {
            justify-content: flex-end;
        }

        div + div {
            align-items: flex-start;

            h2 {
               margin: 0 0 10px 10%;
            }

            p {
                margin: 0 0 20px 10%;
            }

            a {
                margin-left: 10%;
                z-index: 2;

                button {
                    color: ${({ theme }) => theme.colors.darkGreen};
                    background-color: ${({ theme }) => theme.colors.navyBlue};
                }
            }
        }
    }
`;

export const TextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    align-items: flex-end;

    h2 {
        margin: 0 10% 10px 0px;
        max-width: 180px;
        line-height: 2rem;
        color: ${({ theme }) => theme.colors.lightGreen};
    }

    p {
        font-size: 12px;
        max-width: 180px;
        margin-right: 10%;
        color: ${({ theme }) => theme.colors.lightGray};
        opacity: 0.9;
    }
`;

export const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    max-width: 450px;

    img {
        width: 80%;
        max-width: 500px;
    }

    @media screen and (max-width: 768px) {
        width: 50%;

        img {
            width: 100%;
        }
    }
`;

export const ContainerDivWithoutBackground = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    top: -6rem;

    div {
        background: transparent;
        border-bottom-right-radius: 0;
        right: 2.5rem;
    }
`;
