import './style.css'
import React from 'react'

class BaseClass extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nome: '',
			idade: 0,
			sexo: '',
			estadoCivil: '',
			endereco: {
				rua: '',
				numero: 0,
				bairro: '',
				cidade: '',
				estado: '',
				cep: '',
			},
			telefone: '',
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const { name, value } = e.target
		const { endereco } = this.state
		console.log(value)
		this.setState({
			endereco: {
				...endereco,
				[name]: value,
			},

			[name]: value,
		})
	}

	render() {
		const { nome, idade, sexo, estadoCivil, endereco, telefone } =
			this.state
		console.log(endereco.rua)
		return (
			<div>
				<h1>Cadastro cliente</h1>

				<form>
					<fieldset>
						<legend>Dados pessoais</legend>

						<label htmlFor="nome">
							Nome:
							<input
								name="nome"
								value={nome}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="idade">
							Idade:
							<input
								name="idade"
								value={idade}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="sexo">
							Sexo:
							<input
								name="sexo"
								value={sexo}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="estadoCivil">
							Estado civil:
							<input
								name="estadoCivil"
								value={estadoCivil}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="telefone">
							Telefone:
							<input
								name="telefone"
								value={telefone}
								onChange={this.handleChange}
							/>
						</label>
					</fieldset>

					<fieldset>
						<legend>Endereço</legend>

						<label htmlFor="rua">
							Rua:
							<input
								name="rua"
								value={endereco.rua}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="numero">
							Número:
							<input
								name="numero"
								value={endereco.numero}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="bairro">
							Bairro:
							<input
								name="bairro"
								value={endereco.bairro}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="cidade">
							Cidade:
							<input
								name="cidade"
								value={endereco.cidade}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="estado">
							Estado:
							<input
								name="estado"
								value={endereco.estado}
								onChange={this.handleChange}
							/>
						</label>

						<label htmlFor="cep">
							CEP:
							<input
								name="cep"
								value={endereco.cep}
								onChange={this.handleChange}
							/>
						</label>
					</fieldset>
				</form>
			</div>
		)
	}
}

export default BaseClass
