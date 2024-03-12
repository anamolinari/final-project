import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    .decrement-btn, .increment-btn {
        background-color: transparent;
        border: none;
    }

    .counter {
        width: 50px;
        text-align: center;
    }

    svg {
        display: flex;
        align-items: center;

        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

`