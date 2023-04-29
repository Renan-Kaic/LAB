import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Dados.css'

export default function Dados(props) {
	console.log(props)
	// eslint-disable-next-line react/prop-types
	const { nome, idade, profissao, falar } = props
	return (
		<div>
			<h1 className="text">Nome: {nome}</h1>
			<h2 className="text">Idade: {idade}</h2>
			<h3 className="text">Profissão: {profissao}</h3>
			<button
				onClick={falar}
				type="button"
				className="btn btn-primary btnFalar">
				Falar
			</button>
		</div>
	)
}
