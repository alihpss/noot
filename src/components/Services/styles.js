import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 35px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerTexto = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: ${({ theme }) => theme.colors.lightGreen};
        text-align: center;
        text-transform: uppercase;
        max-width: 300px;
        font-family: 'Anton';
        font-weight: 300;
        font-size: 32px;
    }

    p {
        max-width: 380px;
        text-align: center;
        font-size: 12px;
    }
`;
