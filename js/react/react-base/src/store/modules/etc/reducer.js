import * as types from '../types'
import { messageError } from '../../../services/notify'

const initialState = {
	botaoClicado: false,
}

// eslint-disable-next-line default-param-last
export const Reducer = (state = initialState, action) => {
	if (!action || !action.type) {
		return state
	}

	switch (action.type) {
		case types.BOTAO_CLICADO_SUCCESS: {
			const newState = { ...state }
			newState.botaoClicado = !newState.botaoClicado

			return newState
		}

		case types.BOTAO_CLICADO_FAILURE: {
			messageError('Erro na requisição')

			return state
		}

		case types.BOTAO_CLICADO_REQUEST: {
			console.log('BOTAO_CLICADO_REQUEST')
			return state
		}

		default:
			return state
	}
}
