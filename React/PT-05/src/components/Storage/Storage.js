import React, { useState } from 'react'

export default function Storage() {
	const [form, setForm] = useState({
		nome: false,
		data_nascimento: new Date().toLocaleDateString(),
		endereco: false,
	})

	function handleChange(e) {
		const { name, value } = e.target

		setForm({ ...form, [name]: value })
		console.log(form)
	}

	function salvar() {
		localStorage.setItem('form', JSON.stringify(form))
	}

	function consultar() {
		try {
			const dados = JSON.parse(localStorage.getItem('form'))
			console.log(dados)

			if (dados) {
				setForm(dados)
			}

			return 'Sem dados'
		} catch (e) {
			console.log(e)
			return 'Sem dados'
		}
	}

	function remover() {
		localStorage.removeItem('form')
		setForm({
			nome: false,
			data_nascimento: new Date().toLocaleDateString(),
			endereco: false,
		})
	}
	return (
		<div>
			<form>
				<label htmlFor="nome">
					Nome
					<input
						type="text"
						name="nome"
						value={form.nome !== false ? form.nome : ''}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label htmlFor="data_nascimento">
					Data nascimento:
					<input
						type="date"
						name="data_nascimento"
						value={form.data_nascimento}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label htmlFor="endereco">
					Endereço
					<input
						value={form.endereco !== false ? form.endereco : ''}
						name="endereco"
						type="text"
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="button" onClick={salvar}>
					Enviar
				</button>
				<button type="button" onClick={consultar}>
					Consultar
				</button>
				<button type="button" onClick={remover}>
					Remover
				</button>
			</form>
		</div>
	)
}
