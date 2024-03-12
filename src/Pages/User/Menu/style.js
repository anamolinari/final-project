import styled from 'styled-components';

export const Container = styled.div`
	.header-menu {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding: 56px 28px 24px;
		gap: 4px;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		svg {
			font-size: 24px;
			cursor: pointer;
		}

		p {
			font-family: 'Roboto', sans-serif;
			font-size: 20px;
			font-weight: 300;

			color: ${({ theme }) => theme.COLORS.LIGHT_100};
		}
	}

	.input, .content {
		padding: 0 28px;
	}

	.input {
		display: flex;
		justify-content: center;
		margin-top: 36px;
	}

	.content {
		width: 100%;
		margin: 36px auto 0;
		
		h2 {
			font-family: 'Poppins', sans-serif;
			font-size: 24px;
			font-weight: 200;

			padding: 10px 0;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};

			border-bottom: 1px solid;
			border-color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}
	}

`