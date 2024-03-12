import styled from "styled-components";

export const Container = styled.div`
    padding: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;

    p {
        display: inline-block; 
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

`