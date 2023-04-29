import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font-family: sans-serif;
		background: ${colors.primaryDarkColor};
	}

	html, body, #root {
		height: 100%;
	}

	button {
		cursor: pointer;
		background: ${colors.primaryColor};
		border: none;
		color: #fff;
		padding: 10px 10px;
		border-radius: 4px;
		font-weight: 700;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

`

export const Container = styled.section`
	max-width: 360px;
	margin: 30px auto;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`
