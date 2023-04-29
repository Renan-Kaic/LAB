import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import persistedReducer from './modules/reduxPersist'

import combineReducers from './modules/rootReducers'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: persistedReducer(combineReducers),
	middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store
