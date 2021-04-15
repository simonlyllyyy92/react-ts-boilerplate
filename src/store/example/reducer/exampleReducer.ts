import {exampleActionType } from '../actionTypes/exampleActionTypes'
import {exampleAction} from '../actionTypes/exampleInterface'
import produce from 'immer'

export interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = produce((state: RepositoriesState = initialState, action: exampleAction) => {
    switch (action.type) {
        case exampleActionType.SEARCH_REPOSITORIES:
            state.loading = true;
            return state;
        case exampleActionType.SEARCH_REPOSITORIES_SUCCESS:
            state.data=action.payload;
            state.loading=false;
            return state;
        case exampleActionType.SEARCH_REPOSITORIES_ERROR:
            state.error = action.payload;
            state.loading=false;
            return state;
        default: 
            return state;
        
    }
})

export default reducer;