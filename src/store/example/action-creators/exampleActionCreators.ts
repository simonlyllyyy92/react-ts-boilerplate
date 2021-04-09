import {exampleActionType} from '../actionTypes/exampleActionTypes'
import {exampleAction} from '../actionTypes/exampleInterface'

export const searchRepositories = (payload: string): exampleAction => ({
    type: exampleActionType.SEARCH_REPOSITORIES,
    payload
})
