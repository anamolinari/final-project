import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    white-space: nowrap;
    padding: 12px 32px;
    gap: 8px;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    cursor: pointer;

    h4 {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 300;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    svg {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
`