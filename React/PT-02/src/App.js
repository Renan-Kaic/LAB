import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Body from './components/body/body'
import Relogio from './components/Relogio/Relogio'

function App() {
	return (
		<div className="App">
			<form>
				<input type="text" />
			</form>
			<Header />
			<Relogio />
			<Body />
		</div>
	)
}

export default App
