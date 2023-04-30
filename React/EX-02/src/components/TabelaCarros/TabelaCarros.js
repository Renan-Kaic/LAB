import './TabelaCarros.css'
import React, { useState, useEffect } from 'react'
import carros from '../../data/carros'

export default function TabelaCarros() {
	const [categoria, setCategoria] = useState('')
	const [carrosState, setCarros] = useState('')

	const categorias = []

	carros.forEach((carro) => {
		if (!categorias.includes(carro.categoria)) {
			categorias.push(carro.categoria)
		}
	})

	useEffect(() => {
		const filtrarCarros = () => {
			if (categoria === '') {
				return carros
			}
			return carros.filter((carro) => carro.categoria === categoria)
		}

		const carrosFiltrados = filtrarCarros()
		setCarros(carrosFiltrados)

		console.log(carrosFiltrados)
	}, [categoria])

	const mudarCategoria = (e) => {
		const { value } = e.target
		setCategoria(value)
	}

	return (
		<div className="App">
			<select onChange={mudarCategoria}>
				<option value="">Selecione uma categoria</option>

				{categorias.map((cat) => (
					<option value={cat} key={cat}>
						{cat}
					</option>
				))}
			</select>

			{carrosState === '' ? null : (
				<table>
					<thead>
						<tr>
							<th>Modelo</th>
							<th>Categoria</th>
							<th>Preço</th>
							<th>Ano</th>
							<th>Marca</th>
							<th>Cor</th>
							<th>Velocidade Máxima</th>
						</tr>
					</thead>
					<tbody>
						{carrosState.map((carro) => (
							<tr key={carro.modelo}>
								<td>{carro.modelo}</td>
								<td>{carro.categoria}</td>
								<td>{carro.preco}</td>
								<td>{carro.ano}</td>
								<td>{carro.marca}</td>
								<td>{carro.cor}</td>
								<td>{carro.velMax}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
