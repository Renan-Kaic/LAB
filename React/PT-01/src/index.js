import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

function render() {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

setInterval(render, 1000)
