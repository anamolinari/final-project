import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box; 
	}

    body {
		background-color: ${({ theme }) => theme.COLORS.DARK_400};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-family: "Roboto", sans-serif;
	}

	a {
		text-decoration: none;
	} 
	
	button, a {
		cursor: pointer;
	}

	button:hover, a:hover {
		filter: brightness(0.9);
	}
`