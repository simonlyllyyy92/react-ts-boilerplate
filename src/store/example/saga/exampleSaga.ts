import {fork, put, takeLatest, race, take} from 'redux-saga/effects'
import {exampleActionType} from '../actionTypes/exampleActionTypes'


/**
 * @Handlers
 */
function* handleSearchRepositories():Generator{
    console.log('this is a temporary test')
}

/**
 * @Watchers
 */

// Naming convention watch + action.name
function* watchSearchRepositories(){
    yield takeLatest(exampleActionType.SEARCH_REPOSITORIES, handleSearchRepositories)
}

const sagas = [
    fork(watchSearchRepositories)
]

export default sagas;