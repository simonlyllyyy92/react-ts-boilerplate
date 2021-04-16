import exampleSaga from './example/saga/exampleSaga'
import requestSaga from './request/saga/requestSaga'

import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    try{
        yield all([
            ...exampleSaga,
            ...requestSaga
        ])
    } catch (error) {
        console.log('error caught in root saga:', error)
    }
}