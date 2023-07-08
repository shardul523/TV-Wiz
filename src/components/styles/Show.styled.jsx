import styled from 'styled-components';

export const BackHomeWrapper = styled.div`
    margin-bottom: 30px;
    text-align: left;
    button {
        padding: 10px;
        color: ${({ theme }) => theme.colors.dark};
        text-decoration: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ShowPageWrapper = styled.div`
    margin: auto;
    @media only screen and (min-width: 768px) {
        max-width: 700px;
    }
    @media only screen and (min-width: 992px) {
        max-width: 900px;
    }
`;

export const InfoBlock = styled.div`
    margin-bottom: 40px;
    h2 {
        margin: 0;
        margin-bottom: 30px;
        font-size: 22px;
    }
`;
