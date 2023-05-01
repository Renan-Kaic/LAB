import './Login.css'
import React, { useState } from 'react'

import { cadastrar } from '../../Data/server'

export default function Login() {
	const [form, setForm] = useState({
		nome: '',
		sobrenome: '',
		dataNascimento: '',
		email: '',
		senha: '',
	})

	function handleChange(e) {
		const { name, value } = e.target
		setForm({ ...form, [name]: value })
		console.log(form)
	}

	function cadastra() {
		cadastrar(form)
	}

	return (
		<form className="form">
			<p className="title">CADASTRO</p>
			<p className="message">Faça seu cadastro.</p>
			<div className="flex">
				<label htmlFor="nome">
					<input
						required
						type="text"
						className="input"
						onChange={handleChange}
						value={form.nome}
						name="nome"
					/>
					<span className="input-label">Primeiro nome</span>
				</label>

				<label htmlFor="sobrenome">
					<input
						required
						type="text"
						className="input"
						value={form.sobrenome}
						onChange={handleChange}
						name="sobrenome"
					/>
					<span className="input-label">Sobrenome</span>
				</label>
			</div>
			<label htmlFor="dataNascimento">
				<input
					required
					type="text"
					className="input"
					value={form.dataNascimento}
					onChange={handleChange}
					autoComplete="off"
					name="dataNascimento"
				/>
				<span className="input-label">Data nascimento</span>
			</label>
			<label htmlFor="email">
				<input
					required
					type="email"
					className="input"
					value={form.email}
					onChange={handleChange}
					name="email"
				/>
				<span className="input-label">Email</span>
			</label>

			<label htmlFor="senha">
				<input
					required
					type="password"
					className="input"
					value={form.senha}
					onChange={handleChange}
					name="senha"
				/>
				<span className="input-label">Password</span>
			</label>

			<label htmlFor="confirmarSenha">
				<input
					required
					type="password"
					className="input"
					name="confirmarSenha"
				/>
				<span className="input-label">Confirme sua senha</span>
			</label>

			<button className="submit" type="button" onClick={cadastra}>
				Realizar cadastro
			</button>

			<p className="signin">
				Já tem uma conta? Faça <a href="#/">Login</a>
			</p>
		</form>
	)
}
