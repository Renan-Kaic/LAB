/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line import/no-import-module-exports
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// ativando hot reload
if (module.hot) {
	module.hot.accept()
}
