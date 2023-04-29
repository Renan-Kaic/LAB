import './styles/App.css'
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Nota from './components/Nota/Nota'
import Resultado from './components/Resultado/Resultado'

function App() {
	const [notas, setNotas] = useState({
		'1BI': false,
		'2BI': false,
		'3BI': false,
	})
	const sum =
		Number(notas['1BI']) + Number(notas['2BI']) + Number(notas['3BI'])
	return (
		<div className="App">
			<Nota legenda="1BI" nota={notas} setNota={setNotas} />
			<Nota legenda="2BI" nota={notas} setNota={setNotas} />
			<Nota legenda="3BI" nota={notas} setNota={setNotas} />

			{notas['1BI'] && notas['2BI'] && notas['3BI'] ? (
				<Resultado soma={sum} />
			) : (
				false
			)}
		</div>
	)
}

export default App
