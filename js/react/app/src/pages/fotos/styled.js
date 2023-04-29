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
