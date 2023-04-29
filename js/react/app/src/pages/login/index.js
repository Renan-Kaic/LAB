import React, { useState } from 'react'
import { isEmail } from 'validator'
import { useDispatch } from 'react-redux'
import { get } from 'lodash'

import { Title, Form } from './styled'
import { Container } from '../../styles/globalStyle'
import { messageError } from '../../services/notify'
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/loading'

export default function Login(props) {
	const dispatch = useDispatch()

	const prevPath = get(props, 'location.state.prevPath', '/')

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()

		if (!isEmail(email)) {
			messageError('Email invalido')
		}

		if (password.length < 6 || password.length > 50) {
			messageError('Senha invalida')
		}
		setIsLoading(true)
		dispatch(actions.LoginRequest({ email, password, prevPath }))
		setIsLoading(false)
	}

	return (
		<Container>
			<Title> LOGIN </Title>
			<Loading isLoading={isLoading} />
			<Form onSubmit={handleSubmit}>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Seu email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Sua senha"
				/>

				<button type="submit">Acessar</button>
			</Form>
		</Container>
	)
}
