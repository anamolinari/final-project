import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 48px;
    padding: 16px 14px;
    gap: 14px;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 300;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

`
