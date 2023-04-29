import React from 'react'

import './Lista.css'

export default function Lista() {
	const carros = ['Model Y', 'model 3', 'model s plaid', 'Hurucan']
	const listaCarros = carros.map((carr) => <p>{carr}</p>)

	return (
		<div>
			<h1> {listaCarros} </h1>
		</div>
	)
}
