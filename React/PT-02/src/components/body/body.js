import React from 'react'

import Dados from '../Dados/Dados'

export default function Body() {
	const nome = 'RENAN'
	const idade = 20
	const profissao = 'Programador'

	const falar = () => {
		console.log('Olá')
	}
	return (
		<div>
			<Dados
				nome={nome}
				idade={idade}
				profissao={profissao}
				falar={falar}
			/>
		</div>
	)
}
