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
    }

    p {
        max-width: 380px;
        text-align: center;
        font-size: 12px;
    }
`;

export const ServicesContainer = styled.div`

`;
