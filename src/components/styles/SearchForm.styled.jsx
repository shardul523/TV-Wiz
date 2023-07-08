import styled from 'styled-components';

export const StyledRadioInput = styled.label`
    display: block;
    position: relative;
    font-size: 16px;
    user-select: none;
    font-weight: 700;
    line-height: 1.65;
    font-weight: 700;
    line-height: 1.65;

    span {
        position: relative;
        top: -5px;
        left: 12px;
    }
    input {
        --s: 1.5em; /* control the size */
        --c: ${({ theme }) => theme.colors.blue}; /* the active color */

        height: var(--s);
        aspect-ratio: 1;
        border: calc(var(--s) / 8) solid #939393;
        padding: calc(var(--s) / 8);
        background: radial-gradient(farthest-side, var(--c) 94%, #0000) 50%/0 0
            no-repeat content-box;
        border-radius: 50%;
        outline-offset: calc(var(--s) / 10);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        font-size: inherit;
        transition: 0.3s;
    }
    input:checked {
        border-color: var(--c);
        background-size: 100% 100%;
    }
`;

export const SearchInput = styled.input`
    display: block;
    font-family: 'Roboto', sans-serif;
    width: 200px;
    margin: auto;
    outline: none;
    padding: 13px 15px;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
    font-size: 16px;
    border-radius: 12px;
    color: #8d8d8d;
    &::placeholder {
        font-weight: 300;
        color: #8d8d8d;
    }
`;

export const RadiosWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    label {
        margin: 0 15px;
    }
`;

export const SearchButtonWrapper = styled.div`
    text-align: center;
    margin-bottom: 35px;
    button {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.blue};
        margin: auto;
        padding: 10px 50px;
        font-size: 15px;
        border: none;
        outline: none;
        border-radius: 12px;
        &:hover {
            cursor: pointer;
        }
    }
`;
