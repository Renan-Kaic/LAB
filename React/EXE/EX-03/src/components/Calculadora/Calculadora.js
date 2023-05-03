import './Calculadora.css'
import React, { useState } from 'react'

export default function Calculadora() {
	const [operacao, setOperacao] = useState('')

	const simbolos = ['/', '*', '-', '+', '=', '(', ')', '.']

	const verificarUltimoItem = (item) => {
		if (simbolos.includes(item)) {
			const ultimoItem = operacao[operacao.length - 1]

			if (item === ultimoItem) {
				return true
			}
		}
		return false
	}

	const pegarNumero = (e) => {
		const { innerText } = e.target

		if (innerText === 'AC') {
			setOperacao('')
			return
		}

		if (innerText === '=') {
			// eslint-disable-next-line no-eval
			setOperacao(`${operacao} = ${eval(operacao)}`)
			return
		}

		if (innerText === '←') {
			setOperacao(operacao.slice(0, operacao.length - 1))
			return
		}

		if (!operacao) {
			if (simbolos.includes(innerText) && innerText !== '.') {
				return
			}
			if (innerText === '.') {
				setOperacao(`0${innerText}`)
				return
			}
			setOperacao(`${innerText}`)
			return
		}
		if (verificarUltimoItem(innerText)) {
			return
		}
		if (innerText === '.' && operacao.split('.').length > 1) {
			console.log('veio aqui')
			return
		}
		setOperacao(`${operacao}${innerText}`)
	}

	return (
		<div className="container">
			<div>
				<input className="display" value={operacao} readOnly />
				<table className="calculator">
					<thead>
						<tr onClick={pegarNumero}>
							<th className="clear">AC</th>
							<th>(</th>
							<th>)</th>
							<th className="operator">/</th>
						</tr>
					</thead>

					<tbody>
						<tr onClick={pegarNumero}>
							<th>7</th>
							<th>8</th>
							<th>9</th>
							<th className="operator">*</th>
						</tr>
						<tr onClick={pegarNumero}>
							<th>4</th>
							<th>5</th>
							<th>6</th>
							<th className="operator">-</th>
						</tr>
						<tr onClick={pegarNumero}>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th className="operator">+</th>
						</tr>
						<tr onClick={pegarNumero}>
							<th className="zero">0</th>
							<th>.</th>
							<th>&larr;</th>
							<th className="operator">=</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
