import './App.css'
import React, { useEffect, useState } from 'react'

import Pagina01 from './pages/PG01'
import Pagina02 from './pages/PG02'

import Buttons from './components/Buttons'

function App() {
	const [Pagina, setPagina] = useState(0)
	const LinkPagina = (pg) => {
		setPagina(pg)
	}

	// detectando mudanças no state

	useEffect(() => {
		console.log('Pagina: ', Pagina)
	})

	function renderPagina() {
		switch (Pagina) {
			case 1:
				return <Pagina01 linkPagina={LinkPagina} pagina={Pagina} />
			case 2:
				return <Pagina02 linkPagina={LinkPagina} pagina={Pagina} />
			default:
				return <Buttons linkPagina={LinkPagina} pagina={Pagina} />
		}
	}

	return <div className="App"> {renderPagina()} </div>
}

export default App
