import styled from "styled-components";

export const ButtonList = styled.ul`
        display: flex;
        width: 200px;
        height: 25px;
        margin: 10px auto;
        justify-content: space-between;
`;

export const Button = styled.button`
    padding: 0 10px;
    background-color: rgb(133, 180, 222);
    color: var(--light-text-color);
    height: 100%;

    &::first-letter {
        text-transform: uppercase;
    }

    &:hover,
    &:focus {
    background-color: rgb(114, 79, 163);
    }
`
