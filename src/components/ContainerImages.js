import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: ${({ theme }) => theme.colors.lightGreen};
    width: 6rem;
    height: 6rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 20px;
    z-index: 1;
`;
