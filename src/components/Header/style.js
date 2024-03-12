import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed; 
    top: 0; 
    z-index: 1000; 
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 50px 28px 24px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    .input-container, .button-container, .logout-icon {
        display: none;
    }

    svg {
        font-size:24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &.admin-header {
    justify-content: flex-start;

    img {
        margin: 0 auto;
    }
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
    gap: 32px;

    .menu-icon, .bag-icon {
        display: none;
    }

    .input-container, .button-container, .logout-icon {
        display: block;
    }

    .input-container {
        width: 100%;
        
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }

    .logout-icon {
            font-size: 32px;
            color: ${({ theme }) => theme.COLORS.light_100};
        }
  }
`
