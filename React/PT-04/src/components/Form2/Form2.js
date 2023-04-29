/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

import './Form2.css'

export default function Form2() {
	const [form, setForm] = useState({
		nome: '',
		email: '',
		telefone: '',
		senha: '',
		confirmarSenha: '',
	})

	console.log(form)
	function handleChange(e) {
		const { name, value } = e.target

		setForm({ ...form, [name]: value })
	}

	return (
		<div className="container">
			<form>
				<label htmlFor="nome" className="label">
					{' '}
					Nome{' '}
				</label>
				<input
					name="nome"
					type="text"
					onChange={handleChange}
					value={form.nome}
					className="input"
				/>

				<label htmlFor="email" className="label">
					{' '}
					Email{' '}
				</label>
				<input
					name="email"
					type="email"
					onChange={handleChange}
					value={form.email}
					className="inpuy"
				/>

				<label htmlFor="telefone" className="label">
					{' '}
					Telefone{' '}
				</label>
				<input
					name="telefone"
					type="tel"
					onChange={handleChange}
					value={form.telefone}
					className="input"
				/>

				<label htmlFor="senha" className="label">
					{' '}
					Senha{' '}
				</label>
				<input
					name="senha"
					type="password"
					onChange={handleChange}
					value={form.senha}
					className="input"
				/>

				<label htmlFor="confirmarSenha" className="label">
					{' '}
					Confirmar Senha{' '}
				</label>
				<input
					name="confirmarSenha"
					type="password"
					onChange={handleChange}
					value={form.confirmarSenha}
					className="input"
				/>
			</form>
		</div>
	)
}
