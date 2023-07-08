import { styled } from 'styled-components';

export const TitleWrapper = styled.div`
    text-align: center;
    margin: 0 0 40px;
    h1 {
        color: ${({ theme }) => theme.colors.blue};
        letter-spacing: 5px;
        text-transform: uppercase;
        margin: 0 0 10px;
    }
    p {
        color: ${({ theme }) => theme.colors.dark};
        margin: 0;
    }
`;
