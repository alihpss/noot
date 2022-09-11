import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 15rem;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background: ${({ theme }) => theme.colors.footerColor};
`;

export const FooterInformation = styled.div`
    width: 80%;
    max-width: 760px;
    display: flex;
    justify-content: space-between;
    margin: 0  auto 3rem auto;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGreen};
    padding-top: 2rem;

    div {
        display: flex;

        p {
            opacity: 0.8;
        }

        span {
            opacity: 0.5;
            margin-left: 1px;
        }
    }

    div p, div span {
        font-size: 10px;
    }

    img {
        max-width: 50px;
    }
`;
