import './App.css'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import Header from './components/header'
import GlobalStyle from './styles/globalStyle'
import Routes from './routes'
import history from './services/history'

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router history={history}>
					<Header />
					<Routes />
					<GlobalStyle />
					<ToastContainer
						autoClose={3000}
						className="toast-container"
					/>
				</Router>
			</PersistGate>
		</Provider>
	)
}

export default App
