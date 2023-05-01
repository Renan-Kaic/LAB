import './IMC.css'
import React from 'react'

export default function IMC() {
	function CalcularIMC() {
		const peso = document.querySelector('.peso').value
		const altura = document.querySelector('.altura').value

		const imc = peso / (altura * altura)

		if (imc < 18.5) {
			const faixa = document.querySelector('.muitoMagro')
			faixa.style.backgroundColor = 'blue'
		}
		if (imc >= 18.5 && imc < 24.9) {
			const faixa = document.querySelector('.normal')
			faixa.style.backgroundColor = 'green'
		}
		if (imc >= 25 && imc < 29.9) {
			const faixa = document.querySelector('.sobrepeso')
			faixa.style.backgroundColor = 'yellow'
		}
		if (imc >= 30 && imc <= 34.9) {
			const faixa = document.querySelector('.obesidade1')
			faixa.style.backgroundColor = 'pink'
		}
		if (imc >= 35 && imc <= 39.9) {
			const faixa = document.querySelector('.obesidade2')
			faixa.style.backgroundColor = 'red'
		}
	}

	return (
		<div className="container">
			<h1>IMC</h1>

			<form className="form">
				<label htmlFor="peso">
					Informe seu peso
					<input name="peso" type="number" min="0" className="peso" />
				</label>

				<label htmlFor="altura">
					Informe sua altura
					<input
						name="altura"
						type="number"
						min="0"
						className="altura"
					/>
				</label>

				<button type="button" onClick={CalcularIMC}>
					Calcular
				</button>
			</form>

			<table className="table">
				<thead>
					<tr>
						<th>CLASSIFICAÇÃO</th>
						<th>IMC</th>
					</tr>
				</thead>
				<tbody>
					<tr className="muitoMagro">
						<td>Abaixo do peso</td>
						<td>Abaixo de 18,5</td>
					</tr>

					<tr className="normal">
						<td>Peso normal</td>
						<td>Entre 18,5 e 24,9</td>
					</tr>

					<tr className="sobrepeso">
						<td>Sobrepeso</td>
						<td>Entre 25 e 29,9</td>
					</tr>

					<tr className="obesidade1">
						<td>Obesidade grau 1</td>
						<td>Entre 30 e 34,9</td>
					</tr>

					<tr className="obesidade2">
						<td>Obesidade grau 2</td>
						<td>Entre 35 e 39,9</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
