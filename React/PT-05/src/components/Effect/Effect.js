import React, { useEffect, useState } from 'react'

export default function Effect() {
	const [contagem, setContagem] = useState(0)

	useEffect(() => {
		console.log('Pagina carregada')
		document.title = contagem
	})

	return (
		<div>
			<p> contagem: {contagem} </p>

			<button type="button" onClick={() => setContagem(contagem + 1)}>
				{' '}
				+1{' '}
			</button>
		</div>
	)
}
