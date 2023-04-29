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

export const AlunoContainer = styled.div`
	margin-top: 30px;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 2px 2px 2px 2px;
		padding: 2px 2px 2px 2px;
		margin-right: 4px;
	}

	div + div {
		border-top: 1px solid #eee;
	}
`

export const ProfilePicture = styled.div`
	img {
		width: 36px;
		height: 36px;
		border-radius: 50%;
	}
`
