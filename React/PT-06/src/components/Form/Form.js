import React, { Component } from 'react'

export default class Form extends Component {
	render() {
		return (
			<div>
				<h1>Form</h1>
				<form>
					<input type="text" name="nome" value={this.nome} />
					<span> Nome </span>
				</form>
			</div>
		)
	}
}
