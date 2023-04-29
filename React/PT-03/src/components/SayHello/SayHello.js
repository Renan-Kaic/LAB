import React from 'react'

import './SayHello.css'

export default function SayHello() {
	const comprimentar = () => {
		const horas = new Date().getHours()
		console.log(horas)
		if (horas >= 0 && horas < 13) {
			return <p> BOM DIA </p>
		}
		if (horas >= 13 && horas < 19) {
			return <p> BOA TARDE </p>
		}

		return <p> Boa noite </p>
	}

	return <div>{comprimentar()}</div>
}
