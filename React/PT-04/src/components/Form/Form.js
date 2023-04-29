/* eslint-disable jsx-a11y/label-has-associated-control */
import './Form.css'
import React, { useState } from 'react'

export default function Form() {
	const [nome, setNome] = useState('')
	const [dataNascimento, setDataNascimento] = useState('')
	const [carro, setCarro] = useState('')

	function handleChangeNome(e) {
		setNome(e.target.value)
	}

	function handleChangeData(e) {
		console.log(dataNascimento)
		setDataNascimento(e.target.value)
	}

	function handleChangeCarro(e) {
		setCarro(e.target.value)
	}

	return (
		<div>
			<h2> {nome !== '' ? `Ola ${nome}` : false} </h2>
			<h2> {dataNascimento !== '' ? dataNascimento : false} </h2>
			<h2> {carro !== '' ? `Carro selecionado: ${carro}` : false} </h2>
			<form>
				<label htmlFor="nome" className="label">
					{' '}
					Nome:{' '}
				</label>
				<input
					name="nome"
					value={nome}
					onChange={handleChangeNome}
					className="input"
				/>
				<label className="label"> Data nascimento: </label>
				<input
					type="date"
					value={dataNascimento}
					onChange={handleChangeData}
					className="input"
				/>
				<br />
				<select onChange={handleChangeCarro}>
					<option value="model Y"> model Y </option>
					<option value="model S"> model S </option>
					<option value="model 3"> model 3 </option>
				</select>
				<br />
				<br />
				<button type="submit" className="btn">
					Enviar
				</button>
			</form>
		</div>
	)
}
