import {createStore, applyMiddleware, Store} from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import {RootState} from './rootReducer'

const sagaMiddleware = createSagaMiddleWare()

export const store: Store<RootState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch

