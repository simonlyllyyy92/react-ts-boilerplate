import exampleSaga from './example/saga/exampleSaga'

import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    try{
        yield all([
            ...exampleSaga
        ])
    } catch (error) {
        console.log('error caught in root saga:', error)
    }
}