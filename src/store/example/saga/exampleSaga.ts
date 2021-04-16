import {fork, put, takeLatest, race, take} from 'redux-saga/effects'
import {exampleActionType} from '../actionTypes/exampleActionTypes'
import {getUnAuthed} from '../../request/action-creators/requestActionCreators'
import { exampleAction } from '../actionTypes/exampleInterface'


/**
 * @Handlers
 */
function* handleSearchRepositories(action:exampleAction):Generator{
    const {payload} = action
    console.log('this is a temporary test')
    yield put(
        getUnAuthed({
            url:'/search',
            successAction: exampleActionType.SEARCH_REPOSITORIES_SUCCESS,
            failureAction: exampleActionType.SEARCH_REPOSITORIES_ERROR,
            data:{
                params: {
                    text:payload
                }
            }
        })
    )
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