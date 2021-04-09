import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleWare()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch

