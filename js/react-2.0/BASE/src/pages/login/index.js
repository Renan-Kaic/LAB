import React from 'react'
import { useDispatch } from 'react-redux'

import { Title } from './styled'
import { Container } from '../../styles/globalStyle'
import * as actions from '../../store/modules/etc/actions'

export default function Login() {
	const dispatch = useDispatch()
	function handleSubmit(e) {
		e.preventDefault()

		dispatch(actions.clicarBotaoRequest())
	}

	return (
		<Container>
			<Title> LOGIN </Title>
			<button type="submit" onClick={handleSubmit}>
				NEXT
			</button>
		</Container>
	)
}
