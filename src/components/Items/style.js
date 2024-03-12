import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;

    width: 210px;
    height: 292px;
    padding: 24px;
    position: relative;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    button {
        width: 162px;
        height: 32px;
        margin-top: 12px;

        h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 300;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    div {
        img {
            width: 88px;
            height: 88px; 
        }

        .heart, .edit-icon {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 24px;
            right: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            cursor: pointer;
        }

        .heart.filled {
            fill: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 300;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin: 10px 0;
        }

        p {
            display: none;
        }

        h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 300;
            color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
    }

    @media (min-width: 1000px) {
        width: 304px;
        height: 462px;

        gap: 16px;

        div {
            
            img {
                width: 176px;
                height: 176px;
            }

            h1 {
                font-size: 24px;
                font-weight: 400;
            }

            p {
                display: block;
                margin: auto;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 100;
                color: ${({ theme }) => theme.COLORSLIGHT_400};
            }

            h2 {
                font-size: 32px;
                margin-top: 12px;
            }
        }

        .counter-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            button {
                width: 92px;
                height: 48px;
                margin-top: 0;

                h1 {
                    font-size: 14px;
                }
            }
        }


    }
`
