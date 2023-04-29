import * as types from '../types'

const initialState = {
	isLogged: false,
	token: false,
	user: [],
	isLoading: false,
}

// eslint-disable-next-line default-param-last
export const auth = (state = initialState, action) => {
	if (!action || !action.type) {
		return state
	}
	switch (action.type) {
		case types.LOGIN_SUCCESS: {
			const newState = { ...state }
			newState.isLogged = true
			newState.token = action.payload.token
			newState.user = action.payload.user
			newState.isLoading = false

			return newState
		}

		case types.LOGIN_FAILURE: {
			const newState = { ...initialState }
			return newState
		}

		default:
			return state
	}
}
