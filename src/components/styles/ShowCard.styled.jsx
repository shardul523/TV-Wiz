import styled from 'styled-components';
import { StarIcon } from './common/StarIcon';

export const ActionSection = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration-color: #000;
        color: #000;
        &:hover {
            text-decoration-color: blue;
            color: blue;
        }
    }
`;

export const StarBtn = styled.button`
    outline: none;
    border: 1px solid #8e8e8e;
    border-radius: 15px;
    padding: 5px 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
    &.animate {
        ${StarIcon} {
            animation: increase 0.5s ease-in forwards;
            @keyframes increase {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(3) rotate(45deg);
                }
                100% {
                    transform: scale(1);
                }
            }
        }
    }
`;
