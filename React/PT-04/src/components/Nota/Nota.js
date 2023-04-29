/* eslint-disable react/prop-types */
import './Nota.css'
import React from 'react'

export default function Nota(props) {
	const { legenda, setNota, nota } = props

	function handleChange(e) {
		const { name, value } = e.target
		console.log(nota)
		setNota({ ...nota, [name]: value })
	}

	return (
		<div>
			<legend className="leg">Informe a nota {legenda}: </legend>
			<input
				type="number"
				onChange={handleChange}
				name={legenda}
				value={nota[legenda]}
				max="10"
			/>
		</div>
	)
}
