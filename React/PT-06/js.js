function carro() {
	const valMaximo = 200
	const valMinimo = 0

	console.log(this)
}

const detalhes = {
	cor: 'branco',
	ano: 2021,
	modelo: 'Tesla Model Y',
}

const carrosDetalhes = carro.bind(detalhes)

carrosDetalhes()
