/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects'

import { get } from 'lodash'
import * as actions from './actions'
import * as types from '../types'
import axios from '../../../services/axios'
import { messageError, messageSuccess } from '../../../services/notify'
import history from '../../../services/history'

// eslint-disable-next-line require-yield
function* LoginRequest({ payload }) {
	try {
		const response = yield call(axios.put, '/tokens/criar/', payload)
		yield put(actions.LoginSuccess({ ...response.data }))

		axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
		messageSuccess('Login realizado com sucesso')
		history.push(payload.prevPath)
	} catch (error) {
		messageError('Erro ao fazer login')

		yield put(actions.LoginFailure())
	}
}

function persistRehydrate({ payload }) {
	const token = get(payload, 'auth.token', '')

	if (!token) return

	axios.defaults.headers.Authorization = `Bearer ${token}`
}

function* RegisterRequest({ payload }) {
	const { nome, email, password, userID } = payload
	console.log(payload)
	try {
		if (userID) {
			yield call(axios.put, `/users/editar`, {
				nome,
				email,
				password: password || undefined,
			})
			messageSuccess('Cadastro atualizado com sucesso')

			yield put(actions.RegisterSuccess({ nome, email, password }))
		}
	} catch (error) {
		console.log(error)
		const errors = get(error, 'response.data', [])
		const status = get(error, 'response.status', 0)
		console.log(errors)
		console.log(status)

		if (errors.length > 0) {
			errors.map((er) => messageError(er))
		} else {
			messageError('Erro ao fazer cadastro')
		}

		messageError('Erro ao fazer cadastro')

		yield put(actions.RegisterFailure())
	}
}

export default all([
	takeLatest(types.LOGIN_REQUEST, LoginRequest),
	takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
	takeLatest(types.REGISTER_REQUEST, RegisterRequest),
])
