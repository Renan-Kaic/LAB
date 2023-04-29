/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react'
import { isEmail } from 'validator'
import { useSelector, useDispatch } from 'react-redux'

import { Title, Form } from './styled'
import { Container } from '../../styles/globalStyle'
import Loading from '../../components/loading'
import * as actions from '../../store/modules/auth/actions'
import { messageError } from '../../services/notify'

export default function Registro() {
	const userID = useSelector((state) => state.auth.user.ID)
	const nameStore = useSelector((state) => state.auth.user.nome)
	const emailStore = useSelector((state) => state.auth.user.email)

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [password, setSenha] = useState('')
	const [confirmaSenha, setConfirmaSenha] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		if (!userID) return

		setNome(nameStore)
		setEmail(emailStore)
		setNome(nameStore)
	}, [userID, nameStore, emailStore])

	async function handleSubmit(e) {
		e.preventDefault()
		let formError = false
		if (
			!userID &&
			(password !== confirmaSenha ||
				password.length < 8 ||
				password.length > 250)
		) {
			messageError('Senha invalida')
			formError = true
		}
		if (nome.length < 5 || nome.length > 255) {
			messageError('Nome precisa ter entre 5 e 255 caracteres')
			formError = true
		}

		if (!isEmail(email)) {
			messageError('E-mail invalido')
			formError = true
		}

		if (formError) return
		/* try {
			const response = await axios.post('/users/criar', {
				nome,
				password,
				email,
			})

			messageSuccess('User criado com sucesso!')
			console.log(response)

			history.push('/login')
		} catch (error) {
			const erro = error.response.data.errors || 'Falha ao criar user!'

			// eslint-disable-next-line no-restricted-syntax
			console.log(error)
			erro.map((err) => messageError(`Error: ${err}`))
		} finally {
			setIsLoading(false)
		} */
		setIsLoading(true)
		try {
			dispatch(actions.RegisterRequest({ nome, email, password, userID }))
		} catch (error) {
			console.log(error)
		} finally {
			setTimeout(() => {
				setIsLoading(false)
			}, 2000)
		}
	}
	return (
		<Container>
			<Title> {userID ? 'EDITE SEU USUÁRIO' : 'CRIE SUA CONTA'} </Title>
			<Loading isLoading={isLoading} />
			<Form onSubmit={handleSubmit}>
				<label htmlFor="nome">
					Nome:
					<input
						type="text"
						name="nome"
						id="nome"
						placeholder="Nome completo"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
				</label>
				<label htmlFor="email">
					E-mail:
					<input
						type="email"
						name="email"
						id="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label htmlFor="senha">
					Senha:
					<input
						type="password"
						name="senha"
						id="senha"
						placeholder="Senha"
						value={password}
						onChange={(e) => setSenha(e.target.value)}
					/>
				</label>
				<label htmlFor="confirmaSenha">
					Confirme sua senha:
					<input
						type="password"
						name="confirmaSenha"
						id="confirmaSenha"
						placeholder="Confirme sua senha"
						value={confirmaSenha}
						onChange={(e) => setConfirmaSenha(e.target.value)}
					/>
				</label>

				<button type="submit"> {userID ? 'Salvar' : 'Criar'}</button>
			</Form>
		</Container>
	)
}
