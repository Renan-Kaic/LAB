import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import axios from '../../services/axios'
import { Title, AlunoContainer, ProfilePicture } from './styled'
import { Container } from '../../styles/globalStyle'

import Loading from '../../components/loading'

export default function AlunosIndex() {
	const [alunos, setAluno] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function getData() {
			setIsLoading(true)
			const response = await axios.get('/alunos/index')
			setAluno(response.data)
			setIsLoading(false)
		}
		getData()
	}, [])

	return (
		<Container>
			<Title> Alunos </Title>

			<Loading isLoading={isLoading} />

			<AlunoContainer>
				{alunos.map((aluno) => (
					<div key={String(aluno.id)}>
						{get(aluno, 'Fotos[0].url', false) ? (
							<ProfilePicture>
								<img
									// crossOrigin="anonymous"
									crossOrigin="https://alunos-api.labstwo.com.br/"
									src={aluno.Fotos[0].url}
									alt=""
								/>
							</ProfilePicture>
						) : (
							<FaUserCircle size={36} />
						)}
						<span>{aluno.nome}</span>
						<span>{aluno.sobrenome}</span>
						<span>{aluno.email}</span>

						<Link to={`/alunos/${aluno.id}/edit`}>
							{' '}
							<FaEdit size={20} />{' '}
						</Link>
						<Link
							to={`/alunos/${aluno.id}/delete`}
							style={{ color: 'red' }}>
							{' '}
							<FaWindowClose size={20} />{' '}
						</Link>
					</div>
				))}
			</AlunoContainer>
		</Container>
	)
}
