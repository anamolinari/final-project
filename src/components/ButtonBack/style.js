import styled from "styled-components";

export const Container = styled.div`
        
        .btn-back {
            display: flex;
            align-items: center;

            position: fixed;
            top: 130px;

            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 300;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: transparent;
            border: none;

            cursor: pointer;

            svg {
                font-size: 32px;
            }
        }

        @media (min-width: 1000px) {
        .btn-back {
            top: 160px;
        }
    }
`