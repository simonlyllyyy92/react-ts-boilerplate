import {exampleActionType} from './exampleActionTypes'

interface SearchRepositoriesAction {
    type: exampleActionType.SEARCH_REPOSITORIES;
    payload: string;
}

interface SearchRepositoriesSuccessAction {
    type: exampleActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: exampleActionType.SEARCH_REPOSITORIES_ERROR
    payload: string;
}

export type exampleAction = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

