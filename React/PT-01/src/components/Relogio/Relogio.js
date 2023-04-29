import './Relogio.css'

function Relogio() {
	const horas = new Date().getHours()
	const minutos = new Date().getMinutes()
	const segundos = new Date().getSeconds()

	return (
		<div className="container">
			<div className="div-horas quad">{horas}</div>
			<div className="div-minutos quad">{minutos}</div>
			<div className="div-segundos quad">{segundos}</div>
		</div>
	)
}

export default Relogio
