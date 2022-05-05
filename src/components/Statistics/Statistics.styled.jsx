import styled from "styled-components";

export const StatsList = styled.ul`
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    text-align: center;

    &>li {
        font-weight: 700;
        color: rgb(133, 180, 222);
    }

    & span {
        font-weight: 600;
        color: var(--add-text-color);
    }
`;