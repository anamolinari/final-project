import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 0 56px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;

    .img {
        display: flex;
        justify-content: center;
    }

        img {
            width: 240px;
            height: 240px;
            margin-top: 50px;
        }

        .text {
            text-align: center;
        }

        h1 {
            font-size: 24px;
            font-weight: 400;
            margin: 24px auto 16px;
        }

        h2 {
            font-size: 16px;
            font-weight: 300;
        }

        @media (min-width: 1000px) {
            
            grid-template-columns: auto 1fr;
            align-items: end;
            margin: auto;

            .img {
                margin: 0;
                grid-row: span 3;
            }   

            img {
                width: 390px;
                height: 390px;
                margin-top: 0;
                margin-right: 50px;
            }

            h1, h2, .tag, .counter-btn {
                margin: 0;
                text-align: left;
            }

            h1, h2 { 
                grid-column: 2;
                grid-row: 1;
            }

            .tag {
                grid-column: 2;
                grid-row: 2;
                justify-content: flex-start;
                align-self: center;
            }

            .counter-btn {
                grid-column: 2;
                grid-row: 3;
                justify-content: flex-start;
                align-self: start;
            }

            
        }
`

export const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 24px;

    margin-top: 24px;

`

export const CounterBtn = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;

    margin-top: 48px;

    .counter {
        font-size: 24px;
    }

    button {
        width: ${props => (props.$isadminpage === 'true' ? '300px' : '188px')};
    height: 48px;
    }

    @media (min-width: 1000px) {
        button {
            width: ${props => (props.$isadminpage === 'true' ? '150px' : '162px')};
        }
    }
`;