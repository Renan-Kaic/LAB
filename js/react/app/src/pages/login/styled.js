import styled from 'styled-components'

export const Title = styled.h1`
	font-size: 2rem;
	color: ${(props) => (props.isRed ? 'red' : 'blue')};
	small {
		font-size: 1rem;
		color: green;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	padding: 10px 20px;

	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	input {
		margin-top: 0.5rem;
		height: 40px;
		font-size: 18px;
		border: 1px solid #ddd;
		padding: 10px 10px;
		border-radius: 5px;

		&:focus {
			outline: none;
			border: 1px solid #333;
		}
	}

	button {
		margin-top: 1rem;
		height: 40px;
		font-size: 18px;
		border: 1px solid #333;
		padding: 10px 10px;
		border-radius: 5px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: #332;
		}
	}
`
