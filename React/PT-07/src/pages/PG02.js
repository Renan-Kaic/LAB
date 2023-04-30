/* eslint-disable react/prop-types */
import React from 'react'

import Buttons from '../components/Buttons'

export default function Pagina02({ linkPagina, pagina }) {
	return (
		<div>
			<h1>Página 02</h1>

			<Buttons linkPagina={linkPagina} pagina={pagina} />
		</div>
	)
}
