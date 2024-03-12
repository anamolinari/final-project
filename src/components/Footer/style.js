import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000; 

    padding: 30px 27px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    p {
        font-family: 'DM Sans', sans-serif;
        font-size: 12px;
        font-weight: 300;

        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

`

