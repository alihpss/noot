import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.darkGreen};
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    border-radius: 0px 40px 40px 40px;

    #texto-clientes {
        width: 45%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;

        h2 {
            text-transform: uppercase;
            font-family: 'Anton';
            font-weight: 300;
            width: 8rem;
        }
    }

    #logo-clientes {
        width: 45%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        justify-content: center;
        justify-items: center;
        align-content: stretch;
        grid-gap: 8px;

        div {

            background: ${({ theme }) => theme.colors.lightGray};

            img {
                width: 50%;
            }
        }
    }
`;
