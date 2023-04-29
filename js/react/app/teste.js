async function getData() {
	const response = await fetch(
		'https://alunos-api.labstwo.com.br/alunos/index'
	)
	const data = await response.json()
	console.log(data)
}

getData()
