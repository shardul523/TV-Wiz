import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0 0 30px;
    padding: 0;
    list-style: none;
    li {
        margin: 0 10px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    position: relative;
    padding: 0.2em 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: ${({ theme }) => theme.colors.blue};
        opacity: 1;
        transform: scale(0);
        transform-origin: center;
        transition: opacity 500ms, transform 500ms;
    }

    &.active {
        color: ${({ theme }) => theme.colors.blue};

        &::after {
            opacity: 1;
            transform: translate3d(0, 0.2em, 0);
            transform: scale(1);
        }
    }

    /* &.active::after,
    &:active::after {
    } */
    /* display: block;
    padding: 3px 15px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    &.active {
        color: ${({ theme }) => theme.colors.blue};
        &:after {
            content: '';
            position: absolute;
            display: block;
            height: 2px;
            left: 0%;
            bottom: 0;
            background-color: ${({ theme }) => theme.colors.blue};
            animation: slide-in 0.3s ease-in forwards;
            @keyframes slide-in {
                from {
                    left: 50%;
                    width: 0;
                }
                to {
                    left: 0%;
                    width: 100%;
                }
            }
        }
    } */
`;
