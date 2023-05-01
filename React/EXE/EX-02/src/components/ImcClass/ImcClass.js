/* eslint-disable no-alert */
import './IMC.css'
import React from 'react'

export default class ImcClass extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			altura: '',
			peso: '',
			imc: 0,
			elementoAnterior: { nome: '', cor: '' },
		}

		this.handleChange = this.handleChange.bind(this)
		this.calcularIMC = this.calcularIMC.bind(this)
	}

	handleChange(e) {
		const { name, value } = e.target

		console.log(name, typeof value)

		this.setState({
			[name]: value,
		})
	}

	alterarItem(item, cor) {
		const { elementoAnterior } = this.state

		if (elementoAnterior.nome) {
			console.log(elementoAnterior)
			const elementAnt = document.querySelector(
				`.${elementoAnterior.nome}`
			)
			elementAnt.style.backgroundColor = elementoAnterior.cor
		}

		const element = document.querySelector(`.${item}`)

		const computedStyle = window.getComputedStyle(element)
		const corAtual = computedStyle.getPropertyValue('background-color')

		this.setState({
			elementoAnterior: {
				nome: item,
				cor: corAtual,
			},
		})
		element.style.backgroundColor = `${cor}`
	}

	calcularIMC() {
		const { altura, peso } = this.state

		if (!altura || !peso) {
			// eslint-disable-next-line no-alert
			alert('Informe o peso ou a altura')
			return
		}

		const imc = peso / (altura * altura)

		this.setState({
			imc,
		})
		console.log(imc)
		if (imc < 18.5) {
			this.alterarItem('muitoMagro', 'orange')
		}
		if (imc >= 18.5 && imc <= 24.9) {
			this.alterarItem('normal', 'green')
		}
		if (imc >= 25 && imc <= 29.9) {
			this.alterarItem('sobrepeso', 'blue')
		}
		if (imc >= 30 && imc <= 34.9) {
			this.alterarItem('obesidade1', 'yellow')
		}
		if (imc >= 35) {
			this.alterarItem('obesidade2', 'red')
		}
	}

	render() {
		const { altura, peso, imc } = this.state
		return (
			<div className="container">
				<form className="form">
					<label htmlFor="altura">
						Altura:
						<input
							name="altura"
							value={altura}
							className="altura"
							onChange={this.handleChange}
						/>
					</label>

					<label htmlFor="peso">
						Peso:
						<input
							name="peso"
							value={peso}
							className="peso"
							onChange={this.handleChange}
						/>
					</label>

					<button type="button" onClick={this.calcularIMC}>
						{' '}
						Calcular{' '}
					</button>
				</form>

				<span className="result">
					{imc !== 0 ? <strong>IMC: {imc.toFixed(2)} </strong> : null}
				</span>
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
}
