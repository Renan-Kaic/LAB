function Evento() {
	const evento = () => {
		console.log('Evento disparado')
	}

	return (
		<div>
			<p className="p1">Clique para disparar o Evento</p>
			<button onClick={evento} type="submit">
				Evento
			</button>
		</div>
	)
}

export default Evento
