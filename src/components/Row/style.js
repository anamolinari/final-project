import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: auto;
    position: relative;

    margin: 24px 0;
    padding: 0 24px;

    &:last-child {
        margin-bottom: 125px;
    }

    .title {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: 24px;
        position: sticky;
        top: 0;
        left: 0;
    }

    .itemsWrapper {
        display: flex;
        flex-wrap: nowrap;
        gap: 16px;
    }

    @media (min-width: 1000px) {

        .title {
            font-size: 32px;
        }

        .itemsWrapper {
            margin: auto;
        }

        
    }
`
