import { all } from 'redux-saga/effects'
import sagas from './etc/sagas'

export default function* rootSaga() {
	yield all([sagas])
}
