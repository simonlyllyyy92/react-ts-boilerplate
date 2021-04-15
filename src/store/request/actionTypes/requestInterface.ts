import {requestActionTypes} from './requestActionTypes'
import {AppDispatch} from '../../../store'
import {exampleActionType} from '../../example/actionTypes/exampleActionTypes'

type ActionTypes = requestActionTypes.AUTHED_GET_REQUEST | requestActionTypes.AUTHED_POST_REQUEST | requestActionTypes.AUTHED_DELETE_REQUEST | requestActionTypes.UNAUTHED_GET_REQUEST | requestActionTypes.UNAUTHED_POST_REQUEST | requestActionTypes.AUTHED_PUT_REQUEST

export type httpRequest = {
    domain?: string;
    url: string;
    type: ActionTypes
    successAction: exampleActionType,
    failureAction: exampleActionType,
    data?:Object
}

export type httpRequestPayload = {
    domain?: string;
    url: string;
    successAction: exampleActionType,
    failureAction: exampleActionType,
    data?:any
}

interface createRequestAction {
    type: ActionTypes;
    payload: httpRequestPayload;
}


export type requestAction = createRequestAction


