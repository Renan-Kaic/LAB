import React, { Component } from 'react'

export default class Base extends Component {
	constructor(props) {
		super(props)
		this.nome = 'Renan'
	}

	render() {
		return <div className="App">Hello world, {this.nome}</div>
	}
}
