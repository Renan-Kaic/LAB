/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'

class Classe extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
		this.modelo = 'S Plaid'
		this.state = {
			ligado: false,
			velocidade: 0,
		}
		this.ld = this.ligar.bind(this)
	}

	componentDidMount() {
		console.log('Componente montado')
	}

	componentWillUnmount() {
		console.log('Componente desmontado')
	}

	ligar() {
		/* const { ligado } = this.state
		this.setState({
			ligado: !ligado,
		}) */

		this.setState((state) => ({
			ligado: !state.ligado,
		}))
	}

	acelerar() {
		const { velocidade } = this.state
		this.setState({
			velocidade: velocidade + 10,
		})
	}

	render() {
		const { ligado, velocidade } = this.state
		return (
			<div className="App">
				Hello world
				<p> Nome: {this.modelo} </p>
				<p> Ligado: {ligado ? 'Sim' : 'Não'} </p>
				<p> Velocidade: {velocidade} </p>
				<button type="button" onClick={this.ld}>
					{ligado ? 'Desligar' : 'Ligar'}
				</button>
				<button type="button" onClick={() => this.acelerar()}>
					{' '}
					ACELERAR{' '}
				</button>
			</div>
		)
	}
}

export default Classe
