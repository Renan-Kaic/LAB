import React, { useState } from 'react'
import './Relogio.css'

function Relogio() {
	const [horas, setHoras] = useState()
	const [minutos, setMinutos] = useState()
	const [segundos, setSegundos] = useState()

	const atualizar = () => {
		setHoras(new Date().getHours())
		setMinutos(new Date().getMinutes())
		setSegundos(new Date().getSeconds())
	}
	setInterval(atualizar, 1000)
	return (
		<div className="container">
			<div className="div-horas quad">{horas}</div>
			<div className="div-minutos quad">{minutos}</div>
			<div className="div-segundos quad">{segundos}</div>
		</div>
	)
}

export default Relogio
